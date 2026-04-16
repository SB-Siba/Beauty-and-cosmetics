import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { FadeInUp, StaggerContainer, StaggerItem } from '../components/ScrollAnimation';

const collections = {
  all: [
    { id: 1, name: 'Velvet Bloom Serum', category: 'Skincare', price: 84, rating: 4.8, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFQtun16eXrm9qwg0e24jGrMmLUjboUP-XKpTVzoEOAmUaMWVEa0xC7UusZeQE9CNzKZGOnZn8nQfO6dEqHGfUUxHKU0X1-cn42zCDC6jW1jHHFI4MFdSg2j-12feGYmR5lGc4-0SHH7maoTbvWiQat4oNWbGinz6y7PzmEahSRJocjsxKSyOpGqHoFSMmrnVE0EIh9Uvolu7PQ-NxDRxKJ4ZS0AsRKLrU9AFGXgKgQgELPmVqN6kJEtPyLKci7Ei6JYFe9VfxL8tD' },
    { id: 2, name: 'Glow Infusion Masque', category: 'Skincare', price: 62, rating: 4.7, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEnMiDW7NcfoYN965PYsDoK6XueogKykZVS-n19YpGiU7McINd6bib8deWmPBvIWKZf3FwTcI2cJ5E273ecyDF95R-J7rylAkTzmHtSW9lGzIwgl5rrMv8JoUr8iR8LBj4jVAJU6MVk1oODEMkzLyjxo6cIzVs4CpciO_t-57ZQsNHlE7C8h7EI6gEGtPos0ki2TZ0ng9JMc1cSRolSS_6wG60ppIdlh3xEg_57IqGxsR2u2-4crQM3m-xmaYMt_Lb4NF5YjX6RmKm' },
    { id: 3, name: 'Satin Lip Nectar', category: 'Makeup', price: 34, rating: 4.9, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCLZdJkCLP8vM06z2SnZ9w2otDhwaIxdAQC-MGNliFkbpagHydIWg_rmbvmDjvYe5rZitntsxnTikOMwt-QvE2XOFKFPy0aFyOEfYEaLFxqYsUKL_PPhreR2ntiSyjGIYtp_HWEeSKZmKkA7a1IynMTgoNsveVutmPaRa2YbjSs3JgB0caP7s90NYKwcJAUpYUAjhZ75CuoShDBfa0AWDN6oU6-c1hNonUpn0hpJxEy7ssh5s7QwLKtS85sRxm9itYHcwGokzoKktj' },
  ],
  skincare: [
    { id: 1, name: 'Velvet Bloom Serum', category: 'Skincare', price: 84, rating: 4.8, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFQtun16eXrm9qwg0e24jGrMmLUjboUP-XKpTVzoEOAmUaMWVEa0xC7UusZeQE9CNzKZGOnZn8nQfO6dEqHGfUUxHKU0X1-cn42zCDC6jW1jHHFI4MFdSg2j-12feGYmR5lGc4-0SHH7maoTbvWiQat4oNWbGinz6y7PzmEahSRJocjsxKSyOpGqHoFSMmrnVE0EIh9Uvolu7PQ-NxDRxKJ4ZS0AsRKLrU9AFGXgKgQgELPmVqN6kJEtPyLKci7Ei6JYFe9VfxL8tD' },
    { id: 2, name: 'Glow Infusion Masque', category: 'Skincare', price: 62, rating: 4.7, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEnMiDW7NcfoYN965PYsDoK6XueogKykZVS-n19YpGiU7McINd6bib8deWmPBvIWKZf3FwTcI2cJ5E273ecyDF95R-J7rylAkTzmHtSW9lGzIwgl5rrMv8JoUr8iR8LBj4jVAJU6MVk1oODEMkzLyjxo6cIzVs4CpciO_t-57ZQsNHlE7C8h7EI6gEGtPos0ki2TZ0ng9JMc1cSRolSS_6wG60ppIdlh3xEg_57IqGxsR2u2-4crQM3m-xmaYMt_Lb4NF5YjX6RmKm' },
  ],
  makeup: [
    { id: 3, name: 'Satin Lip Nectar', category: 'Makeup', price: 34, rating: 4.9, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCLZdJkCLP8vM06z2SnZ9w2otDhwaIxdAQC-MGNliFkbpagHydIWg_rmbvmDjvYe5rZitntsxnTikOMwt-QvE2XOFKFPy0aFyOEfYEaLFxqYsUKL_PPhreR2ntiSyjGIYtp_HWEeSKZmKkA7a1IynMTgoNsveVutmPaRa2YbjSs3JgB0caP7s90NYKwcJAUpYUAjhZ75CuoShDBfa0AWDN6oU6-c1hNonUpn0hpJxEy7ssh5s7QwLKtS85sRxm9itYHcwGokzoKktj' },
  ],
};

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products', icon: '✨', count: collections.all.length },
    { id: 'skincare', label: 'Skincare', icon: '💆‍♀️', count: collections.skincare.length },
    { id: 'makeup', label: 'Makeup', icon: '💄', count: collections.makeup.length }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4 md:px-8">
        <FadeInUp>
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              Our Collections
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our carefully curated collections of premium beauty products
            </p>
          </div>
        </FadeInUp>
        
        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full capitalize transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>
        
        {/* Products Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections[activeCategory].map((product, index) => (
                <StaggerItem key={product.id}>
                  <ProductCard product={product} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {/* Empty State (if needed) */}
        {collections[activeCategory].length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <span className="text-6xl block mb-4">🔍</span>
            <p className="text-gray-500">No products found in this category</p>
          </motion.div>
        )}

        {/* Featured Banner */}
        <FadeInUp>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-primary/10 to-tertiary/10 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-serif mb-2">Need Help Choosing?</h3>
            <p className="text-gray-600 mb-4">Take our beauty quiz to find your perfect products</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-md font-semibold"
            >
              Take the Quiz →
            </motion.button>
          </motion.div>
        </FadeInUp>
      </div>
    </motion.main>
  );
};

export default Collections;