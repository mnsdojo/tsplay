import React from 'react'
import Editor, { loader } from '@monaco-editor/react'

// Define Nord theme
loader.init().then((monaco) => {
  monaco.editor.defineTheme('nord', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '616E88' },
      { token: 'keyword', foreground: '81A1C1' },
      { token: 'string', foreground: 'A3BE8C' },
      { token: 'number', foreground: 'B48EAD' },
      { token: 'type', foreground: '8FBCBB' }
    ],
    colors: {
      'editor.background': '#2E3440',
      'editor.foreground': '#D8DEE9',
      'editorLineNumber.foreground': '#4C566A',
      'editorCursor.foreground': '#D8DEE9',
      'editor.selectionBackground': '#434C5E',
      'editor.inactiveSelectionBackground': '#3B4252'
    }
  })
})

interface MonacoEditorProps {
  defaultValue: string
  onChange: (value: string | undefined) => void
  theme?: string
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({ defaultValue, onChange, theme = 'nord' }) => {
  return (
    <Editor
      height="100%"
      defaultLanguage="typescript"
      defaultValue={defaultValue}
      onChange={onChange}
      theme={theme}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        wordWrap: 'on',
        scrollBeyondLastLine: false,
        automaticLayout: true,
        lineNumbers: 'off',
        folding: false,
        glyphMargin: false
      }}
    />
  )
}

export default MonacoEditor
