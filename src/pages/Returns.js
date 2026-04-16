import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from '../components/ScrollAnimation';

const Returns = () => {
  const steps = [
    { step: 1, title: "Contact Support", description: "Reach out to our customer service team to initiate a return", icon: "📞" },
    { step: 2, title: "Get Authorization", description: "Receive return authorization and shipping label", icon: "✅" },
    { step: 3, title: "Pack Items", description: "Pack items securely in original packaging", icon: "📦" },
    { step: 4, title: "Ship Back", description: "Ship items using provided label", icon: "🚚" },
    { step: 5, title: "Receive Refund", description: "Get refund within 5-7 business days", icon: "💰" }
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
              Return Policy
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          </div>
        </FadeInUp>
        
        <div className="space-y-8">
          {/* Main Content */}
          <FadeInUp>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📅</span>
                <h2 className="text-2xl font-semibold">30-Day Return Policy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We want you to love your purchase. If you're not completely satisfied, 
                you can return items within 30 days of delivery for a full refund.
              </p>
            </motion.div>
          </FadeInUp>

          {/* Return Conditions */}
          <FadeInUp>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">✓</span>
                <h2 className="text-2xl font-semibold">Return Conditions</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Items must be unused and in original condition",
                  "Original packaging must be intact",
                  "Proof of purchase required",
                  "Final sale items cannot be returned"
                ].map((condition, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="text-green-500">✓</span>
                    {condition}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </FadeInUp>

          {/* Return Process */}
          <FadeInUp>
            <motion.div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🔄</span>
                <h2 className="text-2xl font-semibold">How to Return</h2>
              </div>
              <StaggerContainer className="space-y-4">
                {steps.map((step) => (
                  <StaggerItem key={step.step}>
                    <motion.div 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-primary font-bold">Step {step.step}</span>
                          <h3 className="font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </FadeInUp>

          {/* Refund Info */}
          <FadeInUp>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-green-50 rounded-xl p-6 border border-green-200"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <h3 className="font-semibold text-green-800 mb-1">Refund Process</h3>
                  <p className="text-green-700">
                    Refunds will be issued to your original payment method within 5-7 business days 
                    after we receive your return. You'll receive a confirmation email once processed.
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeInUp>

          {/* Contact CTA */}
          <FadeInUp>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <p className="text-gray-600">
                Need help with a return? <br />
                <a href="/contact" className="text-primary font-semibold hover:underline">
                  Contact our support team →
                </a>
              </p>
            </motion.div>
          </FadeInUp>
        </div>
      </div>
    </motion.main>
  );
};

export default Returns;