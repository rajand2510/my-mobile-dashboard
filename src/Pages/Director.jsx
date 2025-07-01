// src/pages/Director.jsx
import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Director = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [searchType, setSearchType] = useState("not_contacted");
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("cin");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const footerRef = useRef(null);
  const navRef = useRef(null); // Optional, if needed for header ref

  useEffect(() => {
    const updateMainContentPadding = () => {
      if (footerRef.current) {
        document.body.style.paddingBottom = `${footerRef.current.offsetHeight}px`;
      }
    };
    updateMainContentPadding();
    window.addEventListener("resize", updateMainContentPadding);
    return () => window.removeEventListener("resize", updateMainContentPadding);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {/* ✅ Header */}
      <Header ref={navRef} />

      {/* ✅ Main Section */}
      <main className="flex-grow w-full px-4 py-4 overflow-y-auto">
        <h1 className="text-xl font-bold mb-4 uppercase">Director Search</h1>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="font-medium text-sm">Date</label>
            <input
              type="date"
              className="form-input w-full border border-gray-300 rounded px-2 py-1"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label className="font-medium text-sm">Search For</label>
            <select
              className="form-select w-full border border-gray-300 rounded px-2 py-1"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="not_contacted">Not Contacted</option>
              <option value="contacted">Contacted</option>
            </select>
          </div>
        </div>

        <div className="relative mb-3">
          <input
            type="search"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Search keyword here..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <select
            className="absolute top-0 right-0 h-full border-l border-gray-300 rounded-r px-2 bg-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="cin">Company</option>
            <option value="din">Director</option>
          </select>
        </div>

        <p className="mb-3 text-xs">
          Note:{" "}
          <a href="/company/director-contact?type=city" className="text-blue-600 font-bold">
            Click here
          </a>{" "}
          to view city wise director contact
        </p>

        <div className="bg-white p-4 rounded shadow text-center text-gray-600">
          You do not have a valid plan to proceed...
        </div>
      </main>
      {/* Footer */}
      <Footer />  

    </div>
    </div>
  );
};

export default Director;
