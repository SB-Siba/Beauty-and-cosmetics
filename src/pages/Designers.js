import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from '../components/ScrollAnimation';

const designers = [
  { 
    id: 1, 
    name: 'Emma Laurent', 
    specialty: 'Skincare Expert', 
    image: 'https://via.placeholder.com/400', 
    bio: '15+ years of experience in natural skincare formulations',
    achievements: ['Award-winning formulator', 'Published researcher'],
    social: { linkedin: '#', twitter: '#', instagram: '#' }
  },
  { 
    id: 2, 
    name: 'Sophia Chen', 
    specialty: 'Makeup Artist', 
    image: 'https://via.placeholder.com/400', 
    bio: 'Celebrity makeup artist specializing in clean beauty',
    achievements: ['Vogue contributor', 'Celebrity clientele'],
    social: { linkedin: '#', twitter: '#', instagram: '#' }
  },
  { 
    id: 3, 
    name: 'Isabella Rossi', 
    specialty: 'Fragrance Creator', 
    image: 'https://via.placeholder.com/400', 
    bio: 'Master perfumer with a passion for botanical scents',
    achievements: ['International award winner', 'Master perfumer'],
    social: { linkedin: '#', twitter: '#', instagram: '#' }
  },
];

const Designers = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4 md:px-8">
        <FadeInUp>
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              Meet Our Designers
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              The creative minds behind our award-winning collections, 
              bringing innovation and artistry to every product
            </p>
          </div>
        </FadeInUp>
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designers.map((designer) => (
            <StaggerItem key={designer.id}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center overflow-hidden">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-8xl"
                  >
                    {designer.id === 1 && '👩‍🔬'}
                    {designer.id === 2 && '💄'}
                    {designer.id === 3 && '🌸'}
                  </motion.div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      href={designer.social.instagram}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl"
                    >
                      📷
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      href={designer.social.twitter}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl"
                    >
                      🐦
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      href={designer.social.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl"
                    >
                      💼
                    </motion.a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{designer.name}</h3>
                  <p className="text-primary font-semibold mb-3">{designer.specialty}</p>
                  <p className="text-gray-600 mb-4">{designer.bio}</p>
                  
                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {designer.achievements.map((achievement, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                        🏆 {achievement}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="mt-2 text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    View Collection 
                    <span className="text-lg">→</span>
                  </motion.button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Join Our Team CTA */}
        <FadeInUp>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center bg-gradient-to-r from-primary/5 to-tertiary/5 rounded-2xl p-8"
          >
            <h2 className="font-serif text-2xl mb-2">Join Our Creative Team</h2>
            <p className="text-gray-600 mb-4">We're always looking for talented designers and creators</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-md font-semibold"
            >
              View Careers →
            </motion.button>
          </motion.div>
        </FadeInUp>
      </div>
    </motion.main>
  );
};

export default Designers;