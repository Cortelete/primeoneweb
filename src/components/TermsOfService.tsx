import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-surface text-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-primary">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="font-medium">Effective Date: {new Date().toLocaleDateString()}</p>
            
            <p>
              Welcome to Prime One Consulting! By accessing our website and utilizing our services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Description of Services</h2>
            <p>
              Prime One Consulting provides managed detail department solutions for franchise dealerships, including but not limited to staffing, daily operations management, quality control, lot refreshes, and consulting services. We reserve the right to modify or discontinue any part of the service with or without notice.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. User Responsibilities</h2>
            <p>
              As a user of our website, you agree to use our services for lawful purposes only. You agree not to take any action that might compromise the security of the site, render the site inaccessible to others, or otherwise cause damage to the site or its content.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall Prime One Consulting, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Disclaimer of Warranties</h2>
            <p>
              Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Prime One Consulting operates, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:info@primeoneinc.com" className="text-secondary hover:underline">info@primeoneinc.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
