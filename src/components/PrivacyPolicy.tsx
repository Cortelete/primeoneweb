import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-surface text-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-primary">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="font-medium">Effective Date: {new Date().toLocaleDateString()}</p>
            
            <p>
              At Prime One Consulting ("Prime One", "we", "us", or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy describes how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, or otherwise when you contact us. The personal information we collect may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Names</li>
              <li>Email addresses</li>
              <li>Phone numbers</li>
              <li>Dealership or business names</li>
              <li>Any other details you choose to provide in your inquiries</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect or receive for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and offer support.</li>
              <li>To send administrative and business-related information to you.</li>
              <li>To fulfill and manage your requests for services or quotes.</li>
              <li>To send you marketing and promotional communications (if you have opted in). You can opt-out at any time.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Will Your Information Be Shared?</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell, rent, or trade your personal information to third parties.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Security of Your Information</h2>
            <p>
              We aim to protect your personal information through a system of organizational and technical security measures. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites. Prime One does not control and is not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before sharing any personal data.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy notice from time to time. The updated version will be indicated by an updated "Effective Date" and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have questions or comments about this notice, you may email us at <a href="mailto:info@primeoneinc.com" className="text-secondary hover:underline">info@primeoneinc.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
