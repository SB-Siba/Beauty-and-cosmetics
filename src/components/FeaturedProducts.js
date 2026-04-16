import React from 'react';
import ProductCard from './ProductCard';
import { FadeInUp, StaggerContainer, StaggerItem } from './ScrollAnimation';

const allProducts = [
  { id: 1, name: 'Velvet Bloom Serum', category: 'Skincare', price: 84.00, rating: 4.8, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFQtun16eXrm9qwg0e24jGrMmLUjboUP-XKpTVzoEOAmUaMWVEa0xC7UusZeQE9CNzKZGOnZn8nQfO6dEqHGfUUxHKU0X1-cn42zCDC6jW1jHHFI4MFdSg2j-12feGYmR5lGc4-0SHH7maoTbvWiQat4oNWbGinz6y7PzmEahSRJocjsxKSyOpGqHoFSMmrnVE0EIh9Uvolu7PQ-NxDRxKJ4ZS0AsRKLrU9AFGXgKgQgELPmVqN6kJEtPyLKci7Ei6JYFe9VfxL8tD' },
  { id: 2, name: 'Glow Infusion Masque', category: 'Skincare', price: 62.00, rating: 4.7, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEnMiDW7NcfoYN965PYsDoK6XueogKykZVS-n19YpGiU7McINd6bib8deWmPBvIWKZf3FwTcI2cJ5E273ecyDF95R-J7rylAkTzmHtSW9lGzIwgl5rrMv8JoUr8iR8LBj4jVAJU6MVk1oODEMkzLyjxo6cIzVs4CpciO_t-57ZQsNHlE7C8h7EI6gEGtPos0ki2TZ0ng9JMc1cSRolSS_6wG60ppIdlh3xEg_57IqGxsR2u2-4crQM3m-xmaYMt_Lb4NF5YjX6RmKm' },
  { id: 3, name: 'Satin Lip Nectar', category: 'Makeup', price: 34.00, rating: 4.9, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCLZdJkCLP8vM06z2SnZ9w2otDhwaIxdAQC-MGNliFkbpagHydIWg_rmbvmDjvYe5rZitntsxnTikOMwt-QvE2XOFKFPy0aFyOEfYEaLFxqYsUKL_PPhreR2ntiSyjGIYtp_HWEeSKZmKkA7a1IynMTgoNsveVutmPaRa2YbjSs3JgB0caP7s90NYKwcJAUpYUAjhZ75CuoShDBfa0AWDN6oU6-c1hNonUpn0hpJxEy7ssh5s7QwLKtS85sRxm9itYHcwGokzoKktj' },
  { id: 4, name: 'Hydra-Mist Revive', category: 'Skincare', price: 48.00, rating: 4.8, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIvZigaV8snhylMmraeVUVDyvTKXW1OlUUn9ZMvwYVA8gparymVx4uUPgiblDNlc55bziWqbvWI8BnBnqP1uGgTEQzxXQZm_wlD1DvhNCbrLSf3dAnw-vxHPsNesFDdCrV1lIf8ZjhQOfsFgVrZOJKyO1trmqBlNUiLAyuEWRfw6NqUaRUi_iwWm6VsVhmYr4amM6G5RAioXSyUEGOk5QXZHJ2UNpS1ZunII4PmKh9I41Dc9Tup1RlocQ3SlppBcR9rG2AK_gHaF9G' },
  { id: 5, name: 'Matte Blush', category: 'Makeup', price: 22.99, rating: 4.6, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCLZdJkCLP8vM06z2SnZ9w2otDhwaIxdAQC-MGNliFkbpagHydIWg_rmbvmDjvYe5rZitntsxnTikOMwt-QvE2XOFKFPy0aFyOEfYEaLFxqYsUKL_PPhreR2ntiSyjGIYtp_HWEeSKZmKkA7a1IynMTgoNsveVutmPaRa2YbjSs3JgB0caP7s90NYKwcJAUpYUAjhZ75CuoShDBfa0AWDN6oU6-c1hNonUpn0hpJxEy7ssh5s7QwLKtS85sRxm9itYHcwGokzoKktj' },
  { id: 6, name: 'Setting Spray', category: 'Makeup', price: 27.99, rating: 4.7, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIvZigaV8snhylMmraeVUVDyvTKXW1OlUUn9ZMvwYVA8gparymVx4uUPgiblDNlc55bziWqbvWI8BnBnqP1uGgTEQzxXQZm_wlD1DvhNCbrLSf3dAnw-vxHPsNesFDdCrV1lIf8ZjhQOfsFgVrZOJKyO1trmqBlNUiLAyuEWRfw6NqUaRUi_iwWm6VsVhmYr4amM6G5RAioXSyUEGOk5QXZHJ2UNpS1ZunII4PmKh9I41Dc9Tup1RlocQ3SlppBcR9rG2AK_gHaF9G' }
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-surface-container-low px-8 lg:px-12">
      <FadeInUp>
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-serif text-4xl mb-4">Curated Selections</h2>
            <p className="body-md text-on-surface-variant">The essentials for your daily ritual.</p>
          </div>
          <a className="label-md font-bold text-primary tracking-widest hover:underline transition-all" href="/marketplace">
            VIEW ALL
          </a>
        </div>
      </FadeInUp>
      
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {allProducts.slice(0, 4).map((product, index) => (
          <StaggerItem key={product.id}>
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default FeaturedProducts;