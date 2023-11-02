import React from 'react';
import { Link } from 'react-router-dom';
import VenueNavbar from '../components/VenueNavigationBar';

export const RunningDealsPage = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <VenueNavbar />
      <div className="max-w-xs mx-auto bg-white">
        
        <div className="p-4">
          <div className="text-2xl font-bold mb-2">My Running Deals</div>
          <div className="bg-zinc-100 p-4 rounded-lg mb-4">
            <div className="text-center font-bold">Venue name</div>
            <img className="mx-auto" src="https://via.placeholder.com/227x112" alt="Deal" />
            <div className="text-xl font-bold mt-2">Coupon Details</div>
            <div className="text-base font-bold">Discount Up to 50%</div>
            <div className="text-xs text-center my-2">Valid Until....</div>
            <div className="font-bold">Restaurant Details</div>
            <div className="text-[10px]">Phone: +61</div>
            <div className="text-[10px] mb-4">Email: Meow@gmail.com</div>
          </div>
          <div className="flex justify-end">
            <button className="bg-black text-white rounded px-4 py-2">Pause</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningDealsPage;
