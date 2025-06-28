import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CoreFeatures from './components/CoreFeatures';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

type Page = 'home' | 'privacy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={navigateToHome} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={navigateToHome} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <CoreFeatures />
      <CTASection />
      <Contact />
      <Footer onNavigate={navigateToPage} />
      <BackToTop />
    </div>
  );
}

export default App;