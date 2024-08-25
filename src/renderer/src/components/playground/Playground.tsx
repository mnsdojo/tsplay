import { useCallback, useState } from 'react'
import MonacoEditor from './Editor'
import OutputWindow from './OutputWindow'
import SettingsModal from '../ui/Modal'
import { EditorSettings } from '../../types/editor'

function Playground() {
  const [code, setCode] = useState('// Type your TypeScript code here')
  const [output, setOutput] = useState('')
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
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
    try {
      const result = eval(code)
      setOutput(String(result))
    } catch (error) {
      setOutput(`Error: ${(error as Error).message}`)
    }
  }, [code])

  return (
    <div className="flex min-h-screen flex-col bg-nord0 text-nord4">
      <div className="bg-nord1 p-2 flex items-center justify-between">
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
        <div className="w-1/2 border-r border-nord2 p-4">
          {' '}
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
              tabSize: editorSettings.tabSize
            }}
          />
        </div>
        <div className="w-1/2 p-4">
          {' '}
          {/* Added p-4 for consistent padding */}
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
