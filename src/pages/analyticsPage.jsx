import React from 'react';
import BroNavbar from '../components/BrokerNavigationBar';

export const AnalyticsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <BroNavbar />
      <div className="max-w-md mx-auto p-4">
        <div className="text-2xl font-bold mb-4">Analytics</div>

        {/* Sample section with a heading and a graph */}
        <div className="bg-white rounded shadow p-4 mb-6">
          <h3 className="text-lg font-bold mb-3">Coupon Usage vs. Span of Validity</h3>
          <img
            className="w-full h-auto"
            src="https://via.placeholder.com/282x152"
            alt="Graph"
          />
        </div>

        {/* Repeated venue section */}
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="bg-white rounded shadow mb-6 p-4">
            <div className="flex items-center mb-2">
              <div className="bg-zinc-300 rounded-full w-10 h-10 mr-3" />
              <div className="text-sm font-bold">Name of Venue</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sky-500 text-xs underline cursor-pointer">See reviews</div>
              <img
                className="transform rotate-180"
                src="https://via.placeholder.com/19x15"
                alt="Arrow"
              />
            </div>
            <div className="text-xs mt-2">
              <div className="font-bold mb-1">Conditions</div>
              <p>Entry before 2 pm <br/>Dine in only <br/>Maximum of 3 patrons</p>
              <div className="font-bold mt-2">Deal</div>
              <p>20% off pizza</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsPage;
