export interface EditorSettings {
  theme: string
  fontSize: number
  fontFamily: string
  vimMode: boolean
  wordWrap: 'on' | 'off'
  lineNumbers: 'on' | 'off'
  minimap: boolean
  tabSize: number
}


export interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (settings: EditorSettings) => void
  initialSettings: EditorSettings
}
