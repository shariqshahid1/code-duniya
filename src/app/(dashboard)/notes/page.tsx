"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, Save, X, FileText, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNotes } from "@/hooks/useNotes"
import { courses } from "@/data/courses"

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date)
}

export default function NotesPage() {
  const { notes, addNote, updateNote, deleteNote } = useNotes()
  const [newNoteContent, setNewNoteContent] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editContent, setEditContent] = useState("")
  const [filterCourse, setFilterCourse] = useState<string>("all")

  const filteredNotes = filterCourse === "all" ? notes : notes.filter((n) => n.courseId === filterCourse)

  const handleAddNote = () => {
    if (!newNoteContent.trim() || !selectedCourse) return
    addNote(selectedCourse, "general", newNoteContent.trim())
    setNewNoteContent("")
  }

  const handleSaveEdit = (noteId: string) => {
    if (!editContent.trim()) return
    updateNote(noteId, editContent.trim())
    setEditingId(null)
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Notes</h1>
          <p className="text-muted-foreground mt-1">Apni personal notes likhein aur save karein</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={filterCourse} onValueChange={setFilterCourse}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              {courses.map((c) => <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2"><Plus className="h-5 w-5" /> Naya Note</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={selectedCourse} onValueChange={setSelectedCourse}>
            <SelectTrigger><SelectValue placeholder="Course choose karein" /></SelectTrigger>
            <SelectContent>
              {courses.map((c) => <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>)}
            </SelectContent>
          </Select>
          <Textarea placeholder="Apna note yahan likhein..." value={newNoteContent} onChange={(e) => setNewNoteContent(e.target.value)} rows={4} />
          <Button onClick={handleAddNote} disabled={!newNoteContent.trim() || !selectedCourse}><Save className="h-4 w-4 mr-2" /> Save Note</Button>
        </CardContent>
      </Card>

      {filteredNotes.length === 0 ? (
        <Card className="bg-muted/50 border-dashed">
          <CardContent className="p-12 text-center">
            <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">Koi notes nahi hai</h3>
            <p className="text-muted-foreground">Apna pehla note add karein</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredNotes.map((note) => {
            const course = courses.find((c) => c.id === note.courseId)
            const isEditing = editingId === note.id
            return (
              <Card key={note.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="flex items-center gap-1"><BookOpen className="h-3 w-3" />{course?.title || "Unknown"}</Badge>
                      <span className="text-xs text-muted-foreground">{formatDate(new Date(note.createdAt))}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {isEditing ? (
                        <>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleSaveEdit(note.id)}><Save className="h-4 w-4 text-green-500" /></Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditingId(null)}><X className="h-4 w-4" /></Button>
                        </>
                      ) : (
                        <>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => { setEditingId(note.id); setEditContent(note.content) }}><Edit2 className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => deleteNote(note.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                        </>
                      )}
                    </div>
                  </div>
                  {isEditing ? <Textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} rows={4} /> : <p className="text-sm whitespace-pre-wrap">{note.content}</p>}
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
