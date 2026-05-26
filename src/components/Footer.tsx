import { motion } from 'motion/react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Prime One Logo" className="h-12 w-auto" />
              <span className="text-3xl font-heading font-bold text-white tracking-tight">Prime One<span className="text-secondary">.</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-8">
              Your Dealership’s Detail Department — Managed for You. We provide trained staffing, daily supervision, quality control, and operational accountability.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 text-secondary font-medium hover:text-yellow-300 transition-colors">
                Request an Evaluation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#problems" className="text-gray-400 hover:text-secondary transition-colors">Problems We Solve</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-secondary transition-colors">Why Prime One</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Our Services</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <a href="mailto:inteligenciarte@gmail.com" className="hover:text-secondary transition-colors">
                  inteligenciarte@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Serving Franchise Dealerships Nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Prime One Consulting. All rights reserved.
          </div>
          <div className="text-gray-500 text-sm flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
