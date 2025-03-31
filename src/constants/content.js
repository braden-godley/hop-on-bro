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
    value: 'viking', 
    label: 'Viking Rant',
    prompt: "Write a Viking-style rant (4-5 sentences) to convince someone to join a game. Use Norse mythology and Viking language."
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
    value: 'shakespeare', 
    label: 'Shakespearean Sonnet',
    prompt: "Write a Shakespearean sonnet (14 lines) convincing someone to join a game. Use iambic pentameter, Shakespearean language, and include a volta."
  },
  { 
    value: 'haiku', 
    label: 'Haiku',
    prompt: "Write a haiku (3 lines) to convince someone to join a game. Follow the 5-7-5 syllable pattern. Only write the haiku, and a one sentence plea to join the game."
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
    value: 'detective', 
    label: 'Detective Story',
    prompt: "Write a detective story opening (3-4 sentences) to convince someone to join a game. Use noir style, mystery elements, and dramatic tension."
  },
  { 
    value: 'superhero', 
    label: 'Superhero Call',
    prompt: "Write a superhero call to action (3-4 sentences) to convince someone to join a game. Use comic book style, dramatic language, and heroic themes."
  },
  { 
    value: 'email', 
    label: 'Marketing Email',
    prompt: "Write a marketing email campaign (150-200 words) to convince someone to join a game. Use compelling subject lines, clear value propositions, engaging call-to-actions, and persuasive copywriting techniques. Include proper email sections like header, body, and footer. Keep the tone professional yet friendly."
  },
  { 
    value: 'soapOpera', 
    label: 'Soap Opera Drama',
    prompt: "Write an overly dramatic soap opera-style message (4-5 sentences) to convince someone to join a game. Use dramatic pauses, emotional outbursts, and cliffhangers."
  },
  { 
    value: 'conspiracy', 
    label: 'Conspiracy Theorist',
    prompt: "Write a conspiracy theorist-style message (4-5 sentences) to convince someone to join a game. Include wild theories, secret organizations, and hidden meanings."
  },
  { 
    value: 'infomercial', 
    label: 'Infomercial Host',
    prompt: "Write an infomercial-style message (4-5 sentences) to convince someone to join a game. Use over-the-top sales tactics, 'but wait, there's more!' moments, and dramatic before/after scenarios."
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

export const tones = {
  'flirty': {
    prompt: 'Generate a flirty, playful message that subtly hints at attraction while staying tasteful.',
    label: 'Flirty'
  },
  'guilt-trippy': {
    prompt: 'Generate a message that uses guilt trips and emotional manipulation to convince them to join.',
    label: 'Guilt Trippy'
  },
  'jealous': {
    prompt: 'Generate a message that subtly expresses jealousy and frustration about them hanging out with other people instead of joining your game.',
    label: 'Jealous'
  },
  'gaslighting': {
    prompt: 'Generate a message that playfully questions their memory and perception, suggesting they actually promised to join the game but must have forgotten. Use subtle misdirection and "are you sure?" moments while keeping it light and humorous.',
    label: 'Gaslighting'
  },
  'blackmailing': {
    prompt: 'Generate a message that makes vague, playful threats about revealing unspecified secrets or information. Keep all threats completely non-specific, like "it would be a shame if certain things came to light". Never mention any actual secrets or details.',
    label: 'Blackmailing'
  }
} 