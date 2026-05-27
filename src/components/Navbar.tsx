import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Problems We Solve', href: '#problems' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#home" className="text-2xl font-heading font-bold text-white tracking-tight flex items-center gap-3 relative z-50">
          <img src="/logo.png" alt="Prime One Logo" className="h-10 w-auto" />
          <img src="/logofonte.png" alt="Prime One" className="h-6 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="#contact"
            className="bg-secondary text-primary font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-yellow-300 transition-colors"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white relative z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 h-screen bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-2xl font-heading font-medium hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-secondary text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 transition-colors mt-4"
              >
                Get a Quote
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
