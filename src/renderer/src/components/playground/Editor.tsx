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
      'editor.inactiveSelectionBackground': '#3B4252',
      'editorOverviewRuler.border': '#2E3440',
      'editor.lineHighlightBorder': '#2E3440'
    }
  })
})

interface MonacoEditorProps {
  defaultValue: string
  onChange: (value: string | undefined) => void
  options?: any
  theme?: string
  fontFamily: string
  fontSize: number
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({
  defaultValue,
  onChange,
  options,
  theme = 'nord',
  fontFamily,
  fontSize
}) => {
  return (
    <Editor
      height="100%"
      defaultLanguage="typescript"
      defaultValue={defaultValue}
      onChange={onChange}
      theme={theme}
      options={{
        minimap: { enabled: false },
        fontSize: fontSize,
        fontFamily: fontFamily,
        wordWrap: 'on',
        scrollBeyondLastLine: false,
        automaticLayout: true,
        lineNumbers: 'off',
        folding: false,
        glyphMargin: false,
        roundedSelection: false,
        scrollbar: {
          vertical: 'hidden',
          horizontal: 'hidden'
        },
        overviewRulerBorder: false,
        ...options
      }}
    />
  )
}

export default MonacoEditor
