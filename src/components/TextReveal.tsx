import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, delay = 0 }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { threshold: 0.2, once: true });
  
  return (
    <div 
      ref={textRef} 
      className="overflow-hidden"
    >
      <div 
        className={`
          transform transition-all duration-1000 
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
        style={{ 
          transitionDelay: `${delay}s` 
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TextReveal;