import { useState } from 'react'
import OpenAI from 'openai'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function App() {
  const [userName, setUserName] = useState('')
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
    { value: 'superhero', label: 'Superhero Call' },
    { value: 'email', label: 'Marketing Email' }
  ]

  const getPromptForStyle = (style) => {
    const prompts = {
      casual: "Write a casual, friendly message to convince someone to join a game. Keep it light and fun. Keep it to one section without a title.",
      scientific: "Write a scientific whitepaper abstract convincing someone to join a game. Include statistical analysis with p-values < 0.05, chi-squared tests, and regression models demonstrating strong correlation between gaming participation and social wellbeing metrics. Use formal academic language with methodology, data analysis, and statistically significant results. Include references to academic papers and studies. Use a proper title for an academic paper.",
      celtic: "Write a Celtic-style poem to convince someone to join a game. Use mystical language, nature metaphors, and traditional Celtic poetic devices. Keep it to one section without a title.",
      pirate: "Write a pirate shanty to convince someone to join a game. Use nautical terms, pirate slang, and a sing-song rhythm. Keep it to one section without a title.", 
      shakespeare: "Write a Shakespearean sonnet convincing someone to join a game. Use iambic pentameter, Shakespearean language, and include a volta. Keep it to one section without a title.",
      haiku: "Write a haiku to convince someone to join a game. Follow the 5-7-5 syllable pattern. Keep it to one section without a title.",
      rap: "Write a rap verse to convince someone to join a game. Include rhymes, wordplay, and a strong beat. Keep it to one section without a title.",
      medieval: "Write a medieval proclamation to convince someone to join a game. Use archaic language, formal titles, and royal decree style. Keep it to one section without a title.",
      detective: "Write a detective story opening to convince someone to join a game. Use noir style, mystery elements, and dramatic tension. Keep it to one section without a title.",
      superhero: "Write a superhero call to action to convince someone to join a game. Use comic book style, dramatic language, and heroic themes. Keep it to one section without a title.",
      email: "Write a marketing email campaign to convince someone to join a game. Use compelling subject lines, clear value propositions, engaging call-to-actions, and persuasive copywriting techniques. Include proper email sections like header, body, and footer. Keep the tone professional yet friendly."
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

      const contentTypeName = contentTypes.find(type => type.value === contentType)?.label || 'casual'

      const prompt = `
        Your name: ${userName}
        Friend's name: ${friendName}
        Game: ${gameName}
        
        Generate a flirty, playful message that begs ${friendName} to join ${userName} in ${gameName}. 
        Include some subtle romantic tension and suggestive undertones while staying tasteful. 
        Add a touch of clinginess and at least one guilt trip to make it slightly uncomfortable. 
        Don't explicitly mention you're clingy or that the conversation is uncomfortable.
        Don't use emojis. 
        Use markdown formatting to enhance the message's presentation.
        Try to nail the structure and typical content of a ${contentTypeName}.
        ${getPromptForStyle(contentType)}
      `

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini", 
        messages: [
          {
            role: "system",
            content: `You are a flirty, playful, and somewhat clingy person that needs to write a message with romantic undertones to convince your friend to join a game. 
              Your messages should include subtle hints of attraction while remaining appropriate, with a touch of clinginess and guilt trips to make it slightly uncomfortable. 
              Use markdown formatting to enhance the presentation of your messages, including headers, emphasis, lists, and line breaks where appropriate.`
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: 1000
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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Hop On Generator</h1>
      <p className="text-lg text-gray-600 text-center mb-8">Generate the perfect message to convince your friends to join your game!</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
            onChange={(e) => setFriendName(e.target.value)}
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
            onChange={(e) => setGameName(e.target.value)}
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
            onChange={(e) => setContentType(e.target.value)}
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

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Generating...' : 'Generate Message'}
        </button>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
          {error}
        </div>
      )}

      {generatedMessage && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Your Generated Message:</h2>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm prose max-w-none">
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
