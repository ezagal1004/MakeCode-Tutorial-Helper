import { ProjectList } from '@/components/ProjectList'

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Your MakeCode Tutorials
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Create interactive programming tutorials for MakeCode Arcade. 
          Build step-by-step guides that help students learn to code through game development.
        </p>
      </div>

      <ProjectList />
    </div>
  )
}