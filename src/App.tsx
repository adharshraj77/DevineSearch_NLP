// App.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import SearchSection from './components/SearchSection';
import BibleCard from './components/BibleCard';
import WebCard from './components/WebCard';
import SaveButton from './components/SaveButton';
import Library from './components/Library';
import About from './components/About';
import Footer from './components/Footer';

import { getQueryEmbedding } from './utils/embedding';
import { getTopBibleMatches } from './utils/matching';
import { getWebResults } from './utils/webSearch';

import bibleData from './data/bible_embeddings.json';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) setCurrentView(hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSearch = async (query, numBible, numWeb) => {
  setIsLoading(true);
  setError(null);

  try {
    const similarityScores = await getQueryEmbedding(query, bibleData);
    const bibleMatches = getTopBibleMatches(similarityScores, bibleData, numBible);
    const webResults = await getWebResults(query, numWeb);

    setSearchResults({
      query,
      bibleMatches,
      webResults,
      timestamp: new Date().toISOString()
    });

    setTimeout(() => {
      const resultsElement = document.getElementById('results-section');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  } catch (err) {
    console.error('Search error:', err);
    setError('Failed to perform search. Please try again.');
  } finally {
    setIsLoading(false);
  }
};


  const navigateToSearch = () => {
    setCurrentView('search');
    window.location.hash = 'search';
  };

  return (
    <div className="min-h-screen bg-academia-bg">
      {currentView !== 'landing' && <Navbar />}

      <AnimatePresence mode="wait">
        {currentView === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage onNavigateToSearch={navigateToSearch} />
          </motion.div>
        )}

        {currentView === 'search' && (
          <motion.div
            key="search"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-12"
          >
            <div className="container mx-auto px-6">
              <SearchSection onSearch={handleSearch} isLoading={isLoading} />

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-4xl mx-auto mt-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-300 text-center"
                >
                  {error}
                </motion.div>
              )}

              {searchResults && (
                <motion.div
                  id="results-section"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="max-w-7xl mx-auto mt-12"
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-playfair text-academia-gold mb-4">
                      Search Results
                    </h2>
                    <p className="text-xl text-academia-cream mb-6 italic">
                      "{searchResults.query}"
                    </p>
                    <SaveButton
                      query={searchResults.query}
                      verses={searchResults.bibleMatches}
                      webResults={searchResults.webResults}
                    />
                  </div>

                  {searchResults.bibleMatches.length > 0 && (
                    <div className="mb-16">
                      <h3 className="text-2xl font-playfair text-academia-gold mb-8 text-center">
                        📖 Biblical Wisdom
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {searchResults.bibleMatches.map((verse, index) => (
                          <BibleCard key={index} verse={verse} index={index} />
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.webResults.length > 0 && (
                    <div className="mb-16">
                      <h3 className="text-2xl font-playfair text-academia-gold mb-8 text-center">
                        🌐 Additional Resources
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {searchResults.webResults.map((result, index) => (
                          <WebCard key={index} result={result} index={index} />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {currentView === 'library' && (
          <motion.div
            key="library"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Library />
          </motion.div>
        )}

        {currentView === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
        )}
      </AnimatePresence>

      {currentView !== 'landing' && <Footer />}
    </div>
  );
}

export default App;
