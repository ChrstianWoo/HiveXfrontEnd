import React from 'react';
import { Link } from 'react-router-dom';
import VenueNavbar from '../components/VenueNavigationBar';

export const DealsApprovingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <VenueNavbar />
      <div className="flex-grow container mx-auto bg-white shadow-lg mt-4 mb-4 rounded-lg overflow-hidden">
        {/* Header with back icon and title */}
        <div className="p-4 border-b border-gray-200 flex items-center">
          <Link to="/previous-page" className="inline-block">
            {/* Replace with actual icon */}
            <img src="https://via.placeholder.com/20x20" alt="Back" />
          </Link>
          <h1 className="font-bold text-xl text-center flex-grow">Deals to Approve</h1>
        </div>

        {/* Main content */}
        <div className="p-4">
          {/* Deal card */}
          <div className="border border-gray-300 rounded-lg p-4 mb-4">
            {/* Venue image */}
            <img src="https://via.placeholder.com/300x150" alt="Venue" className="w-full h-auto rounded-lg mb-3" />
            {/* Venue name */}
            <h2 className="text-lg font-bold mb-2">Venue Name</h2>
            {/* Deal description */}
            <p className="text-gray-700 mb-3">Discount Up to 50%</p>
            {/* Date range */}
            <p className="text-gray-500 mb-4">Start Date - End Date</p>
            {/* Other details */}
            <div className="text-sm text-gray-700">
              <p>Email: venue@example.com</p>
              <p>Phone: +61 3 1234 5678</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 flex justify-between">
          <Link to="/go-live" className="bg-black rounded-md text-white text-center px-4 py-2">
            Go Live
          </Link>
          <Link to="/edit-deal" className="bg-black rounded-md text-white text-center px-4 py-2">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DealsApprovingPage;
