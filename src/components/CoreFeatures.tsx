import React from 'react';
import TextReveal from './TextReveal';
import { MapPin, Target, Star } from 'lucide-react';
import SectionTransition from './SectionTransition';
import FloatingElements from './FloatingElements';

const CoreFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Pin Drag & Drop",
      description: "Easily reposition pins on the map to highlight areas of interest. Our intuitive drag & drop interface lets you precisely position your focus on the map, ensuring you never miss out on what's happening in the areas you care about most.",
      icon: <MapPin size={24} className="text-red-600" />,
      videoUrl: "https://www.youtube.com/embed/lb18RZd8vps?autoplay=1&mute=1&loop=1&playlist=lb18RZd8vps&controls=0&showinfo=0&rel=0&modestbranding=1"
    },
    {
      id: 2,
      title: "Radius Customization",
      description: "Adjust your search radius to find events and places within your preferred distance. Take control of your exploration radius with our dynamic range selector, allowing you to fine-tune your local experience from intimate neighborhood updates to broader city-wide discoveries.",
      icon: <Target size={24} className="text-red-600" />,
      videoUrl: "https://www.youtube.com/embed/WtcpENMeXUQ?autoplay=1&mute=1&loop=1&playlist=WtcpENMeXUQ&controls=0&showinfo=0&rel=0&modestbranding=1"
    },
    {
      id: 3,
      title: "Profile Rating",
      description: "Rate and review profiles to build a trustworthy local community. Our transparent rating system helps you identify trusted local voices and valuable community contributors, ensuring you get authentic insights from credible sources.",
      icon: <Star size={24} className="text-red-600" />,
      videoUrl: "https://www.youtube.com/embed/-b_jOL_OX44?autoplay=1&mute=1&loop=1&playlist=-b_jOL_OX44&controls=0&showinfo=0&rel=0&modestbranding=1"
    },
  ];

  return (
    <>
      <section id="core-features" className="py-24 bg-black relative section-transition">
        {/* Floating background elements */}
        <FloatingElements variant="circles" density="low" color="red-600" />
        <FloatingElements variant="dots" density="medium" color="red-600" className="opacity-40" />
        
        <div className="absolute right-0 top-20 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] z-0"></div>
        <div className="absolute left-0 bottom-20 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <TextReveal>
              <p className="text-gray-400 text-lg mb-3">Discover Your Local World</p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold">Tech That Knows Your Town</h2>
            </TextReveal>
          </div>

          <div className="max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`
                  flex flex-col lg:flex-row items-center gap-8 lg:gap-16
                  ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}
                  ${index !== features.length - 1 ? 'mb-16 lg:mb-24' : ''}
                `}
              >
                {/* Video Section with smaller 9:16 aspect ratio */}
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <div className="aspect-[9/16] max-w-xs mx-auto rounded-xl overflow-hidden bg-black/50 backdrop-blur-lg border border-red-600/20 shadow-2xl transition-all duration-500 hover:shadow-red-600/20 hover:border-red-600/40">
                      <iframe
                        src={feature.videoUrl}
                        title={`${feature.title} Demo`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      
                      {/* Video overlay with icon - removed loading animation */}
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:bg-red-600/80">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                  <div className={`
                    bg-black/30 backdrop-blur-lg p-8 lg:p-10 rounded-2xl border border-red-600/10
                    transition-all duration-500 hover:bg-black/50 hover:border-red-600/30
                    ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}
                  `}>
                    <div className={`
                      flex items-center gap-3 mb-6
                      ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}
                      justify-center
                    `}>
                      <div className="p-2 bg-red-600/20 rounded-full">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">
                        {feature.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    
                    {/* Feature highlight */}
                    <div className={`
                      inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 rounded-full text-red-400 text-sm font-medium
                      transition-all duration-300 hover:bg-red-600/30 hover:text-red-300
                    `}>
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                      Interactive Feature
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Transition to next section */}
      <SectionTransition type="diagonal" direction="down" />
    </>
  );
};

export default CoreFeatures;