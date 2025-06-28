import React from 'react';

interface FloatingElementsProps {
  variant?: 'dots' | 'circles' | 'lines' | 'particles';
  density?: 'low' | 'medium' | 'high';
  color?: string;
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({
  variant = 'dots',
  density = 'medium',
  color = 'red-600',
  className = ''
}) => {
  const getDensityCount = () => {
    switch (density) {
      case 'low': return 8;
      case 'medium': return 12;
      case 'high': return 20;
      default: return 12;
    }
  };

  const count = getDensityCount();

  const renderElements = () => {
    return Array.from({ length: count }, (_, i) => {
      const delay = i * 0.5;
      const duration = 15 + (i % 5) * 5;
      const size = 2 + (i % 4);
      const opacity = 0.1 + (i % 3) * 0.1;

      switch (variant) {
        case 'dots':
          return (
            <div
              key={i}
              className={`absolute w-${size} h-${size} bg-${color} rounded-full opacity-${Math.floor(opacity * 10)}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );

        case 'circles':
          return (
            <div
              key={i}
              className={`absolute border border-${color} rounded-full opacity-${Math.floor(opacity * 10)}`}
              style={{
                width: `${20 + size * 10}px`,
                height: `${20 + size * 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );

        case 'lines':
          return (
            <div
              key={i}
              className={`absolute bg-${color} opacity-${Math.floor(opacity * 10)}`}
              style={{
                width: `${30 + size * 10}px`,
                height: '1px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `fade ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );

        case 'particles':
          return (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-${color} opacity-${Math.floor(opacity * 10)}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `sparkle ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );

        default:
          return null;
      }
    });
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {renderElements()}
    </div>
  );
};

export default FloatingElements;