import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'Collections', path: '/collections' },
      { name: 'Marketplace', path: '/marketplace' },
      { name: 'Trends', path: '/trends' },
      { name: 'Designers', path: '/designers' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' }
    ],
    support: [
      { name: 'Contact Support', path: '/contact' },
      { name: 'FAQs', path: '/faq' },
      { name: 'Returns', path: '/returns' },
      { name: 'Shipping Info', path: '/shipping' }
    ],
    account: [
      { name: 'My Account', path: '/profile' },
      { name: 'My Orders', path: '/orders' },
      { name: 'Wishlist', path: '/wishlist' },
      { name: 'Login/Register', path: '/login' }
    ]
  };

  const socialLinks = [
    { icon: '📷', name: 'Instagram', url: '#' },
    { icon: '📘', name: 'Facebook', url: '#' },
    { icon: '📌', name: 'Pinterest', url: '#' },
    { icon: '🐦', name: 'Twitter', url: '#' },
    { icon: '🎵', name: 'TikTok', url: '#' }
  ];

  return (
    <footer className="w-full mt-auto bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 px-4 md:px-12 py-12 md:py-16 w-full">
        {/* Brand Section with Logo */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            {/* Logo Image */}
            <motion.img 
              whileHover={{ scale: 1.05, rotate: 5 }}
              src="/logo.png" 
              alt="Glow Culture Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback if image doesn't load */}
            <div className="hidden w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg items-center justify-center text-white font-bold text-lg">
              GC
            </div>
            <div className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Glow Culture
            </div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 mb-4 md:mb-6 max-w-xs text-sm leading-relaxed">
            Curating the future of aesthetic living through botanical precision and ethical design.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 shadow-sm"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Footer Links Sections */}
        <div className="flex flex-col gap-3">
          <h6 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Shop</h6>
          {footerLinks.shop.map((link, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                to={link.path} 
                className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm block"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col gap-3">
          <h6 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Company</h6>
          {footerLinks.company.map((link, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                to={link.path} 
                className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm block"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col gap-3">
          <h6 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Support</h6>
          {footerLinks.support.map((link, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                to={link.path} 
                className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm block"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col gap-3">
          <h6 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Account</h6>
          {footerLinks.account.map((link, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                to={link.path} 
                className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm block"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="px-4 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Subscribe to our newsletter for exclusive offers and updates
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-64 px-4 py-2 text-sm border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-primary text-white rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section - Added more spacing */}
      <div className="px-4 md:px-16 lg:px-24 py-6 md:py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Copyright text - moved more to the right */}
          <div className="md:flex-1">
            <p className="text-slate-500 dark:text-slate-400 text-xs text-center md:text-left md:pl-8">
              © 2024 Glow Culture. All rights reserved.
            </p>
          </div>
          
          {/* Links - moved more to the left */}
          <div className="md:flex-1">
            <div className="flex gap-8 justify-center md:justify-end md:pr-8">
              <Link 
                to="/privacy" 
                className="text-slate-500 dark:text-slate-400 hover:text-primary text-xs transition-colors font-medium"
              >
                Privacy
              </Link>
              <Link 
                to="/terms" 
                className="text-slate-500 dark:text-slate-400 hover:text-primary text-xs transition-colors font-medium"
              >
                Terms
              </Link>
              <Link 
                to="/contact" 
                className="text-slate-500 dark:text-slate-400 hover:text-primary text-xs transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;