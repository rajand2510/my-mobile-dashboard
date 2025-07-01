import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LatestGSTPage = ({ isLoggedIn }) => {
  const latestGSTCompanies = [
    "SHREE AMBICA ENGINEERING",
    "PARTH LAMINATION",
    "POWER TRANSPORT AND LOGISTICS",
    "SHREE YANTRA UDHYOG CNC",
    "SANGHAVI BROTHERS",
    "RANJEET TRAVEL",
    "H.V.ENTERPRISE",
    "RAJOY SOLUTIONS",
    "SANKALP BUILDCON",
    "HEENA TOURS AND TRAVELS",
  ];

  return (

    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
            {/* Tailwind CSS and Material Design Iconic Font CDNs */}
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />

    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-4 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Latest GST Card */}
          <div className="col-span-1 bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-2xl font-semibold mb-4">Latest GST</h1>
            <div className="text-center">
              {latestGSTCompanies.map((company, index) => (
                <button
                  key={index}
                  className="inline-block border border-gray-400 rounded-full px-4 py-2 m-1 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  {company}
                </button>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <a
                href="https://finanvo.in/gst/profile/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  Know More
                </button>
              </a>
              <a href="/gst/profile">
                <button className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-md ml-3 hover:bg-gray-100">
                  Back
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Footer */}
      <Footer isLoggedIn={isLoggedIn} onTabClick={() => {}} />
    </div>
    </div>
  );
};

export default LatestGSTPage;
