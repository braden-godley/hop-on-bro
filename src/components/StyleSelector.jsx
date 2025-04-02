import React from 'react'
import { contentTypes } from '../constants/content'

const StyleSelector = ({ isOpen, onClose, onSelect, selectedValue }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90vw] max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Choose Message Style</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contentTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => {
                onSelect(type.value)
                onClose()
              }}
              className={`p-4 rounded-lg border text-left transition-all hover:shadow-md ${
                selectedValue === type.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <h3 className="font-semibold text-lg mb-2">{type.label}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {type.summary}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StyleSelector 