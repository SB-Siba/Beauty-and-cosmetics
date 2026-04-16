import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ products, onClose, isOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when search is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose]);

  // Search logic
  useEffect(() => {
    if (searchTerm.trim()) {
      setIsLoading(true);
      const timeoutId = setTimeout(() => {
        const filtered = products.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setResults(filtered);
        setIsLoading(false);
      }, 300);
      
      return () => clearTimeout(timeoutId);
    } else {
      setResults([]);
    }
  }, [searchTerm, products]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    onClose();
    setSearchTerm('');
  };

  const clearSearch = () => {
    setSearchTerm('');
    setResults([]);
    inputRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          
          {/* Search Modal */}
          <motion.div
            ref={searchRef}
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="fixed top-[20%] left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-2xl"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="relative p-4 border-b border-gray-200">
                <FaSearch className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 text-base border-0 focus:outline-none focus:ring-0 bg-transparent"
                />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
              
              {/* Results Container */}
              <div className="max-h-[60vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {isLoading && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-8 text-center"
                    >
                      <div className="inline-block w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <p className="mt-3 text-gray-500">Searching products...</p>
                    </motion.div>
                  )}
                  
                  {!isLoading && searchTerm && results.length > 0 && (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="p-2">
                        <div className="px-3 py-2 border-b border-gray-100">
                          <p className="text-xs text-gray-500">
                            Found {results.length} result{results.length !== 1 ? 's' : ''}
                          </p>
                        </div>
                        {results.map((product, index) => (
                          <motion.div
                            key={product.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => handleProductClick(product.id)}
                            className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-all duration-200 mx-2"
                          >
                            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.src = 'https://via.placeholder.com/48?text=No+Image';
                                }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-gray-800 truncate">{product.name}</p>
                              <p className="text-sm text-gray-500">{product.category}</p>
                            </div>
                            <p className="text-primary font-bold whitespace-nowrap">
                              ${product.price.toFixed(2)}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {!isLoading && searchTerm && results.length === 0 && (
                    <motion.div
                      key="no-results"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-12 text-center"
                    >
                      <div className="text-5xl mb-4">🔍</div>
                      <p className="text-gray-500 text-lg">No products found for "<strong>{searchTerm}</strong>"</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Try checking your spelling or using different keywords
                      </p>
                    </motion.div>
                  )}
                  
                  {!searchTerm && (
                    <motion.div
                      key="initial"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-8 text-center"
                    >
                      <div className="text-5xl mb-4">🔎</div>
                      <p className="text-gray-500">Start typing to search products</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Search by name, category, or description
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Footer with suggestions */}
              {!searchTerm && !isLoading && products.length > 0 && (
                <div className="border-t border-gray-100 p-3 bg-gray-50">
                  <p className="text-xs text-gray-500 mb-2">Popular searches:</p>
                  <div className="flex flex-wrap gap-2">
                    {[...new Set(products.slice(0, 5).map(p => p.category))].map((category, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSearchTerm(category)}
                        className="text-xs px-3 py-1 bg-white rounded-full border border-gray-200 text-gray-600 hover:border-primary hover:text-primary transition-colors"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchBar;