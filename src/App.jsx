import { useReducer, useEffect } from 'react'
import Settings from './components/Settings'
import MessageForm from './components/MessageForm'
import GeneratedMessage from './components/GeneratedMessage'
import { templates, loadingMessages, tones } from './constants/content'
import { useMessageGenerator } from './hooks/useMessageGenerator'

// Create UI-friendly tones array
const toneOptions = tones.map(tone => ({
  value: tone.value,
  label: tone.label
}))

const initialState = {
  form: {
    userName: '',
    friendName: '',
    gameName: '',
    contentType: 'casual',
    tone: 'flirty'
  },
  api: {
    apiKey: '',
    aiProvider: 'gemini'
  },
  ui: {
    showSettings: false,
    copySuccess: false
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FORM_FIELD':
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value
        }
      }
    case 'SET_API_CONFIG':
      return {
        ...state,
        api: {
          ...state.api,
          [action.field]: action.value
        }
      }
    case 'SET_UI_STATE':
      return {
        ...state,
        ui: {
          ...state.ui,
          [action.field]: action.value
        }
      }
    case 'LOAD_SAVED_STATE':
      return {
        ...state,
        ...action.savedState
      }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { form, api, ui } = state
  
  const { loading, error, message, generate } = useMessageGenerator({
    provider: api.aiProvider,
    apiKey: api.apiKey
  });

  useEffect(() => {
    // Load settings from localStorage on component mount
    const storedProvider = localStorage.getItem('aiProvider') || 'gemini'
    const storedKey = localStorage.getItem(`${storedProvider}ApiKey`)
    const savedUserName = localStorage.getItem('userName')
    const savedFriendName = localStorage.getItem('friendName')
    const savedGameName = localStorage.getItem('gameName')
    
    dispatch({
      type: 'LOAD_SAVED_STATE',
      savedState: {
        api: {
          aiProvider: storedProvider,
          apiKey: storedKey || ''
        },
        form: {
          ...form,
          userName: savedUserName || '',
          friendName: savedFriendName || '',
          gameName: savedGameName || ''
        },
        ui: {
          ...ui,
          showSettings: !storedKey
        }
      }
    })
  }, [])

  const handleApiKeyChange = (e) => {
    const newKey = e.target.value
    dispatch({ type: 'SET_API_CONFIG', field: 'apiKey', value: newKey })
    localStorage.setItem(`${api.aiProvider}ApiKey`, newKey)
  }

  const handleAiProviderChange = (e) => {
    const newProvider = e.target.value
    dispatch({ type: 'SET_API_CONFIG', field: 'aiProvider', value: newProvider })
    localStorage.setItem('aiProvider', newProvider)
    const storedKey = localStorage.getItem(`${newProvider}ApiKey`)
    dispatch({ type: 'SET_API_CONFIG', field: 'apiKey', value: storedKey || '' })
  }

  const handleInputChange = (e, field) => {
    const value = e.target.value
    dispatch({ type: 'SET_FORM_FIELD', field, value })
    localStorage.setItem(field, value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await generate(form)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(message)
      dispatch({ type: 'SET_UI_STATE', field: 'copySuccess', value: true })
      setTimeout(() => {
        dispatch({ type: 'SET_UI_STATE', field: 'copySuccess', value: false })
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Hop On, Bro</h1>
        <button
          onClick={() => dispatch({ 
            type: 'SET_UI_STATE',
            field: 'showSettings',
            value: !ui.showSettings
          })}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          {ui.showSettings ? 'Hide Settings' : 'Settings'}
        </button>
      </div>

      {ui.showSettings && (
        <Settings 
          apiKey={api.apiKey} 
          onApiKeyChange={handleApiKeyChange}
          aiProvider={api.aiProvider}
          onAiProviderChange={handleAiProviderChange}
        />
      )}

      <p className="text-lg text-gray-600 text-center mb-8">Guilt trip your friends into joining your game!</p>
      
      <MessageForm
        userName={form.userName}
        friendName={form.friendName}
        gameName={form.gameName}
        contentType={form.contentType}
        tone={form.tone}
        isLoading={loading}
        onInputChange={handleInputChange}
        onContentTypeChange={(e) => dispatch({ 
          type: 'SET_FORM_FIELD',
          field: 'contentType',
          value: e.target.value
        })}
        onToneChange={(e) => dispatch({ 
          type: 'SET_FORM_FIELD',
          field: 'tone',
          value: e.target.value
        })}
        onSubmit={handleSubmit}
        toneOptions={toneOptions}
      />

      {loading && (
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
        message={message}
        onCopy={copyToClipboard}
        copySuccess={ui.copySuccess}
      />
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        Created by Braden Godley • <a href="https://github.com/braden-godley/hop-on-bro" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">GitHub</a>
      </div>
    </div>
  )
}

export default App
