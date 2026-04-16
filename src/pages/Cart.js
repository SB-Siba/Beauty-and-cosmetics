import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaTrash, FaPlus, FaMinus, FaShoppingBag } from 'react-icons/fa';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-8 text-center">
          <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-serif mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items yet</p>
          <button
            onClick={() => navigate('/marketplace')}
            className="btn-primary"
          >
            Start Shopping
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-8">
        <h1 className="font-serif text-4xl mb-8">Shopping Cart ({getCartCount()} items)</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 p-4 font-semibold">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>
              
              {cartItems.map(item => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-t p-4">
                  <div className="md:col-span-6 flex gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-sm mt-2 hover:text-red-700 flex items-center gap-1"
                      >
                        <FaTrash size={12} />
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 text-center">
                    <span className="md:hidden font-semibold mr-2">Price:</span>
                    ${item.price}
                  </div>
                  
                  <div className="md:col-span-2 flex items-center justify-center gap-3">
                    <span className="md:hidden font-semibold mr-2">Qty:</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                  
                  <div className="md:col-span-2 text-center font-semibold text-primary">
                    <span className="md:hidden font-semibold mr-2">Total:</span>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
              
              <div className="p-4 bg-gray-50 flex justify-between">
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700"
                >
                  Clear Cart
                </button>
                <button
                  onClick={() => navigate('/marketplace')}
                  className="text-primary hover:text-primary/80"
                >
                  Continue Shopping →
                </button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-serif mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal ({getCartCount()} items)</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                Proceed to Checkout
              </button>
              
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>Free shipping on all orders</p>
                <p className="mt-1">30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;