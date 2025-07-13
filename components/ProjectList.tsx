'use client'

import { useEffect, useState } from 'react'
import { storage } from '@/lib/storage'
import { getProjectMeta, type ProjectMeta } from '@/types/project'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function ProjectList() {
 const [projects, setProjects] = useState<ProjectMeta[]>([])
 const [loading, setLoading] = useState(true)

 useEffect(() => {
   loadProjects()
 }, [])

 const loadProjects = () => {
   try {
     const allProjects = storage.getAllProjects()
     const projectMetas = allProjects.map(getProjectMeta)
     setProjects(projectMetas.sort((a, b) => 
       new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
     ))
   } catch (error) {
     console.error('Error loading projects:', error)
   } finally {
     setLoading(false)
   }
 }

 const deleteProject = (id: string) => {
   if (confirm('Are you sure you want to delete this tutorial?')) {
     storage.deleteProject(id)
     loadProjects() // Refresh the list
   }
 }

 const formatDate = (dateString: string) => {
   return new Date(dateString).toLocaleDateString('en-US', {
     year: 'numeric',
     month: 'short',
     day: 'numeric'
   })
 }

 if (loading) {
   return (
     <div className="flex justify-center py-8">
       <div className="text-gray-500">Loading tutorials...</div>
     </div>
   )
 }

 if (projects.length === 0) {
   return (
     <div className="text-center py-12">
       <div className="text-gray-400 text-6xl mb-4">📝</div>
       <h3 className="text-lg font-medium text-gray-900 mb-2">
         No tutorials yet
       </h3>
       <p className="text-gray-500 mb-6">
         Create your first MakeCode tutorial to get started
       </p>
       <div className="flex gap-3 justify-center">
         <a 
           href="/learn"
           className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
         >
           Learn How
         </a>
         <a 
           href="/create"
           className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
         >
           Create Your First Tutorial
         </a>
       </div>
     </div>
   )
 }

 return (
   <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
     {projects.map((project) => (
       <Card key={project.id} className="p-6 hover:shadow-md transition-shadow">
         <div className="flex flex-col h-full">
           <div className="flex-1">
             <h3 className="text-lg font-semibold text-gray-900 mb-2">
               {project.title}
             </h3>
             <p className="text-gray-600 text-sm mb-4 line-clamp-3">
               {project.description}
             </p>
             <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
               <span>{project.stepCount} steps</span>
               <span>Updated {formatDate(project.updatedAt)}</span>
             </div>
           </div>
           
           <div className="flex gap-2 pt-4 border-t">
             <Button 
               asChild 
               variant="default" 
               size="sm" 
               className="flex-1"
             >
               <a href={`/edit/${project.id}`}>
                 Edit
               </a>
             </Button>
             <Button 
               variant="outline" 
               size="sm"
               onClick={() => deleteProject(project.id)}
               className="text-red-600 hover:text-red-700"
             >
               Delete
             </Button>
           </div>
         </div>
       </Card>
     ))}
   </div>
 )
}