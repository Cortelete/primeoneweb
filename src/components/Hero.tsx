import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const CAROUSEL_IMAGES = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-primary text-white overflow-hidden pb-16 pt-24" id="home">
      
      {/* Background with Carousel and Diagonal Split */}
      <div className="absolute inset-0 z-0 flex">
        {/* Abstract elements for left background */}
        <div className="absolute inset-0 bg-primary z-10 w-full lg:w-[60%]">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[50%] -left-[20%] w-[100%] h-[150%] bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-3xl opacity-50"
          />
        </div>
        
        {/* Right Side Carousel */}
        <div 
          className="absolute inset-0 lg:left-[35%] z-20 overflow-hidden"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, max(0px, 20vw) 100%)" }}
        >
          {/* Mobile Overlay specifically for small screens so text is legible */}
          <div className="absolute inset-0 bg-primary/80 lg:bg-transparent z-10 block lg:hidden" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Gradient fade to seamlessly blend the diagonal edge */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent z-10 w-1/3 hidden lg:block" /> 
              {/* Subtle dark overlay for contrast */}
              <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply" />
              <img 
                src={CAROUSEL_IMAGES[currentImage]} 
                alt="Dealership Detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="container mx-auto px-6 z-30 relative max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl lg:max-w-2xl xl:max-w-3xl"
        >
          <div className="flex items-center gap-3 text-secondary mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm sm:text-base font-medium tracking-widest uppercase">The best partnership for your dealership</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 sm:mb-8 drop-shadow-lg">
            Your Dealership’s Detail Department — <br/>
            <span className="text-secondary inline-block">Managed for You.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 leading-relaxed drop-shadow-md">
            We help dealerships move cars faster, improve presentation, reduce management headaches, and deliver a cleaner, more consistent customer experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="inline-flex justify-center items-center gap-2 bg-secondary text-primary font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg transition-colors hover:bg-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#problems" 
              className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg backdrop-blur-md transition-colors"
            >
              The Problems We Solve
            </motion.a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
