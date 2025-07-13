import { Tutorial, TutorialStep } from '@/types/tutorial'

export function generateMarkdown(tutorial: Tutorial): string {
  let markdown = `# ${tutorial.title}\n\n`

  // Add assets if tutorial has them
//   if (tutorial.assets && Object.values(tutorial.assets).some(arr => arr.length > 0)) {
//     markdown += generateAssets(tutorial)
//   }

  // Add starter code block
  markdown += generateStarterCode(tutorial)

  // Add config if needed
  const config = generateConfig(tutorial)
  if (config) {
    markdown += config
  }

  // Add introduction
  markdown += generateIntroduction(tutorial)

  // Add tutorial steps
  tutorial.steps.forEach((step, index) => {
    markdown += generateStep(step, index + 1, tutorial.type)
  })

  return markdown
}

function generateAssets(tutorial: Tutorial): string {
  return `\`\`\`assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "...",
  "images.g.ts": "..."
}
\`\`\`

`
}

function generateStarterCode(tutorial: Tutorial): string {
  const codeType = tutorial.type === 'javascript' ? 'javascript' : 'blocks'
  
  let starterCode = '// Basic starter code\n'
  
  // Add some basic starter code based on common patterns
  if (tutorial.steps.some(step => step.instructions.toLowerCase().includes('background'))) {
    starterCode += 'scene.setBackgroundColor(9)\n'
  }
  
  if (tutorial.steps.some(step => step.instructions.toLowerCase().includes('sprite'))) {
    starterCode += 'let mySprite = sprites.create(img`...`, SpriteKind.Player)\n'
  }
  
  if (tutorial.steps.some(step => step.instructions.toLowerCase().includes('move'))) {
    starterCode += 'controller.moveSprite(mySprite)\n'
  }

  return `\`\`\`${codeType}
${starterCode}
\`\`\`

`
}

function generateConfig(tutorial: Tutorial): string {
  const configItems: string[] = []
  
  if (tutorial.config.explicitHints) {
    configItems.push('* explicitHints: true')
  }
  
  if (tutorial.config.validation) {
    configItems.push('* diffs: true')
  }

  if (configItems.length === 0) return ''

  return `\`\`\`config
${configItems.join('\n')}
\`\`\`

`
}

function generateIntroduction(tutorial: Tutorial): string {
  const modifiers = tutorial.config.showDialog ? ' @showdialog' : ''
  
  return `## Introduction${modifiers}

**${tutorial.title}!**

${tutorial.description}

Click **Ok** to get started!

`
}

function generateStep(step: TutorialStep, stepNumber: number, tutorialType: string): string {
  // Build step modifiers
  const modifiers: string[] = []
  if (step.options.showDialog) modifiers.push('@showdialog')
  if (step.options.includeHint) modifiers.push('@showhint')
  if (step.options.validation) modifiers.push('@validate')
  
  const modifierString = modifiers.length > 0 ? ` ${modifiers.join(' ')}` : ''
  
  let stepMarkdown = `## ${step.title}${modifierString}\n\n`
  
  // Add instructions if present
  if (step.instructions.trim()) {
    stepMarkdown += `${step.instructions}\n\n`
  }
  
  // Add code block if present
  if (step.codeBlock && step.codeBlock.trim()) {
    const codeType = tutorialType === 'javascript' ? 'javascript' : 'blocks'
    stepMarkdown += `\`\`\`${codeType}\n${step.codeBlock}\n\`\`\`\n\n`
  }
  
  // Add hint if present
  if (step.options.includeHint && step.hintText && step.hintText.trim()) {
    stepMarkdown += `~hint\n${step.hintText}\n~\n\n`
  }
  
  return stepMarkdown
}

// Utility function to copy markdown to clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
    return false
  }
}

// Utility function to download markdown as file
export function downloadMarkdown(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.href = url
  link.download = `${filename.toLowerCase().replace(/[^a-z0-9]/g, '-')}.md`
  
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  URL.revokeObjectURL(url)
}

// Template for generating MakeCode-specific instruction patterns
export function generateInstructionPattern(blockCategory: string, action: string): string {
  const patterns: Record<string, string> = {
    sprites: ':paper plane:',
    scene: ':tree:',
    controller: ':game controller:',
    game: ':circle:',
    info: ':id card:',
    music: ':headphones:',
    loops: ':repeat:',
    logic: ':logic:',
    variables: ':variables:',
    math: ':math:',
    animation: ':animation:'
  }

  const emoji = patterns[blockCategory.toLowerCase()] || ':mouse pointer:'
  return `${emoji} Open \`\`||${blockCategory}:${blockCategory}||\`\` and ${action}`
}