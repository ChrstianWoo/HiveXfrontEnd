import React from "react";
import { Link } from "react-router-dom";
import VenueNavbar from "../components/VenueNavigationBar";

const VenueCouponAccept = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <VenueNavbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="text-2xl font-bold mb-4">Verify Coupon</div>

     
          <div>
            <input
              type="text"
              maxLength="4"
              className="box-input border border-solid border-2 border-purple-700 mb-4"
            />
          </div>

      
          <button className="w-full px-6 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none hover:bg-opacity-80">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenueCouponAccept;
