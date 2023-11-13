import React from 'react';
import { Link } from 'react-router-dom';
import VenueNavbar from '../components/VenueNavigationBar';

export const RunningDealsPage = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <VenueNavbar />
      <div className="container mt-5">
      <div className="flex flex-col min-h-screen justify-center items-center px-6 py-8 mx-auto lg:py-0">
          <div className="flex justify-center bg-white rounded-lg text-2xl px-4 py-2 md:mt-0 sm:max-w-md xl:p-0 shadow-lg font-bold mb-2">My Running Deals</div>
          <div className="flex flex-row space-x-4">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4">
                {/* Deal card */}
                <div className="bg-zinc-100 p-4 rounded-lg mb-4">
                  <div className="text-center font-bold">Adiamo</div>
                  <img className="mx-auto" src="assets/Medit-Food.jpg" alt="Deal" />
                  <div className="text-xl font-bold mt-2">Coupon Details</div>
                  <div className="text-base font-bold">Discount Up to 50%</div>
                  <div className="text-xs text-center my-2">Valid Until November 20, 2023</div>
                  <div className="font-bold">Restaurant Details</div>
                  <div className="text-[10px]">Phone: +61</div>
                  <div className="text-[10px] mb-4">Email: Meow@gmail.com</div>
                </div>

                <div className="flex justify-end">
                  <Link to="/pause-deal" className="bg-black text-white rounded px-4 py-2">Pause</Link>
                </div>
              </div>
            </div>
          
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4">
                {/* Deal card */}
                <div className="bg-zinc-100 p-4 rounded-lg mb-4">
                <div className="text-center font-bold">Adiamo</div>
                <img className="mx-auto" src="assets/Medit-Food.jpg" alt="Deal" />
                <div className="text-xl font-bold mt-2">Coupon Details</div>
                <div className="text-base font-bold">Discount Up to 50%</div>
                <div className="text-xs text-center my-2">Valid Until November 20, 2023</div>
                <div className="font-bold">Restaurant Details</div>
                <div className="text-[10px]">Phone: +61</div>
                <div className="text-[10px] mb-4">Email: Meow@gmail.com</div>
              </div>

                <div className="flex justify-end">
                <Link to="/pause-deal" className="bg-black text-white rounded px-4 py-2">Pause</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningDealsPage;
