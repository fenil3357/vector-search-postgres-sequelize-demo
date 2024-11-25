import { Document } from "../models/document.js";
import { openAI } from "../openai.js";

export const generateEmbeddingsController = async (req, res) => {
  try {
    const { content } = req?.body; // You can pass the embeddings manually in request body if you don't want to use openai

    // Generate embeddings of given text content using openAI's text-embedding-ada-002 embedding model
    const embeddingResponse = await openAI.embeddings.create({
      input: content,
      model: 'text-embedding-ada-002'
    });

    // Save embeddings in DB
    const document = await Document.create({
      content,
      embeddings: embeddingResponse.data[0].embedding
    }, { raw: true });

    return res.json({
      message: 'Embeddings generate successfully',
      data: document
    });
  } catch (error) {
    console.log("🚀 ~ insertContentController ~ error:", error)
    return res.status(500).json({ error })
  }
}