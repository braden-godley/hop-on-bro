import React from 'react'

const Settings = ({ apiKey, onApiKeyChange, aiProvider, onAiProviderChange }) => {
  const getApiKeyLabel = () => {
    return aiProvider === 'gemini' ? 'Google AI API Key' : 'OpenAI API Key'
  }

  const getApiKeyPlaceholder = () => {
    return aiProvider === 'gemini' 
      ? 'Enter your Google AI API key'
      : 'Enter your OpenAI API key'
  }

  const getApiKeyLink = () => {
    return aiProvider === 'gemini'
      ? 'https://makersuite.google.com/app/apikey'
      : 'https://platform.openai.com/api-keys'
  }

  const getApiKeyLinkText = () => {
    return aiProvider === 'gemini'
      ? 'Google AI Studio'
      : 'OpenAI Platform'
  }

  return (
    <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="aiProvider" className="block text-sm font-medium text-gray-700 mb-2">
            AI Provider
          </label>
          <select
            id="aiProvider"
            value={aiProvider}
            onChange={onAiProviderChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="gemini">Google Gemini 2.0 Flash</option>
            <option value="openai">OpenAI GPT-4o-mini</option>
          </select>
        </div>

        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
            {getApiKeyLabel()}
          </label>
          <input
            type="password"
            id="apiKey"
            value={apiKey}
            onChange={onApiKeyChange}
            placeholder={getApiKeyPlaceholder()}
            autoComplete="off"
            data-1p-ignore
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="mt-2 text-sm text-gray-500">
            Your API key is stored locally and never sent to our servers. Get your API key from the{' '}
            <a href={getApiKeyLink()} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
              {getApiKeyLinkText()}
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Settings 