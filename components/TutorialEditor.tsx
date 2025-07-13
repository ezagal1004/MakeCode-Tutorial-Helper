'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { storage } from '@/lib/storage'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-full">Loading editor...</div>
})

interface TutorialEditorProps {
    projectId: string
}

const MAKECODE_CATEGORIES = [
    'sprites', 'controller', 'game', 'music', 'scene', 'info', 'loops',
    'logic', 'variables', 'math', 'animation', 'extensions', 'images', 
    'functions', 'arrays', 'text', 'console'
]

const getDefaultTutorial = (tutorialName: string) => `# ${tutorialName}

\`\`\`blocks
scene.setBackgroundColor(9)
let mySprite = sprites.create(img\`...\`, SpriteKind.Player)
controller.moveSprite(mySprite)
\`\`\`

## Introduction @showdialog

**Learn to create ${tutorialName}!**

Learn to create an awesome ${tutorialName.toLowerCase()} game with MakeCode Arcade.

Click **Ok** to get started!

## Step 1

Create your first sprite character.

- :paper plane: Open \`\`||sprites:Sprites||\`\` and drag \`\`||sprites:set mySprite to||\`\` into the workspace
- :mouse pointer: Click the gray box to design your character

\`\`\`blocks
let mySprite = sprites.create(img\`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
\`, SpriteKind.Player)
\`\`\`

## Step 2

Make your sprite move around the screen.

- :game controller: Open \`\`||controller:Controller||\`\` and drag \`\`||controller:move mySprite with buttons||\`\`
- :paper plane: Add \`\`||sprites:set mySprite stay in screen||\`\` to keep the sprite visible

\`\`\`blocks
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
\`\`\`

## Step 3

Add some excitement to your game!

- :circle: Open \`\`||game:Game||\`\` and try adding \`\`||game:splash||\`\` or \`\`||game:show long text||\`\`
- :headphones: Use \`\`||music:play sound||\`\` to add audio effects

\`\`\`blocks
game.splash("Welcome to ${tutorialName}!")
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
\`\`\`
`

export function TutorialEditor({ projectId }: TutorialEditorProps) {
    const router = useRouter()
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(true)
    const [monaco, setMonaco] = useState<any>(null)
    const [editor, setEditor] = useState<any>(null)

    useEffect(() => {
        loadProject()
    }, [projectId])

    useEffect(() => {
        // Auto-save after delay
        const saveTimeout = setTimeout(() => {
            saveProject()
        }, 2000)

        return () => clearTimeout(saveTimeout)
    }, [content])

    const loadProject = () => {
        try {
            const project = storage.getProject(projectId)
            if (!project) {
                router.push('/')
                return
            }
            
            // If this is a new project without content, generate default tutorial with the project title
            if (!project.tutorial.description || project.tutorial.description.trim() === '') {
                const defaultContent = getDefaultTutorial(project.tutorial.title)
                setContent(defaultContent)
                
                // Save the default content immediately
                const updatedTutorial = {
                    ...project.tutorial,
                    description: defaultContent
                }
                storage.updateProject(projectId, updatedTutorial)
            } else {
                setContent(project.tutorial.description)
            }
        } catch (error) {
            console.error('Error loading project:', error)
            router.push('/')
        } finally {
            setLoading(false)
        }
    }

    const saveProject = () => {
        try {
            const existingProject = storage.getProject(projectId)
            if (existingProject && content.trim()) {
                // Count steps by finding all "## " patterns, but exclude "## Introduction"
                const stepMatches = content.match(/^## .+/gm) || []
                const actualSteps = stepMatches.filter(match => !match.startsWith('## Introduction'))
                const stepCount = actualSteps.length
                
                // Generate step objects based on the markdown content
                const steps = Array.from({ length: stepCount }, (_, i) => ({
                    id: existingProject.tutorial.steps[i]?.id || `step-${i + 1}`,
                    title: `Step ${i + 1}`,
                    instructions: '',
                    options: {
                        showDialog: false,
                        includeHint: false,
                        validation: false
                    }
                }))

                const updatedTutorial = {
                    ...existingProject.tutorial,
                    description: content,
                    steps: steps
                }
                storage.updateProject(projectId, updatedTutorial)
            }
        } catch (error) {
            console.error('Error saving project:', error)
        }
    }

    const handleEditorDidMount = (editor: any, monaco: any) => {
        setEditor(editor)
        setMonaco(monaco)

        // Register custom completion provider for MakeCode categories
        monaco.languages.registerCompletionItemProvider('markdown', {
            triggerCharacters: ['|'],
            provideCompletionItems: (model: any, position: any) => {
                const textUntilPosition = model.getValueInRange({
                    startLineNumber: position.lineNumber,
                    startColumn: 1,
                    endLineNumber: position.lineNumber,
                    endColumn: position.column
                })

                // Look for || pattern followed by letters
                const match = textUntilPosition.match(/\|\|([a-z]*)/i)
                if (!match) return { suggestions: [] }

                const query = match[1].toLowerCase()
                
                const suggestions = MAKECODE_CATEGORIES
                    .filter(cat => cat.toLowerCase().startsWith(query))
                    .map(category => ({
                        label: category,
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: `${category}:${category}||`,
                        documentation: `MakeCode ${category} category block reference`,
                        detail: `||${category}:${category}||`,
                        range: {
                            startLineNumber: position.lineNumber,
                            endLineNumber: position.lineNumber,
                            startColumn: position.column - query.length,
                            endColumn: position.column
                        }
                    }))

                return { suggestions }
            }
        })

        // Set up editor options
        editor.updateOptions({
            wordWrap: 'on',
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
            lineNumbers: 'on',
            folding: true,
            renderWhitespace: 'boundary',
            suggest: {
                showKeywords: false,
                showSnippets: true,
                showWords: false
            }
        })
    }

    const handleEditorChange = (value: string | undefined) => {
        if (value !== undefined) {
            setContent(value)
        }
    }

    const copyAndOpenMakeCode = async () => {
        try {
            await navigator.clipboard.writeText(content)
            // Open MakeCode tutorial tool in new tab
            window.open('https://makecode.com/tutorial-tool?', '_blank')
        } catch (error) {
            console.error('Failed to copy to clipboard:', error)
            // Still open the tool even if copy fails
            window.open('https://makecode.com/tutorial-tool?', '_blank')
        }
    }

    const downloadMarkdown = () => {
        const blob = new Blob([content], { type: 'text/markdown' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'tutorial.md'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    const copyMarkdown = async () => {
        try {
            await navigator.clipboard.writeText(content)
        } catch (error) {
            console.error('Failed to copy:', error)
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-gray-500">Loading tutorial...</div>
            </div>
        )
    }

    return (
        <div className="w-full h-full">
            <Card className="h-full flex flex-col overflow-hidden">
                <div className="p-4 border-b flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Tutorial Editor</h3>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => router.push('/')}>
                            ← Back
                        </Button>
                        <Button variant="outline" size="sm" onClick={copyMarkdown}>
                            Copy
                        </Button>
                        <Button variant="outline" size="sm" onClick={downloadMarkdown}>
                            Download
                        </Button>
                        <Button variant="outline" size="sm" onClick={copyAndOpenMakeCode}>
                            🚀 Test in MakeCode
                        </Button>
                    </div>
                </div>

                <div className="flex-1 overflow-hidden">
                    <MonacoEditor
                        height="100%"
                        language="markdown"
                        theme="vs"
                        value={content}
                        onChange={handleEditorChange}
                        onMount={handleEditorDidMount}
                        options={{
                            wordWrap: 'on',
                            minimap: { enabled: false },
                            scrollBeyondLastLine: false,
                            fontSize: 14,
                            lineNumbers: 'on',
                            folding: true,
                            renderWhitespace: 'boundary',
                            automaticLayout: true,
                            suggest: {
                                showKeywords: false,
                                showSnippets: true,
                                showWords: false
                            }
                        }}
                    />
                </div>
            </Card>
        </div>
    )
}