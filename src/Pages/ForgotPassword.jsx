import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ForgotPassword = () => {
  return (

    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
            {/* Tailwind CSS and Material Design Iconic Font CDNs */}
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />

    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Main Content */}
      <main className="flex-grow container mx-auto mt-4 px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-1/2">
            <form
              noValidate
              className="bg-white p-6 rounded-lg shadow-md register-form"
            >
              <h4 className="border-b pb-2 mb-4 text-center font-bold text-xl">
                Forgot Password
              </h4>

              <div className="mb-4 flex flex-col">
                <label htmlFor="id_email" className="mb-1 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  maxLength={254}
                  required
                  id="id_email"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-400 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
                disabled
              >
                Email reset link
              </button>

              <Link
                to="/auth/login"
                className="block text-left mt-3 text-blue-600 hover:underline"
              >
                Go back to login
              </Link>
            </form>
          </div>
        </div>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
    </div>
  );
};

export default ForgotPassword;
