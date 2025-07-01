import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GSTPage = ({ isLoggedIn }) => {
  const [date, setDate] = useState('2025-06-26');
  const [searchFor, setSearchFor] = useState('not_contacted');
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, searchFor, keyword });
  };

  return (

    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
            {/* Tailwind CSS and Material Design Iconic Font CDNs */}
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />

    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 mt-3">
        <div className="w-full">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="col-span-1">
              <label htmlFor="date" className="block text-gray-700 text-base font-medium mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="form-control w-full p-2 border border-gray-300 rounded-md"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="searchFor" className="block text-gray-700 text-base font-medium mb-1">
                Search For
              </label>
              <select
                id="searchFor"
                className="form-control w-full p-2 border border-gray-300 rounded-md"
                value={searchFor}
                onChange={(e) => setSearchFor(e.target.value)}
              >
                <option value="">Select</option>
                <option value="not_contacted">Not Contacted</option>
                <option value="contacted">Contacted</option>
              </select>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-1 relative flex items-end mt-2 md:mt-0">
              <input
                type="search"
                placeholder="search keyword here..."
                className="form-control w-full p-2 border border-gray-300 rounded-md pr-10"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass absolute right-3 bottom-3 text-gray-500"></i>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col-12 mt-2">{/* You can render results here */}</div>
          <div className="col-12 mt-4">
            <div className="card bg-white p-4 rounded-lg shadow-sm">
              <p className="mb-0 text-gray-800">Sorry, No data found...</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer isLoggedIn={isLoggedIn} onTabClick={() => {}} />
    </div>
    </div>
  );
};

export default GSTPage;
