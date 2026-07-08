"use client"

import { useCallback } from "react"
import { useLocalStorage } from "./useLocalStorage"
import type { UserProgress } from "@/types"

export function useProgress(courseId: string) {
  const [progress, setProgress, removeProgress] = useLocalStorage<UserProgress>(
    `progress-${courseId}`,
    {
      courseId,
      completedLessons: [],
      quizScores: {},
      startedAt: new Date().toISOString(),
    }
  )

  const markLessonComplete = useCallback(
    (lessonId: string) => {
      setProgress((prev) => {
        if (prev.completedLessons.includes(lessonId)) return prev
        return {
          ...prev,
          completedLessons: [...prev.completedLessons, lessonId],
          lastLessonId: lessonId,
        }
      })
    },
    [setProgress]
  )

  const markLessonIncomplete = useCallback(
    (lessonId: string) => {
      setProgress((prev) => ({
        ...prev,
        completedLessons: prev.completedLessons.filter((id) => id !== lessonId),
      }))
    },
    [setProgress]
  )

  const isLessonComplete = useCallback(
    (lessonId: string) => {
      return progress.completedLessons.includes(lessonId)
    },
    [progress.completedLessons]
  )

  const saveQuizScore = useCallback(
    (quizId: string, score: number) => {
      setProgress((prev) => ({
        ...prev,
        quizScores: { ...prev.quizScores, [quizId]: score },
      }))
    },
    [setProgress]
  )

  const getProgressPercent = useCallback(
    (totalLessons: number) => {
      if (totalLessons === 0) return 0
      return Math.round((progress.completedLessons.length / totalLessons) * 100)
    },
    [progress.completedLessons.length]
  )

  const markCourseCompleted = useCallback(() => {
    setProgress((prev) => ({
      ...prev,
      completedAt: new Date().toISOString(),
    }))
  }, [setProgress])

  return {
    progress,
    markLessonComplete,
    markLessonIncomplete,
    isLessonComplete,
    saveQuizScore,
    getProgressPercent,
    markCourseCompleted,
    removeProgress,
  }
}
