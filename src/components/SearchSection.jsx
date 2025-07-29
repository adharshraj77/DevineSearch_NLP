import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Loader2 } from "lucide-react";

export default function SearchSection({ onSearch, isLoading }) {
  const [query, setQuery] = useState("");
  const [numBible, setNumBible] = useState(5);
  const [numWeb, setNumWeb] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;
    onSearch(query, numBible, numWeb);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <motion.div
      className="w-full max-w-4xl p-8 mx-auto mt-8 bg-academia-dark/80 backdrop-blur-md rounded-2xl shadow-2xl border border-academia-gold/20"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-playfair text-academia-gold mb-2">
          Ask the Scriptures
        </h2>
        <p className="text-academia-muted font-merriweather">
          Pose your question and discover wisdom through AI-powered semantic search
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <textarea
            className="w-full p-4 text-lg rounded-xl bg-academia-paper/50 text-academia-cream border border-academia-gold/30 focus:outline-none focus:border-academia-gold focus:ring-2 focus:ring-academia-gold/20 resize-none transition-all duration-300"
            placeholder="e.g., What does the Bible say about love and forgiveness?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            rows={3}
            disabled={isLoading}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-academia-muted">
              Bible Verses
            </label>
            <select
              value={numBible}
              onChange={(e) => setNumBible(parseInt(e.target.value))}
              className="w-full p-3 bg-academia-paper/50 text-academia-cream rounded-lg border border-academia-gold/30 focus:outline-none focus:border-academia-gold transition-colors duration-300"
              disabled={isLoading}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1} className="bg-academia-dark">
                  {i + 1} Bible Match{i + 1 > 1 ? 'es' : ''}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-academia-muted">
              Web Results
            </label>
            <select
              value={numWeb}
              onChange={(e) => setNumWeb(parseInt(e.target.value))}
              className="w-full p-3 bg-academia-paper/50 text-academia-cream rounded-lg border border-academia-gold/30 focus:outline-none focus:border-academia-gold transition-colors duration-300"
              disabled={isLoading}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1} className="bg-academia-dark">
                  {i + 1} Web Result{i + 1 > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        <motion.button
          type="submit"
          className="w-full py-4 text-xl bg-academia-gold hover:bg-yellow-400 text-academia-dark font-bold rounded-xl flex justify-center items-center gap-3 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
          whileHover={{ scale: isLoading ? 1 : 1.02 }}
          disabled={isLoading || !query.trim()}
        >
          {isLoading ? (
            <>
              <Loader2 size={24} className="animate-spin" />
              Searching...
            </>
          ) : (
            <>
              <Search size={24} />
              Search Scripture
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}