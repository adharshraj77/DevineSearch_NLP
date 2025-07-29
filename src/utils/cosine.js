import * as tf from '@tensorflow/tfjs';

export function cosineSimilarity(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    console.error("❌ One or both embeddings are not arrays", { a, b });
    return 0;
  }

  if (a.length !== b.length) {
    console.error("❌ Embedding length mismatch", { lenA: a.length, lenB: b.length });
    return 0;
  }

  try {
    const aTensor = tf.tensor1d(a);
    const bTensor = tf.tensor1d(b);

    const dot = tf.dot(aTensor, bTensor).dataSync()[0];
    const normA = tf.norm(aTensor).dataSync()[0];
    const normB = tf.norm(bTensor).dataSync()[0];

    aTensor.dispose();
    bTensor.dispose();

    return dot / (normA * normB);
  } catch (err) {
    console.error("❌ Tensor computation failed:", err);
    return 0;
  }
}
