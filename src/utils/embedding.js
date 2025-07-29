// utils/embedding.js
import embeddingsUrl from '../src/data/bible_embeddings.json?url';

// Cache system
let embeddingsCache = null;
let verseMap = new Map(); // Maps references to embeddings

async function loadEmbeddings() {
  if (embeddingsCache) return { embeddings: embeddingsCache, verseMap };

  try {
    const response = await fetch(embeddingsUrl);
    const data = await response.json();
    
    // Create lookup map
    data.forEach(item => {
      verseMap.set(item.reference, item.embedding);
    });
    
    embeddingsCache = data;
    return { embeddings: data, verseMap };
  } catch (error) {
    console.error('Failed to load embeddings:', error);
    throw new Error('Embedding data load failed');
  }
}

// Pre-computed norm for each embedding
const normCache = new Map();

function getNorm(embedding) {
  if (normCache.has(embedding)) return normCache.get(embedding);
  const norm = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
  normCache.set(embedding, norm);
  return norm;
}

export async function getSimilarVerses(queryEmbedding, verseReferences, options = {}) {
  const { threshold = 0.3, topN = 5 } = options;
  
  try {
    const { verseMap } = await loadEmbeddings();
    const queryNorm = getNorm(queryEmbedding);
    
    const results = [];
    
    // Calculate similarity for each verse
    for (const ref of verseReferences) {
      const verseEmbedding = verseMap.get(ref);
      if (!verseEmbedding) continue;
      
      const verseNorm = getNorm(verseEmbedding);
      let dotProduct = 0;
      
      for (let i = 0; i < queryEmbedding.length; i++) {
        dotProduct += queryEmbedding[i] * verseEmbedding[i];
      }
      
      const similarity = dotProduct / (queryNorm * verseNorm);
      if (similarity >= threshold) {
        results.push({ reference: ref, similarity });
      }
    }
    
    // Sort and limit results
    return results
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topN);
      
  } catch (error) {
    console.error('Similarity calculation failed:', error);
    throw error;
  }
}

// Utility to find most similar verses to a query
export async function findMostSimilarVerses(queryEmbedding, options) {
  const { embeddings } = await loadEmbeddings();
  const allReferences = embeddings.map(item => item.reference);
  return getSimilarVerses(queryEmbedding, allReferences, options);
}
