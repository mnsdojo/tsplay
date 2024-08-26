import React from 'react'

interface OutputItem {
  type: 'log' | 'error' | 'warn' | 'done'
  data: any[]
}

interface OutputWindowProps {
  output: OutputItem[]
  fontFamily: string
  fontSize: number
}

const OutputWindow: React.FC<OutputWindowProps> = ({ output, fontFamily, fontSize }) => {
  const getItemColor = (type: OutputItem['type']) => {
    switch (type) {
      case 'error':
        return 'text-red-400'
      case 'warn':
        return 'text-yellow-400'
      case 'done':
        return 'text-green-400'
      default:
        return 'text-gray-300'
    }
  }

  const formatData = (data: any[]) => {
    return data.map((item, index) => (
      <span key={index}>
        {typeof item === 'object' ? JSON.stringify(item, null, 2) : String(item)}
        {index < data.length - 1 ? ' ' : ''}
      </span>
    ))
  }

  return (
    <div className="h-full w-full rounded-lg shadow-md overflow-auto text-gray-300 ">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-300">Output:</h2>
        <pre className="whitespace-pre-wrap" style={{ fontFamily, fontSize: `${fontSize}px` }}>
          {output.map((item, index) => (
            <div key={index} className={`mb-1 ${getItemColor(item.type)}`}>
              {item.type === 'done' ? <span>Execution completed</span> : formatData(item.data)}
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}

export default OutputWindow
