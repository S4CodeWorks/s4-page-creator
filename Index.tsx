
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Plans from '@/components/Plans';
import AboutSection from '@/components/AboutSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <Plans />
    </div>
  );
};

export default Index;
