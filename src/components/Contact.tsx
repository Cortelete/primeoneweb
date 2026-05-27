import { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dealership: '',
    message: ''
  });

  return (
    <section className="py-16 md:py-24 bg-surface" id="contact">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="bg-primary rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-24 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight">
                Ready to Take Detail Off Your Plate?
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                If your dealership is tired of detail delays, inconsistent quality, staffing problems, and daily communication issues, Prime One can help.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-lg">
                Let us evaluate your current process and show you how a professionally managed detail department can improve speed, consistency, accountability, and customer presentation.
              </p>
              
              <div className="bg-white/10 border border-white/20 p-5 sm:p-6 rounded-2xl backdrop-blur-sm inline-block max-w-[100%]">
                <p className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">
                  Prime One Consulting
                </p>
                <p className="text-secondary font-medium text-sm sm:text-base">dealership detail operations, managed right.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form action="https://formsubmit.co/info@primeoneinc.com" method="POST" className="bg-white p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 sm:mb-8">Request a Quote</h3>
                
                {/* Formsubmit Configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="space-y-4 sm:space-y-6">
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-gray-400 text-sm sm:text-base"
                      placeholder="Full Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="dealership" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Dealership Name</label>
                    <input 
                      type="text" 
                      id="dealership"
                      name="dealership"
                      required 
                      value={formData.dealership}
                      onChange={(e) => setFormData({...formData, dealership: e.target.value})}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-gray-400 text-sm sm:text-base"
                      placeholder="Dealership Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      pattern="[^@\s]+@[^@\s]+"
                      title="Please include an '@' in the email address."
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-gray-400 text-sm sm:text-base"
                      placeholder="email@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-gray-400 text-sm sm:text-base"
                      placeholder="Phone Number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">How can we help?</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-gray-400 resize-none text-sm sm:text-base"
                      placeholder="We would like to..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-gray-800 text-white font-bold py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm sm:text-base mt-2"
                  >
                    Send Message <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
