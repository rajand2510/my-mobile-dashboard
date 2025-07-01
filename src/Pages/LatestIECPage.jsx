import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";

const FINANVO_LOGO_URL = "https://finanvo.in/assets/logo/finanvo.png";
const PLACEHOLDER_IMAGE_URL = "https://placehold.co/120x33/E0E0E0/000000?text=Logo";

const LatestIECPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeTab, setActiveTab] = useState("iec-latest");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const footerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate('/auth/login');
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(`Switched to tab: ${tabName}`);
  };

  if (!isMobile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 p-4 text-center">
        <p className="text-xl font-semibold">
          This application is designed for mobile devices only. Please open it on a mobile phone or resize your browser window to a smaller width.
        </p>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
            {/* Tailwind CSS and Material Design Iconic Font CDNs */}
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />
            
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col pb-20">
        {/* Header */}
        <header className="w-full shadow-md bg-[#cee0f3]">
          <nav className="container mx-auto px-4 pt-3 pb-1 flex items-center justify-between">
            <a href="/" className="flex-shrink-0">
              <img
                src={FINANVO_LOGO_URL}
                alt="finanvo"
                className="h-8"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = PLACEHOLDER_IMAGE_URL;
                }}
              />
            </a>

            {/* ✅ Conditional Button */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-red-600 font-bold text-xl"
                title="Logout"
              >
                ⏻
              </button>
            ) : (
              <a
                href="/auth/register"
                className="text-sm font-medium text-blue-900 hover:underline"
              >
                Get Started
              </a>
            )}
          </nav>

          {/* Search Bar */}
          <div className="px-4 mt-1 mb-1">
            <div className="relative">
              <input
                type="text"
                className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Search for a iec"
              />
              <span className="absolute right-3 top-2.5 text-gray-500 text-lg">🔍</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow w-full px-4 py-4 overflow-y-auto">
          <div className="container-fluid">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <h1 className="text-lg font-semibold text-gray-800 mb-4">Latest IEC</h1>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <button className="bg-blue-800 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-900 transition-colors duration-300">
                Know More
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-md shadow-md hover:bg-gray-50 transition-colors duration-300">
                Back
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer
          footerRef={footerRef}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
      </div>
    </div>
    </div>
  );
};

export default LatestIECPage;
