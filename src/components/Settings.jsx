import React from 'react'

const Settings = ({ apiKey, onApiKeyChange }) => {
  return (
    <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div>
        <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
          OpenAI API Key
        </label>
        <input
          type="password"
          id="apiKey"
          value={apiKey}
          onChange={onApiKeyChange}
          placeholder="Enter your OpenAI API key"
          autoComplete="off"
          data-1p-ignore
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="mt-2 text-sm text-gray-500">
          Your API key is stored locally and never sent to our servers.
        </p>
      </div>
    </div>
  )
}

export default Settings 