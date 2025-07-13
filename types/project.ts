// src/types/project.ts

import { Tutorial } from './tutorial'

export interface Project {
 id: string
 tutorial: Tutorial
 createdAt: string
 updatedAt: string
}

export interface ProjectMeta {
 id: string
 title: string
 description: string
 stepCount: number
 createdAt: string
 updatedAt: string
}

// Helper function to extract metadata from project
export function getProjectMeta(project: Project): ProjectMeta {
 return {
   id: project.id,
   title: project.tutorial.title,
   description: project.tutorial.description,
   stepCount: project.tutorial.steps.length,
   createdAt: project.createdAt,
   updatedAt: project.updatedAt
 }
}