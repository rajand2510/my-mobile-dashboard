import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const FinanvoHelp = ({ isLoggedIn }) => {
  return (

    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Tailwind CSS and Material Design Iconic Font CDNs */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />

      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-grow container-fluid px-4 md:px-0 py-4">
          {/* Title */}
          <div className="mb-4">
            <h1 className="text-3xl font-semibold video-title">Finanvo Help</h1>
          </div>
        </main>
        {/* Footer */}
        <Footer />

      </div>

    </div>
  );
};

export default FinanvoHelp;
