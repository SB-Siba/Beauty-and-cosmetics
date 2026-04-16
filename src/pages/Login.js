import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        alert('Login successful!');
        navigate('/');
      } else {
        if (!formData.name || !formData.email || !formData.password) {
          setError('All fields are required');
          return;
        }
        // Register logic here
        alert('Registration successful! Please login.');
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-8 max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-600">
              {isLogin ? 'Login to your account' : 'Sign up for exclusive offers'}
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary"
                  required={!isLogin}
                />
              </div>
            )}
            
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>
            
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>
          
          <div className="text-center mt-6">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:underline"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
            </button>
          </div>
          
          {isLogin && (
            <div className="mt-4 text-center">
              <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-primary">
                Forgot password?
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Login;