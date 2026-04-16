import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      alert('Please login to complete your purchase');
      navigate('/login');
      return;
    }
    
    // Process order
    const order = {
      id: Date.now(),
      items: cartItems,
      total: getCartTotal(),
      customer: formData,
      date: new Date().toISOString()
    };
    
    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cart
    clearCart();
    
    alert('Order placed successfully!');
    navigate('/order-confirmation');
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-8">
        <h1 className="font-serif text-4xl mb-8">Checkout</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      required
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        required
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        required
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                Place Order • ${getCartTotal().toFixed(2)}
              </button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-serif mb-4">Your Order</h3>
              
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4 mb-4 pb-4 border-b">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-primary font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
              
              <div className="space-y-2 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;