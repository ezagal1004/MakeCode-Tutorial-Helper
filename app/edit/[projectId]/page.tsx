import { TutorialEditor } from '@/components/TutorialEditor'

export default async function EditPage({
  params,
}: {
  params: Promise<{ projectId: string }>
}) {
  const { projectId } = await params

  return (
    <div className="h-[calc(100vh-8rem)]"> {/* Account for header height */}
      <TutorialEditor projectId={projectId} />
    </div>
  )
}