import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Book, ExternalLink, Calendar } from "lucide-react";
import { getSavedResults, deleteSavedResult } from "../utils/storage";

export default function Library() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    setSaved(getSavedResults());
  }, []);

  const deleteItem = (index) => {
    const updated = deleteSavedResult(index);
    setSaved(updated);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-academia-bg pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-playfair text-academia-gold mb-4">
            📚 Saved Insights
          </h1>
          <p className="text-xl text-academia-muted font-merriweather">
            Your personal collection of divine wisdom
          </p>
          <p className="text-sm text-academia-muted/70 mt-2">
            {saved.length} of 30 saved searches
          </p>
        </motion.div>

        {saved.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <Book className="w-24 h-24 text-academia-muted/30 mx-auto mb-6" />
            <p className="text-2xl text-academia-muted font-playfair mb-2">
              No saved searches yet
            </p>
            <p className="text-academia-muted/70 font-merriweather">
              Start searching to build your personal library of biblical insights
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saved.map((entry, idx) => (
              <motion.div
                key={idx}
                className="bg-academia-dark/60 backdrop-blur-sm border border-academia-gold/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-academia-gold/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-academia-gold font-playfair font-bold text-lg leading-tight flex-1 mr-2">
                    🔍 {entry.query}
                  </h3>
                  <button
                    onClick={() => deleteItem(idx)}
                    className="text-red-400 hover:text-red-300 p-1 rounded transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="flex items-center space-x-2 text-xs text-academia-muted/70 mb-4">
                  <Calendar size={14} />
                  <span>{formatDate(entry.date)}</span>
                </div>

                {entry.verses.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Book size={16} className="text-academia-gold" />
                      <span className="text-sm font-semibold text-academia-muted">
                        Top Verse
                      </span>
                    </div>
                    <p className="text-sm text-academia-cream font-merriweather leading-relaxed bg-academia-paper/20 p-3 rounded-lg">
                      <strong className="text-academia-gold">{entry.verses[0]?.reference}:</strong> "{entry.verses[0]?.verse}"
                    </p>
                  </div>
                )}

                {entry.webResults.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <ExternalLink size={16} className="text-academia-gold" />
                      <span className="text-sm font-semibold text-academia-muted">
                        Top Resource
                      </span>
                    </div>
                    <a
                      href={entry.webResults[0]?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-academia-cream hover:text-academia-gold transition-colors bg-academia-paper/20 p-3 rounded-lg group"
                    >
                      <span className="font-semibold group-hover:underline">
                        {entry.webResults[0]?.title}
                      </span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}