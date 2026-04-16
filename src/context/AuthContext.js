import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('user');
  });

  const login = (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const user = { email, name: email.split('@')[0], id: Date.now() };
          localStorage.setItem('user', JSON.stringify(user));
          setUser(user);
          setIsAuthenticated(true);
          resolve(user);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  };

  const register = (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          const user = { name, email, id: Date.now() };
          localStorage.setItem('user', JSON.stringify(user));
          setUser(user);
          setIsAuthenticated(true);
          resolve(user);
        } else {
          reject(new Error('All fields are required'));
        }
      }, 500);
    });
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};