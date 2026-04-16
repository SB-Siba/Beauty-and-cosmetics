import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from '../components/ScrollAnimation';

const trends = [
  { 
    id: 1, 
    title: 'Clean Beauty Movement', 
    description: 'The rise of non-toxic, sustainable beauty products that are safe for both people and the planet. Consumers are increasingly demanding transparency in ingredients and ethical production methods.', 
    image: 'https://via.placeholder.com/600', 
    date: 'March 2024', 
    author: 'Emma Watson',
    category: 'Sustainability',
    readTime: '5 min read',
    tags: ['Clean Beauty', 'Sustainability', 'Non-toxic']
  },
  { 
    id: 2, 
    title: 'Skin Minimalism', 
    description: 'Less is more - the simplified skincare routine trend that focuses on quality over quantity. Discover how a few key products can transform your skin without overwhelming it.', 
    image: 'https://via.placeholder.com/600', 
    date: 'February 2024', 
    author: 'Dr. Jane Smith',
    category: 'Skincare',
    readTime: '4 min read',
    tags: ['Skincare', 'Minimalism', 'Routine']
  },
  { 
    id: 3, 
    title: 'Sustainable Packaging', 
    description: 'Eco-friendly innovations in beauty packaging that are reducing waste and environmental impact. From refillable containers to biodegradable materials, see what\'s changing.', 
    image: 'https://via.placeholder.com/600', 
    date: 'January 2024', 
    author: 'Michael Green',
    category: 'Innovation',
    readTime: '6 min read',
    tags: ['Packaging', 'Eco-friendly', 'Innovation']
  },
  { 
    id: 4, 
    title: 'Adaptogenic Skincare', 
    description: 'How adaptogens are revolutionizing skincare by helping skin adapt to stress and environmental factors. Learn about the power of ingredients like ashwagandha and reishi.', 
    image: 'https://via.placeholder.com/600', 
    date: 'March 2024', 
    author: 'Dr. Sarah Lee',
    category: 'Innovation',
    readTime: '5 min read',
    tags: ['Adaptogens', 'Stress Relief', 'Natural']
  },
  { 
    id: 5, 
    title: 'Inclusive Beauty', 
    description: 'The push for more diverse representation and products for all skin tones and types. Brands are finally recognizing the importance of serving every customer.', 
    image: 'https://via.placeholder.com/600', 
    date: 'February 2024', 
    author: 'Maria Garcia',
    category: 'Diversity',
    readTime: '7 min read',
    tags: ['Diversity', 'Inclusion', 'Representation']
  }
];

const Trends = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...new Set(trends.map(trend => trend.category))];

  const filteredTrends = trends.filter(trend => {
    const matchesCategory = selectedCategory === 'All' || trend.category === selectedCategory;
    const matchesSearch = trend.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trend.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trend.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <FadeInUp>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                Beauty Trends
              </h1>
            </motion.div>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              Stay ahead with the latest trends, innovations, and insights in the world of beauty and cosmetics
            </p>
          </div>
        </FadeInUp>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative flex-1 max-w-md"
            >
              <input
                type="text"
                placeholder="🔍 Search trends, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </motion.div>

            {/* Category Filters */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-2 flex-wrap"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Trends Grid */}
        <AnimatePresence mode="wait">
          {filteredTrends.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-16"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-6xl mb-4"
              >
                🔍
              </motion.div>
              <p className="text-gray-500 text-lg">No trends found matching your criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-primary font-semibold hover:underline"
              >
                Clear filters →
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {filteredTrends.map((trend, index) => (
                <motion.div
                  key={trend.id}
                  variants={itemVariants}
                  layout
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="md:flex">
                    {/* Image Section */}
                    <div className="md:w-1/3 relative overflow-hidden">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center"
                      >
                        <motion.span 
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                          className="text-7xl"
                        >
                          {trend.id === 1 && '🌿'}
                          {trend.id === 2 && '💆‍♀️'}
                          {trend.id === 3 && '♻️'}
                          {trend.id === 4 && '🍄'}
                          {trend.id === 5 && '🌈'}
                        </motion.span>
                      </motion.div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                          {trend.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                        <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors">
                          {trend.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>📅 {trend.date}</span>
                          <span>•</span>
                          <span>⏱️ {trend.readTime}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {trend.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {trend.tags.map((tag, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="text-xs bg-gray-100 px-2 py-1 rounded-full cursor-pointer hover:bg-primary/20 transition-colors"
                            onClick={() => setSearchTerm(tag)}
                          >
                            #{tag}
                          </motion.span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                            {trend.author.charAt(0)}
                          </div>
                          <span className="text-sm text-gray-600">By {trend.author}</span>
                        </div>
                        <motion.button 
                          whileHover={{ x: 5 }}
                          className="text-primary font-semibold hover:underline inline-flex items-center gap-1 group"
                        >
                          Read Full Article 
                          <motion.span 
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="text-lg"
                          >
                            →
                          </motion.span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Newsletter Section */}
        <FadeInUp>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 bg-gradient-to-r from-primary/10 to-tertiary/10 rounded-2xl p-8 text-center"
          >
            <h2 className="font-serif text-2xl mb-2">Never Miss a Trend</h2>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for weekly beauty trend updates</p>
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
            <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </motion.div>
        </FadeInUp>

        {/* Popular Topics Section */}
        <FadeInUp>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <h3 className="font-semibold mb-3">Popular Topics</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Clean Beauty', 'Sustainable', 'Skincare Tips', 'Makeup Trends', 'Wellness', 'Innovation'].map((topic, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  onClick={() => setSearchTerm(topic)}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-primary/20 transition-colors"
                >
                  #{topic}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </FadeInUp>
      </div>
    </motion.main>
  );
};

export default Trends;