import { OpenAI } from 'openai'
import * as dotenv from 'dotenv'
dotenv.config();

export const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export const generateEmbeddings = async (content) => {
  try {
    const embeddingResponse = await openAI.embeddings.create({
      input: content,
      model: 'text-embedding-ada-002'
    });

    return embeddingResponse.data[0].embedding;
  } catch (error) {
    console.log("🚀 ~ generateEmbeddings ~ error:", error)
    throw new Error(error?.message || 'Something went wrong while generating embeddings');
  }
}