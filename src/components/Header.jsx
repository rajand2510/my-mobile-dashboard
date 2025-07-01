import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FINANVO_LOGO_URL = "https://finanvo.in/assets/logo/finanvo.png";
const PLACEHOLDER_IMAGE_URL = "https://placehold.co/120x33/E0E0E0/000000?text=Logo";

const Header = ({ navRef }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status on mount
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/auth/login");
  };

  return (
    <div className="w-full shadow-md bg-[#cee0f3]">
      <nav ref={navRef} className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/latest-companies" className="flex-shrink-0">
          <img
            src={FINANVO_LOGO_URL}
            alt="finanvo"
            className="h-8"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = PLACEHOLDER_IMAGE_URL;
            }}
          />
        </Link>

        {/* Conditional Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-red-600 font-bold text-xl"
            title="Logout"
          >
            ⏻
          </button>
        ) : (
          <Link to="/auth/login" className="text-sm font-medium text-blue-700">
            Get Started
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
