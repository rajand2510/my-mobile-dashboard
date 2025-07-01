import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import IECpage from "./Pages/IECPage";
import LatestIECPage from "./Pages/LatestIECPage";
import NGOpage from "./Pages/NGOpage";
import Director from "./Pages/Director";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import LatestCompanies from "./Pages/LatestCompanies";
import ForgotPassword from "./Pages/ForgotPassword";
import Footer from "./components/Footer";
import GSTPage from "./Pages/GSTPage";
import LatestGSTPage from "./Pages/LatestGSTPage";
import AssignedLeadsCin from "./Pages/AssignedLeadsCin";
import MyAccount from "./Pages/MyAccount";
import FinanvoHelp from "./Pages/FinanvoHelp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Auto hide toast message
  useEffect(() => {
    if (toastMessage) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        setToastMessage("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Function to close toast manually
  const handleCloseToast = () => {
    setShowToast(false);
    setToastMessage("");
  };

  // Auth wrapper for protected routes
  const RequireAuth = ({ children }) => {
    if (!isLoggedIn) {
      if (!toastMessage) {
        setToastMessage("Please login to proceed...");
      }
      return <Navigate to="/auth/login" />;
    }
    return children;
  };

  const handleTabClick = (path) => {
    // Handle footer tab clicks if needed
  };

  return (
    <Router>
      {/* ✅ Toast Message */}
      {showToast && toastMessage && (
        <div
          className={`fixed top-3 right-2 transform translate-x-0
                      ${
                        toastMessage.includes("Successfully")
                          ? "bg-green-600"
                          : "bg-red-600"
                      }
                      text-white px-4 py-3 text-center flex items-center justify-end space-x-2
                      z-50 shadow-md rounded-bl-lg`}
        >
          <svg className="w-5 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
              10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
          <span className="font-semibold text-base">{toastMessage}</span>
          <button onClick={handleCloseToast} className="ml-auto text-white hover:text-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* ✅ Routes */}
      <Routes>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
            </RequireAuth>
          }
        />
        <Route path="/iec" element={<IECpage />} />
        <Route path="/iec/latest-iec" element={<LatestIECPage />} />
        <Route path="/ngo" element={<NGOpage />} />
        <Route path="/director" element={<Director />} />
        <Route
          path="/auth/login"
          element={
            <Login
              onLogin={() => {
                setIsLoggedIn(true);
                setToastMessage("Successfully logged in!");
              }}
            />
          }
        />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/" element={<LatestCompanies />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/gst/latest-gst" element={<GSTPage />} />
        <Route path="/gst/profile" element={<LatestGSTPage />} />
        <Route path="/company/assigned-leads" element={<AssignedLeadsCin />} />
        <Route path="/app/user/profile" element={<MyAccount />} />
        <Route path="/support/videos" element={<FinanvoHelp />} />
      </Routes>

      {/* ✅ Footer shown on all pages */}
      <Footer isLoggedIn={isLoggedIn} onTabClick={handleTabClick} />
    </Router>
  );
}

export default App;
