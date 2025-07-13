'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { storage, generateId } from '@/lib/storage'
import { Tutorial } from '@/types/tutorial'

export default function CreateTutorial() {
  const router = useRouter()
  const [tutorialName, setTutorialName] = useState('')
  const [isCreating, setIsCreating] = useState(false)

  const createTutorial = async () => {
    if (!tutorialName.trim()) return

    setIsCreating(true)

    try {
      const tutorial: Tutorial = {
        id: generateId(),
        title: tutorialName.trim(),
        description: '', // Start with empty description so the editor generates the template
        type: 'blocks',
        config: {
          explicitHints: false,
          showDialog: true,
          validation: false
        },
        steps: [{
          id: generateId(),
          title: 'Step 1',
          instructions: '',
          options: {
            showDialog: false,
            includeHint: false,
            validation: false
          }
        }]
      }

      const project = storage.saveProject(tutorial)
      
      // Redirect to editor with the tutorial name as the first line
      router.push(`/edit/${project.id}`)
    } catch (error) {
      console.error('Error creating tutorial:', error)
      setIsCreating(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tutorialName.trim()) {
      createTutorial()
    }
  }

  return (
    <div className="max-w-md mx-auto mt-16">
      <Card className="p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Create New Tutorial
          </h1>
          <p className="text-gray-600">
            Enter a name for your MakeCode tutorial
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="tutorialName">Tutorial Name</Label>
            <Input
              id="tutorialName"
              value={tutorialName}
              onChange={(e) => setTutorialName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="e.g., Cookie Clicker, Platformer Game, Space Shooter"
              className="mt-1"
              autoFocus
              disabled={isCreating}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => router.push('/')}
              className="flex-1"
              disabled={isCreating}
            >
              Cancel
            </Button>
            <Button
              onClick={createTutorial}
              disabled={!tutorialName.trim() || isCreating}
              className="flex-1"
            >
              {isCreating ? 'Creating...' : 'Create Tutorial'}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}