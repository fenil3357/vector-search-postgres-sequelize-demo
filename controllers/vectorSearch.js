import { DB } from "../db.js";
import { generateEmbeddings } from "../openai.js";

export const vectorSearchController = async (req, res) => {
  try {
    let { query, match_count, similarity_threshold } = req?.body; // You can pass the embeddings manually in request body if you don't want to use openai

    if (!match_count) match_count = 3;
    if (!similarity_threshold) similarity_threshold = 0.01

    // Generate the embeddings of given query
    const query_embeddings = await generateEmbeddings(query);

    // convert embeddings into postgres vector type
    const query_embeddings_vector = `[${query_embeddings.join(', ')}]`

    // Invoke the vector_search function to find the similar content
    const data = await DB.query(
      `SELECT id, content, similarity FROM vector_search(:query_embeddings, :similarity_threshold, :match_count)`,
      {
        replacements: {
          query_embeddings: query_embeddings_vector,
          similarity_threshold,
          match_count
        },
      }
    );

    return res.json(data[0]);
  } catch (error) {
    console.log("🚀 ~ vectorSearchController ~ error:", error)
    return res.status(500).json({ error })
  }
}