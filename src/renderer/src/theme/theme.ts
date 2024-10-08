interface ThemeRule {
  token: string
  foreground: string
}

interface ThemeColors {
  [key: string]: string
}

interface Theme {
  base: string
  inherit: boolean
  rules: ThemeRule[]
  colors: ThemeColors
}

interface Themes {
  [key: string]: Theme
}

export const themes: Themes = {
  'catppuccin-mocha': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '9399B2' },
      { token: 'keyword', foreground: 'CBA6F7' },
      { token: 'string', foreground: 'A6E3A1' },
      { token: 'number', foreground: 'FAB387' },
      { token: 'type', foreground: '89B4FA' }
    ],
    colors: {
      'editor.background': '#1E1E2E',
      'editor.foreground': '#CDD6F4',
      'editorLineNumber.foreground': '#6C7086',
      'editorCursor.foreground': '#F5E0DC',
      'editor.selectionBackground': '#45475A',
      'editor.inactiveSelectionBackground': '#313244',
      'editorOverviewRuler.border': '#1E1E2E',
      'editor.lineHighlightBackground': '#313244'
    }
  },
  'github-light': {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '6A737D' },
      { token: 'keyword', foreground: 'D73A49' },
      { token: 'string', foreground: '032F62' },
      { token: 'number', foreground: '005CC5' },
      { token: 'type', foreground: '6F42C1' }
    ],
    colors: {
      'editor.background': '#FFFFFF',
      'editor.foreground': '#24292E',
      'editorLineNumber.foreground': '#1B1F23',
      'editorCursor.foreground': '#24292E',
      'editor.selectionBackground': '#C8C8FA',
      'editor.inactiveSelectionBackground': '#E5E5E5',
      'editorOverviewRuler.border': '#FFFFFF',
      'editor.lineHighlightBackground': '#F6F8FA'
    }
  },
  dracula: {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '6272A4' },
      { token: 'keyword', foreground: 'FF79C6' },
      { token: 'string', foreground: 'F1FA8C' },
      { token: 'number', foreground: 'BD93F9' },
      { token: 'type', foreground: '8BE9FD' }
    ],
    colors: {
      'editor.background': '#282A36',
      'editor.foreground': '#F8F8F2',
      'editorLineNumber.foreground': '#6272A4',
      'editorCursor.foreground': '#F8F8F2',
      'editor.selectionBackground': '#44475A',
      'editor.inactiveSelectionBackground': '#3B3C4A',
      'editorOverviewRuler.border': '#282A36',
      'editor.lineHighlightBackground': '#44475A'
    }
  },
  'gruvbox-dark': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '928374' },
      { token: 'keyword', foreground: 'FB4934' },
      { token: 'string', foreground: 'B8BB26' },
      { token: 'number', foreground: 'D3869B' },
      { token: 'type', foreground: '83A598' }
    ],
    colors: {
      'editor.background': '#282828',
      'editor.foreground': '#EBDBB2',
      'editorLineNumber.foreground': '#7C6F64',
      'editorCursor.foreground': '#EBDBB2',
      'editor.selectionBackground': '#504945',
      'editor.inactiveSelectionBackground': '#3C3836',
      'editorOverviewRuler.border': '#282828',
      'editor.lineHighlightBackground': '#3C3836'
    }
  },
  'tokyo-night': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '565F89' },
      { token: 'keyword', foreground: '9D7CD8' },
      { token: 'string', foreground: '9ECE6A' },
      { token: 'number', foreground: 'FF9E64' },
      { token: 'type', foreground: '7DCFFF' }
    ],
    colors: {
      'editor.background': '#1A1B26',
      'editor.foreground': '#A9B1D6',
      'editorLineNumber.foreground': '#3B4261',
      'editorCursor.foreground': '#A9B1D6',
      'editor.selectionBackground': '#28292F',
      'editor.inactiveSelectionBackground': '#202023',
      'editorOverviewRuler.border': '#1A1B26',
      'editor.lineHighlightBackground': '#28292F'
    }
  },
  nord: {
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
      'editor.lineHighlightBackground': '#3B4252'
    }
  },
  'one-dark': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '5C6370' },
      { token: 'keyword', foreground: 'C678DD' },
      { token: 'string', foreground: '98C379' },
      { token: 'number', foreground: 'D19A66' },
      { token: 'type', foreground: '61AFEF' }
    ],
    colors: {
      'editor.background': '#282C34',
      'editor.foreground': '#ABB2BF',
      'editorLineNumber.foreground': '#4B5263',
      'editorCursor.foreground': '#528BFF',
      'editor.selectionBackground': '#3E4451',
      'editor.inactiveSelectionBackground': '#333842',
      'editorOverviewRuler.border': '#282C34',
      'editor.lineHighlightBackground': '#2C313C'
    }
  },
  'solarized-dark': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '586E75' },
      { token: 'keyword', foreground: '859900' },
      { token: 'string', foreground: '2AA198' },
      { token: 'number', foreground: 'D33682' },
      { token: 'type', foreground: '268BD2' }
    ],
    colors: {
      'editor.background': '#002B36',
      'editor.foreground': '#839496',
      'editorLineNumber.foreground': '#586E75',
      'editorCursor.foreground': '#839496',
      'editor.selectionBackground': '#073642',
      'editor.inactiveSelectionBackground': '#073642',
      'editorOverviewRuler.border': '#002B36',
      'editor.lineHighlightBackground': '#073642'
    }
  },
  'material-darker': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '546E7A' },
      { token: 'keyword', foreground: 'C792EA' },
      { token: 'string', foreground: 'C3E88D' },
      { token: 'number', foreground: 'F78C6C' },
      { token: 'type', foreground: '82AAFF' }
    ],
    colors: {
      'editor.background': '#212121',
      'editor.foreground': '#EEFFFF',
      'editorLineNumber.foreground': '424242',
      'editorCursor.foreground': '#FFCC00',
      'editor.selectionBackground': '#323232',
      'editor.inactiveSelectionBackground': '#2C2C2C',
      'editorOverviewRuler.border': '#212121',
      'editor.lineHighlightBackground': '#323232'
    }
  },
  'night-owl': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '637777' },
      { token: 'keyword', foreground: 'C792EA' },
      { token: 'string', foreground: 'ECC48D' },
      { token: 'number', foreground: 'F78C6C' },
      { token: 'type', foreground: '7FDBCA' }
    ],
    colors: {
      'editor.background': '#011627',
      'editor.foreground': '#D6DEEB',
      'editorLineNumber.foreground': '4B6479',
      'editorCursor.foreground': '#80A4C2',
      'editor.selectionBackground': '#1D3B53',
      'editor.inactiveSelectionBackground': '#152B3E',
      'editorOverviewRuler.border': '#011627',
      'editor.lineHighlightBackground': '#0E2D44'
    }
  },
  'monokai-pro': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '5C6370' },
      { token: 'keyword', foreground: 'FF6D7E' },
      { token: 'string', foreground: 'A9DC76' },
      { token: 'number', foreground: 'FFD866' },
      { token: 'type', foreground: '78DCE8' }
    ],
    colors: {
      'editor.background': '#2D2A2E',
      'editor.foreground': '#FCFCFA',
      'editorLineNumber.foreground': '5C6370',
      'editorCursor.foreground': '#FCFCFA',
      'editor.selectionBackground': '#423F42',
      'editor.inactiveSelectionBackground': '#3A3739',
      'editorOverviewRuler.border': '#2D2A2E',
      'editor.lineHighlightBackground': '#3A3739'
    }
  }
}

export const defineThemes = (monaco: any) => {
  Object.entries(themes).forEach(([themeName, theme]) => {
    monaco.editor.defineTheme(themeName, theme)
  })
}
