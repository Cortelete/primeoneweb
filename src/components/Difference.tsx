import { motion } from 'motion/react';
import { ArrowRightLeft } from 'lucide-react';

export default function Difference() {
  return (
    <section className="py-32 bg-secondary text-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pattern-dots" style={{ backgroundImage: 'radial-gradient(#111827 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-secondary rounded-full mb-8">
            <ArrowRightLeft className="w-8 h-8" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-tight mb-10 leading-tight">
            Most detail companies focus on cleaning cars. <br/>
            <span className="text-primary/70">Prime One focuses on running the department.</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-xl md:text-2xl font-medium text-primary/80 leading-relaxed mb-12">
            <p className="font-bold text-primary">That difference matters.</p>
            <p>
              A dealership detail department needs more than labor. It needs leadership, priorities, communication, quality control, staffing stability, and accountability. Without those things, detail becomes a daily headache for your managers.
            </p>
            <p>
              Prime One gives your dealership a managed detail solution designed to support sales, service, inventory, deliveries, and customer experience.
            </p>
          </div>
          
          <div className="inline-block bg-primary text-white text-2xl md:text-3xl font-heading font-bold px-10 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform cursor-default">
            We do not just clean vehicles.<br/>
            <span className="text-secondary">We help your dealership run smoother.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
