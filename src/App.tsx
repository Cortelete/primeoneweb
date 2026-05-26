/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Difference from './components/Difference';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <WhyUs />
        <Services />
        <Difference />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
