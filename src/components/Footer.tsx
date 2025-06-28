import React from 'react';
import SocialIcon from './SocialIcon';

interface FooterProps {
  onNavigate: (page: 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('privacy');
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('terms');
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Logo and description */}
          <div>
            <div className="text-2xl font-bold text-red-500 mb-4">
              <span className="text-white">Orbis</span>Pop
            </div>
            <p className="text-gray-400 mb-6">
              Discover your world hyperlocally. Connect with communities and experience places like never before.
            </p>
            <div className="flex space-x-4">
              <SocialIcon platform="twitter" />
              <SocialIcon platform="linkedin" />
              <SocialIcon platform="instagram" />
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li>
                <button 
                  onClick={handlePrivacyClick}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={handleTermsClick}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OrbisPop. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button 
              onClick={handlePrivacyClick}
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy
            </button>
            <button 
              onClick={handleTermsClick}
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms
            </button>
            <a href="#cookies" className="text-gray-500 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;