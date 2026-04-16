import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img 
          className="w-full h-full object-cover" 
          alt="beauty products" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFQa9Vj27pa-69vvC4x0hQwpw7ZICIZonxMfcJiVoLcRGUZanwW6jiDE1TazgV1xAdTpe-PAlKQ-Q5VdajMzoOXihOuzDF8otBoUFN1DKXxViusV7evSEUuc3uKEML_GmOmrJA27n7JMKLFa2pMmo2HJvK4gVdPeSIUnptHZlHdb22TrADU7EbJslrZkQO5co5Sr66rOc4mWMGgj_iQcKCW_Bq9OUSeugiTakwJaDRtFHV79hmOJvm0fMvPOzSDGZttfEqyxgbOnPV"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-12">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white uppercase tracking-[0.2em] font-bold mb-4 block"
          >
            New Collection
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            The Soul of <br/><span className="italic font-light">Radiance.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 max-w-md mb-8 text-base md:text-lg"
          >
            Bespoke formulations crafted with botanical precision. Discover the editorial standard for natural luxury.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <button 
              onClick={() => navigate('/marketplace')}
              className="px-6 md:px-10 py-3 md:py-4 bg-gradient-to-br from-[#7c5730] to-[#d2a476] text-white rounded-md font-medium hover:opacity-90 transition-all shadow-xl"
            >
              Explore Marketplace
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="px-6 md:px-10 py-3 md:py-4 bg-white/20 backdrop-blur text-white rounded-md font-medium hover:bg-white/30 transition-all"
            >
              Our Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;