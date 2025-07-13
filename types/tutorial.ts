// src/types/tutorial.ts

export type TutorialType = 'blocks' | 'javascript' | 'mixed'

export interface TutorialConfig {
 explicitHints: boolean
 showDialog: boolean
 validation: boolean
}

export interface TutorialStep {
 id: string
 title: string
 instructions: string
 codeBlock?: string
 hintText?: string
 options: {
   showDialog: boolean
   includeHint: boolean
   validation: boolean
 }
}

export interface Tutorial {
 id: string
 title: string
 description: string
 type: TutorialType
 config: TutorialConfig
 steps: TutorialStep[]
}

// Helper type for onboarding flow
export interface OnboardingData {
 step: number
 tutorial: Partial<Tutorial>
}

// For markdown generation
export interface MarkdownOptions {
 includeAssets: boolean
 includeConfig: boolean
}