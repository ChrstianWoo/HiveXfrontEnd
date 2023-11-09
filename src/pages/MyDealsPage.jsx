import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import BroNavbar from '../components/BrokerNavigationBar';

export const MyDealsPage = () => {
  const [accordionOpen, setAccordionOpen] = useState(Array(3).fill(false));

  const toggleAccordion = (index) => {
    setAccordionOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="bg-white">
      <BroNavbar />
      <div className="max-w-md lg:max-w-4xl mx-auto p-4">
        <div className="text-2xl font-bold mb-4">My Deals</div>

        {[1, 2, 3].map((_, index) => (
          <div key={index} className="bg-white rounded shadow mb-6 p-4">
            <div className="flex items-center mb-2">
              {/* Placeholder for an image  */}
              <div className="bg-zinc-300 rounded-full w-10 h-10 mr-4"></div>
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
                <div className="flex justify-between items-center mt-2">
                  <div className="font-bold">Deal</div>
                  <div className="text-sky-500 text-xs underline">See Progress</div>
                </div>
                <p>20% off pizza</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDealsPage;