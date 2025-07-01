import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Toast component for displaying messages
const Toast = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Call the onClose prop to remove the toast from parent state
    }, 1000); // Changed from 3000ms to 1000ms as per your provided code snippet in this turn
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  const typeClasses = {
    error: "bg-red-600",
    success: "bg-green-600",
    warning: "bg-orange-500",
    info: "bg-blue-500",
  };

  const iconClasses = {
    error: "zmdi-close-circle",
    success: "zmdi-check-circle",
    warning: "zmdi-alert-triangle",
    info: "zmdi-info",
  };

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white flex items-center space-x-3 z-50 transition-transform duration-300 ${typeClasses[type] || 'bg-gray-700'}`}
    >
      <i className={`zmdi ${iconClasses[type] || 'zmdi-info'} text-xl`}></i>
      <span>{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose();
        }}
        className="ml-auto focus:outline-none"
      >
        <i className="zmdi zmdi-close text-xl"></i>
      </button>
    </div>
  );
};

const Footer = ({ footerRef, activeTab, onTabClick, isLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("error");

  const footerItems = [
    { name: "Dashboard", icon: "zmdi-home", to: "/dashboard", pathMatch: ["/dashboard"] },
    { name: "Director", icon: "zmdi-account-o", to: "/director", pathMatch: ["/director"] },
    { name: "Company", icon: "zmdi-search", to: "/", pathMatch: ["/"] },
    { name: "GST", icon: "zmdi-account-o", to: "/gst/latest-gst", pathMatch: ["/gst/latest-gst"] },
    { name: "GST", icon: "zmdi-search", to: "/gst/profile", pathMatch: ["/gst/profile"] },
    { name: "IEC", icon: "zmdi-account-o", to: "/iec", pathMatch: ["/iec"] },
    { name: "IEC", icon: "zmdi-search", to: "/iec/latest-iec", pathMatch: ["/iec/latest-iec"] },
    { name: "NGO", icon: "zmdi-account-o", to: "/ngo", pathMatch: ["/ngo"] },
    { name: "Leads CIN", icon: "zmdi-account-o", to: "/company/assigned-leads", pathMatch: ["/company/assigned-leads"] },
    { name: "My Account", icon: "zmdi-account-circle", to: "/app/user/profile", pathMatch: ["/app/user/profile"] },
    { name: "Help", icon: "zmdi-help-outline", to: "/support/videos", pathMatch: ["/support/videos"] },
  ];

  const handleItemClick = (item) => {
    // Define all routes that require authentication
    const protectedRoutes = new Set([
      "/dashboard",
      "/director",
      "/gst/latest-gst", // GST Latest is protected
    ]);

    const isProtected = protectedRoutes.has(item.to);

    if (isLoggedIn) {
      // If logged in, always navigate to the clicked item's path
      onTabClick(item.to);
      navigate(item.to);
    } else {
      // If NOT logged in
      if (isProtected) {
        if (item.to === "/director") {
          // Specific behavior for Director when logged out: show "Session Expired." toast
          setToastMessage("Session Expired.");
          setToastType("error");
          setShowToast(true);
          navigate("/director"); // Redirect to Director
          // Do not navigate away, just show the toast on the current page
          onTabClick(item.to);
        } else if (item.to.startsWith("/gst")) { // Check for any GST path
          // Specific behavior for GST when logged out: show "invalid token" toast
          setToastMessage("invalid token"); // As per new requirement [cite: image_c9eee1.png]
          setToastType("error");
          setShowToast(true);
          navigate("/gst/latest-gst"); // Redirect to GST Latest
          // Do not navigate away, just show the toast on the current page
          onTabClick(item.to);
        }
        else {
          // For other protected routes when logged out: show "Please login..." toast and redirect to login
          setToastMessage("Please login to proceed...");
          setToastType("error");
          setShowToast(true);
          navigate("/auth/login");
        }
      } else {
        // If the clicked item is NOT a protected route (e.g., Company or Help), navigate normally
        onTabClick(item.to);
        navigate(item.to);
      }
    }
  };

  const handleToastClose = () => {
    setShowToast(false);
    setToastMessage("");
    setToastType("error");
  };

  return (
    <>
      <footer
        ref={footerRef}
        className="fixed bottom-0 left-0 right-0 bg-[#003365] text-white shadow-lg z-10"
      >
        <ul className="flex justify-start items-center overflow-x-auto whitespace-nowrap footer-menu">
          {footerItems.map((item, index) => {
            // Determine if the current item is active based on the URL path
            const isActive = item.pathMatch.some((path) =>
              location.pathname === path
            );

            return (
              <li
                key={index}
                // Apply styling based on active state and general appearance
                className={`flex flex-col items-center justify-center p-3 w-1/4 border-r border-gray-700 flex-shrink-0 cursor-pointer text-white
                  ${isActive ? "bg-[#ff2502]" : "hover:bg-[#004488]"}
                  ${index === footerItems.length - 1 ? "border-r-0" : ""}`}
                onClick={() => handleItemClick(item)} // Handle click event
              >
                <div className="flex flex-col items-center w-full h-full text-center">
                  <i className={`zmdi ${item.icon} text-2xl`}></i> {/* Material Design Iconic Font icon */}
                  <span className="font-semibold text-xs mt-1">{item.name}</span> {/* Item name */}
                </div>
              </li>
            );
          })}
        </ul>
      </footer>
      {showToast && (
        <Toast message={toastMessage} type={toastType} onClose={handleToastClose} />
      )}
    </>
  );
};

export default Footer;
