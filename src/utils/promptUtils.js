import { tones, contentTypes } from '../constants/content'

export const getPromptForStyle = (style) => {
  const contentType = contentTypes.find(type => type.value === style)
  return contentType?.prompt || contentTypes[0].prompt
}

export const generatePrompt = (userName, friendName, gameName, toneType, contentType, contentTypeName) => {
  return `
    Your name: ${userName}
    Friend's name: ${friendName}
    Game: ${gameName}
    Message Style: ${toneType}
    
    ${tones[toneType].prompt}
    Don't use emojis. 
    Don't add a title to the message unless it's essential for the format, such as a scientific paper.
    Use markdown formatting to enhance the message's presentation.
    Try to nail the structure and typical content of a ${contentTypeName}.
    ${getPromptForStyle(contentType)}
  `
} 