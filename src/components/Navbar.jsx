import React from "react";
import { Book, Library, Info, Search, Home } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-academia-dark/90 backdrop-blur-sm px-6 py-4 border-b border-academia-gold/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex items-center space-x-3">
        <Book size={28} className="text-academia-gold" />
        <h1 className="text-academia-cream text-2xl font-playfair font-bold">DivineSearch</h1>
      </div>

      <div className="flex items-center space-x-8">
        {/* <a 
          href="#home" 
          className="flex items-center space-x-2 text-academia-muted hover:text-academia-gold transition-colors duration-300 relative group"
        >
          <Home size={18} />
          <span className="font-merriweather">Home</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-academia-gold transition-all duration-300 group-hover:w-full"></span>
        </a> */}
        <a 
          href="#search" 
          className="flex items-center space-x-2 text-academia-muted hover:text-academia-gold transition-colors duration-300 relative group"
        >
          <Search size={18} />
          <span className="font-merriweather">Search</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-academia-gold transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a 
          href="#library" 
          className="flex items-center space-x-2 text-academia-muted hover:text-academia-gold transition-colors duration-300 relative group"
        >
          <Library size={18} />
          <span className="font-merriweather">Library</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-academia-gold transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a 
          href="#about" 
          className="flex items-center space-x-2 text-academia-muted hover:text-academia-gold transition-colors duration-300 relative group"
        >
          <Info size={18} />
          <span className="font-merriweather">About</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-academia-gold transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;