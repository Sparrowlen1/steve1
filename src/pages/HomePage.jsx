import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatWeBuild from '../components/WhatWeBuild';
import Process from '../components/Process';
import CaseStudies from '../components/CaseStudies';
import WhatYouGet from '../components/WhatYouGet';
import WhyUs from '../components/WhyUs';
import Founder from '../components/Founder';
import Training from '../components/Training';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage = () => {
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealElements);
    revealElements();
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <WhatWeBuild />
        <Process />
        <CaseStudies />
        <WhatYouGet />
        <WhyUs />
        <Founder />
        <Training />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;