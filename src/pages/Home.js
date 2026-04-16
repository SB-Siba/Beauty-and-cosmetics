import React from 'react';
import Hero from '../components/Hero';
import CategoryShowcase from '../components/CategoryShowcase';
import FeaturedProducts from '../components/FeaturedProducts';
import RoutineBuilder from '../components/RoutineBuilder';
import Sustainability from '../components/Sustainability';
import InstagramGrid from '../components/InstagramGrid';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <RoutineBuilder />
      <Sustainability />
      <InstagramGrid />
      <Testimonials />
    </main>
  );
};

export default Home;