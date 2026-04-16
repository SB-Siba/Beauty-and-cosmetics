import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from '../components/ScrollAnimation';

const Shipping = () => {
  const shippingOptions = [
    { method: "Standard Shipping", time: "5-7 business days", cost: "Free over $50", standard: "$5.99", icon: "📬" },
    { method: "Express Shipping", time: "2-3 business days", cost: "$9.99", standard: "$9.99", icon: "⚡" },
    { method: "Overnight Shipping", time: "1-2 business days", cost: "$19.99", standard: "$19.99", icon: "🚀" }
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
              Shipping Information
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 text-lg">
              Fast, reliable shipping to over 100 countries worldwide
            </p>
          </div>
        </FadeInUp>
        
        <div className="space-y-8">
          {/* Shipping Options */}
          <FadeInUp>
            <motion.div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-3xl">🚚</span>
                Shipping Options
              </h2>
              <StaggerContainer className="space-y-4">
                {shippingOptions.map((option, idx) => (
                  <StaggerItem key={idx}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{option.icon}</span>
                        <div>
                          <h3 className="font-semibold">{option.method}</h3>
                          <p className="text-sm text-gray-600">{option.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{option.cost}</p>
                        <p className="text-xs text-gray-500">{option.standard}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </FadeInUp>

          {/* Free Shipping Banner */}
          <FadeInUp>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-primary/10 to-tertiary/10 rounded-xl p-6 text-center"
            >
              <span className="text-3xl block mb-2">🎉</span>
              <h3 className="text-xl font-semibold mb-2">Free Shipping on Orders Over $50</h3>
              <p className="text-gray-600">Available for standard shipping within the continental US</p>
            </motion.div>
          </FadeInUp>

          {/* International Shipping */}
          <FadeInUp>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">🌍</span>
                <div>
                  <h2 className="text-2xl font-semibold mb-3">International Shipping</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We ship worldwide! International delivery typically takes 7-14 business days. 
                    Customs fees may apply and are the responsibility of the customer.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      📌 Note: Delivery times may vary based on customs clearance in your country.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeInUp>

          {/* Order Tracking */}
          <FadeInUp>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔍</span>
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Order Tracking</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Once your order ships, you'll receive a tracking number via email. 
                    You can also track your order in your account dashboard.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 text-primary font-semibold hover:underline"
                  >
                    Track Your Order →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </FadeInUp>

          {/* Delivery Areas */}
          <FadeInUp>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-3 gap-4"
            >
              {["North America", "Europe", "Asia Pacific", "Middle East", "Africa", "South America"].map((region, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-lg p-3 text-center"
                >
                  <span className="text-sm font-semibold">{region}</span>
                </motion.div>
              ))}
            </motion.div>
          </FadeInUp>
        </div>
      </div>
    </motion.main>
  );
};

export default Shipping;