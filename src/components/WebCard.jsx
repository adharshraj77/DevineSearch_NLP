import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

export default function WebCard({ result, index }) {
  return (
    <motion.a
      href={result.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-academia-paper/40 backdrop-blur-sm rounded-xl border border-academia-muted/30 hover:border-academia-gold/50 hover:bg-academia-paper/60 transition-all duration-300 shadow-lg hover:shadow-xl group"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex items-start space-x-3 mb-3">
        <Globe className="text-academia-gold mt-1 flex-shrink-0 group-hover:text-yellow-300 transition-colors" size={20} />
        <h4 className="text-academia-cream font-bold text-lg font-playfair group-hover:text-academia-gold transition-colors leading-tight">
          {result.title}
        </h4>
      </div>
      
      <p className="text-academia-muted font-merriweather leading-relaxed mb-4 text-sm">
        {result.snippet}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-academia-muted/70 font-semibold">
          External Resource
        </span>
        <div className="flex items-center space-x-1 text-academia-gold group-hover:text-yellow-300 transition-colors">
          <span className="text-sm font-semibold">Visit</span>
          <ExternalLink size={16} />
        </div>
      </div>
    </motion.a>
  );
}