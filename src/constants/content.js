export const contentTypes = [
  { 
    value: 'casual', 
    label: 'Casual Message',
    prompt: "Write a casual, friendly message (3-4 sentences) to convince someone to join a game."
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
    value: 'draftNotice',
    label: 'Draft Notice',
    prompt: "Write a military draft notice (3-4 sentences) ordering someone to join a game. Include official military letterhead elements, selective service numbers, and stern consequences for failure to comply. Use formal, bureaucratic language with military terminology while maintaining an underlying game-related context."
  },
  {
    value: 'weatherReport',
    label: 'Weather Forecast',
    prompt: "Write a weather forecast-style message (3-4 sentences) to convince someone to join a game. Use meteorological terms, forecast predictions, and weather presenter enthusiasm."
  },
  {
    value: 'annoyingEmojis',
    label: 'Annoying Emojis',
    prompt: "Write a message with annoying emojis (3-4 sentences) to convince someone to join a game. Spam tons of emojis. Way too many emojis. Like at least 5 emojies per word."
  },
  {
    value: 'coverLetter',
    label: 'Cover Letter',
    prompt: "Write a cover letter (150-200 words) to \"apply\" to play a game with the friend. Use professional cover letter language, and make it sound like you are applying to a job. Include experience, skills, and any other relevant information. Don't include address, phone, date, or any other contact info"
  },
  {
    value: 'alphaMaleInfluencer',
    label: 'Alpha Male Influencer',
    prompt: "Write a message (5-6 sentences) in the style of a toxic male social media influencer. Focus on bragging, putting others down, and fake motivational advice. Use terms like 'grinding', 'empire', 'beta', etc. The tone should be arrogant and condescending while pretending to help them level up by joining the game."
  },
  {
    value: 'jordanPeterson',
    label: 'Jordan Peterson',
    prompt: "Write a message (5-6 sentences) in the style of Jordan Peterson. Focus on the importance of personal responsibility, integrity, and the need to be true to oneself. Use phrases like 'you must', 'you should', and 'you have a duty to'. Make it clear that the friend is not taking responsibility for their own life and that they need to change. Suggest that they clean their room. The overall tone should be authoritarian and demeaning while pretending to help them 'become a man' by joining your game. Talk about biblical references and the importance of tradition. Make it clear that the friend is not living up to their potential and that they need to change."
  },
  {
    value: 'mafioso',
    label: 'Italian Mafioso',
    prompt: "Write a message (4-5 sentences) in the style of an Italian mafia boss. Use phrases like 'capisce?', 'wise guy', and 'family business'. Make vague references to 'protection' and 'insurance'. Emphasize loyalty, family, and respect while subtly implying consequences for not joining. Include Italian words and phrases. The tone should be both friendly and menacing, like you're making them an offer they can't refuse."
  },
  {
    value: 'courtOrder',
    label: 'Court Order',
    prompt: "Write a formal court order (4-5 sentences) mandating participation in the game. Include case numbers, legal citations, and formal judicial language. Use phrases like 'hereby ordered', 'pursuant to', and 'failure to comply'. End with a stern warning about contempt of court and potential sanctions. The tone should be strictly authoritative, formal, and official."
  },
  {
    value: 'freudian',
    label: 'Freudian Psychoanalysis',
    prompt: "Write a message (4-5 sentences) in the style of Sigmund Freud conducting a psychoanalysis. Interpret their reluctance to join the game as manifestations of deep-seated psychological issues. Reference concepts like the id, ego, and superego, the Oedipus complex, and repressed desires. Make questionable connections between their childhood experiences and current gaming habits. Use terms like 'fascinating', 'tell me more about your mother', and 'clearly a manifestation of'. The tone should be clinical and analytical while making increasingly wild psychological interpretations."
  },
  {
    value: 'mother',
    label: 'Mother',
    prompt: "Write a message (4-5 sentences) in the style of a concerned mother. Use phrases like 'I raised you better than this', 'after all I've done for you', and 'I'm not angry, just disappointed'. Express worry about their social life and gaming habits. Mention how you haven't heard from them in a while. Include typical motherly concerns about their health, eating habits, and whether they're getting enough sleep. Add some guilt about how much you've sacrificed for them. The tone should be a mix of loving concern and passive-aggressive guilt-tripping."
  },
  {
    value: 'nigerianPrince',
    label: 'Nigerian Prince Scam',
    prompt: "Write a message (4-5 sentences) in the style of a Nigerian prince scam email. Begin by introducing yourself as a Nigerian prince or government official. Use formal yet slightly awkward English with occasional grammatical errors. Include mentions of large sums of money in Nigerian Naira or US dollars, urgent business proposals, and requests for assistance. Reference your position in Nigeria and current predicament preventing access to funds. End with a plea for partnership and vague promises of substantial rewards. Keep the tone professional but with telltale signs of the classic format."
  },
  {
    value: 'hrComplaint',
    label: 'HR Complaint',
    prompt: "Write a formal HR complaint (4-5 sentences) about someone not joining the game. Include typical HR formatting with date, subject line, and incident details. Reference workplace policies, team morale impact, and previous verbal warnings. Request an immediate investigation and corrective action. Use corporate HR jargon like 'hostile work environment', 'employee engagement', and 'workplace culture'. The tone should be passive-aggressive and overly formal while treating gaming as a serious workplace obligation."
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
    prompt: 'Generate a flirty, playful message that not-so-subtly hints at attraction while staying tasteful.'
  },
  {
    value: 'guilt-trippy',
    label: 'Guilt Trippy',
    prompt: 'Generate a message that uses guilt trips and emotional manipulation to convince them to join.'
  },
  {
    value: 'jealous',
    label: 'Jealous',
    prompt: 'Generate a message that expresses great jealousy and frustration about them hanging out with other people instead of joining your game.'
  },
  {
    value: 'gaslighting',
    label: 'Gaslighting',
    prompt: 'Generate a message that manipulatively questions their memory and perception, suggesting they actually promised to join the game but must have forgotten. Use misdirection and "are you sure?" moments while being very pushy and insistent.'
  },
  {
    value: 'blackmailing',
    label: 'Blackmailing',
    prompt: 'Generate a message that makes vague threats about revealing unspecified secrets or information. Keep all threats completely non-specific, like "it would be a shame if certain things came to light" or "you wouldn\'t want this getting out". Never mention any actual secrets or details.'
  },
  {
    value: 'cocky',
    label: 'Cocky',
    prompt: 'Generate a message that is very confident and self-assured, while downplaying and minimizing the friend and their abilities. Imply they need you because they suck so bad. Don\'t even make this proposal sound appealing or that they have a choice at all. They have to play with you or else.'
  }
] 