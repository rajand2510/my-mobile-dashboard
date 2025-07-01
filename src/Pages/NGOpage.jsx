import React, { useState, useEffect, useRef } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header"; // ✅ Import shared header

function NGOpage() {
    const [ngoDate, setNgoDate] = useState('2025-06-25');
    const [ngoSearchFor, setNgoSearchFor] = useState('');
    const [ngoSearchKeyword, setNgoSearchKeyword] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [activeTab, setActiveTab] = useState('ngo');
    const footerRef = useRef(null);
    const navRef = useRef(null); // ✅ Optional navRef if needed for header

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

            {/* Main Content */}
            <main className="flex-grow w-full px-4 py-4 overflow-y-auto">
                <div className="container-fluid">
                    <div className="col-12 mt-3">
                        <form noValidate className="flex flex-wrap gap-2 mb-6">
                            <div className="w-full sm:w-[calc(50%-8px)] flex-grow">
                                <label htmlFor="ngoDate" className="block text-sm font-medium mb-1">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="ngoDate"
                                    value={ngoDate}
                                    onChange={(e) => setNgoDate(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-sm"
                                    max="2025-06-25"
                                />
                            </div>
                            <div className="w-full sm:w-[calc(50%-8px)] flex-grow">
                                <label htmlFor="ngoSearchFor" className="block text-sm font-medium mb-1">
                                    Search For
                                </label>
                                <select
                                    id="ngoSearchFor"
                                    value={ngoSearchFor}
                                    onChange={(e) => setNgoSearchFor(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-sm"
                                >
                                    <option value="">Select</option>
                                    <option value="not_contacted">Not Contacted</option>
                                    <option value="contacted">Contacted</option>
                                </select>
                            </div>
                            <div className="w-full relative mt-2">
                                <input
                                    type="search"
                                    placeholder="search keyword here..."
                                    value={ngoSearchKeyword}
                                    onChange={(e) => setNgoSearchKeyword(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm pr-10 focus:ring-green-500 focus:border-green-500"
                                />
                                <svg
                                    className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </form>
                    </div>
                    <div className="w-full mt-2">
                        <div className="card p-4 bg-white rounded-lg shadow-md">
                            <p className="mb-0 text-center text-gray-600">
                                Sorry, No data found...
                            </p>
                        </div>
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
    );
}

export default NGOpage;
