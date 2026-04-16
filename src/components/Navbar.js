import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import CartSidebar from './CartSidebar';
import SearchBar from './SearchBar';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getCartCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search on route change
  useEffect(() => {
    setIsSearchOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  const products = [
    { id: 1, name: 'Velvet Bloom Serum', category: 'Skincare', price: 84, description: 'Luxurious anti-aging serum with botanical extracts', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFQtun16eXrm9qwg0e24jGrMmLUjboUP-XKpTVzoEOAmUaMWVEa0xC7UusZeQE9CNzKZGOnZn8nQfO6dEqHGfUUxHKU0X1-cn42zCDC6jW1jHHFI4MFdSg2j-12feGYmR5lGc4-0SHH7maoTbvWiQat4oNWbGinz6y7PzmEahSRJocjsxKSyOpGqHoFSMmrnVE0EIh9Uvolu7PQ-NxDRxKJ4ZS0AsRKLrU9AFGXgKgQgELPmVqN6kJEtPyLKci7Ei6JYFe9VfxL8tD' },
    { id: 2, name: 'Glow Infusion Masque', category: 'Skincare', price: 62, description: 'Hydrating mask for radiant complexion', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEnMiDW7NcfoYN965PYsDoK6XueogKykZVS-n19YpGiU7McINd6bib8deWmPBvIWKZf3FwTcI2cJ5E273ecyDF95R-J7rylAkTzmHtSW9lGzIwgl5rrMv8JoUr8iR8LBj4jVAJU6MVk1oODEMkzLyjxo6cIzVs4CpciO_t-57ZQsNHlE7C8h7EI6gEGtPos0ki2TZ0ng9JMc1cSRolSS_6wG60ppIdlh3xEg_57IqGxsR2u2-4crQM3m-xmaYMt_Lb4NF5YjX6RmKm' },
    { id: 3, name: 'Satin Lip Nectar', category: 'Makeup', price: 34, description: 'Luxurious lip treatment with satin finish', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCLZdJkCLP8vM06z2SnZ9w2otDhwaIxdAQC-MGNliFkbpagHydIWg_rmbvmDjvYe5rZitntsxnTikOMwt-QvE2XOFKFPy0aFyOEfYEaLFxqYsUKL_PPhreR2ntiSyjGIYtp_HWEeSKZmKkA7a1IynMTgoNsveVutmPaRa2YbjSs3JgB0caP7s90NYKwcJAUpYUAjhZ75CuoShDBfa0AWDN6oU6-c1hNonUpn0hpJxEy7ssh5s7QwLKtS85sRxm9itYHcwGokzoKktj' },
    { id: 4, name: 'Hydra-Mist Revive', category: 'Skincare', price: 48, description: 'Refreshing facial mist for instant hydration', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIvZigaV8snhylMmraeVUVDyvTKXW1OlUUn9ZMvwYVA8gparymVx4uUPgiblDNlc55bziWqbvWI8BnBnqP1uGgTEQzxXQZm_wlD1DvhNCbrLSf3dAnw-vxHPsNesFDdCrV1lIf8ZjhQOfsFgVrZOJKyO1trmqBlNUiLAyuEWRfw6NqUaRUi_iwWm6VsVhmYr4amM6G5RAioXSyUEGOk5QXZHJ2UNpS1ZunII4PmKh9I41Dc9Tup1RlocQ3SlppBcR9rG2AK_gHaF9G' }
  ];

  const navLinks = [
    { path: '/marketplace', label: 'Marketplace' },
    { path: '/designers', label: 'Designers' },
    { path: '/collections', label: 'Collections' },
    { path: '/trends', label: 'Trends' },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg' 
            : 'bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl'
        }`}
      >
        <nav className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 max-w-full mx-auto">
          {/* Logo with Image */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.img 
              whileHover={{ scale: 1.05, rotate: 5 }}
              src="/logo.png" 
              alt="Glow Culture Logo" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback if image doesn't load */}
            <div className="hidden w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg items-center justify-center text-white font-bold text-sm md:text-base">
              GC
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-950 dark:text-white group-hover:text-primary transition-colors">
              Glow Culture
            </span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-slate-950 dark:text-white font-bold border-b-2 border-slate-950 dark:border-white'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Right Side Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Search Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-slate-950 dark:text-white hover:scale-110 transition-transform text-xl"
              aria-label="Search"
            >
              🔍
            </button>
            
            {/* Wishlist */}
            <Link to="/wishlist" className="hover:scale-110 transition-transform">
              <span className="text-slate-950 dark:text-white text-xl" aria-label="Wishlist">
                ❤️
              </span>
            </Link>
            
            {/* Cart */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative hover:scale-110 transition-transform"
              aria-label="Cart"
            >
              <span className="text-slate-950 dark:text-white text-xl">🛒</span>
              {getCartCount() > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                >
                  {getCartCount()}
                </motion.span>
              )}
            </button>
            
            {/* User Menu Button */}
            <div className="relative">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="text-slate-950 dark:text-white hover:scale-110 transition-transform text-xl"
                aria-label="User menu"
              >
                👤
              </button>
              
              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl py-2 z-50 border border-gray-100 dark:border-slate-700"
                  >
                    {isAuthenticated ? (
                      <>
                        <div className="px-4 py-3 border-b border-gray-100 dark:border-slate-700">
                          <p className="font-semibold text-gray-800 dark:text-white">{user?.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
                        </div>
                        <Link to="/profile" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 transition-colors">
                          My Profile
                        </Link>
                        <Link to="/orders" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 transition-colors">
                          My Orders
                        </Link>
                        <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 transition-colors">
                          Wishlist
                        </Link>
                        <button 
                          onClick={() => {
                            logout();
                            setIsUserMenuOpen(false);
                          }} 
                          className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-700 text-red-600 dark:text-red-400 transition-colors"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link to="/login" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 transition-colors">
                          Login
                        </Link>
                        <Link to="/register" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 transition-colors">
                          Register
                        </Link>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </motion.header>
      
      {/* Modals */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      <SearchBar 
        products={products}
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Navbar;