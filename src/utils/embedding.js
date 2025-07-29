// utils/embedding.js
import axios from 'axios';

const API_URL = 'https://router.huggingface.co/hf-inference/models/sentence-transformers/all-mpnet-base-v2/pipeline/sentence-similarity';

export async function getQueryEmbedding(query, verses) {
  if (!query?.trim()) throw new Error('Empty query');

  try {
    const response = await axios.post(
      API_URL,
      {
        inputs: {
          source_sentence: query,
          sentences: verses.map(v => v.verse), // extract only the verse text
        },
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
          'Content-Type': 'application/json',
        },
        timeout: 2000000,
      }
    );

    if (!Array.isArray(response.data)) {
      throw new Error('Invalid response from Hugging Face');
    }

    return response.data; // array of similarity scores
  } catch (error) {
    console.error('❌ HuggingFace API Error:', {
      status: error.response?.status,
      error: error.response?.data?.error || error.message,
      query,
    });
    throw new Error('Embedding failed: ' + (error.response?.data?.error || error.message));
  }
}
