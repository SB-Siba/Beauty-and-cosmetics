import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 Welcome to Glow Culture!<br /><br />I'm your beauty assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Bot responses
  const botResponses = {
    greeting: "Hello! Welcome to Glow Culture! How can I assist you with your beauty journey today? ✨",
    products: "We have a beautiful collection of skincare, makeup, and fragrance products! You can browse our Marketplace or Collections page to see all our offerings. Is there anything specific you're looking for? 💄",
    skincare: "Our skincare line includes serums, masks, moisturizers, and more. The Velvet Bloom Serum and Glow Infusion Masque are customer favorites! Would you like me to recommend something for your skin type? 🧴",
    makeup: "Our makeup collection features satin lip nectar, matte blushes, setting sprays, and more. All products are cruelty-free and made with clean ingredients! 💋",
    fragrance: "Our fragrance collection features unique, botanical-based scents that are both luxurious and eco-friendly. Each scent tells a story! 🌸",
    shipping: "We offer worldwide shipping! Standard shipping takes 5-7 business days (free on orders over $50), Express takes 2-3 business days ($9.99), and Overnight takes 1-2 business days ($19.99). 🚚",
    returns: "We have a 30-day return policy. Items must be unused and in original packaging. Contact our support team to initiate a return! 🔄",
    help: "I can help you with product recommendations, order tracking, shipping information, returns, or any other questions you have! What would you like to know? 🎯",
    fallback: "I'm here to help! You can ask me about our products, shipping, returns, or anything else about Glow Culture. What would you like to know? 💫",
    order: "You can track your order in your account dashboard. You'll also receive a tracking number via email once your order ships! 📦",
    payment: "We accept all major credit cards, PayPal, and Apple Pay. All payments are secure and encrypted! 💳",
    contact: "You can reach our customer support team through our contact page. We typically respond within 24 hours! 📧"
  };

  // Quick replies
  const quickReplies = [
    { id: 'products', label: 'View Products', icon: '🛍️' },
    { id: 'skincare', label: 'Skincare', icon: '💆‍♀️' },
    { id: 'makeup', label: 'Makeup', icon: '💄' },
    { id: 'shipping', label: 'Shipping Info', icon: '🚚' },
    { id: 'returns', label: 'Return Policy', icon: '🔄' },
    { id: 'help', label: 'Help', icon: '🎯' }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 300);
    }

    const hasOpenedChat = localStorage.getItem('chatOpened');
    if (!hasOpenedChat && showBadge) {
      const timer = setTimeout(() => setShowBadge(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, showBadge]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
      return botResponses.greeting;
    } else if (input.includes('product') || input.includes('shop') || input.includes('buy')) {
      return botResponses.products;
    } else if (input.includes('skincare') || input.includes('serum') || input.includes('mask')) {
      return botResponses.skincare;
    } else if (input.includes('makeup') || input.includes('lip') || input.includes('blush')) {
      return botResponses.makeup;
    } else if (input.includes('fragrance') || input.includes('perfume')) {
      return botResponses.fragrance;
    } else if (input.includes('shipping') || input.includes('delivery')) {
      return botResponses.shipping;
    } else if (input.includes('return') || input.includes('refund')) {
      return botResponses.returns;
    } else if (input.includes('order') || input.includes('track')) {
      return botResponses.order;
    } else if (input.includes('payment') || input.includes('pay')) {
      return botResponses.payment;
    } else if (input.includes('contact') || input.includes('support')) {
      return botResponses.contact;
    } else if (input.includes('help')) {
      return botResponses.help;
    } else {
      return botResponses.fallback;
    }
  };

  const sendMessage = async (messageText = null) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;

    const userMessage = {
      id: Date.now(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (replyId) => {
    const reply = quickReplies.find(r => r.id === replyId);
    if (reply) {
      sendMessage(reply.label);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) {
              localStorage.setItem('chatOpened', 'true');
              setShowBadge(false);
            }
          }}
          className="relative w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #7c5730 0%, #5a3915 100%)' }}
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
          
          {/* Notification Badge */}
          {showBadge && !isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: '#ba1a1a' }}
            >
              <span className="text-white text-xs font-bold">1</span>
            </motion.div>
          )}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col"
            style={{ background: '#fff8f5' }}
          >
            {/* Header */}
            <div className="p-4 text-white" style={{ background: 'linear-gradient(135deg, #7c5730 0%, #5a3915 100%)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold" style={{ fontFamily: 'Noto Serif, serif' }}>Glow Culture Assistant</h3>
                  <p className="text-xs opacity-90">Online • Usually replies in seconds</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: '#f4ece9' }}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #7c5730 0%, #5a3915 100%)' }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'text-white rounded-br-none'
                        : 'rounded-bl-none shadow-sm'
                    }`}
                    style={
                      message.sender === 'user'
                        ? { background: 'linear-gradient(135deg, #7c5730 0%, #5a3915 100%)' }
                        : { background: '#ffffff', color: '#1e1b19' }
                    }
                  >
                    <div dangerouslySetInnerHTML={{ __html: message.text }} className="text-sm" />
                    <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                      {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2" style={{ background: 'linear-gradient(135deg, #7c5730 0%, #5a3915 100%)' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="p-3 rounded-2xl rounded-bl-none shadow-sm" style={{ background: '#ffffff' }}>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#7c5730', animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#7c5730', animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#7c5730', animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length < 3 && (
              <div className="p-3 border-t" style={{ borderColor: '#d4c4b7', background: '#ffffff' }}>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <motion.button
                      key={reply.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleQuickReply(reply.id)}
                      className="px-3 py-1.5 rounded-full text-sm transition-colors"
                      style={{ background: '#e8e1de', color: '#50453b' }}
                    >
                      {reply.icon} {reply.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t" style={{ borderColor: '#d4c4b7', background: '#ffffff' }}>
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    border: '1px solid #d4c4b7',
                    background: '#ffffff',
                    color: '#1e1b19'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#7c5730'}
                  onBlur={(e) => e.target.style.borderColor = '#d4c4b7'}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => sendMessage()}
                  disabled={!inputMessage.trim()}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #7c5730 0%, #5a3915 100%)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;