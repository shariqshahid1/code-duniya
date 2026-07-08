"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Play, RotateCcw, Copy, Check, Code2, Maximize2, Minimize2, Eye, Monitor, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

const templates: Record<string, { html: string; css: string; js: string }> = {
  blank: {
    html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Code Playground</title>\n</head>\n<body>\n  <h1>Namaste Duniya!</h1>\n  <p>CodeDuniya Code Playground mein aapka swagat hai.</p>\n</body>\n</html>',
    css: 'body {\n  font-family: Arial, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n  background: #f5f5f5;\n}\nh1 {\n  color: #2563eb;\n  font-size: 2.5rem;\n}\np {\n  color: #64748b;\n  font-size: 1.2rem;\n}',
    js: '// JavaScript code yahan likhein\nconsole.log("CodeDuniya Playground!");\n\ndocument.querySelector(\'h1\')?.addEventListener(\'click\', () => {\n  alert(\'CodeDuniya par aapka swagat hai!\');\n});',
  },
  counter: {
    html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Counter App</title>\n</head>\n<body>\n  <div class="container">\n    <h1>Counter App</h1>\n    <div class="counter">\n      <button id="decrement" class="btn">-</button>\n      <span id="count">0</span>\n      <button id="increment" class="btn">+</button>\n    </div>\n    <button id="reset" class="btn reset">Reset</button>\n  </div>\n</body>\n</html>',
    css: '* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: linear-gradient(135deg, #667eea, #764ba2); }\n.container { text-align: center; background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }\nh1 { color: #333; margin-bottom: 1.5rem; }\n.counter { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1rem; }\n.btn { width: 50px; height: 50px; border: none; border-radius: 50%; font-size: 1.5rem; cursor: pointer; background: #667eea; color: white; transition: all 0.2s; }\n.btn:hover { transform: scale(1.1); }\n.btn:active { transform: scale(0.95); }\n#count { font-size: 3rem; font-weight: bold; min-width: 80px; color: #333; }\n.reset { width: auto; padding: 0.5rem 2rem; border-radius: 25px; background: #e74c3c; }',
    js: 'let count = 0;\nconst countEl = document.getElementById(\'count\');\nconst decrementBtn = document.getElementById(\'decrement\');\nconst incrementBtn = document.getElementById(\'increment\');\nconst resetBtn = document.getElementById(\'reset\');\n\nfunction updateDisplay() {\n  countEl.textContent = count;\n  countEl.style.color = count > 0 ? \'#27ae60\' : count < 0 ? \'#e74c3c\' : \'#333\';\n}\n\ndecrementBtn.addEventListener(\'click\', () => { count--; updateDisplay(); });\nincrementBtn.addEventListener(\'click\', () => { count++; updateDisplay(); });\nresetBtn.addEventListener(\'click\', () => { count = 0; updateDisplay(); });\nupdateDisplay();',
  },
  todo: {
    html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Todo App</title>\n</head>\n<body>\n  <div class="container">\n    <h1>Todo List</h1>\n    <div class="input-group">\n      <input type="text" id="todoInput" placeholder="Naya task likhein...">\n      <button id="addBtn" class="btn">Add</button>\n    </div>\n    <ul id="todoList"></ul>\n  </div>\n</body>\n</html>',
    css: '* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f0f2f5; }\n.container { background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 5px 20px rgba(0,0,0,0.1); width: 400px; max-width: 90vw; }\nh1 { text-align: center; color: #333; margin-bottom: 1.5rem; }\n.input-group { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; }\ninput { flex: 1; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1rem; outline: none; transition: border-color 0.2s; }\ninput:focus { border-color: #667eea; }\n.btn { padding: 0.75rem 1.5rem; border: none; border-radius: 8px; background: #667eea; color: white; font-size: 1rem; cursor: pointer; transition: all 0.2s; }\n.btn:hover { background: #5a67d8; }\nul { list-style: none; }\nli { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: #f8f9fa; border-radius: 8px; margin-bottom: 0.5rem; animation: slideIn 0.3s ease; }\nli .delete { background: #e74c3c; color: white; border: none; padding: 0.3rem 0.6rem; border-radius: 4px; cursor: pointer; font-size: 0.8rem; }\n@keyframes slideIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }',
    js: 'const input = document.getElementById(\'todoInput\');\nconst addBtn = document.getElementById(\'addBtn\');\nconst list = document.getElementById(\'todoList\');\n\nfunction addTodo() {\n  const text = input.value.trim();\n  if (!text) return;\n  \n  const li = document.createElement(\'li\');\n  li.innerHTML = `<span>${text}</span><button class="delete" onclick="this.parentElement.remove()">Delete</button>`;\n  list.appendChild(li);\n  input.value = \'\';\n  input.focus();\n}\n\naddBtn.addEventListener(\'click\', addTodo);\ninput.addEventListener(\'keypress\', (e) => { if (e.key === \'Enter\') addTodo(); });',
  },
}

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState("html")
  const [html, setHtml] = useState(templates.blank.html)
  const [css, setCss] = useState(templates.blank.css)
  const [js, setJs] = useState(templates.blank.js)
  const [output, setOutput] = useState("")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [template, setTemplate] = useState("blank")
  const [viewMode, setViewMode] = useState<"side" | "vertical" | "preview">("side")

  const runCode = useCallback(() => {
    const combined = `<!DOCTYPE html>
<html>
<head><style>${css}</style></head>
<body>${html}<script>${js}<\/script></body>
</html>`
    setOutput(combined)
  }, [html, css, js])

  useEffect(() => {
    const timer = setTimeout(runCode, 500)
    return () => clearTimeout(timer)
  }, [runCode])

  const handleCopyCode = async () => {
    const code = activeTab === "html" ? html : activeTab === "css" ? css : js
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReset = () => {
    const t = templates[template as keyof typeof templates] || templates.blank
    setHtml(t.html); setCss(t.css); setJs(t.js)
  }

  const handleTemplateChange = (value: string) => {
    setTemplate(value)
    const t = templates[value as keyof typeof templates] || templates.blank
    setHtml(t.html); setCss(t.css); setJs(t.js)
  }

  const getEditorValue = () => {
    switch (activeTab) {
      case "html": return html
      case "css": return css
      case "js": return js
      default: return ""
    }
  }

  const handleEditorChange = (value: string) => {
    switch (activeTab) {
      case "html": setHtml(value); break
      case "css": setCss(value); break
      case "js": setJs(value); break
    }
  }

  return (
    <div className={cn("flex flex-col", isFullscreen ? "fixed inset-0 z-50 bg-background" : "min-h-[calc(100vh-4rem)]")}>
      <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-semibold">Code Playground</span>
          </div>
          <Select value={template} onValueChange={handleTemplateChange}>
            <SelectTrigger className="w-36 h-8 text-xs">
              <SelectValue placeholder="Template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blank">Blank Template</SelectItem>
              <SelectItem value="counter">Counter App</SelectItem>
              <SelectItem value="todo">Todo App</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center border rounded-lg overflow-hidden">
            {(["side", "vertical", "preview"] as const).map((mode) => (
              <Button key={mode} variant={viewMode === mode ? "default" : "ghost"} size="sm" className="rounded-none h-8 px-3" onClick={() => setViewMode(mode)}>
                {mode === "side" ? <Monitor className="h-3.5 w-3.5" /> : mode === "vertical" ? <Smartphone className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
              </Button>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleReset}><RotateCcw className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCopyCode}>{copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}</Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsFullscreen(!isFullscreen)}>{isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}</Button>
          <Button size="sm" className="gap-1.5 h-8" onClick={runCode}><Play className="h-3.5 w-3.5" /> Run</Button>
        </div>
      </div>

      <div className={cn("flex-1 flex", viewMode === "vertical" ? "flex-col" : "flex-col sm:flex-row")}>
        <div className={cn("flex flex-col", viewMode === "preview" ? "hidden" : "flex-1 min-w-0")}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col flex-1">
            <div className="flex items-center justify-between px-4 border-b">
              <TabsList className="h-10">
                <TabsTrigger value="html" className="text-xs data-[state=active]:text-orange-500">HTML</TabsTrigger>
                <TabsTrigger value="css" className="text-xs data-[state=active]:text-blue-500">CSS</TabsTrigger>
                <TabsTrigger value="js" className="text-xs data-[state=active]:text-yellow-500">JavaScript</TabsTrigger>
              </TabsList>
              <Badge variant="outline" className="text-xs">{activeTab.toUpperCase()}</Badge>
            </div>
            <div className="flex-1 relative">
              <textarea value={getEditorValue()} onChange={(e) => handleEditorChange(e.target.value)}
                className="absolute inset-0 w-full h-full bg-[#1e1e1e] text-gray-100 font-mono text-sm p-4 resize-none outline-none border-0 tab-size-2 leading-relaxed"
                spellCheck={false} placeholder={`${activeTab.toUpperCase()} code yahan likhein...`} />
            </div>
          </Tabs>
        </div>

        <div className={cn("flex flex-col border-t sm:border-t-0 sm:border-l", viewMode === "preview" ? "flex-1" : "flex-1")}>
          <div className="flex items-center gap-2 px-4 py-2 border-b bg-muted/30 shrink-0">
            <Eye className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Live Preview</span>
            <Badge variant="outline" className="text-xs ml-auto">Auto-run</Badge>
          </div>
          <div className="flex-1 bg-white">
            <iframe srcDoc={output} className="w-full h-full border-0" title="Preview" sandbox="allow-scripts allow-modals" />
          </div>
        </div>
      </div>
    </div>
  )
}
