import { tones, templates } from '../constants/content'

export const getPrompt = (style) => {
  const contentType = templates.find(type => type.value === style)
  return contentType?.prompt || templates[0].prompt
}

export const generatePrompt = (userName, friendName, gameName, toneType, contentType, contentTypeName) => {
  const tone = tones.find(t => t.value === toneType)
  return `
<role>
You are a creative message generator specializing in crafting persuasive messages to convince friends to join games.
Your goal is to create an engaging, contextually appropriate message that effectively convinces the target to join the specified game.
</role>

<task>
Generate a message that:
1. Convincingly invites ${friendName} to join ${gameName}
2. Maintains the specified tone and content style
3. Uses appropriate formatting and structure
4. Avoids any inappropriate or harmful content
</task>

<formatting>
- Use markdown formatting to enhance presentation
- ${contentType !== 'annoyingEmojis' ? 'Do not use any emojis' : 'Use excessive emojis'}
- Only include a title if essential for the format (e.g. scientific paper)
- Follow the structure and conventions of a ${contentTypeName}
- Don't use placeholders like [Your Name], [Friend's Name], [Game Name], or anything else that requires the user to fill in the message.
</formatting>

<content_style>
${getPrompt(contentType)}
</content_style>

<tone_guidelines>
${tone.prompt}
</tone_guidelines>

<context>
<userName>${userName}</userName>
<friendName>${friendName}</friendName>
<gameName>${gameName}</gameName>
</context>

<constraints>
- Stay within the expected length for the content type
- Ensure the message is clear and understandable
- Make sure you capture the essence of the tone
</constraints>

<output_format>
Generate only the message content without any additional explanations or meta-commentary.
The output should be ready to use as-is.
</output_format>
`
}