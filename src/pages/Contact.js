import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../components/ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: '📍', title: 'Address', details: ['123 Beauty Avenue', 'New York, NY 10001'] },
    { icon: '📧', title: 'Email', details: ['hello@digitalatelier.com'] },
    { icon: '📞', title: 'Phone', details: ['+1 (555) 123-4567'] },
    { icon: '🕒', title: 'Business Hours', details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM'] }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-16"
    >
      <div className="container mx-auto px-4 md:px-8">
        <FadeInUp>
          <h1 className="font-serif text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </FadeInUp>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FadeInLeft>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-serif mb-6 flex items-center gap-2">
                <span className="text-3xl">📞</span>
                Get in Touch
              </h2>
              
              <StaggerContainer className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <StaggerItem key={idx}>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-6 border-t"
              >
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {['📘', '📷', '🐦', '💼'].map((social, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl hover:bg-primary/20 transition-colors"
                    >
                      {social}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </FadeInLeft>
          
          <FadeInRight>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-serif mb-6 flex items-center gap-2">
                <span className="text-3xl">✉️</span>
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                  />
                </motion.button>
                
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-green-600 text-center p-3 bg-green-50 rounded-lg"
                    >
                      ✓ Thank you! We'll get back to you soon.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </FadeInRight>
        </div>

        {/* Map Section */}
        <FadeInUp>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              title="Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1x3024.2219901290355!2d-74.00369368400567!3d40.71312937933043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb111e1%3A0x24c3e7e8b6b5e8e2!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </FadeInUp>
      </div>
    </motion.main>
  );
};

export default Contact;