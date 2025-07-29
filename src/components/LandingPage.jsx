import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Search, Sparkles } from 'lucide-react';
import CandleScene from './CandleScene';

const LandingPage = ({ onNavigateToSearch }) => {
  const candleRef = useRef(null);

  useEffect(() => {
    if (candleRef.current) {
      gsap.to(candleRef.current, {
        opacity: 0.3,
        scale: 1.1,
        yoyo: true,
        repeat: -1,
        duration: 2,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-academia-bg text-academia-cream font-merriweather overflow-hidden">
      {/* Three.js Background */}
      <CandleScene />
      
      {/* Decorative Candle Glow */}
      <div 
        ref={candleRef} 
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-yellow-200 opacity-10 blur-3xl pointer-events-none"
      />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-8"
        >
          <Sparkles className="w-12 h-12 text-academia-gold mx-auto mb-4" />
          <h1 className="text-5xl sm:text-7xl font-playfair tracking-wide text-academia-gold leading-tight">
            "Search the Scriptures..."
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mt-8 max-w-3xl text-xl sm:text-2xl text-academia-muted leading-relaxed"
        >
          Discover divine truths and biblical wisdom through the power of AI.<br />
          <span className="text-academia-gold">Let semantic understanding guide your spiritual journey.</span>
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(212, 175, 55, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mt-12 flex items-center gap-3 px-8 py-4 text-xl font-semibold bg-academia-gold text-academia-dark rounded-lg shadow-xl hover:bg-yellow-400 transition-colors duration-300"
          onClick={onNavigateToSearch}
        >
          <Search size={24} />
          Begin Your Search
        </motion.button>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm italic text-academia-muted/80 font-playfair">
            "Fiat lux, et facta est lux."
          </p>
          <p className="text-xs text-academia-muted/60 mt-1">
            Let there be light, and there was light.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;