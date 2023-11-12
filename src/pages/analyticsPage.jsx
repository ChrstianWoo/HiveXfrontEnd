
import BroNavbar from '../components/BrokerNavigationBar';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const dealsData = [
  {
    name: 'Ginger and Spice',
    image: '/assets/ginger and spice.png',
    reviewsLink: 'Reviews',
    conditions: 'Entry before 2 pm\nDine in only\nMaximum of 3 patrons',
    deal: '20% off pizza',
    spanOfValidityData: [30, 50, 70, 120, 80, 60, 40, 20, 10, 30, 50, 70,90], 

  },
  {
    name: 'Andiamo',
    image: '/assets/andiamo.png',
    reviewsLink: 'Reviews',
    conditions: 'Entry before 2 pm\nDine in only\nMaximum of 3 patrons',
    deal: '50% off pizza',
    spanOfValidityData: [10,50, 120, 70], 

  },
  {
    name: 'Shanghai Dumpling Bar',
    image: '/assets/Shanghai Dumpling Bar.png',
    reviewsLink: 'Reviews',
    conditions: 'Must spend $10',
    deal: '50% off Dumplings',
    spanOfValidityData: [30, 50, 70, 20, 80, 60, 40, 20, 10, 30, 50, 120,90,30,20,10,4,0,100,70,50], 

  },
  {
    name: 'Shanghai Dumpling Bar',
    image: '/assets/Shanghai Dumpling Bar.png',
    reviewsLink: 'Reviews',
    conditions: 'Must spend $10',
    deal: 'Holiday Deal 80% off',
    spanOfValidityData: [20,30,10,120,60,20,70], 

  },
];


export const AnalyticsPage = () => {
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
        <div className="text-2xl font-bold mb-4">Analytics</div>

        {dealsData.map((deal, index) => (
          <div key={index} className="bg-white rounded shadow mb-6 p-4">
            <div className="flex items-center mb-2">
           
              <img src={deal.image} alt={deal.name} className="rounded-full w-10 h-10 mr-4" />
              <div className="text-sm font-bold">{deal.name}</div>
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
                {deal.conditions.split('\n').map((line, lineIndex) => (
                  <p key={lineIndex}>{line}</p>
                ))}
                <div className="font-bold mt-2">Deal</div>
                <p>{deal.deal}</p>

                <div className="font-bold mt-2">Coupon Usage vs. Span of Validity</div>
                <Line
                  data={{
                    labels: Array.from({ length: 32 }, (_, i) => i), 
                    datasets: [
                      {
                        label: 'Coupon Usage vs. Span of Validity',
                        data: deal.spanOfValidityData,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                      },
                    ],
                  }}
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