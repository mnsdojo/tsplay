import { useCallback, useState } from 'react'
import MonacoEditor from './Editor'
import OutputWindow from './OutputWindow'

function Playground() {
  const [code, setCode] = useState('// Type your TypeScript code here')
  const [output, setOutput] = useState('')

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
        <button
          onClick={handleRunCode}
          className="bg-nord10 hover:bg-nord9 text-nord6 text-sm py-1 px-3 rounded"
        >
          Run
        </button>
      </div>
      <main className="flex flex-1 overflow-hidden">
        <div className="w-1/2 border-r border-nord2 p-4">
          {' '}
          {/* Added p-4 for padding */}
          <MonacoEditor defaultValue={code} onChange={handleEditorChange} theme="nord" />
        </div>
        <div className="w-1/2 p-4">
          {' '}
          {/* Added p-4 for consistent padding */}
          <OutputWindow output={output} />
        </div>
      </main>
    </div>
  )
}

export default Playground
