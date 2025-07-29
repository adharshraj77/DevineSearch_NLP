import React from "react";
import { motion } from "framer-motion";
import { Book } from "lucide-react";

export default function BibleCard({ verse, index }) {
  return (
    <motion.div
      className="p-6 bg-academia-dark/60 backdrop-blur-sm rounded-xl border border-academia-gold/30 shadow-lg hover:shadow-xl hover:border-academia-gold/50 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex items-start space-x-3 mb-4">
        <Book className="text-academia-gold mt-1 flex-shrink-0" size={20} />
        <h3 className="text-academia-gold text-lg font-bold font-playfair">
          {verse.reference}
        </h3>
      </div>
      
      <p className="text-academia-cream font-merriweather leading-relaxed mb-4 text-base">
        "{verse.verse}"
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-academia-muted uppercase tracking-wider font-semibold">
          {verse.testament === 'old' ? 'Old Testament' : 'New Testament'}
        </span>
        <div className="bg-academia-gold/20 px-3 py-1 rounded-full">
          <span className="text-sm text-academia-gold font-semibold">
            {(verse.similarity * 100).toFixed(1)}% match
          </span>
        </div>
      </div>
    </motion.div>
  );
}