import { motion } from 'motion/react';
import { Clock, ShieldAlert, Users, MessageSquareWarning, TrendingDown, Target } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: "Vehicles sitting too long",
    description: "We help keep inventory, deliveries, service vehicles, loaners, PDIs, and used cars moving through the process."
  },
  {
    icon: ShieldAlert,
    title: "Inconsistent quality",
    description: "We create standards, train our teams, and focus on repeatable results your sales and service managers can trust."
  },
  {
    icon: Users,
    title: "Staffing headaches",
    description: "We handle recruiting, training, supervision, accountability, and day-to-day employee management."
  },
  {
    icon: MessageSquareWarning,
    title: "Lack of communication",
    description: "We work with your managers to create a clear process so vehicles do not get lost, forgotten, delayed, or miscommunicated."
  },
  {
    icon: TrendingDown,
    title: "Hidden cost & lost productivity",
    description: "We help turn detail from a reactive problem into a managed operation that supports the performance of your store."
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Problems() {
  return (
    <section className="py-24 bg-surface" id="problems">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                The <span className="text-secondary relative">
                  Problems
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-secondary/30 rounded-full"></span>
                </span> We Solve.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                Your detail department touches almost every part of your dealership.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Sales depends on it. Service depends on it. Used cars depend on it. Customer deliveries depend on it. Online inventory depends on it. <strong className="text-primary">And when detail is not running properly, the entire store feels it.</strong>
              </p>
              <div className="hidden lg:flex items-center gap-4 p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
                  <Target className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Strategic Advantage</h4>
                  <p className="text-sm text-gray-500">Turn a bottleneck into a catalyst.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-8">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {problems.map((problem, i) => {
                const Icon = problem.icon;
                return (
                  <motion.div 
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all group"
                  >
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-primary transition-colors text-gray-600">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{problem.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
