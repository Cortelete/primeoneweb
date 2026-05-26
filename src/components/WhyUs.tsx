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
    <section className="py-24 bg-primary text-white relative overflow-hidden" id="why-us">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-full border border-white/10 flex items-center justify-center relative p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="bg-white/5 backdrop-blur-md rounded-full w-full h-full border border-white/10 flex flex-col items-center justify-center p-10 text-center relative z-10 shadow-2xl">
                <ShieldCheck className="w-16 h-16 text-secondary mb-6" />
                <h3 className="text-3xl font-heading font-bold mb-4">Operations Partner</h3>
                <p className="text-gray-400">We are not just a "detail company". We integrate with your performance goals.</p>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-10 bg-white text-primary px-6 py-3 rounded-2xl shadow-xl font-bold flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Accountability
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-10 bg-secondary text-primary px-6 py-3 rounded-2xl shadow-xl font-bold flex items-center gap-2"
              >
                Leadership
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Why Dealerships Choose Prime One
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We understand that your dealership does not need <span className="text-white italic">"someone who can wash cars."</span> You need a department that can function inside the pace, pressure, and expectations of a franchise dealership.
            </p>
            
            <p className="text-secondary font-bold text-lg mb-6 uppercase tracking-wider">That means:</p>
            
            <div className="grid gap-4 mb-10">
              {aspects.map((aspect, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  key={i} 
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-lg">{aspect}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-gray-300 italic text-lg leading-relaxed">
                Prime One gives dealerships a managed solution for one of the most frustrating departments in the store. We bring people, process, supervision, and accountability together so your detail department becomes one less thing your managers have to worry about.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
