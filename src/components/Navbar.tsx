import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  const handleDownloadNow = () => {
    scrollToSection('download');
  };

  return (
    <header className="fixed w-full z-50 px-4 py-3">
      <nav 
        className={`
          max-w-6xl mx-auto rounded-full transition-all duration-500 ease-in-out 
          ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg border border-red-600/20' : 'bg-transparent'} 
          px-6 py-4
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold text-red-600 hover:opacity-80 transition-opacity"
            >
              <span className="text-white">Orbis</span>Pop
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('core-features')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Core Features
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={handleDownloadNow}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full transition-colors"
            >
              Download Now!
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-2">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`
        fixed left-1/2 transform -translate-x-1/2 top-20 w-[90%] max-w-[300px] bg-black/95 backdrop-blur-lg rounded-2xl border border-red-600/20
        transition-all duration-300 ease-in-out
        ${menuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-4 opacity-0 scale-95 pointer-events-none'}
        md:hidden py-8
      `}>
        <div className="flex flex-col items-center justify-center space-y-6">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-xl text-gray-300 hover:text-white transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('core-features')} 
            className="text-xl text-gray-300 hover:text-white transition-colors"
          >
            Core Features
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-xl text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </button>
          <button 
            onClick={handleDownloadNow}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors text-lg"
          >
            Download Now!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;