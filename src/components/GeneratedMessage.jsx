import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const GeneratedMessage = ({ message, onCopy, copySuccess }) => {
  if (!message) return null

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Your Generated Message:</h2>
        <button
          onClick={onCopy}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
        >
          {copySuccess ? 'Copied! 🎉' : 'Copy to Clipboard'}
        </button>
      </div>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {message}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default GeneratedMessage 