import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import OpenAI from 'openai';
import { templates } from '../constants/content';
import { generatePrompt } from '../utils/promptUtils';

export const useMessageGenerator = ({ provider, apiKey }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const generate = async ({ userName, friendName, gameName, contentType, tone }) => {
    if (!apiKey) {
      setError(`Please enter your ${provider === 'gemini' ? 'Google' : 'OpenAI'} API key in settings`);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const contentTypeName = templates.find(type => type.value === contentType)?.label || 'casual';
      const prompt = generatePrompt(userName, friendName, gameName, tone, contentType, contentTypeName);

      let response;
      if (provider === 'gemini') {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(prompt);
        const geminiResponse = await result.response;
        response = geminiResponse.text();
      } else {
        const openai = new OpenAI({
          apiKey: apiKey,
          dangerouslyAllowBrowser: true,
        });
        const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.8,
          max_tokens: 1000
        });
        response = completion.choices[0].message.content;
      }

      setMessage(response);
    } catch (err) {
      setError('Failed to generate message. Please check your API key and try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    message,
    generate
  };
}; 