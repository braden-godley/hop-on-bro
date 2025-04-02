import React, { useState } from 'react'
import { templates } from '../constants/content'
import TemplateSelector from './TemplateSelector'

const MessageForm = ({
  userName,
  friendName,
  gameName,
  contentType,
  tone,
  isLoading,
  onInputChange,
  onContentTypeChange,
  onToneChange,
  onSubmit,
  toneOptions
}) => {
  const [isTemplateSelectOpen, setIsTemplateSelectOpen] = useState(false)
  const selectedTemplate = templates.find(type => type.value === contentType)

  const handleTemplateSelect = (value) => {
    onContentTypeChange({ target: { value } })
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => onInputChange(e, 'userName')}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="friendName" className="block text-sm font-medium text-gray-700 mb-2">Friend's Name</label>
          <input
            type="text"
            id="friendName"
            value={friendName}
            onChange={(e) => onInputChange(e, 'friendName')}
            placeholder="Enter your friend's name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="gameName" className="block text-sm font-medium text-gray-700 mb-2">Game Name</label>
          <input
            type="text"
            id="gameName"
            value={gameName}
            onChange={(e) => onInputChange(e, 'gameName')}
            placeholder="Enter the game name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Template</label>
        <button
          type="button"
          onClick={() => setIsTemplateSelectOpen(true)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-left focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50"
        >
          <span className="font-medium">{selectedTemplate?.label || 'Choose a template'}</span>
          <p className="text-sm text-gray-500 truncate mt-1">
            {selectedTemplate?.summary || 'Click to select a template'}
          </p>
        </button>
      </div>

      <TemplateSelector
        isOpen={isTemplateSelectOpen}
        onClose={() => setIsTemplateSelectOpen(false)}
        onSelect={handleTemplateSelect}
        selectedValue={contentType}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tone
        </label>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {toneOptions.map((toneOption) => (
            <button
              key={toneOption.value}
              type="button"
              onClick={() => onToneChange({ target: { value: toneOption.value } })}
              className={`py-2 px-4 rounded-md border transition-colors ${
                tone === toneOption.value
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {toneOption.label}
            </button>
          ))}
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? 'Generating...' : 'Generate Message'}
      </button>
    </form>
  )
}

export default MessageForm 