import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";
import { saveSearchResult } from "../utils/storage";

export default function SaveButton({ query, verses, webResults }) {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (saved) return;

    const entry = {
      query,
      date: new Date().toISOString(),
      verses: verses.slice(0, 5), // Save top 5 verses
      webResults: webResults.slice(0, 5), // Save top 5 web results
    };

    saveSearchResult(entry);
    setSaved(true);

    // Reset after 3 seconds
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <motion.button
      onClick={handleSave}
      className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
        saved
          ? "bg-green-600 text-white"
          : "bg-academia-gold text-academia-dark hover:bg-yellow-400"
      }`}
      whileHover={{ scale: saved ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={saved}
    >
      {saved ? (
        <>
          <Check size={20} />
          <span>Saved to Library</span>
        </>
      ) : (
        <>
          <Star size={20} />
          <span>Save to Library</span>
        </>
      )}
    </motion.button>
  );
}