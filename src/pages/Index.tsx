import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import Events from '@/components/Events';
import Team from '@/components/Team';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-roboto">
      <Header />
      <main>
        <Hero />
        <Courses />
        <Events />
        <Team />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;