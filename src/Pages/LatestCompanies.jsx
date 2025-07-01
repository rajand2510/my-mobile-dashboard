import React, { useState, useEffect, useRef } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const LatestCompanies = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeTab, setActiveTab] = useState('companies');
  const footerRef = useRef(null);
  const navRef = useRef(null);

  const companies = [
    "DIGIFYU IT SOLUTION (OPC) PRIVATE LIMITED",
    "CHANDRATAAL VENTURES INDIA PRIVATE LIMITED",
    "AGRAWAL REGENERATIVE PRIVATE LIMITED",
    "AYKANSH ENTERPRISES PRIVATE LIMITED",
    "ASHNAK ENTERPRISES PRIVATE LIMITED",
    "VLAKX DESIGNS PRIVATE LIMITED",
    "XOLONEXT TECHNOLOGIES PRIVATE LIMITED",
    "TTF REAL ESTATE PRIVATE LIMITED",
    "GOODWATER HYDRATION (OPC) PRIVATE LIMITED",
    "COGNIFY LEARNING LIMITED",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col pb-20">
      {/* ✅ Reusable Header */}
      <Header navRef={navRef} />

      {/* ✅ Main Content */}
      <main className="flex-grow w-full px-4 py-4 overflow-y-auto">
        <div className="container-fluid">
          <div className="w-full">
            <div className="card p-4 bg-white rounded-lg shadow-md mb-4">
              <h1 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Latest Companies
              </h1>

              {companies.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-2">
                  {companies.map((company, index) => (
                    <button
                      key={index}
                      className="border border-blue-600 text-blue-600 rounded-full px-4 py-2 text-sm hover:bg-blue-600 hover:text-white transition duration-200"
                    >
                      {company}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">Sorry, No data found...</p>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* ✅ Reusable Footer */}
      <Footer
        footerRef={footerRef}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
    </div>
    </div>
  );
};

export default LatestCompanies;
