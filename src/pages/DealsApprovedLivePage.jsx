import React from 'react';
import { Link } from 'react-router-dom';
import VenueNavbar from '../components/VenueNavigationBar';

export const DealsApprovedLivePage = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <VenueNavbar />
      <div className="container mt-5">
        <div className="flex flex-row min-h-screen justify-center items-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-center">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white animate-color-transition">
                    Your Deals is Live Now
                    </h1>
                    <Link to="/running-deals" className="btn btn-animation">
                    Check Your Deals
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
