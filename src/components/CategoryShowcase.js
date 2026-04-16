import React from 'react';
import { motion } from 'framer-motion';

const CategoryShowcase = () => {
  const categories = [
    {
      id: 1,
      title: 'Fragrance',
      description: 'Discover your signature scent.',
      link: '/marketplace?category=fragrance',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARX2RqKl6OyH7UC65HCF44aurpBugogJIJoVcUZoiUGRf98tUa2IEcllQJxk1B4dpRkapEG1vqfJ2Se0mgSPwDbDNWSRZelx0SyXsJpPpC1Au9nOsRewDrKADF7HoVKGtC-ThUXfe-Jx_PEUc_khPRFUqtZ8CqF_XgcvlqKyReRFDNy8KgD4PhBwB6pGH8gEVgqaoK1AdaPZt4-axzSj1BdjM_IuqRQbM6r9DZ2awrCTNPW00ZVirE9fQ4fb6juf8mnu1z8rd3qADW',
      size: 'large'
    },
    {
      id: 2,
      title: 'Skincare',
      description: 'Radiant skin starts here.',
      link: '/marketplace?category=skincare',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACAXnMIbiU7uM8Cv8SBVY8v8_lWwJ3HlJZHSAGKKiN97_DbFGEI7F6wUCnwFprAM7JXOkNKcCUJ08FcZI5Al-KH5_UUju93PsaiD4lY2UnZU43ssLpAsotAzrH0Ffoln18FA_Jgx1en6jX1v2bpNhbA_gQDCNsKGDoQh2YRLaXkeAZrq-e5dwsTz3aF_a0KOkVN8uw5r6EIYoHWQk6LrJKG8dnAF9GOvZkWNCOk3pi_4iYYOBKNICkKt5FIXBWggsiroTxzl0uc0G4',
      size: 'small'
    },
    {
      id: 3,
      title: 'Makeup',
      description: 'Express your beauty.',
      link: '/marketplace?category=makeup',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACQYDykDyRv0OQJpE8KMQekDxZ3ECPXOW078zF_C65d61gTwdmkkcqqYPDVSg8Rz-3e8JJ9natBvdy5OzEP6AZBoITvFiS2ycA4liXDWmgc6bGi5k3SmCk02Brub22KNIhNB99eMy5-FfqmQuztdMyCtY7pGmETxiB1qxBXv4UeX_otf9cGehq6Z6S3xW2MAmMWtRfKYbAMr4jqmIbRoBkh7l73cJoqo66VS-Sj9bKCI6bOt-c9vgzG7DGjEHEnjJLzaAPSu9sEAUM',
      size: 'small'
    }
  ];

  return (
    <section className="py-24 bg-surface px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Shop by Category</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Explore our curated collections designed for your unique beauty journey
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Category - Fragrance */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-8 group relative overflow-hidden rounded-2xl bg-surface-container-low shadow-lg"
            style={{ minHeight: '500px' }}
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt={categories[0].title} 
              src={categories[0].image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
              <h3 className="font-serif text-4xl md:text-5xl mb-3">{categories[0].title}</h3>
              <p className="text-white/90 text-lg mb-4">{categories[0].description}</p>
              <a 
                href={categories[0].link} 
                className="inline-flex items-center gap-2 font-semibold border-b-2 border-white pb-1 hover:gap-3 transition-all duration-300"
              >
                Shop Collection
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Small Categories - Skincare & Makeup */}
          <div className="lg:col-span-4 grid grid-rows-2 gap-6">
            {categories.slice(1).map((category, idx) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
                style={{ minHeight: '240px' }}
              >
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={category.title} 
                  src={category.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-2xl md:text-3xl mb-2">{category.title}</h3>
                  <p className="text-white/80 text-sm mb-3">{category.description}</p>
                  <a 
                    href={category.link} 
                    className="inline-flex items-center gap-1 text-sm font-semibold border-b border-white pb-0.5 hover:gap-2 transition-all duration-300"
                  >
                    Shop Now
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-surface-container-low">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-on-surface-variant">Premium Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50k+</div>
            <div className="text-on-surface-variant">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-on-surface-variant">Authentic Products</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;