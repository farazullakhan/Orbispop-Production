import React, { ReactNode, useRef } from 'react';
import { useInView } from '../../hooks/useInView';

interface BlurToSolidProps {
  children: ReactNode;
  delay?: number;
}

const BlurToSolid: React.FC<BlurToSolidProps> = ({ children, delay = 0 }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true });

  return (
    <div ref={elementRef}>
      <div 
        className={`
          transition-all duration-1000
          ${isInView ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}
        `}
        style={{ transitionDelay: `${delay}s` }}
      >
        {children}
      </div>
    </div>
  );
};

export default BlurToSolid;