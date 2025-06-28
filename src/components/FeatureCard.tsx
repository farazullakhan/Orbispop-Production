import React, { useRef } from 'react';
import { MapPin, Pin, Shield, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  position: 'left' | 'right';
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, position, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { threshold: 0.2, once: true });
  
  const getIcon = () => {
    switch (icon) {
      case 'map-pin':
        return <MapPin size={32} className="text-red-500" />;
      case 'pin':
        return <Pin size={32} className="text-red-500" />;
      case 'shield':
        return <Shield size={32} className="text-red-500" />;
      case 'users':
        return <Users size={32} className="text-red-500" />;
      default:
        return <MapPin size={32} className="text-red-500" />;
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`flex flex-col md:flex-row items-center ${position === 'right' ? 'md:flex-row-reverse' : ''} mb-12 md:mb-24`}
    >
      {/* Dot on timeline (only visible on md and up) */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-black z-10"></div>
      
      <div 
        className={`
          w-full md:w-1/2 p-6 md:p-8 
          ${position === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16'} 
          transform transition-all duration-700 
          ${isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
          }
          transition-delay-${index * 200}
        `}
        style={{ 
          transitionDelay: `${index * 0.1}s` 
        }}
      >
        <div className={`flex items-center gap-3 mb-4 ${position === 'left' ? 'md:justify-end' : 'md:justify-start'}`}>
          {position === 'right' && getIcon()}
          <h3 className="text-2xl font-bold">{title}</h3>
          {position === 'left' && getIcon()}
        </div>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
      
      <div className="hidden md:block w-0 md:w-1/2"></div>
    </div>
  );
};

export default FeatureCard;