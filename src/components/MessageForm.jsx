import React from 'react'
import { contentTypes } from '../constants/content'

const MessageForm = ({
  userName,
  friendName,
  gameName,
  contentType,
  desperationLevel,
  isLoading,
  onInputChange,
  onContentTypeChange,
  onDesperationLevelChange,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
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

      <div>
        <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 mb-2">Message Style</label>
        <select
          id="contentType"
          value={contentType}
          onChange={onContentTypeChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {contentTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="desperationLevel" className="block text-sm font-medium text-gray-700 mb-2">
          Tone
        </label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onDesperationLevelChange({ target: { value: 'flirty' } })}
            className={`flex-1 py-2 px-4 rounded-md border transition-colors ${
              desperationLevel === 'flirty'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Flirty
          </button>
          <button
            type="button"
            onClick={() => onDesperationLevelChange({ target: { value: 'guilt-trippy' } })}
            className={`flex-1 py-2 px-4 rounded-md border transition-colors ${
              desperationLevel === 'guilt-trippy'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Guilt Trippy
          </button>
          <button
            type="button"
            onClick={() => onDesperationLevelChange({ target: { value: 'jealous' } })}
            className={`flex-1 py-2 px-4 rounded-md border transition-colors ${
              desperationLevel === 'jealous'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Jealous
          </button>
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