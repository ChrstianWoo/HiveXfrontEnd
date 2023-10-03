import React from 'react';
import { Link } from 'react-router-dom';

export const LogOutPage = () => {
  return (
    <section className="bg-gradient-to-b from-yellow-400 to-purple-700 dark:bg-gradient-to-b dark:from-yellow-400 dark:to-purple-700 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <a href="/login" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-28 h-15 mr-0" src={process.env.PUBLIC_URL + '/assets/hiveX.png'} alt="hiveXLogo" />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-center">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white animate-color-transition">
              You Have Been Logged Out
            </h1>
            <Link to="/login" className="btn btn-animation">
              Return to Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
