import React from 'react';
import { Link } from 'react-router-dom';

const GingerAndSpicePage = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold mb-4">Ginger and Spice</div>
        <img src="/assets/ginger and spice.png" alt="Ginger and Spice Logo" className="w-16 h-16 rounded-full" />
      </div>

      <div className="mb-4">
        <p className="font-bold mb-2">SINGAPOREAN</p>
        <p>
          Alex Lee’s famous Singaporean institution has found a new home in Spice Alley. 
          Expect succulent Singapore chilli prawns, old school fried rice, and beautiful kechap manis squid in secret sauce.
        </p>
      </div>

      <div className="mb-4">
        <p className="font-bold mb-2">FAVOURITES</p>
        <ul>
          <li>Singapore chilli prawns</li>
          <li>Kechap manis squid</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-bold mb-2">Contact Details:</p>
        <ul>
          <li>Phone: 0423442342</li>
          <li>Email: Sample@email.com</li>
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <Link to="/my-deals" className="text-blue-500">
          Back
        </Link>
      </div>
    </div>
  );
};

export default GingerAndSpicePage;
