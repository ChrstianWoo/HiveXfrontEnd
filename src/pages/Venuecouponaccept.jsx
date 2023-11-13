import React from 'react';
import { Link } from 'react-router-dom';
import VenueNavbar from '../components/VenueNavigationBar';

const VenueCouponAccept = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="text-2xl font-bold mb-4">Verify Coupon</div>


        <button
          className="mt-4 px-6 py-2  text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VenueCouponAccept;