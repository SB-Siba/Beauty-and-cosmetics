import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { FadeInUp } from '../components/ScrollAnimation';

const Profile = () => {
  const { user, logout } = useAuth();
  const { wishlist } = useCart();
  const [activeTab, setActiveTab] = useState('profile');

  if (!user) {
    window.location.href = '/login';
    return null;
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <FadeInUp>
          <h1 className="font-serif text-4xl md:text-5xl mb-8">My Profile</h1>
        </FadeInUp>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-container rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white">👤</span>
                </div>
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'profile' ? 'bg-primary text-white' : 'hover:bg-gray-50'
                  }`}
                >
                  Profile Information
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'orders' ? 'bg-primary text-white' : 'hover:bg-gray-50'
                  }`}
                >
                  My Orders
                </button>
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'wishlist' ? 'bg-primary text-white' : 'hover:bg-gray-50'
                  }`}
                >
                  Wishlist ({wishlist.length})
                </button>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:col-span-3">
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <h2 className="text-2xl font-serif mb-6">Profile Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      value={user.name}
                      className="w-full p-3 border rounded-lg bg-gray-50"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      value={user.email}
                      className="w-full p-3 border rounded-lg bg-gray-50"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Member Since</label>
                    <input
                      type="text"
                      value={new Date(user.id).toLocaleDateString()}
                      className="w-full p-3 border rounded-lg bg-gray-50"
                      readOnly
                    />
                  </div>
                  <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90">
                    Edit Profile
                  </button>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'orders' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <h2 className="text-2xl font-serif mb-6">Order History</h2>
                <div className="text-center py-12 text-gray-500">
                  No orders yet. Start shopping!
                </div>
              </motion.div>
            )}
            
            {activeTab === 'wishlist' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <h2 className="text-2xl font-serif mb-6">My Wishlist ({wishlist.length})</h2>
                {wishlist.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    Your wishlist is empty
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {wishlist.map(product => (
                      <div key={product.id} className="flex gap-4 border rounded-lg p-4">
                        <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="font-semibold">{product.name}</h4>
                          <p className="text-primary font-bold">${product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;