import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = () => {
    const footerRef = useRef(null);
    const [activeTab, setActiveTab] = useState("register");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

            <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col pb-20">
                {/* ✅ Header */}
                <Header />

                <main className="container mx-auto mt-4 px-4 flex-grow">
                    <div className="flex justify-center">
                        <div className="w-full lg:w-6/12 xl:w-5/12">
                            <form
                                noValidate=""
                                className="bg-white rounded-lg shadow-md p-4 md:p-6 register-form"
                            >
                                <h4 className="border-b mb-3 mt-0 pb-2 font-bold text-center text-lg md:text-xl">
                                    Login {/* Based on your screenshot, but should be "Register" logically */}
                                </h4>

                                <div className="form-field mb-4 flex flex-col">
                                    <label htmlFor="id_email" className="mb-1 text-base md:text-lg">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        required=""
                                        id="id_email"
                                        className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="form-field mb-4 flex flex-col">
                                    <label htmlFor="id_mobile" className="mb-1 text-base md:text-lg">
                                        Mobile
                                    </label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        maxLength={10}
                                        required=""
                                        id="id_mobile"
                                        className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="form-field mb-4 flex flex-col">
                                    <label htmlFor="id_password" className="mb-1 text-base md:text-lg">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        required=""
                                        id="id_password"
                                        className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="form-field mb-4 flex flex-col">
                                    <label htmlFor="id_c_password" className="mb-1 text-base md:text-lg">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="cpassword"
                                        required=""
                                        id="id_c_password"
                                        className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="w-full text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:opacity-90 mt-2"
                                    style={{ background: '#708090' }} // Slate gray
                                >
                                    Create account
                                </button>

                                <div className="text-center link-section mt-4">
                                    <a
                                        href="/auth/login"
                                        className="text-blue-600 hover:underline text-base"
                                    >
                                        Already have a account?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>

                {/* ✅ Footer */}
                <Footer
                    footerRef={footerRef}
                    activeTab={activeTab}
                    onTabClick={(tab) => setActiveTab(tab)}
                />
            </div>
        </div>
    );
};

export default Register;
