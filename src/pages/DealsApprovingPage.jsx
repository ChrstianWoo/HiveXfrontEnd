import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VenueNavbar from '../components/VenueNavigationBar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DealsApprovingPage = () => {
  // Initial state setup
  const initialDealsDetails = {
    venueName: 'Adiamo',
    category: 'Mediterranean Food',
    restriction1: "",
    restriction2: "",
    promo: 'Discount Up to 50%',
    startDate: 'November 11, 2024',
    endDate: 'November 16, 2024',
  };
  const [deals, setDeals] = useState({ ...initialDealsDetails });
  const [showPopup, setShowPopup] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(deals.category);
  const [selectedRestriction1, setSelectedRestriction1] = useState(deals.restriction1);
  const [selectedRestriction2, setSelectedRestriction2] = useState(deals.restriction2);
  const [startDate, setstartDate] = useState(new Date('2024-11-11'));
  const [endDate, setEndDate] = useState(new Date('2024-11-20'));

  // Function definitions
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
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleRestriction1Change = (e) => {
    setSelectedRestriction1(e.target.value);
  };
  const handleRestriction2Change = (e) => {
    setSelectedRestriction2(e.target.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeals({
      ...deals,
      [name]: value,
    });
  };

  // JSX for the component
  return (
    <div className="bg-gray-100 h-screen">
      <VenueNavbar />
      <div className="container mt-5">
        <div className="flex flex-row min-h-screen justify-center items-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4">
              <div className="text-2xl font-bold mb-2">Deals to Approve</div>
              
              {/* Deal card */}
              <div className="bg-zinc-100 p-4 rounded-lg mb-4">
                <div className="text-center font-bold">{deals.venueName}</div>
                <img className="mx-auto" src="assets/Medit-Food.jpg" alt="Deal" />
                <div className="text-xl font-bold mt-2">Deal Details</div>
                <div className="text-base font-bold">{deals.promo}</div>
                <div className="text-xs text-center my-2">
                  {startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} - {endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <div className="font-bold">Restrictions</div>
                <div className="text-[10px]">Category: {selectedCategory}</div>
                <div className="text-[10px]">Restriction 1: {selectedRestriction1}</div>
                <div className="text-[10px] mb-4">Restriction 2: {selectedRestriction2}</div>
              </div>

              <div className="flex justify-end">
                <Link to="/go-live" className="bg-black text-white rounded px-4 py-2 mr-2">Go Live</Link>
                <a onClick={openPopup} className="bg-black text-white rounded px-4 py-2">Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50" onClick={closePopup}></div>
          <div className="relative bg-white w-full md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            {/* Popup Content */}
            <h1 className="text-2xl font-bold text-purple-700 mb-4">Edit Deal Details</h1>
            {/* Form elements for editing deal details */}
<div className="space-y-4">
  <div className="grid grid-cols-2 gap-4">
    <div className="font-semibold">Venue Name</div>
    <input
      type="text"
      name="venueName"
      value={deals.venueName}
      onChange={handleChange}
      className="border rounded px-4 py-2"
    />
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="font-semibold">Promo</div>
    <input
      type="text"
      name="promo"
      value={deals.promo}
      onChange={handleChange}
      className="border rounded px-4 py-2"
    />
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="font-semibold">Category</div>
    <select
      name="category"
      value={selectedCategory}
      onChange={handleCategoryChange}
      className="border rounded px-4 py-2"
    >
      <option value="Mediterranean-Food">Mediterranean Food</option>
                    <option value="Asian-Food">Asian Food</option>
                    <option value="American-Food">American Food</option>
                    <option value="Fine-Dining"> Fine Dining</option>
                    <option value="Coffee Culture">Coffee Culture</option>
                    <option value="Smoothies & Bubble Tea">Smoothies & Bubble Tea</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Nightlife">Nightlife</option>
                    <option value="Outdoor activities">Outdoor activities</option>
                    <option value="Competitive Socialising">Competitive socialising</option>
                    <option value="Art & Culture">Art & Culture</option>
                    <option value="Walks, parks & historical sites">Walks, parks & historical sites</option>
                    <option value="Markets, festivals and events">Markets, festivals and events</option>
                    <option value="Theatre">Theatre</option>
                    <option value="Sport">Sport</option>
                    <option value="Music">Music</option>
                    <option value="Movies">Movies</option>
                    <option value="Wellness">Wellness</option>
    </select>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="font-semibold">Restriction 1</div>
    <select
      name="restriction1"
      value={selectedRestriction1}
      onChange={handleRestriction1Change}
      className="border rounded px-4 py-2"
    >
      <option value="Vegan">Vegan</option>
                    <option value="Gluten-Free">Gluten-Free</option>
                    <option value="Dairy-Free">Dairy-Free</option>
                    <option value="Nut-Allergy">Nut-Alleregy</option>
                    <option value="Fish-Allergy">Fish-Alleregy</option>
                    <option value="Halal">Halal</option>
                    <option value="Fun">Fun</option>
    </select>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="font-semibold">Restriction 2</div>
    <select
      name="restriction2"
      value={selectedRestriction2}
      onChange={handleRestriction2Change}
      className="border rounded px-4 py-2"
    >
      <option value="Vegan">Vegan</option>
                    <option value="Gluten-Free">Gluten-Free</option>
                    <option value="Dairy-Free">Dairy-Free</option>
                    <option value="Nut-Allergy">Nut-Alleregy</option>
                    <option value="Fish-Allergy">Fish-Alleregy</option>
                    <option value="Halal">Halal</option>
                    <option value="Exciting">Exciting</option>
                    <option value=""></option>
    </select>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="font-semibold">Start Date</div>
    <DatePicker
      selected={startDate}
      onChange={(date) => setstartDate(date)}
      dateFormat="MMMM d, yyyy"
      className="border rounded px-4 py-2"
    />
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="font-semibold">End Date</div>
    <DatePicker
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      dateFormat="MMMM d, yyyy"
      className="border rounded px-4 py-2"
    />
  </div>
</div>

            <button
              onClick={handleSave}
              className={`w-full mx-auto text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${isSaved ? 'bg-green-500' : ''}`}
            >
              {isSaved ? 'Saved' : 'Save'}
            </button>
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

export default DealsApprovingPage;
