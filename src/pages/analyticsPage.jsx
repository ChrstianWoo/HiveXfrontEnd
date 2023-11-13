
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
    conditions: 'Entry before 2 pm\nDine in only\nMaximum of 3 patrons',
    deal: '50% off pizza',
    spanOfValidityData: [10,50, 120, 70], 

  },
  {
    name: 'Shanghai Dumpling Bar',
    image: '/assets/Shanghai Dumpling Bar.png',
    conditions: 'Must spend $10',
    deal: '50% off Dumplings',
    spanOfValidityData: [30, 50, 70, 20, 80, 60, 40, 20, 10, 30, 50, 120,90,30,20,10,4,0,100,70,50], 

  },
  {
    name: 'Shanghai Dumpling Bar',
    image: '/assets/Shanghai Dumpling Bar.png',
    conditions: 'Must spend $10',
    deal: 'Holiday Deal 80% off',
    spanOfValidityData: [20,30,10,120,60,20,70], 

  },
];



export const AnalyticsPage = () => {
  const [accordionOpen, setAccordionOpen] = useState(Array(dealsData.length).fill(false));
  const [showPopup, setShowPopup] = useState(false);

  const toggleAccordion = (index) => {
    setAccordionOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
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
              <div>
                <div className="text-sm font-bold">{deal.name}</div>
      
                <p className="text-xs text-gray-500">{deal.deal}</p>
              </div>
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <div
                className="text-sky-500 text-xs underline"
                onClick={openPopup}
              >
                See reviews
              </div>
              <h6 
                className='flex items-center justify-end text-xs underline'
                onClick={() => toggleAccordion(index)}>
                Venue Info
              </h6>
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
                
                <div className="font-bold mt-2">Coupon Usage vs. Span of Validity</div>
                <Line
                  data={{
                    labels: Array.from({ length: 32 }, (_, i) => i), 
                    datasets: [
                      {
                        label: 'Coupon Usage vs. Span of Validity',
                        data: deal.spanOfValidityData,
                        fill: false,
                        borderColor: '#E7B0F8',
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
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div
            className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"
            onClick={closePopup}
          ></div>
          <div className="relative bg-white w-full md:w-1/2 lg:w-1/2 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-purple-700 mb-4">
              User Review
            </h1>
            <article>
                <div class="flex items-center mb-4">
                    <div class="font-medium dark:text-white">
                        <p><b className='italic'>Jese Leos</b> <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                    </div>
                </div>
                <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <h3 class="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking of going back!</h3>
                </div>
                <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                <p class="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                <p class="mb-3 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                <aside>
                    <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people like this</p>
                    <div class="flex items-center mt-3">
                        <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Like</a>
                    </div>
                </aside>
            </article>
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-purple-700 font-bold text-xl cursor-pointer focus:outline-none"
            >
              &#x2716;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsPage;