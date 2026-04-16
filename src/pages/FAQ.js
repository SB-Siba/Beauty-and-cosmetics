import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from '../components/ScrollAnimation';

const faqs = [
  {
    question: "What are your shipping options?",
    answer: "We offer standard shipping (5-7 business days), express shipping (2-3 business days), and overnight shipping (1-2 business days). Free standard shipping on orders over $50.",
    category: "Shipping"
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a confirmation email with a tracking number. You can also track your order in your account dashboard.",
    category: "Shipping"
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase. Items must be unused and in original packaging. Return shipping is free for defective items.",
    category: "Returns"
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Yes! All our products are 100% cruelty-free and never tested on animals. We're certified by Leaping Bunny.",
    category: "Products"
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. International shipping rates and delivery times vary by location. Customs fees may apply.",
    category: "Shipping"
  },
  {
    question: "How do I care for my products?",
    answer: "Store products in a cool, dry place away from direct sunlight. Check product labels for specific storage instructions.",
    category: "Products"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(faqs.map(faq => faq.category))];
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Frequently Asked Questions
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-center text-gray-600 text-lg">
              Find answers to common questions about our products and services
            </p>
          </div>
        </FadeInUp>

        {/* Search Bar */}
        <FadeInUp>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="mb-8"
          >
            <input
              type="text"
              placeholder="🔍 Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </motion.div>
        </FadeInUp>

        {/* Category Filters */}
        <FadeInUp>
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </FadeInUp>
        
        <StaggerContainer className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500">No results found for "{searchTerm}"</p>
            </motion.div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  layout
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <motion.button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div>
                      <span className="text-xs text-primary font-semibold">{faq.category}</span>
                      <span className="font-semibold text-lg block mt-1">{faq.question}</span>
                    </div>
                    <motion.span 
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      className="text-2xl text-primary"
                    >
                      ↓
                    </motion.span>
                  </motion.button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t"
                      >
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-6 text-gray-600 leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </StaggerItem>
            ))
          )}
        </StaggerContainer>

        {/* Still Have Questions */}
        <FadeInUp>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-tertiary/5 rounded-2xl text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Please contact our support team.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </motion.button>
          </motion.div>
        </FadeInUp>
      </div>
    </motion.main>
  );
};

export default FAQ;