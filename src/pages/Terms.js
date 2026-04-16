import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from '../components/ScrollAnimation';

const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing our website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
      icon: "✅"
    },
    {
      title: "Products and Pricing",
      content: "We strive to display accurate product information and pricing. However, errors may occur. We reserve the right to correct any errors and cancel orders if necessary.",
      icon: "💰"
    },
    {
      title: "Shipping and Delivery",
      content: "We offer worldwide shipping. Delivery times vary by location. Please refer to our shipping policy for more details.",
      icon: "🚚"
    },
    {
      title: "Returns and Refunds",
      content: "We accept returns within 30 days of purchase. Items must be unused and in original packaging.",
      icon: "🔄"
    },
    {
      title: "Account Responsibility",
      content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      icon: "👤"
    },
    {
      title: "Intellectual Property",
      content: "All content on this site is our property and protected by copyright laws. You may not reproduce or distribute any content without permission.",
      icon: "©️"
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
              Terms of Service
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
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 border-l-4 border-primary"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{section.icon}</div>
                  <div>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 p-4 bg-yellow-50 rounded-xl border border-yellow-200"
          >
            <p className="text-yellow-800 text-sm text-center">
              ⚠️ These terms were last updated on {new Date().toLocaleDateString()}. 
              Please review them periodically as they may change.
            </p>
          </motion.div>
        </FadeInUp>
      </div>
    </motion.main>
  );
};

export default Terms;