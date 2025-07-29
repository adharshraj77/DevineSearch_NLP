// utils/matching.js

export function getTopBibleMatches(similarityScores, bibleData, totalMatches = 10) {
  const scored = bibleData.map((v, i) => ({
    ...v,
    similarity: similarityScores[i] || 0,
  }));

  return scored
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, totalMatches);
}
