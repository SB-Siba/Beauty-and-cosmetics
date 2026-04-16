import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaStar, FaStarHalf, FaShoppingCart, FaHeart, FaRegHeart, FaShare } from 'react-icons/fa';

// Magnifier Component
const ImageMagnifier = ({ src, alt, zoomLevel = 2.5, magnifierSize = 150 }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    setShowMagnifier(true);
    if (imageRef.current) {
      setImageSize({
        width: imageRef.current.offsetWidth,
        height: imageRef.current.offsetHeight
      });
    }
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Calculate percentage position
    const xPercent = (x / imageSize.width) * 100;
    const yPercent = (y / imageSize.height) * 100;
    
    setPosition({ x: xPercent, y: yPercent });
  };

  return (
    <div 
      className="relative overflow-hidden rounded-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover cursor-crosshair"
      />
      
      {showMagnifier && (
        <div
          className="absolute pointer-events-none border-2 border-white rounded-full shadow-lg"
          style={{
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: 'translate(-50%, -50%)',
            background: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${imageSize.width * zoomLevel}px ${imageSize.height * zoomLevel}px`,
            backgroundPosition: `${-position.x * (zoomLevel - 1)}% ${-position.y * (zoomLevel - 1)}%`,
            borderRadius: '50%',
            boxShadow: '0 0 0 3px rgba(255,255,255,0.5), 0 0 0 6px rgba(0,0,0,0.1)',
            zIndex: 50
          }}
        />
      )}
    </div>
  );
};

// Alternative: Lens Magnifier Component
const LensMagnifier = ({ src, alt, zoomLevel = 2 }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    setShowMagnifier(true);
    if (imageRef.current) {
      setImageSize({
        width: imageRef.current.offsetWidth,
        height: imageRef.current.offsetHeight
      });
    }
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const handleMouseMove = (e) => {
    const { left, top } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setPosition({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover cursor-none"
      />
      
      {showMagnifier && (
        <div
          className="absolute pointer-events-none bg-white rounded-full shadow-2xl overflow-hidden"
          style={{
            width: '200px',
            height: '200px',
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
            border: '3px solid white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            zIndex: 50
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${imageSize.width * zoomLevel}px ${imageSize.height * zoomLevel}px`,
              backgroundPosition: `${-(position.x * zoomLevel) + (200 / 2)}px ${-(position.y * zoomLevel) + (200 / 2)}px`,
            }}
          />
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const { isAuthenticated } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [magnifierType, setMagnifierType] = useState('circle'); // 'circle' or 'lens'

  // Mock product data - in real app, fetch from API
  const product = {
    id: parseInt(id),
    name: 'Velvet Bloom Serum',
    category: 'Skincare',
    price: 84.00,
    rating: 4.8,
    reviews: 124,
    description: 'A revolutionary serum that combines botanical extracts with cutting-edge skincare technology. Formulated to hydrate, brighten, and reduce fine lines.',
    ingredients: ['Rosehip Oil', 'Vitamin C', 'Hyaluronic Acid', 'Niacinamide', 'Green Tea Extract'],
    howToUse: 'Apply 2-3 drops to clean, dry skin morning and night. Gently pat into face and neck until fully absorbed.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFQtun16eXrm9qwg0e24jGrMmLUjboUP-XKpTVzoEOAmUaMWVEa0xC7UusZeQE9CNzKZGOnZn8nQfO6dEqHGfUUxHKU0X1-cn42zCDC6jW1jHHFI4MFdSg2j-12feGYmR5lGc4-0SHH7maoTbvWiQat4oNWbGinz6y7PzmEahSRJocjsxKSyOpGqHoFSMmrnVE0EIh9Uvolu7PQ-NxDRxKJ4ZS0AsRKLrU9AFGXgKgQgELPmVqN6kJEtPyLKci7Ei6JYFe9VfxL8tD',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAEnMiDW7NcfoYN965PYsDoK6XueogKykZVS-n19YpGiU7McINd6bib8deWmPBvIWKZf3FwTcI2cJ5E273ecyDF95R-J7rylAkTzmHtSW9lGzIwgl5rrMv8JoUr8iR8LBj4jVAJU6MVk1oODEMkzLyjxo6cIzVs4CpciO_t-57ZQsNHlE7C8h7EI6gEGtPos0ki2TZ0ng9JMc1cSRolSS_6wG60ppIdlh3xEg_57IqGxsR2u2-4crQM3m-xmaYMt_Lb4NF5YjX6RmKm'
    ]
  };

  useEffect(() => {
    // Load reviews from localStorage
    const savedReviews = localStorage.getItem(`reviews_${id}`);
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      alert('Removed from wishlist');
    } else {
      addToWishlist(product);
      alert('Added to wishlist');
    }
  };

  const handleSubmitReview = () => {
    if (!isAuthenticated) {
      alert('Please login to leave a review');
      navigate('/login');
      return;
    }
    
    const review = {
      id: Date.now(),
      ...newReview,
      date: new Date().toISOString(),
      user: JSON.parse(localStorage.getItem('user'))?.name || 'Anonymous'
    };
    
    const updatedReviews = [review, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));
    setNewReview({ rating: 5, comment: '' });
    alert('Review submitted successfully!');
  };

  const MagnifierComponent = magnifierType === 'circle' ? ImageMagnifier : LensMagnifier;

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-8">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <button onClick={() => navigate('/')} className="hover:text-primary">Home</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate('/marketplace')} className="hover:text-primary">Marketplace</button>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images with Magnifier */}
          <div>
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
              <MagnifierComponent 
                src={product.images[selectedImage]} 
                alt={product.name}
                zoomLevel={2.5}
                magnifierSize={180}
              />
            </div>
            
            {/* Magnifier Type Toggle */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-4">
                <button
                  onClick={() => setMagnifierType('circle')}
                  className={`text-sm px-3 py-1 rounded-md transition-colors ${
                    magnifierType === 'circle' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Circle Magnifier
                </button>
                <button
                  onClick={() => setMagnifierType('lens')}
                  className={`text-sm px-3 py-1 rounded-md transition-colors ${
                    magnifierType === 'lens' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Lens Magnifier
                </button>
              </div>
              <p className="text-xs text-gray-500">💡 Hover over image to zoom</p>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-primary scale-105' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-4xl mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="font-semibold">{product.rating}</span>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">{product.category}</span>
            </div>
            
            <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Quantity:</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border rounded-full hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border rounded-full hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-white py-4 rounded-md font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <FaShoppingCart />
                Add to Cart
              </button>
              <button
                onClick={handleWishlist}
                className="w-14 h-14 border border-gray-300 rounded-md hover:border-primary flex items-center justify-center transition-colors"
              >
                {isInWishlist(product.id) ? 
                  <FaHeart className="text-red-500 text-xl" /> : 
                  <FaRegHeart className="text-gray-600 text-xl" />
                }
              </button>
              <button className="w-14 h-14 border border-gray-300 rounded-md hover:border-primary flex items-center justify-center transition-colors">
                <FaShare className="text-gray-600 text-xl" />
              </button>
            </div>
            
            {/* Product Details Tabs */}
            <div className="border-t pt-6">
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">Ingredients</h3>
                <p className="text-gray-700">{product.ingredients.join(', ')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">How to Use</h3>
                <p className="text-gray-700">{product.howToUse}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 pt-8 border-t">
          <h2 className="font-serif text-3xl mb-6">Customer Reviews</h2>
          
          {/* Write Review */}
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h3 className="font-semibold text-lg mb-4">Write a Review</h3>
            <div className="mb-4">
              <label className="block mb-2">Rating:</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className="text-2xl transition-transform hover:scale-110"
                  >
                    {star <= newReview.rating ? '★' : '☆'}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              placeholder="Share your experience with this product..."
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
              rows="4"
            />
            <button
              onClick={handleSubmitReview}
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Submit Review
            </button>
          </div>
          
          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review!</p>
            ) : (
              reviews.map(review => (
                <div key={review.id} className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="font-semibold">{review.user}</span>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 mt-2">{review.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;