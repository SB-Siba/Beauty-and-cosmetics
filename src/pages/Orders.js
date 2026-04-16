import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Orders = () => {
  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  if (!isAuthenticated) {
    window.location.href = '/login';
    return null;
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl mb-8">My Orders</h1>
        
        {orders.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <p className="text-gray-500 mb-4">You haven't placed any orders yet</p>
            <button className="btn-primary">Start Shopping</button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Order #{order.id}</p>
                    <p className="text-sm text-gray-500">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">${order.total.toFixed(2)}</p>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm mt-2">
                      Delivered
                    </span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Items</h4>
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4 py-2">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Orders;