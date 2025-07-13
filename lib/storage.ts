// src/lib/storage.ts

import { Tutorial } from '@/types/tutorial'
import { Project } from '@/types/project'

const STORAGE_KEY = 'makecode-tutorials'

export interface StoredData {
 projects: Project[]
 lastUpdated: string
}

// Generate unique ID
export function generateId(): string {
 return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// Get all data from localStorage
function getData(): StoredData {
 if (typeof window === 'undefined') return { projects: [], lastUpdated: '' }
 
 try {
   const stored = localStorage.getItem(STORAGE_KEY)
   if (!stored) return { projects: [], lastUpdated: '' }
   
   return JSON.parse(stored)
 } catch (error) {
   console.error('Error reading from localStorage:', error)
   return { projects: [], lastUpdated: '' }
 }
}

// Save all data to localStorage
function saveData(data: StoredData): void {
 if (typeof window === 'undefined') return
 
 try {
   data.lastUpdated = new Date().toISOString()
   localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
 } catch (error) {
   console.error('Error saving to localStorage:', error)
 }
}

// Project CRUD operations
export const storage = {
 // Get all projects
 getAllProjects(): Project[] {
   return getData().projects
 },

 // Get single project by ID
 getProject(id: string): Project | null {
   const data = getData()
   return data.projects.find(p => p.id === id) || null
 },

 // Save new project
 saveProject(tutorial: Tutorial): Project {
   const data = getData()
   const project: Project = {
     id: tutorial.id,
     tutorial,
     createdAt: new Date().toISOString(),
     updatedAt: new Date().toISOString()
   }
   
   data.projects.push(project)
   saveData(data)
   return project
 },

 // Update existing project
 updateProject(id: string, tutorial: Tutorial): Project | null {
   const data = getData()
   const projectIndex = data.projects.findIndex(p => p.id === id)
   
   if (projectIndex === -1) return null
   
   const updatedProject: Project = {
     ...data.projects[projectIndex],
     tutorial,
     updatedAt: new Date().toISOString()
   }
   
   data.projects[projectIndex] = updatedProject
   saveData(data)
   return updatedProject
 },

 // Delete project
 deleteProject(id: string): boolean {
   const data = getData()
   const initialLength = data.projects.length
   data.projects = data.projects.filter(p => p.id !== id)
   
   if (data.projects.length < initialLength) {
     saveData(data)
     return true
   }
   return false
 },

 // Clear all data
 clearAll(): void {
   if (typeof window === 'undefined') return
   localStorage.removeItem(STORAGE_KEY)
 }
}