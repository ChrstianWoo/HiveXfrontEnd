import React, { useState, useEffect } from "react";
import Navbar from "../components/NavigationBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
export const MyWalletPage = () => {
  const [activeTab, setActiveTab] = useState("myVoucher"); // Initialize the active tab as 'dashboard'

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
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="container mt-5">
        <h1 class="MyWallet">
          My Wallet
        </h1>
        <div className="max-w-2xl mx-auto">
          <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
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
                  My Vouchers
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
                  My Offers
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
                activeTab === "myVoucher" ? "hidden" : ""
              }`}
              id="myVoucher"
              role="tabpanel"
              aria-labelledby="myVoucher-tab"
            >
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
            <div
              className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
                activeTab === "myOffers" ? "" : "hidden"
              }`}
              id="myOffers"
              role="tabpanel"
              aria-labelledby="myOffers-tab"
            >
              {[1, 2].map((_, index) => (
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
            <div
              className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
                activeTab === "history" ? "hidden" : ""
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
        </div>
      </div>
    </div>
  );
};

export default MyWalletPage;
