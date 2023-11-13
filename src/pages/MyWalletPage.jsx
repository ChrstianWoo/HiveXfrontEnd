import React, { useState, useEffect } from "react";
import Navbar from "../components/NavigationBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ReviewsPopup = ({ isOpen, onClose }) => {
  const [isSent, setIsSent] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [selectedStars, setSelectedStars] = useState(0);
  const openReviewPopup = () => {
    setShowReviewPopup(true);
  };
  const closeReviewPopup = () => {
    setShowReviewPopup(false);
    setIsSent(false);
  };
  const handleSent = () => {
    setIsSent(true);
  };
  const handleStarClick = (stars) => {
    setSelectedStars(stars);
  };
  if (!isOpen) return null;

  
  return (
    // Your Google reviews content goes here
    <div className="popup flex items-center justify-center">
      <div className="popup-inner ">
        <h2 className='flex items-center justify-center font-bold text-xl underline'>Google Reviews</h2>
        {/* Add your Google reviews content here */}
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
                <div class="flex space-x-4 items-center mt-3">
                  <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Like</a>
                  <div onClick={openReviewPopup} className="text-sky-500 text-xs underline">Write a Review</div>
                </div>
            </aside>
        </article>

        <center>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={"w-4 h-4 transition-transform transform rotate-180"}
            onClick={onClose}
          />
        </center>
        {showReviewPopup && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"
                  onClick={closeReviewPopup}
                ></div>
                
                <div className="relative bg-white w-full md:w-1/2 lg:w-1/2 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <h1 className="text-2xl font-bold text-purple-700 mb-4">
                    Write a Review
                  </h1>
                  <h3>Rate out of 5 stars</h3>
                  <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <svg
                        key={index}
                        className={`w-4 h-4 ${
                          index <= selectedStars ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                        onClick={() => handleStarClick(index)}
                        style={{ cursor: 'pointer' }}
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                  <hr className=" my-4" />
                  <div>
                    <textarea
                    name="venueDescription"
                    id="venueDescription"
                    rows="4" // You can adjust the number of rows as needed
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tell what do you like about the venue..."
                    />
                  </div>
                  <hr className=" my-4" />
                  <button
                      type="button"
                      onClick={handleSent}
                      className={`w-full mx-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                        isSent ? 'bg-green-500' : ''
                      }`}
                    >
                      {isSent ? "Sent" : "Send" }
                    </button>
                  <button
                    onClick={closeReviewPopup}
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
export const MyWalletPage = () => {
  const [activeTab, setActiveTab] = useState("myVoucher"); // Initialize the active tab as 'dashboard'
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);
  const [reviewsPopupOpen, setReviewsPopupOpen] = useState(false);
  const [selectedDealIndex, setSelectedDealIndex] = useState(null);
  const generateCouponCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    return code.toString();
  };
  const [couponCode, setCouponCode] = useState(generateCouponCode());
  const toggleReviewsPopup = (index) => {
    setSelectedDealIndex(index);
    setReviewsPopupOpen(!reviewsPopupOpen);
  };
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [accordionOpen, setAccordionOpen] = useState(Array(3).fill(false));
  const toggleAccordion = (index) => {
    setAccordionOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  
  const openPopup = () => {
    setCouponCode(generateCouponCode());
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
    setIsSubmit(false);
  };
  const openRemovePopup = () => {
    setShowRemovePopup(true);
  };
  const closeRemovePopup = () => {
    setShowRemovePopup(false);
    setIsSubmit(false);
  };
  const handleSubmit = () => {
    setIsSubmit(true);
  };
  useEffect(() => {
    // (Jack Api)
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDbmf_oibOuPXvtR11eQJiFcvY148s_Aow&callback=initMap&libraries=&v=weekly`;
    script.async = true;
    document.head.appendChild(script);

    window.initMap = () => {
      const sydneyOperaHouse = { lat: -33.8568, lng: 151.2153 };
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: sydneyOperaHouse,
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="container mt-5">
        <h1 class="MyWallet">
          My Wallet
        </h1>
        
        <div className="flex flex-col justify-center max-w-2xl mx-auto">
          <div className="  border-b border-gray-200 dark:border-gray-700 mb-4">
          <ul className="flex flex-wrap -mb-px" id="myTab" role="tablist">
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block text-gray-500 hover:text-gray-600 border-b-2 border-transparent rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent ${
                  activeTab === "myVoucher"
                    ? "text-purple-800 border-purple-800"
                    : ""
                }`}
                onClick={() => handleTabClick("myVoucher")}
                role="tab"
                aria-controls="myVoucher"
                aria-selected={activeTab === "myVoucher"}
              >
                Avalible Offers
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block text-gray-500 hover:text-gray-600 border-b-2 border-transparent rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent ${
                  activeTab === "myOffers"
                    ? "text-purple-800 border-purple-800"
                    : ""
                }`}
                onClick={() => handleTabClick("myOffers")}
                role="tab"
                aria-controls="settings"
                aria-selected={activeTab === "myOffers"}
              >
                Available Voucher
              </button>
            </li>
            <li role="presentation">
              <button
                className={`inline-block text-gray-500 hover:text-gray-600 border-b-2 border-transparent rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent ${
                  activeTab === "history"
                    ? "text-purple-800 border-purple-800"
                    : ""
                }`}
                onClick={() => handleTabClick("history")}
                role="tab"
                aria-controls="history"
                aria-selected={activeTab === "history"}
              >
                History
              </button>
            </li>
          </ul>
          </div>
          <div id="myTabContent">
            <div
              className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
                activeTab === "history" ? "" : "hidden"
              }`}
              id="history"
              role="tabpanel"
              aria-labelledby="history-tab"
            >
             {[1].map((_, index) => (
              <div key={index} className="bg-white rounded shadow mb-6 p-4">
                <div className="flex items-center mb-2">
                  {/* Add image here */}
                  <div className="text-sm font-bold">Name of Venue</div>
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                  <div onClick={openRemovePopup} className="text-sky-500 text-xs underline">Remove</div>
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

                    <div
                      className="text-sky-500 text-xs underline"
                      onClick={() => toggleReviewsPopup(index)}
                    >
                      See reviews
                    </div>
                    {/* Include the Coupon Usage vs. Span of Validity section here */}
                    <div className="h-64 w-96 bg-gray-100 flex items-center justify-center mx-auto mt-4">
                      <div id="map" className="h-full w-full"></div>
                    </div>
                  </div>
                )}
                <ReviewsPopup
                  isOpen={reviewsPopupOpen && selectedDealIndex === index}
                  onClose={() => toggleReviewsPopup(null)}
                />
              </div>
            ))}
            </div>
            <div
              className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
                activeTab === "myOffers" ? "" : "hidden"
              }`}
              id="myOffers"
              role="tabpanel"
              aria-labelledby="myOffers-tab"
            >
              {[1].map((_, index) => (
              <div key={index} className="bg-white rounded shadow mb-6 p-4">
                <div className="flex items-center mb-2">
                  {/* Add image here */}
                  <div className="text-sm font-bold">Name of Venue</div>
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                  <div onClick={openPopup} className="text-sky-500 text-xs underline">Use Voucher</div>
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
                    <div
                      className="text-sky-500 text-xs underline"
                      onClick={() => toggleReviewsPopup(index)}
                    >
                      See reviews
                    </div>
                    {/* Include the Coupon Usage vs. Span of Validity section here */}
                    <div className="h-64 w-96 bg-gray-100 flex items-center justify-center mx-auto mt-4">
                      <div id="map" className="h-full w-full"></div>
                    </div>
                  </div>
                )}
                <ReviewsPopup
                  isOpen={reviewsPopupOpen && selectedDealIndex === index}
                  onClose={() => toggleReviewsPopup(null)}
                />
              </div>
              ))}
            </div>
            <div
              className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
                activeTab === "myVoucher" ? "" : "hidden"
              }`}
              id="myVoucher"
              role="tabpanel"
              aria-labelledby="myVoucher-tab"
            >
              {[1].map((_, index) => (
                <div key={index} className="bg-white rounded shadow mb-6 p-4">
                  <div className="flex items-center mb-2">
                    {/* Add image here */}
                    <div className="text-sm font-bold">Name of Venue</div>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer">
                    <div  onClick={openPopup} className="text-sky-500 text-xs underline">Accept Voucher</div>
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
                      <div
                        className="text-sky-500 text-xs underline"
                        onClick={() => toggleReviewsPopup(index)}
                      >
                        See reviews
                      </div>
                      {/* Include the Coupon Usage vs. Span of Validity section here */}
                      <div className="h-64 w-96 bg-gray-100 flex items-center justify-center mx-auto mt-4">
                        <div id="map" className="h-full w-full"></div>
                      </div>
                    </div>
                  )}
                  <ReviewsPopup
                    isOpen={reviewsPopupOpen && selectedDealIndex === index}
                    onClose={() => toggleReviewsPopup(null)}
                  />
                </div>
              ))}
            </div>
            {showPopup && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"
                  onClick={closePopup}
                ></div>
                <div className="relative bg-white w-full md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <h1 className="text-2xl font-bold text-purple-700 mb-4">
                    Coupon Redemption
                  </h1>
                  <div className="flex flex-col justify-center items-center">
                    <div className="space-y-4 md:space-y-3">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Coupon Code
                      </label>
                      <center>
                        <p className=" text-gray-900 sm:text-5xl center rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{couponCode} </p>
                      </center>
                    </div>
                    <hr className="my-4" />
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className={`w-full mx-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                        isSubmit ? 'bg-green-500' : ''
                      }`}
                    >
                      {isSubmit ? "Used" : "Use" }
                    </button>
                    <hr className="my-2" />
                    {isSubmit ? (
                      <p className="text-green-500"> Coupon Used Successfully!</p>
                    ) : null}
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
            {showRemovePopup && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"
                  onClick={closeRemovePopup}
                ></div>
                <div className="relative bg-white w-full md:w-1/2 lg:w-1/2 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <h1 className="text-2xl font-bold text-purple-700 mb-4">
                    Coupon Removal
                  </h1>
                  <div className="flex flex-col justify-center items-center">
                    <p>Are you sure you want to remove this voucher? </p>
                    <hr className="my-4"/>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className={`w-full mx-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                        isSubmit ? 'bg-green-500' : ''
                      }`}
                    >
                      {isSubmit ? "Removed" : "Remove" }
                    </button>
                    <hr className="my-2" />
                    {isSubmit ? (
                      <p className="text-red-500"> Coupon Has Been Removed Successfully!</p>
                    ) : null}
                  </div>
                  <button
                    onClick={closeRemovePopup}
                    className="absolute top-2 right-2 text-purple-700 font-bold text-xl cursor-pointer focus:outline-none"
                  >
                    &#x2716;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWalletPage;
