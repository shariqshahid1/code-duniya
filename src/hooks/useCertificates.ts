"use client"

import { useCallback } from "react"
import { useLocalStorage } from "./useLocalStorage"
import type { Certificate } from "@/types"
import { v4 as uuidv4 } from "uuid"

export function useCertificates() {
  const [certificates, setCertificates] = useLocalStorage<Certificate[]>(
    "user-certificates",
    []
  )

  const addCertificate = useCallback(
    (courseId: string, courseName: string, userName: string) => {
      const newCert: Certificate = {
        id: uuidv4(),
        courseId,
        courseName,
        issuedAt: new Date().toISOString(),
        userId: "user-1",
        userName,
      }
      setCertificates((prev) => [...prev, newCert])
      return newCert
    },
    [setCertificates]
  )

  const hasCertificate = useCallback(
    (courseId: string) => {
      return certificates.some((cert) => cert.courseId === courseId)
    },
    [certificates]
  )

  return { certificates, addCertificate, hasCertificate }
}
