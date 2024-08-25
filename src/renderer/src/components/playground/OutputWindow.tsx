import React from 'react'

interface OutputWindowProps {
  output: string
  fontFamily: string
  fontSize: number
}

const OutputWindow: React.FC<OutputWindowProps> = ({ output, fontFamily, fontSize }) => {
  return (
    <div className="h-full w-full rounded-lg shadow-md overflow-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-300">Output:</h2>
        <pre
          className="whitespace-pre-wrap text-gray-300"
          style={{ fontFamily, fontSize: `${fontSize}px` }}
        >
          {output}
        </pre>
      </div>
    </div>
  )
}

export default OutputWindow
