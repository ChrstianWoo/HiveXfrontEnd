import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import BroNavbar from '../components/BrokerNavigationBar';

export const VenueBrokerPage = () => {
  

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center pt-4">
      <BroNavbar />
      <div className="flex flex-col items-center px-4 w-full max-w-md mx-auto">
        

        {/* Rest of the content goes here, adjusted for responsiveness */}
        {/* For images, ensure you provide alt text for accessibility. */}
        <img className="w-24 h-24" src="https://via.placeholder.com/150" alt="Placeholder" />

        <div className="text-white bg-black p-4 my-4 w-full">
          <h2 className="text-2xl mb-2">Venues Trending Right Now.</h2>
          <p className="text-base">Check out the hottest hospo venues in town.</p>
        </div>

        <div className="text-white bg-black p-4 my-4 w-full">
          <h2 className="text-2xl mb-2">Most Claimed Deals.</h2>
          <p className="text-base">Deals making rounds in the city.</p>
        </div>

        <div className="bg-white p-4 my-4 w-full">
          <h2 className="text-2xl text-black">Keys to writing copy that actually converts and sells users</h2>
          <p className="text-lg mt-2">“The beers are colder at the Maddo” 3.5/5</p>
          <p className="text-lg text-gray-700 mt-2">Author - Madison Hotel</p>
        </div>

        {/* Responsive image grid example */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <img className="w-full h-auto" src="https://via.placeholder.com/150" alt="Placeholder" />
          <img className="w-full h-auto" src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
      </div>
    </div>
  );
};

export default VenueBrokerPage;