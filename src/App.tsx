/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Problems from './components/Problems';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Difference from './components/Difference';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const isPrivacy = currentHash === '#privacy';
  const isTerms = currentHash === '#terms';
  const isHome = !isPrivacy && !isTerms;
  const wasHome = useRef(isHome);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentHash(hash);
      if (hash === '#privacy' || hash === '#terms' || hash === '') {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Ensure we scroll to the correct section if navigating from a different page (like Privacy -> Services)
  useEffect(() => {
    if (isHome && !wasHome.current && currentHash && currentHash !== '#') {
      const element = document.getElementById(currentHash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }
    wasHome.current = isHome;
  }, [isHome, currentHash]);

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
