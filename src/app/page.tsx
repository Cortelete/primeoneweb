"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Problems from '../components/Problems';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import Difference from '../components/Difference';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsOfService from '../components/TermsOfService';

export default function App() {
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    setCurrentHash(window.location.hash);
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isPrivacy = currentHash === '#privacy';
  const isTerms = currentHash === '#terms';
  const isHome = !isPrivacy && !isTerms;

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      {isHome && (
        <main>
          <Hero />
          <Brands />
          <Problems />
          <WhyUs />
          <Services />
          <Difference />
          <Contact />
        </main>
      )}
      {isPrivacy && <PrivacyPolicy />}
      {isTerms && <TermsOfService />}
      <Footer />
    </div>
  );
}
