import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import TextReveal from './TextReveal';
import SectionTransition from './SectionTransition';
import FloatingElements from './FloatingElements';

const CTASection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { threshold: 0.3, once: true });
  
  return (
    <>
      <section 
        id="download"
        ref={containerRef}
        className="py-20 relative overflow-hidden section-transition"
      >
        {/* Floating background elements */}
        <FloatingElements variant="particles" density="high" color="red-600" />
        <FloatingElements variant="dots" density="low" color="red-600" className="opacity-30" />
        
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/30"></div>
        
        {/* Red glow effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <TextReveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Be the First to Experience Hyperlocal Like Never Before
              </h2>
            </TextReveal>
            
            <TextReveal delay={0.2}>
              <p className="text-xl text-gray-300 mb-10">
                Join our exclusive beta and discover your city in a whole new way. 
                Get early access and shape the future of hyperlocal discovery.
              </p>
            </TextReveal>
            
            <div 
              className={`
                flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6
                transform transition-all duration-700
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: '0.3s' }}
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-black hover:bg-gray-900 text-white rounded-full font-medium transition-all duration-300 text-lg border border-white/20 flex items-center justify-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="currentColor"/>
                </svg>
                Download for iOS
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all duration-300 text-lg flex items-center justify-center gap-3">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path 
                    d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" 
                    fill="currentColor"
                  />
                </svg>
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transition to next section */}
      <SectionTransition type="gradient" />
    </>
  );
};

export default CTASection;