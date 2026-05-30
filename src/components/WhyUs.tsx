import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const aspects = [
  "Understanding priorities.",
  "Knowing which cars matter first.",
  "Communicating with managers.",
  "Protecting deliveries.",
  "Keeping inventory moving.",
  "Correcting quality issues before they become customer complaints.",
  "Owning the department instead of waiting for your team to chase us."
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden" id="why-us">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square max-w-[280px] sm:max-w-md mx-auto flex items-center justify-center relative p-4 sm:p-8">
              {/* Elegant floating blue rings */}
              <div 
                className="absolute inset-[0px] rounded-full border-[1px] border-slate-700/60 animate-[spin_20s_linear_infinite]" 
                style={{ transformOrigin: '48% 52%' }} 
              />
              <div 
                className="absolute inset-[12px] rounded-full border-[1px] border-blue-800/50 animate-[spin_25s_linear_infinite_reverse]" 
                style={{ transformOrigin: '51% 49%' }} 
              />
              <div 
                className="absolute inset-[24px] rounded-full border-[1px] border-indigo-800/40 animate-[spin_30s_linear_infinite]" 
                style={{ transformOrigin: '52% 48%' }} 
              />
              
              <div className="bg-primary/80 backdrop-blur-md rounded-full w-full h-full border border-white/5 flex flex-col items-center justify-center p-6 sm:p-10 text-center relative z-10 shadow-2xl">
                <ShieldCheck className="w-10 h-10 sm:w-16 sm:h-16 text-blue-400 mb-4 sm:mb-6 opacity-90 stroke-[1.5]" />
                <h3 className="text-xl sm:text-3xl font-heading font-bold mb-2 sm:mb-4 text-white">Operations Partner</h3>
                <p className="text-slate-400 text-sm sm:text-base font-light">We are not just a "detail company". We integrate with your performance goals.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 sm:mb-8">
              Why Dealerships Choose Prime One
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              We understand that your dealership does not need <span className="text-white italic">"someone who can wash cars."</span> You need a department that can function inside the pace, pressure, and expectations of a franchise dealership.
            </p>
            
            <p className="text-secondary font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase tracking-wider">That means:</p>
            
            <div className="grid gap-3 sm:gap-4 mb-8 sm:mb-10">
              {aspects.map((aspect, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  key={i} 
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-base sm:text-lg">{aspect}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-gray-300 italic text-base sm:text-lg leading-relaxed">
                Prime One gives dealerships a managed solution for one of the most frustrating departments in the store. We bring people, process, supervision, and accountability together so your detail department becomes one less thing your managers have to worry about.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
