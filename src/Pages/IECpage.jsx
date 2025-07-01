import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IECpage = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [searchFor, setSearchFor] = useState('');
  const [keyword, setKeyword] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeTab, setActiveTab] = useState('iec-latest');

  const navRef = useRef(null);
  const footerRef = useRef(null);
  const [mainContentPadding, setMainContentPadding] = useState({ paddingTop: '0px', paddingBottom: '0px' });

  useEffect(() => {
    const updateMainContentPadding = () => {
      if (navRef.current && footerRef.current) {
        const navHeight = navRef.current.offsetHeight;
        const footerHeight = footerRef.current.offsetHeight;
        setMainContentPadding({
          paddingTop: `${navHeight}px`,
          paddingBottom: `${footerHeight}px`,
        });
      }
    };
    updateMainContentPadding();
    window.addEventListener('resize', updateMainContentPadding);
    return () => window.removeEventListener('resize', updateMainContentPadding);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 p-4 text-center">
        <p className="text-xl font-semibold">This application is designed for mobile devices only. Please open it on a mobile phone or resize your browser window to a smaller width.
        </p>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Tailwind CSS and Material Design Iconic Font CDNs */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />
      <div className="min-h-screen bg-gray-100 flex flex-col text-gray-800">
        <Header navRef={navRef} />
        <main
          className="flex-grow w-full px-4 py-4 overflow-y-auto"
          style={{
          }}
        >
          <h1 className="text-2xl font-bold mb-4">IEC</h1>

          {/* Filter Section */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="p-2 border rounded" />
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="p-2 border rounded" />
            <select value={searchFor} onChange={(e) => setSearchFor(e.target.value)} className="p-2 border rounded">
              <option value="">Select</option>
              <option value="not_contacted">Not Contacted</option>
              <option value="contacted">Contacted</option>
            </select>
            <input type="search" placeholder="Search keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="p-2 border rounded" />
          </div>

          {/* No data found */}
          <div className="bg-white text-center text-gray-600 p-4 rounded shadow">
            Sorry, No data found...
          </div>

          {/* Extra space */}
          <div className="h-32"></div>
        </main>
        <Footer footerRef={footerRef} activeTab={activeTab} onTabClick={setActiveTab} />
      </div>
    </div>
  );
};

export default IECpage;
