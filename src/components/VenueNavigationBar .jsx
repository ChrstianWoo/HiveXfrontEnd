import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VenueNavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src="assets/hiveX.png" alt="Logo" className="w-13 h-12" />
          </Link>
        </div>

        
        {/* Render navigation links and user profile buttons based on menuOpen state */}
        <div className={`lg:flex items-center space-x-4 ${menuOpen ? 'hidden' : ''}`}>
            <Link to="/" className="text-purple-400 hover:text-purple-700 link-with-underline">Home</Link>
            <Link to="/available-offers" className="text-purple-400 hover:text-purple-700 link-with-underline">Available Offers</Link>
            <Link to="/my-wallet" className="text-purple-400 hover:text-purple-700 link-with-underline">My Wallet</Link>
          <div className="flex items-center space-x-4">
            <img src="assets/profile-logo.png" alt="Profile Logo" className="w-10 h-10 rounded-full" />
            <Link to="" className="btn-outline-blue">Still to be decide</Link>
            <Link to="/logout" className="btn-outline-blue">Account Sign Out</Link>
          </div>
        </div>

        {/* Dropdown menu for smaller screens */}
        {menuOpen && (
          <div className="lg:hidden mt-4">
            <ul>
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
        <div className="lg:hidden">
          <button className="text-black" onClick={toggleMenu}>
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

      </div>
    </nav>
  );
};

export default VenueNavigationBar;
