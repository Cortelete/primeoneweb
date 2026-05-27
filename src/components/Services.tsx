import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, Handshake, Sparkles, ClipboardCheck, 
  CarFront, FolderKanban, UsersRound, 
  Workflow, Network, X, Droplets, Key, ShieldCheck
} from 'lucide-react';

const services = [
  { text: "Daily dealership detail operations", icon: Briefcase, description: "Comprehensive day-to-day management of your detail department, ensuring smooth operations and consistent output." },
  { text: "New and used vehicle details", icon: Sparkles, description: "Thorough cleaning and reconditioning for all inventory, making every car front-line ready." },
  { text: "Clean-for-delivery support", icon: Handshake, description: "Fast, high-quality final preparations to ensure the vehicle looks perfect before customer handover." },
  { text: "PDI cleaning", icon: ClipboardCheck, description: "Pre-Delivery Inspection washes and detailing to prepare newly arrived vehicles for the lot." },
  { text: "Lot refreshes", icon: CarFront, description: "Periodic maintenance cleaning of lot inventory to keep vehicles looking sharp and presentable." },
  { text: "Loaner vehicle cleaning", icon: Key, description: "Quick turnovers and deep cleaning for your dealership's service loaner fleet." },
  { text: "Service wash support", icon: Droplets, description: "Efficient washes for fixed operations, keeping service customers happy and vehicles moving." },
  { text: "Inventory presentation", icon: FolderKanban, description: "Strategic positioning and presentation focused on maximizing lot appeal." },
  { text: "Quality control", icon: ShieldCheck, description: "Rigorous multi-point inspections to ensure every vehicle meets the dealership's high standards." },
  { text: "Staffing and supervision", icon: UsersRound, description: "Recruiting, training, and managing detail staff so you don't have to worry about turnover or performance." },
  { text: "Workflow communication", icon: Workflow, description: "Clear processes and updates between sales, service, and detail to prevent bottlenecks." },
  { text: "Manager coordination", icon: Network, description: "Direct collaboration with your store managers to align priorities and hit operational targets." },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    if (selectedService) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedService]);

  return (
    <section className="py-16 md:py-24 bg-white" id="services">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
              A Complete Detail Department Solution
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Prime One provides the people and management structure needed to operate your dealership’s detail department with consistency and accountability.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 bg-surface p-4 sm:p-6 lg:p-12 rounded-2xl sm:rounded-[2rem] border border-gray-100">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.button 
                onClick={() => setSelectedService(svc)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                key={i} 
                className="flex items-center text-left gap-3 sm:gap-4 bg-white p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:border-secondary transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary/50"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 flex items-center justify-center rounded-lg sm:rounded-xl text-gray-500 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors shrink-0">
                  <Icon className="w-5 h-5 sm:w-5 sm:h-5" />
                </div>
                <span className="font-medium text-primary text-sm sm:text-base leading-snug">{svc.text}</span>
              </motion.button>
            )
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center max-w-4xl mx-auto"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-primary/80 leading-relaxed">
            Whether your dealership is struggling with quality, speed, staffing, communication, or accountability, Prime One can help build a cleaner, more reliable process.
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <div className="p-1">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors bg-gray-50 hover:bg-gray-100 rounded-full p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8 pt-10 sm:p-10 text-center">
                <div className="w-16 h-16 bg-secondary/10 text-secondary mx-auto rounded-2xl flex items-center justify-center mb-6">
                  {selectedService.icon && <selectedService.icon className="w-8 h-8" />}
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-4">
                  {selectedService.text}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {selectedService.description}
                </p>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors inline-block"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
