import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const { isAuthenticated } = useAuth();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    alert(`${product.name} added to cart!`);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      alert('Removed from wishlist');
    } else {
      addToWishlist(product);
      alert('Added to wishlist');
    }
  };

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="group cursor-pointer"
    >
      <div className="aspect-[4/5] bg-surface-container-lowest rounded-lg overflow-hidden relative mb-6">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          alt={product.name} 
          src={product.image}
        />
        <button 
          onClick={handleWishlist}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-all"
        >
          {isInWishlist(product.id) ? 
            <FaHeart className="text-red-500 text-xl" /> : 
            <FaRegHeart className="text-gray-600 text-xl" />
          }
        </button>
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 right-4 py-3 bg-white/90 backdrop-blur text-on-surface font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-md flex items-center justify-center gap-2"
        >
          <FaShoppingCart />
          Quick Buy
        </button>
      </div>
      <h4 className="title-lg text-lg font-semibold">{product.name}</h4>
      <p className="text-sm text-on-surface-variant mt-1">{product.category}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="font-serif text-primary font-bold">${product.price}</p>
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm">{product.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;