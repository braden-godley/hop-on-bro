export const getPromptForStyle = (style) => {
  const prompts = {
    casual: "Write a casual, friendly message (2-3 sentences) to convince someone to join a game. Keep it light and fun.",
    markTwain: "Write a Mark Twain-style message (3-4 sentences) to convince someone to join a game. Use the style of Mark Twain, with a mix of humor, irony, and wisdom.",
    scientific: "Write a scientific whitepaper abstract (300-400 words) convincing someone to join a game. Include statistical analysis with p-values < 0.05, chi-squared tests, and regression models demonstrating strong correlation between gaming participation and social wellbeing metrics. Use formal academic language with methodology, data analysis, and statistically significant results. Include references to academic papers and studies. Use a proper title for an academic paper.",
    viking: "Write a Viking-style rant (4-5 sentences) to convince someone to join a game. Use Norse mythology and Viking language.",
    pirate: "Write as a pirate (2-3 sentences) to convince someone to join a game. Use nautical terms, pirate slang.", 
    shakespeare: "Write a Shakespearean sonnet (14 lines) convincing someone to join a game. Use iambic pentameter, Shakespearean language, and include a volta.",
    haiku: "Write a haiku (3 lines) to convince someone to join a game. Follow the 5-7-5 syllable pattern. Only write the haiku, and a one sentence plea to join the game.",
    rap: "Write a rap verse (8-12 lines) to convince someone to join a game. Include rhymes, wordplay, and a strong beat.",
    medieval: "Write a medieval proclamation (4-5 sentences) to convince someone to join a game. Use archaic language, formal titles, and royal decree style.",
    detective: "Write a detective story opening (3-4 sentences) to convince someone to join a game. Use noir style, mystery elements, and dramatic tension.",
    superhero: "Write a superhero call to action (3-4 sentences) to convince someone to join a game. Use comic book style, dramatic language, and heroic themes.",
    email: "Write a marketing email campaign (150-200 words) to convince someone to join a game. Use compelling subject lines, clear value propositions, engaging call-to-actions, and persuasive copywriting techniques. Include proper email sections like header, body, and footer. Keep the tone professional yet friendly.",
    soapOpera: "Write an overly dramatic soap opera-style message (4-5 sentences) to convince someone to join a game. Use dramatic pauses, emotional outbursts, and cliffhangers.",
    conspiracy: "Write a conspiracy theorist-style message (4-5 sentences) to convince someone to join a game. Include wild theories, secret organizations, and hidden meanings.",
    infomercial: "Write an infomercial-style message (4-5 sentences) to convince someone to join a game. Use over-the-top sales tactics, 'but wait, there's more!' moments, and dramatic before/after scenarios."
  }
  return prompts[style] || prompts.casual
}

export const generatePrompt = (userName, friendName, gameName, desperationLevel, contentType, contentTypeName) => {
  return `
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
    Don't add a title to the message unless it's essential for the format, such as a scientific paper.
    Use markdown formatting to enhance the message's presentation.
    Try to nail the structure and typical content of a ${contentTypeName}.
    ${getPromptForStyle(contentType)}
  `
} 