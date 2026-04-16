import React from 'react';
import { motion } from 'framer-motion';
import FeaturedProducts from '../components/FeaturedProducts';
import { FadeInUp, StaggerContainer } from '../components/ScrollAnimation';

const Marketplace = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-8 py-16 text-center relative z-10">
          <FadeInUp>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl mb-4 bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                Marketplace
              </h1>
            </motion.div>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Discover our complete collection of premium beauty products, 
              curated just for you
            </p>
            
            {/* Search Bar Quick Access */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 max-w-md mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-sm">
                  Search
                </button>
              </div>
            </motion.div>
          </FadeInUp>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl" />
      </div>
      
      <StaggerContainer>
        <FeaturedProducts />
      </StaggerContainer>

      {/* Newsletter Section */}
      <FadeInUp>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-primary/5 py-16 mt-16"
        >
          <div className="container mx-auto px-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">Subscribe for exclusive offers and new arrivals</p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-2 rounded-md font-semibold"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </FadeInUp>
    </motion.main>
  );
};

export default Marketplace;