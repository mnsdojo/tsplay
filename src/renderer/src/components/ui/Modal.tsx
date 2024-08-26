import React, { useState } from 'react'
import { themes } from '../../theme/theme'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (settings: EditorSettings) => void
  initialSettings: EditorSettings
}

interface EditorSettings {
  theme: string
  fontSize: number
  fontFamily: string
  vimMode: boolean
  wordWrap: 'on' | 'off'
  lineNumbers: 'on' | 'off'
  minimap: boolean
  tabSize: number
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialSettings
}) => {
  const [settings, setSettings] = useState<EditorSettings>(initialSettings)

  if (!isOpen) return null

  const fontOptions = [
    'monospace',
    'Consolas',
    'Courier New',
    'Menlo',
    'Monaco',
    'Liberation Mono',
    'DejaVu Sans Mono',
    'Bitstream Vera Sans Mono',
    'Courier',
    'Lucida Console',
    'Andale Mono'
  ]
  const themeOptions = Object.keys(themes).map((themeName) => ({
    value: themeName,
    label: themeName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }))

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-nord1 p-6 rounded-lg w-full max-w-3xl mx-4 my-8">
        <h2 className="text-xl mb-4">Editor Settings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Theme:</label>
            <select
              value={settings.theme}
              onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
              className="bg-nord2 p-2 rounded w-full"
            >
              {themeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">Font Size:</label>
            <input
              type="number"
              value={settings.fontSize}
              onChange={(e) => setSettings({ ...settings, fontSize: Number(e.target.value) })}
              className="bg-nord2 p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block mb-2">Font Family:</label>
            <select
              value={settings.fontFamily}
              onChange={(e) => setSettings({ ...settings, fontFamily: e.target.value })}
              className="bg-nord2 p-2 rounded w-full"
            >
              {fontOptions.map((font) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">Tab Size:</label>
            <input
              type="number"
              value={settings.tabSize}
              onChange={(e) => setSettings({ ...settings, tabSize: Number(e.target.value) })}
              className="bg-nord2 p-2 rounded w-full"
              min="1"
              max="8"
            />
          </div>

          <div>
            <label className="block mb-2">Word Wrap:</label>
            <select
              value={settings.wordWrap}
              onChange={(e) =>
                setSettings({ ...settings, wordWrap: e.target.value as 'on' | 'off' })
              }
              className="bg-nord2 p-2 rounded w-full"
            >
              <option value="on">On</option>
              <option value="off">Off</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Line Numbers:</label>
            <select
              value={settings.lineNumbers}
              onChange={(e) =>
                setSettings({ ...settings, lineNumbers: e.target.value as 'on' | 'off' })
              }
              className="bg-nord2 p-2 rounded w-full"
            >
              <option value="on">On</option>
              <option value="off">Off</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.vimMode}
                onChange={(e) => setSettings({ ...settings, vimMode: e.target.checked })}
                className="mr-2"
              />
              Enable Vim Mode
            </label>
          </div>

          <div className="col-span-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.minimap}
                onChange={(e) => setSettings({ ...settings, minimap: e.target.checked })}
                className="mr-2"
              />
              Show Minimap
            </label>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button onClick={onClose} className="bg-nord11 text-nord6 px-4 py-2 rounded mr-2">
            Cancel
          </button>
          <button
            onClick={() => onSave(settings)}
            className="bg-nord10 text-nord6 px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal
