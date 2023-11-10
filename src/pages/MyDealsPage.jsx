import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';


import BroNavbar from '../components/BrokerNavigationBar';



const dealsData = [
  {
    name: 'Ginger and Spice',
    image: '/assets/ginger and spice.png',
    reviewsLink: 'Reviews',
    conditions: 'Entry before 2 pm\nDine in only\nMaximum of 3 patrons',
    deal: '20% off pizza',
    status: true, // true for green circle, false for red circle
  },
  {
    name: 'Dominos',
    image: '/assets/Dominos.png',
    reviewsLink: 'Reviews',
    conditions: 'Entry before 2 pm\nDine in only\nMaximum of 3 patrons',
    deal: '50% off pizza',
    status: false, // true for green circle, false for red circle
  },
  {
    name: 'Shanghai Dumpling Bar',
    image: '/assets/Shanghai Dumpling Bar.png',
    reviewsLink: 'Reviews',
    conditions: 'Must spend $10',
    deal: '50% off Dumplings',
    status: null, // null for pending status
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
    <div className="bg-white">
      <BroNavbar />
      <div className="max-w-md lg:max-w-4xl mx-auto p-4">
        <div className="text-2xl font-bold mb-4">My Deals</div>

        {dealsData.map((deal, index) => (
          <div key={index} className="bg-white rounded shadow mb-6 p-4">
            <div className="flex items-center mb-2">
              <img src={deal.image} alt={deal.name} className="rounded-full w-10 h-10 mr-4" />
              <div className="text-sm font-bold">{deal.name}</div>
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
                <div className="flex justify-between items-center mt-2">
                  <div className="font-bold">Deal</div>
                  <div className="text-sky-500 text-xs underline">See Progress</div>
                </div>
                <p>{deal.deal}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDealsPage;