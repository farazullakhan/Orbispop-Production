import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

interface SocialIconProps {
  platform: 'twitter' | 'linkedin' | 'instagram';
}

const SocialIcon: React.FC<SocialIconProps> = ({ platform }) => {
  const getIcon = () => {
    switch (platform) {
      case 'twitter':
        return <Twitter size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      default:
        return <Twitter size={20} />;
    }
  };

  const getUrl = () => {
    switch (platform) {
      case 'twitter':
        return 'https://x.com/OrbisPop?t=ikGn05-qgqi3_2T_rqOtow&s=08';
      case 'linkedin':
        return 'https://www.linkedin.com/company/orbis-pop-private-limited/';
      case 'instagram':
        return 'https://www.instagram.com/orbispop_?igsh=bmlveTE1eGc5MWd2&utm_source=qr';
      default:
        return '#';
    }
  };

  return (
    <a 
      href={getUrl()} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
      aria-label={`Follow us on ${platform}`}
    >
      {getIcon()}
    </a>
  );
};

export default SocialIcon;