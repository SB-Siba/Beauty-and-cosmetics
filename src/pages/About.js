import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        duration: 0.6
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.3
      }
    }
  };

  const stats = [
    { id: 1, number: '50K+', label: 'Happy Customers', icon: '😊' },
    { id: 2, number: '100+', label: 'Premium Products', icon: '✨' },
    { id: 3, number: '15+', label: 'Years of Excellence', icon: '🏆' },
    { id: 4, number: '20+', label: 'Countries Served', icon: '🌍' }
  ];

  const team = [
    { id: 1, name: 'Emma Laurent', role: 'Founder & CEO', image: '👩‍💼', bio: 'Former beauty editor with 15+ years experience' },
    { id: 2, name: 'Dr. Sophia Chen', role: 'Head of R&D', image: '👩‍🔬', bio: 'PhD in Cosmetic Chemistry' },
    { id: 3, name: 'Isabella Rossi', role: 'Creative Director', image: '🎨', bio: 'Award-winning product designer' }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Decoration */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, type: "spring" }}
          className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-8 py-20 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-6xl md:text-7xl mb-6 bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent"
            >
              Our Story
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"
            />
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-on-surface-variant mb-8 leading-relaxed"
            >
              Glow Culture was born from a passion for clean, cruelty-free cosmetics 
              that make every woman feel confident and beautiful.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-on-surface-variant mb-12 leading-relaxed"
            >
              What started as a small boutique has grown into a global community of beauty 
              enthusiasts who believe that luxury and sustainability can coexist. Every product 
              is crafted with intention, using only the finest natural ingredients that respect 
              both your skin and the planet.
            </motion.p>
            
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Discover Our Collection
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={sectionRef} className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div 
                variants={iconVariants}
                className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="material-symbols-outlined text-3xl text-primary">spa</span>
              </motion.div>
              <h3 className="font-bold text-xl mb-2">Natural Ingredients</h3>
              <p className="text-on-surface-variant">100% plant-based formulations, free from harmful chemicals</p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-0.5 bg-primary mx-auto mt-4 rounded-full"
              />
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div 
                variants={iconVariants}
                className="w-20 h-20 bg-tertiary-fixed rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="material-symbols-outlined text-3xl text-tertiary">favorite</span>
              </motion.div>
              <h3 className="font-bold text-xl mb-2">Cruelty-Free</h3>
              <p className="text-on-surface-variant">Never tested on animals. Leaping Bunny certified.</p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-0.5 bg-tertiary mx-auto mt-4 rounded-full"
              />
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div 
                variants={iconVariants}
                className="w-20 h-20 bg-secondary-fixed rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="material-symbols-outlined text-3xl text-on-surface">recycling</span>
              </motion.div>
              <h3 className="font-bold text-xl mb-2">Eco-Friendly</h3>
              <p className="text-on-surface-variant">Sustainable packaging with zero-waste initiatives</p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-0.5 bg-secondary mx-auto mt-4 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-tertiary/5">
        <div className="container mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: stat.id * 0.1 }}
                  className="text-4xl mb-2"
                >
                  {stat.icon}
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-primary mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: stat.id * 0.1 + 0.2 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-on-surface-variant">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="font-serif text-4xl mb-4">
              Meet Our Team
            </motion.h2>
            <motion.p variants={itemVariants} className="text-on-surface-variant max-w-2xl mx-auto">
              Passionate experts dedicated to creating the best beauty products for you
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover="hover"
                className="text-center bg-white rounded-2xl p-6 shadow-lg"
              >
                <motion.div
                  variants={iconVariants}
                  className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-6xl"
                >
                  {member.image}
                </motion.div>
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-on-surface-variant text-sm">{member.bio}</p>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="flex justify-center gap-2 mt-4"
                >
                  <button className="w-8 h-8 bg-gray-100 rounded-full hover:bg-primary/20 transition-colors">🔗</button>
                  <button className="w-8 h-8 bg-gray-100 rounded-full hover:bg-primary/20 transition-colors">📧</button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-primary text-white"
      >
        <div className="container mx-auto px-8 text-center">
          <h2 className="font-serif text-4xl mb-4">Join Our Journey</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive updates, beauty tips, and special offers.
          </p>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded-md text-gray-900 flex-1"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default About;