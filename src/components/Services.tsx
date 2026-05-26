import { motion } from 'motion/react';
import { 
  Briefcase, SprayCan, Sparkles, ClipboardCheck, 
  CarFront, Bath, FolderKanban, UsersRound, 
  Workflow, Network 
} from 'lucide-react';

const services = [
  { text: "Daily dealership detail operations", icon: Briefcase },
  { text: "New and used vehicle details", icon: Sparkles },
  { text: "Clean-for-delivery support", icon: SprayCan },
  { text: "PDI cleaning", icon: ClipboardCheck },
  { text: "Lot refreshes", icon: CarFront },
  { text: "Loaner vehicle cleaning", icon: Bath },
  { text: "Service wash support", icon: Bath },
  { text: "Inventory presentation", icon: FolderKanban },
  { text: "Quality control", icon: ClipboardCheck },
  { text: "Staffing and supervision", icon: UsersRound },
  { text: "Workflow communication", icon: Workflow },
  { text: "Manager coordination", icon: Network },
];

export default function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              A Complete Detail Department Solution
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Prime One provides the people and management structure needed to operate your dealership’s detail department with consistency and accountability.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-surface p-8 lg:p-12 rounded-[2.5rem] border border-gray-100">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                key={i} 
                className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-secondary transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-xl text-gray-500 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-primary text-sm sm:text-base">{svc.text}</span>
              </motion.div>
            )
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-heading font-medium text-primary/80 leading-relaxed">
            Whether your dealership is struggling with quality, speed, staffing, communication, or accountability, Prime One can help build a cleaner, more reliable process.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
