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
  const [desperationLevel, setDesperationLevel] = useState(5)
  const [copySuccess, setCopySuccess] = useState(false)

  const contentTypes = [
    { value: 'casual', label: 'Casual Message' },
    { value: 'scientific', label: 'Scientific Whitepaper' },
    { value: 'viking', label: 'Viking Rant' },
    { value: 'pirate', label: 'Pirate' },
    { value: 'markTwain', label: 'Mark Twain' },
    { value: 'shakespeare', label: 'Shakespearean Sonnet' },
    { value: 'haiku', label: 'Haiku' },
    { value: 'rap', label: 'Rap Verse' },
    { value: 'medieval', label: 'Medieval Proclamation' },
    { value: 'detective', label: 'Detective Story' },
    { value: 'superhero', label: 'Superhero Call' },
    { value: 'email', label: 'Marketing Email' },
    { value: 'soapOpera', label: 'Soap Opera Drama' },
    { value: 'conspiracy', label: 'Conspiracy Theorist' },
    { value: 'infomercial', label: 'Infomercial Host' },
  ]

  const loadingMessages = [
    "Gathering inspiration...",
    "Warming up the creativity engines...",
    "Crafting the perfect message...",
    "Adding a dash of charm...",
    "Polishing the words...",
    "Making it extra convincing...",
    "Sprinkling some magic...",
    "Putting on the finishing touches..."
  ]

  const getPromptForStyle = (style) => {
    const prompts = {
      casual: "Write a casual, friendly message (2-3 sentences) to convince someone to join a game. Keep it light and fun.",
      markTwain: "Write a Mark Twain-style message (3-4 sentences) to convince someone to join a game. Use the style of Mark Twain, with a mix of humor, irony, and wisdom.",
      scientific: "Write a scientific whitepaper abstract (300-400 words) convincing someone to join a game. Include statistical analysis with p-values < 0.05, chi-squared tests, and regression models demonstrating strong correlation between gaming participation and social wellbeing metrics. Use formal academic language with methodology, data analysis, and statistically significant results. Include references to academic papers and studies. Use a proper title for an academic paper.",
      viking: "Write a Viking-style rant (4-5 sentences) to convince someone to join a game. Use Norse mythology and Viking language.",
      pirate: "Write as a pirate (2-3 sentences) to convince someone to join a game. Use nautical terms, pirate slang.", 
      shakespeare: "Write a Shakespearean sonnet (14 lines) convincing someone to join a game. Use iambic pentameter, Shakespearean language, and include a volta.",
      haiku: "Write a haiku (3 lines) to convince someone to join a game. Follow the 5-7-5 syllable pattern.",
      rap: "Write a rap verse (8-12 lines) to convince someone to join a game. Include rhymes, wordplay, and a strong beat.",
      medieval: "Write a medieval proclamation (4-5 sentences) to convince someone to join a game. Use archaic language, formal titles, and royal decree style.",
      detective: "Write a detective story opening (3-4 sentences) to convince someone to join a game. Use noir style, mystery elements, and dramatic tension.",
      superhero: "Write a superhero call to action (3-4 sentences) to convince someone to join a game. Use comic book style, dramatic language, and heroic themes.",
      email: "Write a marketing email campaign (150-200 words) to convince someone to join a game. Use compelling subject lines, clear value propositions, engaging call-to-actions, and persuasive copywriting techniques. Include proper email sections like header, body, and footer. Keep the tone professional yet friendly.",
      dadJokes: "Write a message (2-3 sentences) using dad jokes to convince someone to join a game. Include puns, wordplay, and groan-worthy humor.",
      memeLord: "Write a message (2-3 sentences) using internet meme culture, references, and viral phrases to convince someone to join a game. Include popular meme formats and references.",
      soapOpera: "Write an overly dramatic soap opera-style message (4-5 sentences) to convince someone to join a game. Use dramatic pauses, emotional outbursts, and cliffhangers.",
      conspiracy: "Write a conspiracy theorist-style message (4-5 sentences) to convince someone to join a game. Include wild theories, secret organizations, and hidden meanings.",
      infomercial: "Write an infomercial-style message (4-5 sentences) to convince someone to join a game. Use over-the-top sales tactics, 'but wait, there's more!' moments, and dramatic before/after scenarios."
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
        Desperation Level: ${desperationLevel}/10
        
        Generate a flirty, playful message that begs ${friendName} to join ${userName} in ${gameName}. 
        Include some subtle romantic tension and suggestive undertones while staying tasteful. 
        Add a touch of clinginess and at least one guilt trip to make it slightly uncomfortable. 
        The desperation level is ${desperationLevel} out of 10 - adjust the clinginess and guilt trips accordingly.
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
      <h1 className="text-4xl font-bold text-center mb-4">Hop On, Bro</h1>
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

        <div>
          <label htmlFor="desperationLevel" className="block text-sm font-medium text-gray-700 mb-2">
            Desperation Level: {desperationLevel}/10
          </label>
          <input
            type="range"
            id="desperationLevel"
            min="1"
            max="10"
            value={desperationLevel}
            onChange={(e) => setDesperationLevel(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Casual</span>
            <span>Desperate</span>
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

      {generatedMessage && (
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Your Generated Message:</h2>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
            >
              {copySuccess ? 'Copied! 🎉' : 'Copy to Clipboard'}
            </button>
          </div>
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
