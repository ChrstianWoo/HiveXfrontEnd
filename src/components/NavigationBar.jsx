import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src="assets/hiveX.png" alt="Logo" className="w-12 h-12" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-800 hover:text-blue-500">Home</Link>
            <Link to="/available-offers" className="text-gray-800 hover:text-blue-500">Available Offers</Link>
            <Link to="/my-wallet" className="text-gray-800 hover:text-blue-500">My Wallet</Link>
          </div>
          <div className="flex items-center space-x-4">
            <img src="assets/profile-logo.png" alt="Profile Logo" className="w-10 h-10 rounded-full" />
            <Link to="/broker-page" className="btn-outline-blue">Switch to Broker</Link>
            <Link to="/login" className="btn-outline-blue">Sign Out</Link>
          </div>
        {/* Hamburger button */}
        <button
          className="text-black lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {/* Responsive menu */}
      {menuOpen && (
        <div className="lg:hidden">
          <ul className="mt-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/available-offers">Available Offers</Link>
            </li>
            <li>
              <Link to="/my-wallet">My Wallet</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
