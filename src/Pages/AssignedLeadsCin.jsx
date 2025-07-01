import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AssignedLeadsCin = ({ isLoggedIn }) => {
  const [registrationDate, setRegistrationDate] = useState('2025-06-26');
  const [searchFor, setSearchFor] = useState('not_contacted');
  const [keyword, setKeyword] = useState('');
  const [searchType, setSearchType] = useState('cin');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ registrationDate, searchFor, keyword, searchType });
  };

  return (

        <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
            {/* Tailwind CSS and Material Design Iconic Font CDNs */}
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />

    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">

      {/* Header */}
      <Header />
      {/* Page Content */}
      <main className="flex-grow container mx-auto px-4 py-4 pb-28">
        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full lg:w-1/3 px-2 mb-4">
              <label htmlFor="date" className="block text-gray-700 text-base font-medium mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={registrationDate}
                onChange={(e) => setRegistrationDate(e.target.value)}
                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div className="w-full lg:w-1/3 px-2 mb-4">
              <label htmlFor="searchFor" className="block text-gray-700 text-base font-medium mb-1">
                Search For
              </label>
              <select
                id="searchFor"
                value={searchFor}
                onChange={(e) => setSearchFor(e.target.value)}
                className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              >
                <option value="">Select</option>
                <option value="not_contacted">Not Contacted</option>
                <option value="contacted">Contacted</option>
              </select>
            </div>
          </form>
        </div>

        <div className="flex flex-wrap -mx-2 mt-2">
          <div className="w-full px-2 relative mb-2">
            <input
              type="search"
              placeholder="search keyword here..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="form-input block w-full rounded-md border-gray-300 shadow-sm p-2 pr-28"
            />
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="absolute top-0 right-2 h-full rounded-r-md border-l border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-gray-700 p-2"
            >
              <option value="">Select</option>
              <option value="cin">Company</option>
              <option value="din">Director</option>
            </select>
          </div>
          <div className="w-full px-2 mb-4">
            <small className="text-gray-600">
              Note:{' '}
              <a href="/company/director-contact?type=city" className="font-bold text-blue-600 hover:underline">
                Click here
              </a>{' '}
              to view city wise director contact
            </small>
          </div>
        </div>

        {/* Table Headers */}
        <div className="hidden lg:block mt-4">
          <div className="flex flex-wrap -mx-2 bg-[#cde0f3] border border-gray-300 py-3 px-4 font-semibold text-gray-700">
            <label className="w-full md:w-1/4 px-2">Company</label>
            <label className="w-full md:w-1/4 px-2">Director</label>
            <label className="w-full md:w-1/4 px-2">Registration Date</label>
            <label className="w-full md:w-1/4 px-2">Status</label>
          </div>
        </div>

        {/* Placeholder Content */}
        <div className="mt-4">
          <p className="text-center text-gray-500">No leads found. Please adjust your filters.</p>
        </div>
      </main>
         {/* Footer */}
      <Footer />  
    </div>
   
    </div>
  );
};

export default AssignedLeadsCin;
