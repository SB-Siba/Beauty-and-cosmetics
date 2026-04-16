import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Designers from './pages/Designers';
import Collections from './pages/Collections';
import Trends from './pages/Trends';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Returns from './pages/Returns';
import Shipping from './pages/Shipping';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-surface">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/designers" element={<Designers />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/trends" element={<Trends />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/shipping" element={<Shipping />} />
            </Routes>
            <Footer />
            <Chatbot />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;