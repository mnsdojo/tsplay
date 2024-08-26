import { useCallback, useEffect, useRef, useState } from 'react'
import MonacoEditor from './Editor'
import OutputWindow from './OutputWindow'
import SettingsModal from '../ui/Modal'
import { EditorSettings } from '../../types/editor'
import { themes } from '../../theme/theme'

interface OutputItem {
  type: 'log' | 'error' | 'warn' | 'done'
  data: any[]
}

const CodeExecutorWorker = new Worker(new URL('../../lib/execute.worker.ts', import.meta.url), {
  type: 'module'
})

function Playground() {
  const [code, setCode] = useState('// Type your TypeScript code here')
  const [output, setOutput] = useState<OutputItem[]>([])
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [theme, setTheme] = useState({
    bg: themes['nord'].colors['editor.background'],
    fg: themes['nord'].colors['editor.foreground']
  })
  const workerRef = useRef<Worker>(CodeExecutorWorker)
  const [editorSettings, setEditorSettings] = useState<EditorSettings>({
    theme: 'nord',
    fontSize: 14,
    fontFamily: 'monospace',
    vimMode: false,
    wordWrap: 'on',
    lineNumbers: 'on',
    minimap: false,
    tabSize: 2
  })

  const handleSaveSettings = (newSettings: EditorSettings) => {
    setEditorSettings(newSettings)
    setIsSettingsOpen(false)
  }

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '')
  }

  const handleRunCode = useCallback(() => {
    setOutput([])
    workerRef.current.postMessage({ code })
  }, [code])

  useEffect(() => {
    const currentTheme = themes[editorSettings.theme]
    if (currentTheme) {
      setTheme({
        bg: currentTheme.colors['editor.background'],
        fg: currentTheme.colors['editor.foreground']
      })
    }
  }, [editorSettings.theme])

  useEffect(() => {
    const worker = workerRef.current

    const handleMessage = (event: MessageEvent) => {
      const { type, data } = event.data
      setOutput((prev) => [...prev, { type, data }])
    }

    worker.addEventListener('message', handleMessage)

    return () => {
      worker.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.fg }} className="flex flex-col h-screen">
      <div
        // style={{
        //   backgroundColor: themes[editorSettings.theme]?.colors['editor.lineHighlightBackground']
        // }}
        className="p-2 flex items-center justify-between"
      >
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-nord11"></div>
          <div className="w-3 h-3 rounded-full bg-nord13"></div>
          <div className="w-3 h-3 rounded-full bg-nord14"></div>
        </div>
        <div>
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="bg-nord3 hover:bg-nord2 text-nord6 text-sm py-1 px-3 rounded mr-2"
          >
            Settings
          </button>
          <button
            onClick={handleRunCode}
            className="bg-nord10 hover:bg-nord9 text-nord6 text-sm py-1 px-3 rounded"
          >
            Run
          </button>
        </div>
      </div>
      <main className="flex flex-1 overflow-hidden">
        <div className="w-1/2 border-r border-nord2 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <MonacoEditor
              defaultValue={code}
              onChange={handleEditorChange}
              theme={editorSettings.theme}
              fontFamily={editorSettings.fontFamily}
              fontSize={editorSettings.fontSize}
              options={{
                wordWrap: editorSettings.wordWrap,
                lineNumbers: editorSettings.lineNumbers,
                minimap: { enabled: editorSettings.minimap },
                tabSize: editorSettings.tabSize,
                scrollBeyondLastLine: false
              }}
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col overflow-hidden">
          <OutputWindow
            output={output}
            fontFamily={editorSettings.fontFamily}
            fontSize={editorSettings.fontSize}
          />
        </div>
      </main>
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSave={handleSaveSettings}
        initialSettings={editorSettings}
      />
    </div>
  )
}

export default Playground
