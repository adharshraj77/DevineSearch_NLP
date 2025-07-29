import React from "react";
import { motion } from "framer-motion";
import { Heart, Brain, Search, Users, Mail, Github, Linkedin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-academia-bg pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-playfair text-academia-gold mb-6">
            About DivineSearch
          </h1>
          <p className="text-xl text-academia-muted font-merriweather leading-relaxed">
            Where ancient wisdom meets modern AI technology
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-academia-dark/60 backdrop-blur-sm rounded-2xl p-8 border border-academia-gold/20"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="text-academia-gold" size={28} />
              <h2 className="text-2xl font-playfair text-academia-gold">Our Mission</h2>
            </div>
            <p className="text-academia-cream font-merriweather leading-relaxed text-lg">
              To make Bible study more intuitive, intelligent, and accessible by merging the spiritual depth of scripture with the semantic power of modern AI. We believe that technology can enhance our understanding of divine wisdom without diminishing its sacred nature.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-academia-dark/60 backdrop-blur-sm rounded-2xl p-8 border border-academia-gold/20"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="text-academia-gold" size={28} />
              <h2 className="text-2xl font-playfair text-academia-gold">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Search className="text-academia-muted mx-auto mb-3" size={24} />
                <h3 className="font-bold text-academia-cream mb-2">Semantic Search</h3>
                <p className="text-sm text-academia-muted">
                  AI understands the meaning behind your questions, not just keywords
                </p>
              </div>
              <div className="text-center">
                <Brain className="text-academia-muted mx-auto mb-3" size={24} />
                <h3 className="font-bold text-academia-cream mb-2">Smart Matching</h3>
                <p className="text-sm text-academia-muted">
                  Advanced algorithms find the most relevant Bible verses
                </p>
              </div>
              <div className="text-center">
                <Users className="text-academia-muted mx-auto mb-3" size={24} />
                <h3 className="font-bold text-academia-cream mb-2">Enhanced Learning</h3>
                <p className="text-sm text-academia-muted">
                  Complemented with web resources for deeper understanding
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-academia-dark/60 backdrop-blur-sm rounded-2xl p-8 border border-academia-gold/20"
          >
            <h2 className="text-2xl font-playfair text-academia-gold mb-6">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-academia-paper/20 p-4 rounded-lg">
                <p className="font-bold text-academia-cream">React</p>
                <p className="text-xs text-academia-muted">Frontend</p>
              </div>
              <div className="bg-academia-paper/20 p-4 rounded-lg">
                <p className="font-bold text-academia-cream">Hugging Face</p>
                <p className="text-xs text-academia-muted">AI Embeddings</p>
              </div>
              <div className="bg-academia-paper/20 p-4 rounded-lg">
                <p className="font-bold text-academia-cream">Google CSE</p>
                <p className="text-xs text-academia-muted">Web Search</p>
              </div>
              <div className="bg-academia-paper/20 p-4 rounded-lg">
                <p className="font-bold text-academia-cream">TensorFlow.js</p>
                <p className="text-xs text-academia-muted">ML Computing</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="bg-academia-dark/60 backdrop-blur-sm rounded-2xl p-8 border border-academia-gold/20"
          >
            <h2 className="text-2xl font-playfair text-academia-gold mb-6">Contact</h2>
            <p className="text-academia-muted font-merriweather mb-6">
              Have feedback, suggestions, or want to collaborate? I'd love to hear from you!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:adharshraj.dev@gmail.com"
                className="flex items-center space-x-2 bg-academia-gold/20 hover:bg-academia-gold/30 px-4 py-2 rounded-lg text-academia-cream hover:text-academia-gold transition-all duration-300"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/adharshraj77"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-academia-gold/20 hover:bg-academia-gold/30 px-4 py-2 rounded-lg text-academia-cream hover:text-academia-gold transition-all duration-300"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/adharshraj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-academia-gold/20 hover:bg-academia-gold/30 px-4 py-2 rounded-lg text-academia-cream hover:text-academia-gold transition-all duration-300"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}