import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import BroNavbar from '../components/BrokerNavigationBar';

import GingerAndSpicePage from './GingerAndSpicePage';
import AndiamoPage from './AndiamoPage';
import ShanghaiDumplingPage from '../pages/ShanghaiDumplingPage';
const dealsData = [
  {
    name: 'Ginger and Spice',
    image: '/assets/ginger and spice.png',
    reviewsLink: 'See reviews',
    conditions: 'Entry before 2 pm\nDine in only\nMaximum of 3 patrons',
    deal: '20% off pizza',
    status: true, // true for green circle, false for red circle
    pageLink: '/deals/ginger-and-spice', 
  },
  {
    name: 'Andiamo',
    image: '/assets/andiamo.png',
    reviewsLink: 'See reviews',
    conditions: 'Entry before 2 pm\nDine in only\nMaximum of 3 patrons',
    deal: '50% off pizza',
    status: false, 
    pageLink: '/deals/andiamo', 

  },
  {
    name: 'Shanghai Dumpling Bar',
    image: '/assets/Shanghai Dumpling Bar.png',
    reviewsLink: 'See reviews',
    conditions: 'Must spend $10',
    deal: '50% off Dumplings',
    status: null, // null for pending status
    pageLink: '/deals/shanghai-dumpling', 

  },
];

export const MyDealsPage = () => {
  const [accordionOpen, setAccordionOpen] = useState(Array(dealsData.length).fill(false));

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
      <div className="max-w-md lg:max-w-4xl mx-auto p-4">
        <div className="text-2xl font-bold mb-4">My Deals</div>

        {dealsData.map((deal, index) => (
          <div key={index} className="bg-white rounded shadow mb-6 p-4">
            <div className="flex items-center mb-2">
              <img src={deal.image} alt={deal.name} className="rounded-full w-10 h-10 mr-4" />
              <div>
                <div className="text-sm font-bold">{deal.name}</div>
                {/* Move the deal rendering here */}
                <p className="text-xs text-gray-500">{deal.deal}</p>
              </div>
            </div>
            <div className="flex justify-between items-center cursor-pointer">
          
              <div className="text-sky-500 text-xs underline">{deal.reviewsLink}</div>
              <div className="flex items-center">
                {deal.status !== null ? (
                  deal.status ? (
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  ) : (
                    <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 mr-2" />
                  )
                ) : (
                  <FontAwesomeIcon icon={faCircle} className="text-yellow-500 mr-2" />
                )}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`w-4 h-4 transition-transform transform ${
                    accordionOpen[index] ? 'rotate-180' : ''
                  }`}
                  onClick={() => toggleAccordion(index)}
                />
              </div>
            </div>

            {accordionOpen[index] && (
              <div className="text-xs mt-2">
                <div className="font-bold mb-1">Conditions</div>
         
                {deal.conditions.split('\n').map((line, lineIndex) => (
                  <p key={lineIndex}>{line}</p>
                ))}
                <div className=" flex justify-between mt-2">
               
                  <div className="text-sky-500 text-xs underline">See Progress</div>
                  <Link to={deal.pageLink}  className="text-sky-500 text-xs underline ml-auto">
                    About Us
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDealsPage;