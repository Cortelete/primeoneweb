import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Prime One Logo" className="h-10 w-auto" />
            <span className="text-2xl font-heading font-bold text-white tracking-tight">Prime One<span className="text-secondary">.</span></span>
          </div>
          <span className="text-gray-500 text-sm mt-1">Dealership detail operations, managed right.</span>
        </div>
        
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Prime One Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
