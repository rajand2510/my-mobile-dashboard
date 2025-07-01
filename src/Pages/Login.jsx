import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    // Dummy credentials
    const dummyEmail = 'admin@example.com';
    const dummyPassword = 'admin123';

    if (email === dummyEmail && password === dummyPassword) {
      localStorage.setItem("isLoggedIn", "true"); // ✅ Store login status
      if (onLogin) onLogin(); // Optional: Notify parent
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      alert('Invalid credentials. Use admin@example.com / admin123');
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
            {/* Tailwind CSS and Material Design Iconic Font CDNs */}
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />
            
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto mt-4 px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-6/12 xl:w-5/12">
            <form noValidate className="bg-white rounded-lg shadow-md p-4 md:p-6 register-form">
              <h4 className="border-b mb-3 mt-0 pb-2 font-bold text-center text-lg md:text-xl">Login</h4>

              <div className="form-field mb-4 flex flex-col">
                <label htmlFor="id_username" className="mb-1 text-base md:text-lg">Email</label>
                <input
                  type="text"
                  id="id_username"
                  name="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="form-field mb-4 flex flex-col">
                <label htmlFor="id_password" className="mb-1 text-base md:text-lg">Password</label>
                <input
                  type="password"
                  id="id_password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="button"
                onClick={handleLoginClick}
                className="w-full text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:opacity-90 mt-2"
                style={{ background: 'linear-gradient(to right, #003365, #002244)' }}
              >
                Login
              </button>

              <div className="text-center link-section mt-4">
                <a href="/auth/forgot-password" className="text-blue-600 hover:underline text-base">
                  Forgot Password?
                </a>
              </div>
              <div className="text-center link-section mt-2">
                <a href="/auth/register" className="text-blue-600 hover:underline text-base">
                  Get Free Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </div>
  );
};

export default Login;
