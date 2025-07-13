'use client'

import { useState } from 'react'

export default function TutorialExamplePage() {
    const [currentStep, setCurrentStep] = useState(1)
    const totalSteps = 8

    const steps = [
        {
            id: 1,
            title: "Title and Template",
            content: `# Lesson 5: Weather Abilities
\`\`\`template
//

\`\`\``,
            explanation: "Every tutorial starts with a title using # and can include a template with starting code. This template is empty, so students start from scratch."
        },
        {
            id: 2,
            title: "Tutorial Metadata",
            content: `### @hideDone true`,
            explanation: "This metadata option hides the 'Done' button until students complete the tutorial, preventing them from skipping ahead without learning."
        },
        {
            id: 3,
            title: "Introduction Dialog",
            content: `## Intro @showdialog
Learn how to use command parameters and conditional logic to create weather-based ninja abilities that change the environment and provide special equipment.
![weather change](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjQ4aHg5Nm1kc3lmaTV6OXRxYjVkcjI3MmFtY2M0MnR5cmVveWR5ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NcWsxQkPa8lonapIcI/giphy.gif)`,
            explanation: "The @showdialog creates a popup that explains what students will build. Including images or GIFs helps visualize the end goal."
        },
        {
            id: 4,
            title: "Key Concepts Dialog",
            content: `## Key Concepts @showdialog
We'll use command parameters to get user input and if/else statements to make decisions about which ability to activate based on the number entered.
![choose outcome](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTZiOTJpOThjMHN1cDM2eXVpN2tleDY3c2t3ZmNiN3Qyc2ZjYTdqbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5iWX6XFTndU0YP0Yut/giphy.gif)`,
            explanation: "Additional dialogs can explain key programming concepts before students start coding. This sets expectations and provides context."
        },
        {
            id: 5,
            title: "Tutorial Step with Instructions",
            content: `## Step 1: Create a Variable and the Ability Command
1. :gear: Click on the \`\`||variables:VARIABLES||\`\` category.

2. :mouse pointer: Click on the \`|Make a Variable|\` button.

3. :keyboard: Name the variable **number**.

4. :paper plane: Click on the \`\`||player:PLAYER||\`\` category.

5. :mouse pointer: Drag a new \`\`||player:on chat command||\`\` block into the workspace.

6. :gear: Change the command name to **"ability"**.

7. :mouse pointer: Click the \`+\` button to add a parameter, and change it to **"number"**.

8. :bulb: This parameter will let us select different abilities.

\`\`\`blocks
    //@highlight
player.onChat("ability", function (number) {
	
})
\`\`\``,
            explanation: "Each step uses ## for the heading, numbered instructions with icons for clarity, block references (||category:block||) to help students find blocks, and a code block showing the expected result. The //@highlight marks blocks for validation."
        },
        {
            id: 6,
            title: "Complex Step with Nested Instructions",
            content: `## Step 2: Add the First Ability (Sun Ninja)
1. :paper plane: From the \`\`||logic:LOGIC||\`\` category, add an \`\`||logic:if...then...else||\`\` block.

2. :gear: Set up the condition:
   * :mouse pointer: Find and drag out the \`\`||logic:< 0 = 0 >||\`\` block.
   * :mouse pointer: Place this in the condition area of the "if" block.
   * :mouse pointer: Drag the \`\`||variables:number||\`\` variable into the first part of the comparison.
   * :gear: Make sure the middle operator is set to **=** (equals).
   * :keyboard: Change the value on the right to **1**.

3. :gear: Inside the first "if", add:
   * :mouse pointer: A \`\`||player:execute||\`\` block with \`/give @s golden_sword\`.
   * :mouse pointer: A \`\`||gameplay:weather||\`\` block set to **clear**.
   * :mouse pointer: A \`\`||gameplay:time set||\`\` block set to **day**.

\`\`\`blocks
player.onChat("ability", function (number) {
    //@highlight
    if (number == 1) {
        //@highlight
        player.execute("/give @s golden_sword")
        //@highlight
        gameplay.setWeather(CLEAR)
        //@highlight
        gameplay.timeSet(DAY)
    } else {
    
    }
})
\`\`\``,
            explanation: "Complex steps can use nested bullet points and sub-instructions. Notice how block references use different colors for different categories, and all new blocks are marked with //@highlight."
        },
        {
            id: 7,
            title: "Testing Instructions",
            content: `## Step 5: Test Your Weather Abilities
* :raised hand: Raise your hand and a sensei will take your code into Minecraft Education
* :game controller: Open the chat window by pressing \`|T|\`
* :computer: Try each ability by typing:
  * \`ability 1\` (for Sun Ninja powers)
  * \`ability 2\` (for Rain Ninja powers)
* :eyes: Watch as each ability changes the weather, time, and gives you a different sword!`,
            explanation: "Testing steps help students verify their code works. Icons make instructions more engaging and keyboard shortcuts use the |key| format."
        },
        {
            id: 8,
            title: "Validation System",
            content: `\`\`\`validation.global
# BlocksExistValidator
\`\`\``,
            explanation: "The validation system at the end checks that students have included all the @highlight blocks. This works best when combined with @hideDone true to ensure completion."
        }
    ]

    const tutorialMarkdown = `# Lesson 5: Weather Abilities
\`\`\`template
//

\`\`\`

### @hideDone true
## Intro @showdialog
Learn how to use command parameters and conditional logic to create weather-based ninja abilities that change the environment and provide special equipment.
![weather change](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjQ4aHg5Nm1kc3lmaTV6OXRxYjVkcjI3MmFtY2M0MnR5cmVveWR5ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NcWsxQkPa8lonapIcI/giphy.gif)

## Key Concepts @showdialog
We'll use command parameters to get user input and if/else statements to make decisions about which ability to activate based on the number entered.
![choose outcome](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTZiOTJpOThjMHN1cDM2eXVpN2tleDY3c2t3ZmNiN3Qyc2ZjYTdqbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5iWX6XFTndU0YP0Yut/giphy.gif)

## Step 1: Create a Variable and the Ability Command
1. :gear: Click on the \`\`||variables:VARIABLES||\`\` category.

2. :mouse pointer: Click on the \`|Make a Variable|\` button.

3. :keyboard: Name the variable **number**.

4. :paper plane: Click on the \`\`||player:PLAYER||\`\` category.

5. :mouse pointer: Drag a new \`\`||player:on chat command||\`\` block into the workspace.

6. :gear: Change the command name to **"ability"**.

7. :mouse pointer: Click the \`+\` button to add a parameter, and change it to **"number"**.

8. :bulb: This parameter will let us select different abilities.

\`\`\`blocks
    //@highlight
player.onChat("ability", function (number) {
	
})

\`\`\`

## Step 2: Add the First Ability (Sun Ninja)
1. :paper plane: From the \`\`||logic:LOGIC||\`\` category, add an \`\`||logic:if...then...else||\`\` block.


2. :gear: Set up the condition:
   * :mouse pointer: Find and drag out the \`\`||logic:< 0 = 0 >||\`\` block.
   * :mouse pointer: Place this in the condition area of the "if" block.
   * :mouse pointer: Drag the \`\`||variables:number||\`\` variable into the first part of the comparison.
   * :gear: Make sure the middle operator is set to **=** (equals).
   * :keyboard: Change the value on the right to **1**.


3. :gear: Inside the first "if", add:
   * :mouse pointer: A \`\`||player:execute||\`\` block with \`/give @s golden_sword\`.
   * :mouse pointer: A \`\`||gameplay:weather||\`\` block set to **clear**.
   * :mouse pointer: A \`\`||gameplay:time set||\`\` block set to **day**.

\`\`\`blocks
player.onChat("ability", function (number) {
    //@highlight
    if (number == 1) {
        //@highlight
        player.execute("/give @s golden_sword")
        //@highlight
        gameplay.setWeather(CLEAR)
        //@highlight
        gameplay.timeSet(DAY)
    } else {
    
    }
})

\`\`\`

## Step 3: Add the Second Ability (Rain Ninja)
1. :mouse pointer: Click the \`+\` button on the \`\`||logic:if||\`\` block to add an \`\`||logic:else if||\`\` section.


2. :gear: Set up the condition:
   * :mouse pointer: Add another comparison block in the condition area.
   * :mouse pointer: Drag the \`\`||variables:number||\`\` variable into the first part.
   * :gear: Set the middle operator to **=** (equals).
   * :keyboard: Change the value on the right to **2**.


3. :gear: Inside this "else if" block, add:
   * :mouse pointer: A \`\`||player:execute||\`\` block with \`/give @s diamond_sword\`.
   * :mouse pointer: A \`\`||gameplay:weather||\`\` block set to **rain**.
   * :mouse pointer: A \`\`||gameplay:time set||\`\` block set to **dusk**.

\`\`\`blocks
player.onChat("ability", function (number) {
    if (number == 1) {
        player.execute("/give @s golden_sword")
        gameplay.setWeather(CLEAR)
        gameplay.timeSet(DAY)
    }
    //@highlight
    else if (number == 2) {
        //@highlight
        player.execute("/give @s diamond_sword")
        //@highlight
        gameplay.setWeather(RAIN)
        //@highlight
        gameplay.timeSet(DUSK)
    } else {
    
    }
})

\`\`\`

## Step 4: Add a Default Message

1. :gear: Inside the "else" section, add a \`\`||player:say||\`\` block.

2. :keyboard: Set the message to **"No ability for that number"**.

3. :bulb: This message will appear if the player types a number that doesn't match any ability.

\`\`\`blocks
player.onChat("ability", function (number) {
    if (number == 1) {
        player.execute("give @s golden_sword")
        gameplay.setWeather(CLEAR)
        gameplay.timeSet(DAY)
    } else if (number == 2) {
        player.execute("give @s diamond_sword")
        gameplay.setWeather(RAIN)
        gameplay.timeSet(DUSK)
    }
    //@highlight
    else {
        //@highlight
        player.say("No ability for that number")
    }
})

\`\`\`

## Step 5: Test Your Weather Abilities
* :raised hand: Raise your hand and a sensei will take your code into Minecraft Education
* :game controller: Open the chat window by pressing \`|T|\`
* :computer: Try each ability by typing:
  * \`ability 1\` (for Sun Ninja powers)
  * \`ability 2\` (for Rain Ninja powers)
* :eyes: Watch as each ability changes the weather, time, and gives you a different sword!

\`\`\`validation.global
# BlocksExistValidator

\`\`\``

    const copyAndOpenMakeCode = async () => {
        try {
            await navigator.clipboard.writeText(tutorialMarkdown)
            // Open MakeCode tutorial tool in new tab
            window.open('https://makecode.com/tutorial-tool?', '_blank')
        } catch (error) {
            console.error('Failed to copy to clipboard:', error)
            // Still open the tool even if copy fails
            window.open('https://makecode.com/tutorial-tool?', '_blank')
        }
    }


    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Complete Tutorial Example
                    </h1>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                    See how all the markdown concepts come together in a real MakeCode tutorial. This example demonstrates proper structure, features, and best practices.
                </p>

                {/* Step Navigation */}
                <div className="flex gap-3 mb-6">
                    <button
                        onClick={copyAndOpenMakeCode}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        🚀 See it in MakeCode Tutorial Tool
                    </button>
                </div>

                {/* Progress */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{steps[currentStep - 1].title}</span>
                        <span>Step {currentStep} of {totalSteps}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-green-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                        <h3 className="font-semibold text-green-800 mb-2">📝 Step-by-Step Tutorial Breakdown</h3>
                        <p className="text-green-700 text-sm">
                            See how each part of the markdown creates different tutorial elements. Each step shows the markdown code and explains its purpose.
                        </p>
                    </div>

                    {/* Current Step Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{steps[currentStep - 1].title}</h2>
                            <p className="text-gray-700 mb-6">{steps[currentStep - 1].explanation}</p>
                        </div>

                        {/* Markdown Code */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">📄 Markdown Code:</h3>
                            <div className="bg-gray-100 border rounded-lg p-4 font-mono text-sm whitespace-pre-wrap overflow-auto">
                                {steps[currentStep - 1].content}
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h3 className="font-semibold text-blue-800 mb-3">🔍 What This Demonstrates:</h3>
                            <div className="text-blue-700 text-sm">
                                {currentStep === 1 && (
                                    <ul className="space-y-1">
                                        <li>• Main tutorial title using single #</li>
                                        <li>• Template block with empty starting code</li>
                                        <li>• Clean, descriptive tutorial naming</li>
                                    </ul>
                                )}
                                {currentStep === 2 && (
                                    <ul className="space-y-1">
                                        <li>• Tutorial metadata using ### @key value syntax</li>
                                        <li>• Student engagement control</li>
                                        <li>• Preventing tutorial skipping</li>
                                    </ul>
                                )}
                                {currentStep === 3 && (
                                    <ul className="space-y-1">
                                        <li>• Dialog creation with @showdialog</li>
                                        <li>• Image integration for visual learning</li>
                                        <li>• Setting context before hands-on activities</li>
                                    </ul>
                                )}
                                {currentStep === 4 && (
                                    <ul className="space-y-1">
                                        <li>• Multiple dialogs for different concepts</li>
                                        <li>• Educational preparation and expectation setting</li>
                                        <li>• Progressive concept introduction</li>
                                    </ul>
                                )}
                                {currentStep === 5 && (
                                    <ul className="space-y-1">
                                        <li>• Step structure with ## heading</li>
                                        <li>• Icons for visual instruction clarity</li>
                                        <li>• Block references with ||category:block|| syntax</li>
                                        <li>• Code validation with //@highlight</li>
                                    </ul>
                                )}
                                {currentStep === 6 && (
                                    <ul className="space-y-1">
                                        <li>• Complex nested instructions</li>
                                        <li>• Multiple block references with proper colors</li>
                                        <li>• Progressive code building</li>
                                        <li>• Detailed step-by-step guidance</li>
                                    </ul>
                                )}
                                {currentStep === 7 && (
                                    <ul className="space-y-1">
                                        <li>• Testing and verification steps</li>
                                        <li>• Keyboard shortcut formatting with |key|</li>
                                        <li>• Real-world application and feedback</li>
                                        <li>• Instructor interaction guidance</li>
                                    </ul>
                                )}
                                {currentStep === 8 && (
                                    <ul className="space-y-1">
                                        <li>• Code validation system</li>
                                        <li>• BlocksExistValidator implementation</li>
                                        <li>• Automatic checking of highlighted blocks</li>
                                        <li>• Tutorial completion verification</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step Navigation */}
            <div className="flex justify-between mt-8">
                <button
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors"
                >
                    ← Previous Step
                </button>

                {currentStep < totalSteps ? (
                    <button
                        onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Next Step →
                    </button>
                ) : (
                    <a
                        href="/create"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Start Creating Your Tutorial →
                    </a>
                )}
            </div>
            {/* Final Navigation */}
            <div className="flex justify-between mt-8">
                <a
                    href="/learn/markdown-basics"
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                    ← Back to Markdown Guide
                </a>
                <div className="text-center text-gray-500 text-sm">
                    💡 Use the MakeCode Tutorial Tool button above to test this example
                </div>
            </div>

        </div>
    )
}