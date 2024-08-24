import React from 'react'

interface OutputWindowProps {
  output: string
}

const OutputWindow: React.FC<OutputWindowProps> = ({ output }) => {
  return (
    <div className="h-full w-full bg-gray-800 rounded-lg shadow-md overflow-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-300">Output:</h2>
        <pre className="whitespace-pre-wrap text-gray-300">{output}</pre>
      </div>
    </div>
  )
}

export default OutputWindow
