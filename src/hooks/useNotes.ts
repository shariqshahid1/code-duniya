"use client"

import { useCallback } from "react"
import { useLocalStorage } from "./useLocalStorage"
import type { UserNote } from "@/types"
import { v4 as uuidv4 } from "uuid"

export function useNotes() {
  const [notes, setNotes] = useLocalStorage<UserNote[]>("user-notes", [])

  const addNote = useCallback(
    (courseId: string, lessonId: string, content: string) => {
      const newNote: UserNote = {
        id: uuidv4(),
        courseId,
        lessonId,
        content,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      setNotes((prev) => [...prev, newNote])
      return newNote
    },
    [setNotes]
  )

  const updateNote = useCallback(
    (noteId: string, content: string) => {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === noteId
            ? { ...note, content, updatedAt: new Date().toISOString() }
            : note
        )
      )
    },
    [setNotes]
  )

  const deleteNote = useCallback(
    (noteId: string) => {
      setNotes((prev) => prev.filter((note) => note.id !== noteId))
    },
    [setNotes]
  )

  const getNotesByLesson = useCallback(
    (courseId: string, lessonId: string) => {
      return notes.filter(
        (note) => note.courseId === courseId && note.lessonId === lessonId
      )
    },
    [notes]
  )

  const getNotesByCourse = useCallback(
    (courseId: string) => {
      return notes.filter((note) => note.courseId === courseId)
    },
    [notes]
  )

  return { notes, addNote, updateNote, deleteNote, getNotesByLesson, getNotesByCourse }
}
