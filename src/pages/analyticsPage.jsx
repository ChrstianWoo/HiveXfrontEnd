
import BroNavbar from '../components/BrokerNavigationBar';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const AnalyticsPage = () => {
  const [accordionOpen, setAccordionOpen] = useState(Array(3).fill(false));
  const toggleAccordion = (index) => {
    setAccordionOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <BroNavbar />
      <div className="max-w-md mx-auto p-4">
        <div className="text-2xl font-bold mb-4">Analytics</div>

        {[1, 2, 3].map((_, index) => (
          <div key={index} className="bg-white rounded shadow mb-6 p-4">
            <div className="flex items-center mb-2">
              {/* Add image here */}
              <div className="text-sm font-bold">Name of Venue</div>
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <div className="text-sky-500 text-xs underline">See reviews</div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`w-4 h-4 transition-transform transform ${
                  accordionOpen[index] ? 'rotate-180' : ''
                }`}
                onClick={() => toggleAccordion(index)}
              />
            </div>

            {accordionOpen[index] && (
              <div className="text-xs mt-2">
                <div className="font-bold mb-1">Conditions</div>
                <p>Entry before 2 pm <br />Dine in only <br />Maximum of 3 patrons</p>
                <div className="font-bold mt-2">Deal</div>
                <p>20% off pizza</p>

                {/* Include the Coupon Usage vs. Span of Validity section here */}
                <div className="font-bold mt-2">Coupon Usage vs. Span of Validity</div>
                <img
                  className="w-full h-auto"
                  src="https://via.placeholder.com/282x152"
                  alt="Graph"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsPage;