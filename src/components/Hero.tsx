import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import TextReveal from './TextReveal';
import BlurToSolid from './animations/BlurToSolid';
import { PointerHighlight } from './ui/pointer-highlight';
import SectionTransition from './SectionTransition';
import FloatingElements from './FloatingElements';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 flowing-bg">
        {/* Floating background elements */}
        <FloatingElements variant="dots" density="low" color="red-600" />
        <FloatingElements variant="circles" density="medium" color="red-600" className="opacity-30" />
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/30 z-0"></div>
        
        {/* Red glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px] z-0"></div>
        
        <div 
          ref={containerRef}
          className="container mx-auto px-4 z-10 relative"
        >
          <div className="max-w-3xl mx-auto text-center mt-16 md:mt-24">
            <BlurToSolid delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Discover Your World <div className="inline-flex justify-center w-full"><PointerHighlight><span className="text-red-600">Hyperlocally</span></PointerHighlight></div>
              </h1>
            </BlurToSolid>
            
            <BlurToSolid delay={0.4}>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                Connect with your local community, share moments, and discover what's happening around you.
              </p>
            </BlurToSolid>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <BlurToSolid delay={0.6}>
                <button className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all duration-300 text-lg">
                  Explore Now
                </button>
              </BlurToSolid>
              
              <BlurToSolid delay={0.8}>
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 border border-white/30 text-white rounded-full font-medium transition-all duration-300 text-lg">
                  Launching Soon
                </button>
              </BlurToSolid>
            </div>
          </div>
          
          {/* Hero image/device mockup */}
          <BlurToSolid delay={1.0}>
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-black/60"></div>
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Young people connecting and socializing through OrbisPop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </BlurToSolid>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transition to next section */}
      <SectionTransition type="wave" direction="down" />
    </>
  );
};

export default Hero