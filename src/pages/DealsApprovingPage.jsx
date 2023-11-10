import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VenueNavbar from '../components/VenueNavigationBar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DealsApprovingPage = () => {
  const initialDealsDetails = {
    venueName: 'Adiamo',
    promo: 'Discount Up to 50%',
    startDate: 'November 11, 2024',
    endDate: 'November 16, 2024',
  };
  const [deals, setDeals] = useState({ ...initialDealsDetails });
  const [showPopup, setShowPopup] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [startDate, setstartDate] = useState(new Date('2024-11-11'));
  const [endDate, setEndDate] = useState(new Date('2024-11-20'));

  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  const handleSave = () => {
    setIsSaved(true);
    // You can add code to save the changes here.
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeals({
      ...deals,
      [name]: value,
    });
  };
  
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <VenueNavbar />
      <div className="flex-grow container mx-auto bg-white shadow-lg mt-4 mb-4 rounded-lg overflow-hidden">
        {/* Header with back icon and title */}
        <div className="p-4 border-b border-gray-200 flex items-center">
          <Link to="/previous-page" className="inline-block">
            {/* Replace with actual icon */}
            <img src="https://via.placeholder.com/20x20" alt="Back" />
          </Link>
          <h1 className="font-bold text-xl text-center flex-grow">Deals to Approve</h1>
        </div>

        {/* Main content */}
        <div className="p-4">
          {/* Deal card */}
          <div className="border border-gray-300 rounded-lg p-4 mb-4">
            {/* Venue image */}
            <img src="https://via.placeholder.com/300x150" alt="Venue" className="w-full h-auto rounded-lg mb-3" />
            {/* Venue name */}
            <h2 className="text-lg font-bold mb-2">{deals.venueName}</h2>
            {/* Deal description */}
            <p className="text-gray-700 mb-3">{deals.promo}</p>
            {/* Date range */}
            <p className="text-gray-500 mb-4">{startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} - {endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            {/* Other details */}
            <div className="text-sm text-gray-700">
              <p>Email: adiamo@pizza.com</p>
              <p>Phone: +61 3 1234 5678</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 flex justify-between">
          <Link to="/go-live" className="bg-black rounded-md text-white text-center px-4 py-2">
            Go Live
          </Link>
          <a onClick={openPopup} className="bg-black rounded-md text-white text-center px-4 py-2">
            Edit
          </a>
        </div>
        {showPopup && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50" onClick={closePopup}></div>
              <div className="relative bg-white w-full md:w-96 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-purple-700 mb-4">Edit Your Profile</h1>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Venue Name</div>
                  <input
                    type="text"
                    name="venueName"
                    value={deals.venueName}
                    onChange={handleChange}
                    className="px-4 py-2"
                  />
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Promo</div>
                  <input
                    type="text"
                    name="promo"
                    value={deals.promo}
                    onChange={handleChange}
                    className="px-4 py-2"
                  />
                </div>
                <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Start Date</div>
                    <div className="px-4 py-2">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setstartDate(date)}
                        dateFormat="MMMM d, yyyy"
                      />
                    </div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">End Date</div>
                    <div className="px-4 py-2">
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="MMMM d, yyyy"
                      />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    onClick={handleSave}
                    class={`w-full mx-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                      isSaved ? 'bg-green-500' : ''
                    }`}
                  >
                    {isSaved ? 'Saved' : 'Save'}
                  </button>
                </div>
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
    </div>
  );
};

export default DealsApprovingPage;
