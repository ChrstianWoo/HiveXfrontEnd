import React, { useState, useEffect } from "react";
import Navbar from "../components/NavigationBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
export const MyWalletPage = () => {
  const [activeTab, setActiveTab] = useState("myVoucher"); // Initialize the active tab as 'dashboard'
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);
  const generateCouponCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    return code.toString();
  };
  const [couponCode, setCouponCode] = useState(generateCouponCode());
  
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
                Close to Expiry Vouchers
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
            <div
              className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
                activeTab === "myOffers" ? "" : "hidden"
              }`}
              id="myOffers"
              role="tabpanel"
              aria-labelledby="myOffers-tab"
            >
              {[1, 2, 3].map((_, index) => (
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
            <div
              className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
                activeTab === "history" ? "hidden" : ""
              }`}
              id="history"
              role="tabpanel"
              aria-labelledby="history-tab"
            >
              {[1, 2].map((_, index) => (
                <div key={index} className="bg-white rounded shadow mb-6 p-4">
                  <div className="flex items-center mb-2">
                    {/* Add image here */}
                    <div className="text-sm font-bold">Name of Venue</div>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer">
                    <div  onClick={openPopup} className="text-sky-500 text-xs underline">Use Voucher</div>
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
                      <p className="text-green-500"> Coupon used Successfully!</p>
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
                      <p className="text-red-500"> Coupon Been Removed Successfully!</p>
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
