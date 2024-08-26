import React, { useEffect } from 'react'
import Editor, { loader } from '@monaco-editor/react'
import { defineThemes } from '../../theme/theme'

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
  useEffect(() => {
    loader.init().then((monaco) => {
      defineThemes(monaco)
    })
  }, [])
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
