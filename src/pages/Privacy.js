import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from '../components/ScrollAnimation';

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include your name, email address, shipping address, and payment information.",
      icon: "📊"
    },
    {
      title: "How We Use Your Information",
      content: "We use your information to process orders, communicate with you about your purchases, and improve our services. We never sell your personal information to third parties.",
      icon: "🔧"
    },
    {
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your personal information. All transactions are encrypted using SSL technology.",
      icon: "🔒"
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.",
      icon: "⚖️"
    },
    {
      title: "Cookies",
      content: "We use cookies to enhance your browsing experience and analyze site traffic. You can control cookie settings through your browser.",
      icon: "🍪"
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-16"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <FadeInUp>
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600"
            >
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>
          </div>
        </FadeInUp>
        
        <StaggerContainer className="space-y-6">
          {sections.map((section, index) => (
            <StaggerItem key={index}>
              <motion.div 
                whileHover={{ x: 5 }}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{section.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3 text-primary">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 p-6 bg-gray-50 rounded-xl text-center"
          >
            <p className="text-gray-600">
              For any privacy-related questions, please contact our <strong>Data Protection Officer</strong> at{' '}
              <a href="mailto:privacy@digitalatelier.com" className="text-primary hover:underline">
                privacy@digitalatelier.com
              </a>
            </p>
          </motion.div>
        </FadeInUp>
      </div>
    </motion.main>
  );
};

export default Privacy;