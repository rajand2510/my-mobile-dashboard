import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyAccount = ({ isLoggedIn }) => {
    return (

        <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
            {/* Tailwind CSS and Material Design Iconic Font CDNs */}
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />

            <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
                {/* Header */}
                <Header />

                {/* Page Content */}
                <main className="flex-grow container mx-auto px-4 py-6">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">My Account</h2>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex p-1">
                                <label className="block text-lg font-medium text-gray-700">Name:</label>
                                <p className="text-lg font-semibold text-gray-900 ml-1"> {/* Replace dynamically */} </p>
                            </div>
                            <div className="flex p-1">
                                <label className="block text-lg font-medium text-gray-700">Email:</label>
                                <p className="text-lg font-semibold text-gray-900 ml-1"> {/* Replace dynamically */} </p>
                            </div>
                            <div className="flex p-1">
                                <label className="text-lg font-medium text-gray-700">Mobile :</label>
                                <p className="text-lg font-semibold text-gray-900 ml-1">NA</p>
                            </div>
                            <div className="flex p-1">
                                <label className="text-lg font-medium text-gray-700">Designation :</label>
                                <p className="text-lg font-semibold text-gray-900 ml-1">NA</p>
                            </div>
                            <div className="flex p-1">
                                <label className="block text-lg font-medium text-gray-700">City :</label>
                                <p className="text-lg font-semibold text-gray-900 ml-1">NA</p>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <Footer isLoggedIn={isLoggedIn} onTabClick={() => { }} />
            </div>
        </div>
    );
};

export default MyAccount;
