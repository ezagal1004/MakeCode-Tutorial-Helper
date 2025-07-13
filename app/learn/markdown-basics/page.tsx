'use client'

import { useState } from 'react'

export default function MarkdownBasicsPage() {
  const [currentSection, setCurrentSection] = useState(1)
  const totalSections = 16

  const sections = [
    { id: 1, title: "Headers", category: "basic" },
    { id: 2, title: "Text Formatting", category: "basic" },
    { id: 3, title: "Unordered Lists", category: "basic" },
    { id: 4, title: "Ordered Lists", category: "basic" },
    { id: 5, title: "Links", category: "basic" },
    { id: 6, title: "Images", category: "basic" },
    { id: 7, title: "Inline Code", category: "basic" },
    { id: 8, title: "Code Blocks", category: "basic" },
    { id: 9, title: "Horizontal Dividers", category: "basic" },
    { id: 10, title: "Templates", category: "makecode" },
    { id: 11, title: "Block References", category: "makecode" },
    { id: 12, title: "Hide Done Button", category: "makecode" },
    { id: 13, title: "Show Dialog", category: "makecode" },
    { id: 14, title: "Limiting Blocks", category: "makecode" },
    { id: 15, title: "Code Validation", category: "makecode" },
    { id: 16, title: "Tutorial Complete", category: "makecode" }
  ]

  const nextSection = () => {
    if (currentSection < totalSections) {
      setCurrentSection(currentSection + 1)
    }
  }

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1)
    }
  }

  const CodeExample = ({ markdown, preview }: { markdown: string, preview: React.ReactNode }) => (
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Markdown:</h4>
        <div className="bg-gray-100 border rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
          {markdown}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Result:</h4>
        <div className="bg-white border rounded-lg p-4">
          {preview}
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
            1
          </span>
          <h1 className="text-3xl font-bold text-gray-900">
            Interactive Markdown Guide
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          Before we get into how to write the tutorials we first need to understand some of the syntax used in the documents. This walkthrough is split into two parts:
        </p>
        <div className="mt-4 flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Basic Markdown Syntax</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">MakeCode Specific Syntax</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{sections[currentSection - 1].title}</span>
          <span>{currentSection} of {totalSections}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${(currentSection / totalSections) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Section Indicator */}
      <div className="mb-6">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
          sections[currentSection - 1].category === 'basic' 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-green-100 text-green-800'
        }`}>
          <div className={`w-2 h-2 rounded-full ${
            sections[currentSection - 1].category === 'basic' ? 'bg-blue-500' : 'bg-green-500'
          }`}></div>
          {sections[currentSection - 1].category === 'basic' ? 'Basic Markdown' : 'MakeCode Specific'}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        
        {/* Headers */}
        {currentSection === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Headers</h2>
            <p className="text-gray-700 mb-6">
              Headers create headings of different sizes using # symbols. More # symbols make smaller headings.
            </p>
            
            <CodeExample 
              markdown={`# Main Title (H1)
## Section Heading (H2)
### Subsection (H3)
#### Small Heading (H4)`}
              preview={
                <div className="space-y-3">
                  <h1 className="text-2xl font-bold">Main Title (H1)</h1>
                  <h2 className="text-xl font-semibold">Section Heading (H2)</h2>
                  <h3 className="text-lg font-medium">Subsection (H3)</h3>
                  <h4 className="text-base font-medium">Small Heading (H4)</h4>
                </div>
              }
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">For MakeCode Tutorials:</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Use <code className="bg-blue-100 px-1 rounded"># Title</code> for the main tutorial title</li>
                <li>• Use <code className="bg-blue-100 px-1 rounded">## Step</code> for tutorial steps</li>
                <li>• Use <code className="bg-blue-100 px-1 rounded">### Subsection</code> for sub-steps if needed</li>
              </ul>
            </div>
          </div>
        )}

        {/* Text Formatting */}
        {currentSection === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Text Formatting</h2>
            <p className="text-gray-700 mb-6">
              Make text bold, italic, or strikethrough using asterisks and tildes.
            </p>
            
            <CodeExample 
              markdown={`**Bold text**
*Italic text*
***Bold and italic***
~~Strikethrough text~~`}
              preview={
                <div className="space-y-2">
                  <p><strong>Bold text</strong></p>
                  <p><em>Italic text</em></p>
                  <p><strong><em>Bold and italic</em></strong></p>
                  <p><del>Strikethrough text</del></p>
                </div>
              }
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Best Practices:</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Use <strong>bold</strong> for important terms or game titles</li>
                <li>• Use <em>italic</em> for emphasis or UI element names</li>
                <li>• Don't overuse formatting - keep it readable</li>
              </ul>
            </div>
          </div>
        )}

        {/* Unordered Lists */}
        {currentSection === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unordered Lists</h2>
            <p className="text-gray-700 mb-6">
              Create bullet point lists using - or * symbols.
            </p>
            
            <CodeExample 
              markdown={`- First item
- Second item
- Third item
  - Nested item
  - Another nested item`}
              preview={
                <ul className="list-disc list-inside space-y-1">
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Nested item</li>
                      <li>Another nested item</li>
                    </ul>
                  </li>
                </ul>
              }
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Tutorial Usage:</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Perfect for step instructions</li>
                <li>• Use for listing features or concepts</li>
                <li>• Add icons like :paper plane: for visual appeal</li>
              </ul>
            </div>
          </div>
        )}

        {/* Ordered Lists */}
        {currentSection === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ordered Lists</h2>
            <p className="text-gray-700 mb-6">
              Create numbered lists using numbers followed by periods.
            </p>
            
            <CodeExample 
              markdown={`1. First step
2. Second step
3. Third step
   1. Sub-step one
   2. Sub-step two`}
              preview={
                <ol className="list-decimal list-inside space-y-1">
                  <li>First step</li>
                  <li>Second step</li>
                  <li>Third step
                    <ol className="list-decimal list-inside ml-6 mt-1 space-y-1">
                      <li>Sub-step one</li>
                      <li>Sub-step two</li>
                    </ol>
                  </li>
                </ol>
              }
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">When to Use:</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• When order matters (like setup steps)</li>
                <li>• For sequential instructions</li>
                <li>• Usually bullet points work better for MakeCode tutorials</li>
              </ul>
            </div>
          </div>
        )}

        {/* Links */}
        {currentSection === 5 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Links</h2>
            <p className="text-gray-700 mb-6">
              Create clickable links using square brackets for text and parentheses for URLs.
            </p>
            
            <CodeExample 
              markdown={`[MakeCode Arcade](https://arcade.makecode.com)
[Documentation](https://docs.microsoft.com/makecode)

You can also reference links:
Check out [this tutorial][tutorial-link]

[tutorial-link]: https://arcade.makecode.com/tutorials/chase-the-pizza`}
              preview={
                <div className="space-y-2">
                  <p><a href="https://arcade.makecode.com" className="text-blue-600 underline">MakeCode Arcade</a></p>
                  <p><a href="https://docs.microsoft.com/makecode" className="text-blue-600 underline">Documentation</a></p>
                  <p>You can also reference links:</p>
                  <p>Check out <a href="https://arcade.makecode.com/tutorials/chase-the-pizza" className="text-blue-600 underline">this tutorial</a></p>
                </div>
              }
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Tutorial Tips:</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Link to helpful resources or documentation</li>
                <li>• Keep link text descriptive</li>
                <li>• Test all links before publishing</li>
              </ul>
            </div>
          </div>
        )}

        {/* Images */}
        {currentSection === 6 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Images</h2>
            <p className="text-gray-700 mb-6">
              Add images using exclamation mark followed by link syntax.
            </p>
            
            <CodeExample 
              markdown={`![Alt text](image-url.png)
![Game screenshot](https://example.com/game.png)

With title text:
![Cookie sprite](cookie.png "A delicious cookie sprite")`}
              preview={
                <div className="space-y-2">
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded p-4 text-center text-gray-500">
                    🖼️ Image would appear here<br/>
                    <span className="text-xs">Alt text: Game screenshot</span>
                  </div>
                  <p className="text-sm text-gray-600">With title text on hover</p>
                </div>
              }
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Image Best Practices:</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Always include descriptive alt text</li>
                <li>• Use screenshots to show expected results</li>
                <li>• Keep file sizes reasonable for web loading</li>
                <li>• Store images in a reliable location</li>
              </ul>
            </div>
          </div>
        )}

        {/* Inline Code */}
        {currentSection === 7 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Inline Code</h2>
            <p className="text-gray-700 mb-6">
              Highlight small pieces of code or variable names using backticks.
            </p>
            
            <CodeExample 
              markdown={`Use the \`mySprite\` variable to control your character.
Press the \`A\` button to jump.
Set the background color to \`9\` for a forest theme.`}
              preview={
                <div className="space-y-2">
                  <p>Use the <code className="bg-gray-100 px-1 rounded">mySprite</code> variable to control your character.</p>
                  <p>Press the <code className="bg-gray-100 px-1 rounded">A</code> button to jump.</p>
                  <p>Set the background color to <code className="bg-gray-100 px-1 rounded">9</code> for a forest theme.</p>
                </div>
              }
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">When to Use:</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Variable names like <code className="bg-blue-100 px-1 rounded">mySprite</code></li>
                <li>• Button names like <code className="bg-blue-100 px-1 rounded">A button</code></li>
                <li>• Single values like <code className="bg-blue-100 px-1 rounded">100</code></li>
                <li>• Short code snippets</li>
              </ul>
            </div>
          </div>
        )}

        {/* Code Blocks */}
        {currentSection === 8 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Code Blocks</h2>
            <p className="text-gray-700 mb-6">
              Display larger code examples using triple backticks with optional language specification.
            </p>
            
            <CodeExample 
              markdown={`\`\`\`blocks
let mySprite = sprites.create(img\`
. . . . . . . . . . b 5 b . . .
. . . . . . . . . b 5 b . . . .
\`, SpriteKind.Player)
controller.moveSprite(mySprite)
\`\`\`

\`\`\`javascript
function onAPressed() {
    mySprite.say("Hello!")
}
\`\`\``}
              preview={
                <div className="space-y-4">
                  <div className="bg-gray-100 border rounded p-3 font-mono text-sm">
                    <div className="text-xs text-gray-500 mb-2">blocks</div>
                    <div>let mySprite = sprites.create(img`...`, SpriteKind.Player)</div>
                    <div>controller.moveSprite(mySprite)</div>
                  </div>
                  <div className="bg-gray-100 border rounded p-3 font-mono text-sm">
                    <div className="text-xs text-gray-500 mb-2">javascript</div>
                    <div>function onAPressed() {`{`}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;mySprite.say("Hello!")</div>
                    <div>{`}`}</div>
                  </div>
                </div>
              }
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">MakeCode Languages:</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Use <code className="bg-blue-100 px-1 rounded">blocks</code> for visual block code</li>
                <li>• Use <code className="bg-blue-100 px-1 rounded">javascript</code> for text code</li>
                <li>• Use <code className="bg-blue-100 px-1 rounded">template</code> for starting code</li>
              </ul>
            </div>
          </div>
        )}

        {/* Horizontal Dividers */}
        {currentSection === 9 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Horizontal Dividers</h2>
            <p className="text-gray-700 mb-6">
              Create visual breaks in your content using three or more dashes, asterisks, or underscores.
            </p>
            
            <CodeExample 
              markdown={`Section 1 content here

---

Section 2 content here

***

Section 3 content here`}
              preview={
                <div className="space-y-4">
                  <p>Section 1 content here</p>
                  <hr className="border-gray-300" />
                  <p>Section 2 content here</p>
                  <hr className="border-gray-300" />
                  <p>Section 3 content here</p>
                </div>
              }
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Usage Tips:</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Separate major sections of a tutorial</li>
                <li>• Create visual breaks between concepts</li>
                <li>• Use sparingly - headers usually work better</li>
              </ul>
            </div>
          </div>
        )}

        {/* Templates */}
        {currentSection === 10 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Templates</h2>
            <p className="text-gray-700 mb-6">
              Sometimes you want to start a tutorial with some blocks already in the <strong>on start</strong> section. This is written as a code block with the word <strong>template</strong> next to it.
            </p>
            
            <CodeExample 
              markdown={`\`\`\`template
let mySprite = sprites.create(img\`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    \`, SpriteKind.Player)
scene.setBackgroundColor(9)
\`\`\``}
              preview={
                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <div className="text-xs text-green-600 mb-2 font-semibold">TEMPLATE CODE (appears in starting workspace)</div>
                  <div className="font-mono text-sm bg-white p-3 rounded border">
                    <div>let mySprite = sprites.create(img`...`, SpriteKind.Player)</div>
                    <div>scene.setBackgroundColor(9)</div>
                  </div>
                </div>
              }
            />

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h3 className="font-semibold text-green-800 mb-2">Template Benefits:</h3>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• Students start with essential setup code</li>
                <li>• Reduces repetitive initial steps</li>
                <li>• Lets tutorials focus on new concepts</li>
                <li>• Ensures consistent starting point</li>
              </ul>
            </div>
          </div>
        )}

        {/* Block References */}
        {currentSection === 11 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Block References</h2>
            <p className="text-gray-700 mb-6">
              Reference specific MakeCode blocks using the special syntax that highlights them in the tutorial instructions and helps students find blocks in the toolbox.
            </p>
            
            <CodeExample 
              markdown={`Open \`\`||sprites:Sprites||\`\` and drag \`\`||sprites:set mySprite to||\`\` into the workspace.

Try using \`\`||controller:move mySprite with buttons||\`\` to add movement.

Add \`\`||game:splash||\`\` to display a welcome message.`}
              preview={
                <div className="space-y-2">
                  <p>Open <span className="bg-blue-100 border border-blue-300 px-2 py-1 rounded text-sm font-mono text-blue-800">||sprites:Sprites||</span> and drag <span className="bg-blue-100 border border-blue-300 px-2 py-1 rounded text-sm font-mono text-blue-800">||sprites:set mySprite to||</span> into the workspace.</p>
                  <p>Try using <span className="bg-red-100 border border-red-300 px-2 py-1 rounded text-sm font-mono text-red-800">||controller:move mySprite with buttons||</span> to add movement.</p>
                  <p>Add <span className="bg-purple-100 border border-purple-300 px-2 py-1 rounded text-sm font-mono text-purple-800">||game:splash||</span> to display a welcome message.</p>
                </div>
              }
            />

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
              <h3 className="font-semibold text-green-800 mb-2">How Block References Help:</h3>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• When students click these references, the toolbox opens to the exact category</li>
                <li>• Eliminates frustrating searches for blocks</li>
                <li>• Keeps students focused on learning rather than hunting</li>
                <li>• References only work if you include the actual blocks in that tutorial step</li>
              </ul>
            </div>

            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Available Categories with Colors:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span>sprites</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span>controller</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span>game</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-pink-500 rounded"></div>
                  <span>music</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-600 rounded"></div>
                  <span>scene</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-400 rounded"></div>
                  <span>info</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span>loops</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  <span>logic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span>variables</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-400 rounded"></div>
                  <span>math</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-600 rounded"></div>
                  <span>animation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  <span>extensions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  <span>images</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span>functions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span>arrays</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span>text</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-800 rounded"></div>
                  <span>console</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hide Done Button */}
        {currentSection === 12 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hide Done Button</h2>
            <p className="text-gray-700 mb-6">
              Students often skim through tutorials without engaging with the content. The @hideDone feature keeps students in the tutorial until they truly finish, creating a natural checkpoint for instructor review.
            </p>
            
            <CodeExample 
              markdown={`### @hideDone true

# My Tutorial

Content goes here...`}
              preview={
                <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                  <div className="text-xs text-yellow-600 mb-2 font-semibold">TUTORIAL METADATA</div>
                  <div className="text-sm text-yellow-800">
                    ✋ Done button is hidden until tutorial completion
                  </div>
                  <div className="mt-3 text-xs text-yellow-600">
                    This prevents students from skipping ahead and ensures instructor review
                  </div>
                </div>
              }
            />

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Why Use This:</h3>
              <ul className="text-yellow-700 space-y-1 text-sm">
                <li>• Prevents students from skipping without learning</li>
                <li>• Creates natural checkpoints for instructor review</li>
                <li>• Breaks the cycle of skip → confusion → help → restart</li>
                <li>• Ensures understanding before moving on</li>
                <li>• Saves instructional time and improves learning outcomes</li>
              </ul>
            </div>
          </div>
        )}

        {/* Show Dialog */}
        {currentSection === 13 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Show Dialog</h2>
            <p className="text-gray-700 mb-6">
              Students often dive into tutorials without understanding the end goal. The @showdialog feature provides context before hands-on activities begin.
            </p>
            
            <CodeExample 
              markdown={`## Intro @showdialog

Level up your ninja skills! Today we'll enhance your teleportation power with a special JUMP BOOST effect, making you jump EVEN HIGHER and FARTHER! 🥷⚡💨`}
              preview={
                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <div className="text-xs text-blue-600 mb-2 font-semibold">POPUP DIALOG</div>
                  <div className="bg-white p-4 rounded border shadow-sm">
                    <h3 className="font-semibold mb-2">Intro</h3>
                    <p className="text-sm">Level up your ninja skills! Today we'll enhance your teleportation power with a special JUMP BOOST effect, making you jump EVEN HIGHER and FARTHER! 🥷⚡💨</p>
                    <button className="mt-3 px-3 py-1 bg-blue-600 text-white text-xs rounded">OK</button>
                  </div>
                </div>
              }
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Dialog Benefits:</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Helps students visualize the project outcome</li>
                <li>• Prevents mid-lesson confusion</li>
                <li>• Reduces need for instructor intervention</li>
                <li>• Sets clear expectations upfront</li>
                <li>• Creates focused learning environment</li>
                <li>• Enables greater student independence</li>
              </ul>
            </div>
          </div>
        )}

        {/* Limiting Blocks */}
        {currentSection === 14 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Limiting Blocks</h2>
            <p className="text-gray-700 mb-6">
              Sometimes students substitute critical blocks with alternatives that break their program. You can limit available blocks for specific tutorial steps to keep students focused.
            </p>
            
            <CodeExample 
              markdown={`## Step 1

Create your jump command with boost effect.

\`\`\`blocks
player.onChat("jump", function () {
    //@highlight
    mobs.applyEffect(JUMP_BOOST, mobs.target(LOCAL_PLAYER), 10, 2)
    player.teleport(pos(0, 10, 0))
})
\`\`\``}
              preview={
                <div className="space-y-4">
                  <div className="bg-purple-50 border border-purple-200 rounded p-4">
                    <div className="text-xs text-purple-600 mb-2 font-semibold">LIMITED BLOCK PALETTE</div>
                    <div className="text-sm text-purple-800">
                      Only shows blocks needed for this step
                    </div>
                  </div>
                  <div className="bg-gray-100 border rounded p-3 font-mono text-sm">
                    <div className="text-xs text-gray-500 mb-2">blocks</div>
                    <div>player.onChat("jump", function () {`{`}</div>
                    <div className="bg-yellow-200 px-1 rounded">&nbsp;&nbsp;&nbsp;&nbsp;//@highlight</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;mobs.applyEffect(JUMP_BOOST, mobs.target(LOCAL_PLAYER), 10, 2)</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;player.teleport(pos(0, 10, 0))</div>
                    <div>{`}`}</div>
                  </div>
                </div>
              }
            />

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
              <h3 className="font-semibold text-purple-800 mb-2">Key Features:</h3>
              <ul className="text-purple-700 space-y-1 text-sm">
                <li>• <code className="bg-purple-100 px-1 rounded">//@highlight</code> marks blocks for validation</li>
                <li>• Limits available blocks to prevent substitution errors</li>
                <li>• Students regain full access after tutorial completion</li>
                <li>• Keeps lessons focused while preserving creativity</li>
                <li>• Ensures students learn essential concepts</li>
              </ul>
            </div>
          </div>
        )}

        {/* Code Validation */}
        {currentSection === 15 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Code Validation</h2>
            <p className="text-gray-700 mb-6">
              After guiding students through creating code, you need to confirm they've included all essential elements. MakeCode's validation system checks for required blocks.
            </p>
            
            <CodeExample 
              markdown={`# My Tutorial

Tutorial content and steps here...

\`\`\`validation.global
# BlocksExistValidator
\`\`\``}
              preview={
                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <div className="text-xs text-green-600 mb-2 font-semibold">VALIDATION SYSTEM</div>
                  <div className="bg-white p-3 rounded border">
                    <div className="text-sm text-green-800 mb-2">✅ Checking for required blocks...</div>
                    <div className="text-xs text-green-600">
                      • Automatically checks @highlight blocks<br/>
                      • Suggests missing elements<br/>
                      • Provides immediate feedback
                    </div>
                  </div>
                </div>
              }
            />

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
              <h3 className="font-semibold text-green-800 mb-2">Validation Features:</h3>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• Automatically checks for blocks marked with <code className="bg-green-100 px-1 rounded">//@highlight</code></li>
                <li>• Suggests missing blocks but doesn't enforce inclusion</li>
                <li>• Provides immediate feedback during tutorial</li>
                <li>• Works best when combined with <code className="bg-green-100 px-1 rounded">@hideDone true</code></li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Best Practice:</h3>
              <p className="text-yellow-700 text-sm">
                Pair validation with the @hideDone feature for the best results. The validator offers immediate feedback, while hiding the "Done" button ensures instructors can verify completed work before students move on.
              </p>
            </div>
          </div>
        )}

        {/* Tutorial Complete */}
        {currentSection === 16 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎉 Markdown Mastery Complete!</h2>
            <p className="text-gray-700 mb-6">
              Congratulations! You've learned all the essential markdown syntax for creating engaging MakeCode tutorials. You now understand both basic markdown and MakeCode's powerful tutorial-specific features.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">✅ Basic Markdown</h3>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• Headers and text formatting</li>
                  <li>• Lists and links</li>
                  <li>• Images and code blocks</li>
                  <li>• Visual structure elements</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">✅ MakeCode Features</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Templates and block references</li>
                  <li>• Dialog popups and tutorials control</li>
                  <li>• Block limiting and validation</li>
                  <li>• Student engagement features</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">What's Next?</h3>
              <p className="text-gray-700 mb-4">
                Ready to see how all these elements come together in a real tutorial? The next section shows a complete MakeCode tutorial example that demonstrates these concepts in action.
              </p>
              <div className="flex gap-3">
                <a 
                  href="/learn/tutorial-example" 
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  📖 View Tutorial Example
                </a>
                <a 
                  href="/create" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  🚀 Start Creating
                </a>
              </div>
            </div>

            <div className="text-center text-gray-500 text-sm">
              💡 Remember: The tutorial editor includes autocomplete for block references and templates to help you write markdown quickly and correctly.
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevSection}
          disabled={currentSection === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors"
        >
          ← Previous
        </button>
        
        {currentSection < totalSections ? (
          <button
            onClick={nextSection}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next →
          </button>
        ) : (
          <a
            href="/learn/tutorial-example"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            See Tutorial Example →
          </a>
        )}
      </div>
    </div>
  )
}