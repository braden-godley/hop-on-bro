import { useState } from 'react'
import OpenAI from 'openai'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './App.css'

function App() {
  const [friendName, setFriendName] = useState('')
  const [gameName, setGameName] = useState('')
  const [contentType, setContentType] = useState('casual')
  const [generatedMessage, setGeneratedMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const contentTypes = [
    { value: 'casual', label: 'Casual Message' },
    { value: 'scientific', label: 'Scientific Whitepaper' },
    { value: 'celtic', label: 'Celtic Poem' },
    { value: 'pirate', label: 'Pirate Shanty' },
    { value: 'shakespeare', label: 'Shakespearean Sonnet' },
    { value: 'haiku', label: 'Haiku' },
    { value: 'rap', label: 'Rap Verse' },
    { value: 'medieval', label: 'Medieval Proclamation' },
    { value: 'detective', label: 'Detective Story' },
    { value: 'superhero', label: 'Superhero Call' }
  ]

  const getPromptForStyle = (style) => {
    const prompts = {
      casual: "Write a casual, friendly message to convince someone to join a game. Keep it light and fun. Use markdown formatting to make it engaging.",
      scientific: "Write a scientific whitepaper abstract convincing someone to join a game. Use formal academic language and include a hypothesis, methodology, and expected results. Use markdown formatting for headers, lists, and emphasis.",
      celtic: "Write a Celtic-style poem to convince someone to join a game. Use mystical language, nature metaphors, and traditional Celtic poetic devices. Use markdown formatting for emphasis and structure.",
      pirate: "Write a pirate shanty to convince someone to join a game. Use nautical terms, pirate slang, and a sing-song rhythm. Use markdown formatting for emphasis and chorus sections.",
      shakespeare: "Write a Shakespearean sonnet convincing someone to join a game. Use iambic pentameter, Shakespearean language, and include a volta. Use markdown formatting for line breaks and emphasis.",
      haiku: "Write a haiku to convince someone to join a game. Follow the 5-7-5 syllable pattern. Use markdown formatting for line breaks.",
      rap: "Write a rap verse to convince someone to join a game. Include rhymes, wordplay, and a strong beat. Use markdown formatting for emphasis and line breaks.",
      medieval: "Write a medieval proclamation to convince someone to join a game. Use archaic language, formal titles, and royal decree style. Use markdown formatting for headers and emphasis.",
      detective: "Write a detective story opening to convince someone to join a game. Use noir style, mystery elements, and dramatic tension. Use markdown formatting for dialogue and emphasis.",
      superhero: "Write a superhero call to action to convince someone to join a game. Use comic book style, dramatic language, and heroic themes. Use markdown formatting for emphasis and dramatic pauses."
    }
    return prompts[style] || prompts.casual
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      })

      const prompt = `${getPromptForStyle(contentType)}
      
      Friend's name: ${friendName}
      Game: ${gameName}
      
      Generate a message that matches the style and convinces ${friendName} to join ${gameName}. Use markdown formatting to enhance the message's presentation.`

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a creative message generator that creates engaging, fun messages in various styles to convince friends to join games. Use markdown formatting to enhance the presentation of your messages, including headers, emphasis, lists, and line breaks where appropriate."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })

      setGeneratedMessage(completion.choices[0].message.content)
    } catch (err) {
      setError('Failed to generate message. Please check your API key and try again.')
      console.error('Error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>Hop On Generator</h1>
      <p className="subtitle">Generate the perfect message to convince your friends to join your game!</p>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="friendName">Friend's Name</label>
          <input
            type="text"
            id="friendName"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            placeholder="Enter your friend's name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gameName">Game Name</label>
          <input
            type="text"
            id="gameName"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            placeholder="Enter the game name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contentType">Message Style</label>
          <select
            id="contentType"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            required
          >
            {contentTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="generate-button" disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate Message'}
        </button>
      </form>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {generatedMessage && (
        <div className="message-container">
          <h2>Your Generated Message:</h2>
          <div className="message-box markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {generatedMessage}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
