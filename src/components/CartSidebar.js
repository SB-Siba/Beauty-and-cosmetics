import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { FaTrash, FaPlus, FaMinus, FaTimes } from 'react-icons/fa';

const CartSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 200,
              duration: 0.3
            }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex justify-between items-center mb-6"
              >
                <h2 className="text-2xl font-serif">
                  Your Cart ({getCartCount()} {getCartCount() === 1 ? 'item' : 'items'})
                </h2>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose} 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaTimes />
                </motion.button>
              </motion.div>
              
              {cartItems.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="text-6xl mb-4"
                  >
                    🛒
                  </motion.div>
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onClose();
                      navigate('/marketplace');
                    }}
                    className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Continue Shopping
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  {/* Cart Items */}
                  <motion.div 
                    className="space-y-4 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <AnimatePresence mode="popLayout">
                      {cartItems.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{ delay: index * 0.05, type: 'spring', stiffness: 300 }}
                          layout
                          className="flex gap-4 border-b pb-4"
                        >
                          <motion.img 
                            whileHover={{ scale: 1.05 }}
                            src={item.image} 
                            alt={item.name} 
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-primary font-bold">${item.price}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                              >
                                <FaMinus size={12} />
                              </motion.button>
                              <motion.span 
                                key={item.quantity}
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                className="w-8 text-center font-semibold"
                              >
                                {item.quantity}
                              </motion.span>
                              <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                              >
                                <FaPlus size={12} />
                              </motion.button>
                              <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeFromCart(item.id)}
                                className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                              >
                                <FaTrash />
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                  
                  {/* Cart Footer */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="border-t pt-4"
                  >
                    <div className="flex justify-between mb-4">
                      <span className="font-semibold">Subtotal:</span>
                      <motion.span 
                        key={getCartTotal()}
                        initial={{ scale: 0.8, color: '#ff6b6b' }}
                        animate={{ scale: 1, color: '#000000' }}
                        className="font-bold text-primary"
                      >
                        ${getCartTotal().toFixed(2)}
                      </motion.span>
                    </div>
                    <div className="flex justify-between mb-4 text-sm text-gray-600">
                      <span>Shipping:</span>
                      <span>Calculated at checkout</span>
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        onClose();
                        navigate('/checkout');
                      }}
                      className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Proceed to Checkout
                    </motion.button>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        onClose();
                        navigate('/marketplace');
                      }}
                      className="w-full mt-3 border border-primary text-primary py-3 rounded-md font-semibold hover:bg-primary/10 transition-colors"
                    >
                      Continue Shopping
                    </motion.button>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;