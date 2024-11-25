import { OpenAI } from 'openai'
import * as dotenv from 'dotenv'
dotenv.config();

export const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})