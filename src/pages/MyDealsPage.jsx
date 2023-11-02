import React from 'react';
import BroNavbar from '../components/BrokerNavigationBar';

export const MyDealsPage = () => {
  return (
    <div className="bg-white">
      <BroNavbar />
      <div className="max-w-sm mx-auto bg-white">
        
        
        <div className="p-4">
          {/* Placeholder for an image or a graphic representation */}
          <div className="bg-zinc-300 rounded-full w-10 h-10 mr-4"></div>
          <div>
            <div className="text-xs text-black font-bold">Name of Venue</div>
            <a href="#" className="text-sky-500 text-xs underline">See reviews</a>
            <div className="flex justify-between items-center">
              <div className="bg-zinc-100 p-4">
                <p className="text-xs">Entry before 2 pm<br/>Dine in only<br/>Maximum of 3 patrons</p>
              </div>
              <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
                <img src="https://via.placeholder.com/40x40" alt="Status" />
              </div>
            </div>
            <div className="text-xs">
              <p>20% off pizza at ‘ ‘</p>
            </div>
          </div>
        </div>

        <div className="text-center text-2xl font-bold p-4">
          My Deals
        </div>
      </div>
    </div>
  );
};

export default MyDealsPage;
