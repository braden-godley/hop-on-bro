export const contentTypes = [
  { 
    value: 'casual', 
    label: 'Casual Message',
    prompt: "Write a casual, friendly message (2-3 sentences) to convince someone to join a game. Keep it light and fun."
  },
  { 
    value: 'scientific', 
    label: 'Scientific Whitepaper',
    prompt: "Write a scientific whitepaper abstract (300-400 words) convincing someone to join a game. Include statistical analysis with p-values < 0.05, chi-squared tests, and regression models demonstrating strong correlation between gaming participation and social wellbeing metrics. Use formal academic language with methodology, data analysis, and statistically significant results. Include references to academic papers and studies. Use a proper title for an academic paper."
  },
  { 
    value: 'pirate', 
    label: 'Pirate',
    prompt: "Write as a pirate (2-3 sentences) to convince someone to join a game. Use nautical terms, pirate slang."
  },
  { 
    value: 'markTwain', 
    label: 'Mark Twain',
    prompt: "Write a Mark Twain-style message (3-4 sentences) to convince someone to join a game. Use the style of Mark Twain, with a mix of humor, irony, and wisdom."
  },
  { 
    value: 'haiku', 
    label: 'Haiku',
    prompt: "Write a haiku (3 lines) to convince someone to join a game. Follow the 5-7-5 syllable pattern. Do not write ANYTHING except the haiku itself and a short 1-2 sentence plea to join the game."
  },
  { 
    value: 'rap', 
    label: 'Rap Verse',
    prompt: "Write a rap verse (8-12 lines) to convince someone to join a game. Include rhymes, wordplay, and a strong beat."
  },
  { 
    value: 'medieval', 
    label: 'Medieval Proclamation',
    prompt: "Write a medieval proclamation (4-5 sentences) to convince someone to join a game. Use archaic language, formal titles, and royal decree style."
  },
  { 
    value: 'email', 
    label: 'Marketing Email',
    prompt: "Write a marketing email campaign (150-200 words) to convince someone to join a game. Use compelling subject lines, clear value propositions, engaging call-to-actions, and persuasive copywriting techniques. Include proper email sections like header, body, and footer. Keep the tone professional yet friendly."
  },
  { 
    value: 'infomercial', 
    label: 'Infomercial',
    prompt: "Write an infomercial-style message (4-5 sentences) to convince someone to join a game. Use over-the-top sales tactics, 'but wait, there's more!' moments, and dramatic before/after scenarios."
  },
  {
    value: 'businessProposal',
    label: 'Business Proposal',
    prompt: "Write a formal business proposal (200-300 words) to convince someone to join a game. Include an executive summary, value proposition, ROI analysis, and next steps. Use professional business language and formatting."
  },
  {
    value: 'legalContract',
    label: 'Legal Contract',
    prompt: "Write a legal contract-style message (200-300 words) to convince someone to join a game. Include proper legal terminology, whereas clauses, terms and conditions, and signature blocks. Use formal legal language while maintaining a hint of humor."
  },
  {
    value: 'weatherReport',
    label: 'Weather Forecast',
    prompt: "Write a weather forecast-style message (3-4 sentences) to convince someone to join a game. Use meteorological terms, forecast predictions, and weather presenter enthusiasm."
  },
  {
    value: 'techSupport',
    label: 'Tech Support Ticket',
    prompt: "Write a tech support ticket-style message (150-200 words) to convince someone to join a game. Include ticket number, problem description, troubleshooting steps, and resolution. Use IT terminology and customer service language."
  },
  {
    value: 'annoyingEmojis',
    label: 'Annoying Emojis',
    prompt: "Write a message with annoying emojis (3-4 sentences) to convince someone to join a game. Spam tons of emojis. Way too many emojis. Like at least 5 emojies per word."
  },
  {
    value: 'coverLetter',
    label: 'Cover Letter',
    prompt: "Write a cover letter (150-200 words) to \"apply\" to play a game with the friend. Use professional cover letter language, and make it sound like you are applying to a job. Don't use placeholders like [Your Name]. Include experience, skills, and any other relevant information. Don't include address, phone, date, or any other contact info"
  }
]

export const loadingMessages = [
  "Gathering inspiration...",
  "Warming up the creativity engines...",
  "Crafting the perfect message...",
  "Adding a dash of charm...",
  "Polishing the words...",
  "Making it extra convincing...",
  "Sprinkling some magic...",
  "Putting on the finishing touches..."
]

export const tones = [
  {
    value: 'flirty',
    label: 'Flirty',
    prompt: 'Generate a flirty, playful message that subtly hints at attraction while staying tasteful.'
  },
  {
    value: 'guilt-trippy',
    label: 'Guilt Trippy',
    prompt: 'Generate a message that uses guilt trips and emotional manipulation to convince them to join.'
  },
  {
    value: 'jealous',
    label: 'Jealous',
    prompt: 'Generate a message that subtly expresses jealousy and frustration about them hanging out with other people instead of joining your game.'
  },
  {
    value: 'gaslighting',
    label: 'Gaslighting',
    prompt: 'Generate a message that playfully questions their memory and perception, suggesting they actually promised to join the game but must have forgotten. Use subtle misdirection and "are you sure?" moments while keeping it light and humorous.'
  },
  {
    value: 'blackmailing',
    label: 'Blackmailing',
    prompt: 'Generate a message that makes vague, playful threats about revealing unspecified secrets or information. Keep all threats completely non-specific, like "it would be a shame if certain things came to light". Never mention any actual secrets or details.'
  },
  {
    value: 'cocky',
    label: 'Cocky',
    prompt: 'Generate a message that is very confident and self-assured, while downplaying and minimizing the friend and their abilities. Imply they need you because they suck so bad. Don\'t even make this proposal sound appealing or that they have a choice at all. They have to play with you or else.'
  }
] 