import { tones, contentTypes } from '../constants/content'

export const getPromptForStyle = (style) => {
  const contentType = contentTypes.find(type => type.value === style)
  return contentType?.prompt || contentTypes[0].prompt
}

export const generatePrompt = (userName, friendName, gameName, toneType, contentType, contentTypeName) => {
  const tone = tones.find(t => t.value === toneType)
  return `
<task>Generate a message convincing someone to join a game</task>

<style>
- Use markdown formatting to enhance presentation
- ${contentType !== 'annoyingEmojis' ? 'Do not use any emojis' : 'Use excessive emojis'}
- Only include a title if essential for the format (e.g. scientific paper)
- Follow the structure and conventions of a ${contentTypeName}
- Don't use placeholders like [Your Name] or [Friend's Name]
</style>

<contentType>
${getPromptForStyle(contentType)}
</contentType>

<tone>${tone.prompt}</tone>

<context>
<userName>${userName}</userName>
<friendName>${friendName}</friendName>
<gameName>${gameName}</gameName>
</context>
`
}