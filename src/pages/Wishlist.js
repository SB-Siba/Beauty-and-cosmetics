import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { FaHeart, FaShoppingCart, FaTrash } from 'react-icons/fa';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  if (wishlist.length === 0) {
    return (
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-32 pb-16"
      >
        <div className="container mx-auto px-8 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              damping: 15,
              stiffness: 100,
              duration: 0.5 
            }}
          >
            <FaHeart className="text-6xl text-gray-300 mx-auto mb-6" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-serif mb-4"
          >
            Your wishlist is empty
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mb-8"
          >
            Save your favorite items here
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/marketplace')}
            className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            Explore Products
          </motion.button>
        </div>
      </motion.main>
    );
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-16"
    >
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-serif text-4xl mb-2">
            My Wishlist 
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block ml-2 text-lg text-primary"
            >
              ({wishlist.length} {wishlist.length === 1 ? 'item' : 'items'})
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600"
          >
            Your collection of favorite products
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {wishlist.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                layout
                exit="exit"
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="aspect-[4/5] bg-surface-container-lowest rounded-lg overflow-hidden relative mb-4">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Remove Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-colors shadow-lg"
                  >
                    <FaTrash className="text-red-500" />
                  </motion.button>
                  
                  {/* Overlay with Add to Cart */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        addToCart(product, 1);
                        // Show feedback animation
                        const btn = document.getElementById(`cart-btn-${product.id}`);
                        if (btn) {
                          btn.classList.add('scale-95');
                          setTimeout(() => btn.classList.remove('scale-95'), 200);
                        }
                      }}
                      className="w-full bg-white text-gray-900 py-2 rounded-md flex items-center justify-center gap-2 font-semibold hover:bg-gray-100 transition-colors"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaShoppingCart />
                      </motion.div>
                      Add to Cart
                    </motion.button>
                  </motion.div>

                  {/* Discount Badge (Optional) */}
                  <motion.div
                    initial={{ x: -100, rotate: -45 }}
                    animate={{ x: 0, rotate: 0 }}
                    transition={{ delay: index * 0.05 + 0.2, type: "spring" }}
                    className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded"
                  >
                    SAVE 20%
                  </motion.div>
                </div>
                
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                  className="font-semibold text-lg"
                >
                  {product.name}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 + 0.35 }}
                  className="text-sm text-gray-600"
                >
                  {product.category}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.4 }}
                  className="flex items-center gap-2 mt-1"
                >
                  <p className="text-primary font-bold text-xl">${product.price}</p>
                  <p className="text-gray-400 line-through text-sm">${(product.price * 1.25).toFixed(2)}</p>
                </motion.div>

                {/* Stock Status */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 + 0.45 }}
                  className="mt-2"
                >
                  <span className="text-xs text-green-600 font-semibold">✓ In Stock</span>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quick Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        >
          <div className="bg-white shadow-2xl rounded-full px-6 py-3 flex items-center gap-4">
            <span className="text-gray-700">Quick Actions:</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                wishlist.forEach(item => addToCart(item, 1));
                alert('All items added to cart!');
              }}
              className="px-4 py-1 bg-primary text-white rounded-full text-sm font-semibold"
            >
              Add All to Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/marketplace')}
              className="px-4 py-1 border border-primary text-primary rounded-full text-sm font-semibold"
            >
              Browse More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Wishlist;