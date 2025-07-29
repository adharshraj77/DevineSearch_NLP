import React from "react";
import { motion } from "framer-motion";
import { Home, Library, Info, Heart } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-academia-dark border-t border-academia-gold/20 text-academia-muted py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-academia-gold font-playfair text-xl mb-4">DivineSearch</h3>
            <p className="text-sm leading-relaxed">
              Bridging ancient wisdom with modern technology to make biblical study more accessible and meaningful.
            </p>
          </div>
          
          <div>
            <h4 className="text-academia-cream font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="flex items-center space-x-2 text-sm hover:text-academia-gold transition-colors">
                <Home size={16} />
                <span>Home</span>
              </a>
              <a href="#library" className="flex items-center space-x-2 text-sm hover:text-academia-gold transition-colors">
                <Library size={16} />
                <span>Library</span>
              </a>
              <a href="#about" className="flex items-center space-x-2 text-sm hover:text-academia-gold transition-colors">
                <Info size={16} />
                <span>About</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-academia-cream font-semibold mb-4">Technology</h4>
            <p className="text-sm leading-relaxed">
              Built with React, powered by Hugging Face AI, enhanced with Google Custom Search, styled with Framer Motion & Three.js
            </p>
          </div>
        </div>

        <div className="border-t border-academia-gold/10 pt-8 text-center">
          <p className="text-sm text-academia-muted/80 mb-2">
            Built with <Heart size={14} className="inline text-red-400" /> by Adharsh Raj
          </p>
          <p className="text-xs text-academia-muted/60">
            © 2025 DivineSearch. Designed in Dark Academia aesthetic • v1.0
          </p>
        </div>
      </div>
    </motion.footer>
  );
}