export default function LearnPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Learn How to Create MakeCode Tutorials
        </h1>
        <p className="text-lg text-gray-600">
          Master the art of writing engaging MakeCode Arcade tutorials with markdown
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          What is Markdown?
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8">
            Markdown is a lightweight markup language created by John Gruber in 2004 that allows you to format text using a simple, easy-to-read syntax. It's designed to be both human-readable in its raw form and easily convertible to HTML for web display. This makes it perfect for writing documentation, tutorials, and other instructional content.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Use Markdown for MakeCode Tutorials?
          </h2>
          
          <p className="text-gray-700 mb-6">
            Markdown is particularly useful for creating MakeCode tutorials (both for Arcade and Minecraft) because:
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <ol className="text-blue-700 space-y-3 list-decimal list-inside">
              <li>It's simple to learn and use, even for beginners</li>
              <li>It allows you to focus on content rather than formatting</li>
              <li>It works seamlessly with MakeCode's tutorial system</li>
              <li>It supports code blocks, images, and other elements essential for coding tutorials</li>
              <li>It creates consistent, professional-looking documentation</li>
            </ol>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Examples of Markdown for MakeCode Tutorials
          </h3>
          
          <p className="text-gray-700 mb-4">
            Almost all of the tutorials used during Game Building Sessions, whether it's the "Chase the Pizza" game or "Whack the Mole", ALL MakeCode tutorials use Markdown and we can leverage that to make custom tutorials. The following are some examples you might recognize:
          </p>
          
          <div className="bg-gray-50 border rounded-lg p-6 mb-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Chase the Pizza</h4>
                <a 
                  href="https://arcade.makecode.com/tutorials/chase-the-pizza" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  https://arcade.makecode.com/tutorials/chase-the-pizza
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Whack a Mole</h4>
                <a 
                  href="https://arcade.makecode.com/--skillmap#mole" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  https://arcade.makecode.com/--skillmap#mole
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Understanding Markdown
          </h2>
          
          <p className="text-gray-700 mb-6">
            Ready to dive deeper into markdown syntax and see it in action? The next sections provide interactive learning experiences where you can practice writing markdown and see real tutorial examples.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a 
              href="/learn/markdown-basics" 
              className="block p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    📚 Interactive Markdown Guide
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Learn markdown syntax with interactive examples and practice exercises
                  </p>
                </div>
              </div>
            </a>
            
            <a 
              href="/learn/tutorial-example" 
              className="block p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    🎮 Tutorial Example
                  </h3>
                  <p className="text-green-700 text-sm">
                    See a complete MakeCode tutorial built with markdown from start to finish
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="bg-gray-50 border rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">What's Next?</h3>
            <p className="text-gray-700 mb-4">
              After completing the interactive sections, you'll be ready to create your own MakeCode tutorials using the tutorial editor.
            </p>
            <p className="text-gray-600 text-sm">
              💡 Tip: The tutorial editor includes autocomplete and templates to help you write markdown quickly and correctly.
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="/create" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Skip Tutorial
            </a>
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}