import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp } from './ScrollAnimation';

const testimonials = [
  {
    id: 1,
    text: "The level of ingredient purity in the Velvet Bloom series is unprecedented. It's the only serum I recommend to my clinical clients for daily repair.",
    name: "Dr. Elena Thorne",
    title: "Chief Dermatologist, NY Clinic",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    text: "Absolutely transformative! My skin has never looked better. The glow infusion masque is a game-changer for my morning routine.",
    name: "Sarah Johnson",
    title: "Beauty Editor, Vogue",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    text: "Finally, a brand that combines luxury with sustainability. The refillable packaging and clean ingredients make me feel good about my purchases.",
    name: "Michael Chen",
    title: "Sustainable Living Advocate",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    text: "The satin lip nectar is my new holy grail. It's moisturizing without being sticky, and the color payoff is incredible.",
    name: "Jessica Williams",
    title: "Makeup Artist",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    text: "Customer service is outstanding! They helped me find the perfect skincare routine for my sensitive skin. Highly recommend!",
    name: "David Martinez",
    title: "Verified Buyer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 }
    })
  };

  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <FadeInUp>
              <span className="label-md font-bold text-primary tracking-widest block mb-4">THE VOICES</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Expert <br/><span className="italic font-light">Endorsements</span>
              </h2>
              <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <span className="material-symbols-outlined text-2xl">←</span>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <span className="material-symbols-outlined text-2xl">→</span>
                </button>
              </div>
            </FadeInUp>
          </div>
          
          <div className="lg:w-2/3 relative min-h-[400px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-surface-container-lowest p-6 md:p-10 rounded-2xl shadow-xl"
              >
                <div className="flex text-primary mb-6 justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className="text-2xl"
                      style={{ color: i < current.rating ? '#FFD700' : '#E0E0E0' }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                
                <p className="font-serif text-lg md:text-xl italic text-on-surface-variant mb-8 leading-relaxed text-center lg:text-left">
                  "{current.text}"
                </p>
                
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-container overflow-hidden flex items-center justify-center text-white text-2xl">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">{current.name}</h5>
                    <p className="text-sm opacity-60">{current.title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;