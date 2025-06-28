import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import TextReveal from './TextReveal';
import SectionTransition from './SectionTransition';
import FloatingElements from './FloatingElements';

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  
  const features = [
    {
      id: 1,
      title: "Local Feed",
      description: "Stay updated with real-time posts from users within a 10 km radius — hyper-local, hyper-relevant.",
      image: "https://ciq2kbjcfu.ufs.sh/f/N7laI1y2xpZgqCbFHTrhojQERgKkfGX8Asu0JIn6x1Wy4bir"
    },
    {
      id: 2,
      title: "Messaging",
      description: "Chat directly with friends and new connections with a clean, responsive messaging interface.",
      image: "https://ciq2kbjcfu.ufs.sh/f/N7laI1y2xpZg1FZPzYAnOdISGqPYFTNotjaw5bCUKzRBHyf2"
    },
    {
      id: 3,
      title: "Events with Timelines",
      description: "Create and explore events with a set timeline. Filter by day, week, or even custom dates.",
      image: "https://ciq2kbjcfu.ufs.sh/f/N7laI1y2xpZgxgjdKraM6QDJZ2fBnVIcbA0E9X73oFxTdMyP"
    },
    {
      id: 4,
      title: "Smart Search",
      description: "Discover local events and trending moments through an intuitive and visually rich search tab.",
      image: "https://ciq2kbjcfu.ufs.sh/f/N7laI1y2xpZgzb9Ahuxq1DPBQiOx98REtK2ogcHIXrFT4NSy"
    },
    {
      id: 5,
      title: "ChatZone",
      description: "A dedicated space to dive into local conversations, topics, and spontaneous discussions.",
      image: "https://ciq2kbjcfu.ufs.sh/f/N7laI1y2xpZgEgamI6UuQGgtzxmbjawJyZVsqM0OA7IlnHT2"
    }
  ];

  const resetAutoSlide = useCallback(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    autoSlideRef.current = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % features.length);
      }
    }, 5000);
  }, [features.length, isTransitioning]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % features.length);
    resetAutoSlide();
    setTimeout(() => setIsTransitioning(false), 300);
  }, [features.length, isTransitioning, resetAutoSlide]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    resetAutoSlide();
    setTimeout(() => setIsTransitioning(false), 300);
  }, [features.length, isTransitioning, resetAutoSlide]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    resetAutoSlide();
    setTimeout(() => setIsTransitioning(false), 300);
  }, [currentSlide, isTransitioning, resetAutoSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || isTransitioning) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [resetAutoSlide]);

  return (
    <>
      <section id="features" className="py-24 bg-black relative section-transition">
        {/* Floating background elements */}
        <FloatingElements variant="particles" density="medium" color="red-600" />
        <FloatingElements variant="lines" density="low" color="red-600" className="opacity-20" />
        
        <div className="absolute right-0 top-20 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] z-0"></div>
        <div className="absolute left-0 bottom-20 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <TextReveal>
              <p className="text-gray-400 text-lg mb-3">Experience Local</p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold">Features That Connect You Locally</h2>
            </TextReveal>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:flex items-center justify-center gap-16 max-w-6xl mx-auto">
            {/* Phone Mockup - Smaller size */}
            <div className="relative flex-shrink-0">
              <div 
                className="phone-mockup-small"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="phone-screen-small">
                  <img 
                    src={features[currentSlide].image}
                    alt={`${features[currentSlide].title} - OrbisPop feature interface`}
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                    style={{
                      opacity: isTransitioning ? 0.7 : 1,
                      transform: isTransitioning ? 'scale(0.98)' : 'scale(1)'
                    }}
                    onError={(e) => {
                      console.error(`Failed to load image for ${features[currentSlide].title}:`, features[currentSlide].image);
                      e.currentTarget.src = "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg";
                    }}
                  />
                </div>
                <div className="home-indicator-small"></div>
              </div>

              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 text-white/50 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 text-white/50 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0">
              <ArrowRight size={40} className="text-red-600 animate-pulse" />
            </div>

            {/* Feature Information */}
            <div className="flex-1 max-w-lg">
              <div className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-600/20">
                <h3 className="text-3xl font-bold mb-6 transition-all duration-300 text-red-600">
                  {features[currentSlide].title}
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed transition-all duration-300">
                  {features[currentSlide].description}
                </p>
                
                <div className="flex gap-3 mb-6">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      disabled={isTransitioning}
                      className={`h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                        currentSlide === index ? 'bg-red-600 w-8' : 'bg-gray-600 w-2 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="text-sm text-gray-400">
                  {currentSlide + 1} of {features.length}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout - Stacked with smaller phone */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="relative">
              <div 
                className="phone-mockup-small"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="phone-screen-small">
                  <img 
                    src={features[currentSlide].image}
                    alt={`${features[currentSlide].title} - OrbisPop feature interface`}
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                    style={{
                      opacity: isTransitioning ? 0.7 : 1,
                      transform: isTransitioning ? 'scale(0.98)' : 'scale(1)'
                    }}
                    onError={(e) => {
                      console.error(`Failed to load image for ${features[currentSlide].title}:`, features[currentSlide].image);
                      e.currentTarget.src = "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg";
                    }}
                  />
                </div>
                <div className="home-indicator-small"></div>
              </div>

              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 text-white/50 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 text-white/50 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            <div className="mt-12 max-w-lg mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 transition-all duration-300">
                {features[currentSlide].title}
              </h3>
              <p className="text-gray-300 mb-8 transition-all duration-300">
                {features[currentSlide].description}
              </p>
              
              <div className="flex justify-center gap-3">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isTransitioning}
                    className={`h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                      currentSlide === index ? 'bg-red-600 w-6' : 'bg-gray-600 w-2 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transition to next section */}
      <SectionTransition type="curve" direction="down" />
    </>
  );
};

export default Features;