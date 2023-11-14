import React from "react";
import { Link } from "react-router-dom";
import VenueNavbar from "../components/VenueNavigationBar";

const VenueCouponAccept = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <VenueNavbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
          <div className="text-3xl font-bold mb-6">Verify Coupon</div>

          <div className="flex items-center justify-center mb-6">
            <input
              type="text"
              maxLength="4"
              className="box-input text-xl border border-solid border-2 border-purple-700 px-4 py-2 text-center"
            />
          </div>

          <button className="w-full px-8 py-3 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none hover:bg-opacity-80 text-xl">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenueCouponAccept;
