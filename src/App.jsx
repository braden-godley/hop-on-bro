import { useState, useEffect } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import OpenAI from 'openai'
import Settings from './components/Settings'
import MessageForm from './components/MessageForm'
import GeneratedMessage from './components/GeneratedMessage'
import { contentTypes, loadingMessages, tones } from './constants/content'
import { generatePrompt } from './utils/promptUtils'

// Create UI-friendly tones array
const toneOptions = tones.map(tone => ({
  value: tone.value,
  label: tone.label
}))

function App() {
  const [userName, setUserName] = useState('')
  const [friendName, setFriendName] = useState('')
  const [gameName, setGameName] = useState('')
  const [contentType, setContentType] = useState('casual')
  const [generatedMessage, setGeneratedMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [desperationLevel, setDesperationLevel] = useState('flirty')
  const [copySuccess, setCopySuccess] = useState(false)
  const [apiKey, setApiKey] = useState('')
  const [aiProvider, setAiProvider] = useState('gemini')
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    // Load settings from localStorage on component mount
    const storedProvider = localStorage.getItem('aiProvider') || 'gemini'
    const storedKey = localStorage.getItem(`${storedProvider}ApiKey`)
    
    setAiProvider(storedProvider)
    if (storedKey) {
      setApiKey(storedKey)
    } else {
      setShowSettings(true) // Show settings if no API key is found
    }

    // Load saved input values
    const savedUserName = localStorage.getItem('userName')
    const savedFriendName = localStorage.getItem('friendName')
    const savedGameName = localStorage.getItem('gameName')
    
    if (savedUserName) setUserName(savedUserName)
    if (savedFriendName) setFriendName(savedFriendName)
    if (savedGameName) setGameName(savedGameName)
  }, [])

  const handleApiKeyChange = (e) => {
    const newKey = e.target.value
    setApiKey(newKey)
    localStorage.setItem(`${aiProvider}ApiKey`, newKey)
  }

  const handleAiProviderChange = (e) => {
    const newProvider = e.target.value
    setAiProvider(newProvider)
    localStorage.setItem('aiProvider', newProvider)
    // Load the API key for the new provider
    const storedKey = localStorage.getItem(`${newProvider}ApiKey`)
    setApiKey(storedKey || '')
  }

  const handleInputChange = (e, field) => {
    const value = e.target.value
    switch (field) {
      case 'userName':
        setUserName(value)
        localStorage.setItem('userName', value)
        break
      case 'friendName':
        setFriendName(value)
        localStorage.setItem('friendName', value)
        break
      case 'gameName':
        setGameName(value)
        localStorage.setItem('gameName', value)
        break
      default:
        break
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    if (!apiKey) {
      setError(`Please enter your ${aiProvider === 'gemini' ? 'Google' : 'OpenAI'} API key in settings`)
      setIsLoading(false)
      return
    }
    
    try {
      const contentTypeName = contentTypes.find(type => type.value === contentType)?.label || 'casual'
      const prompt = generatePrompt(userName, friendName, gameName, desperationLevel, contentType, contentTypeName)

      console.log(prompt)

      let response
      if (aiProvider === 'gemini') {
        const genAI = new GoogleGenerativeAI(apiKey)
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
        const result = await model.generateContent(prompt)
        const geminiResponse = await result.response
        response = geminiResponse.text()
      } else {
        const openai = new OpenAI({
          apiKey: apiKey,
          dangerouslyAllowBrowser: true,
        })
        const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.8,
          max_tokens: 1000
        })
        response = completion.choices[0].message.content
      }

      setGeneratedMessage(response)
    } catch (err) {
      setError('Failed to generate message. Please check your API key and try again.')
      console.error('Error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Hop On, Bro</h1>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          {showSettings ? 'Hide Settings' : 'Settings'}
        </button>
      </div>

      {showSettings && (
        <Settings 
          apiKey={apiKey} 
          onApiKeyChange={handleApiKeyChange}
          aiProvider={aiProvider}
          onAiProviderChange={handleAiProviderChange}
        />
      )}

      <p className="text-lg text-gray-600 text-center mb-8">Guilt trip your friends into joining your game!</p>
      
      <MessageForm
        userName={userName}
        friendName={friendName}
        gameName={gameName}
        contentType={contentType}
        desperationLevel={desperationLevel}
        isLoading={isLoading}
        onInputChange={handleInputChange}
        onContentTypeChange={(e) => setContentType(e.target.value)}
        onDesperationLevelChange={(e) => setDesperationLevel(e.target.value)}
        onSubmit={handleSubmit}
        toneOptions={toneOptions}
      />

      {isLoading && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md text-blue-700 text-center">
          {loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
          {error}
        </div>
      )}

      <GeneratedMessage
        message={generatedMessage}
        onCopy={copyToClipboard}
        copySuccess={copySuccess}
      />
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        Created by Braden Godley • <a href="https://github.com/braden-godley/hop-on-bro" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">GitHub</a>
      </div>
    </div>
  )
}

export default App
