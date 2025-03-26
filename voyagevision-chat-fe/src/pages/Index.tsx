
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhatsAppDemo from '../components/WhatsAppDemo';
import Rewards from '../components/Rewards';
import Integrations from '../components/Integrations';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-space">
      <Navbar />
      <Hero />
      <Features />
      <WhatsAppDemo />
      <Rewards />
      <Integrations />
      <Footer />
    </div>
  );
};

export default Index;
