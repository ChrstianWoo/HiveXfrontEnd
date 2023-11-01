import React, { useState, useEffect } from 'react';
import VenueNavbar from '../components/VenueNavigationBar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const MyVenuePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Track password visibility
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
  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="bg-gray-100 h-screen">
      <VenueNavbar />
      <div className="container mt-5 ">
        <div class="bg-white p-3 shadow-lg rounded-sm">
            <div class="flex items-center justify-center space-x-2 font-bold text-gray-900 text-xl leading-8">
                <span class="tracking-wide">Venue Profile</span>
            </div>
            <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Full Name</div>
                        <div class="px-4 py-2">Jane Doe</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Restaurant Name</div>
                        <div class="px-4 py-2">Honey</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Contact No.</div>
                        <div class="px-4 py-2">+11 998001001</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Main Location</div>
                        <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Branch Location</div>
                        <div class="px-4 py-2">
                            <a class="text-purple-800" href="mailto:jane@example.com">jane@example.com</a>
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Email.</div>
                        <div class="px-4 py-2">
                            <a class="text-purple-800" href="mailto:jane@example.com">jane@example.com</a>
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Age</div>
                        <div class="px-4 py-2">19</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Password</div>
                        <div class="px-4 py-2">
                          {isPasswordVisible ? (
                            'password!'
                          ) : (
                            '******' /* Display asterisks when password is hidden */
                          )}
                          <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="ml-2 text-purple-800 focus:outline-none"
                          >
                            {isPasswordVisible ? (
                              <FontAwesomeIcon icon={faEyeSlash} />
                            ) : (
                              <FontAwesomeIcon icon={faEye} />
                            )}
                          </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Date of Birth</div>
                        <div class="px-4 py-2">April 1, 2004</div>
                    </div>
                </div>
            </div>
            <a
             onClick={openPopup}
             class="block w-full text-purple-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4 text-center">
              Edit
            </a>
        </div>
        {showPopup && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50" onClick={closePopup}></div>
                <div className="relative bg-white w-full md:w-96 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <h1 className="text-2xl font-bold text-purple-700 mb-4">Edit Your Profile</h1>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">First Name</div>
                      <div class="px-4 py-2">Jane</div>
                  </div>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Last Name</div>
                      <div class="px-4 py-2">Doe</div>
                  </div>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Gender</div>
                      <div class="px-4 py-2">Female</div>
                  </div>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Contact No.</div>
                      <div class="px-4 py-2">+11 998001001</div>
                  </div>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Current Address</div>
                      <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                  </div>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Permanant Address</div>
                      <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                  </div>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email.</div>
                      <div class="px-4 py-2">
                          <a class="text-purple-800" href="mailto:jane@example.com">jane@example.com</a>
                      </div>
                  </div>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Age</div>
                      <div class="px-4 py-2">19</div>
                  </div>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Password</div>
                      <div class="px-4 py-2">password!</div>
                  </div>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Date of Birth</div>
                      <div class="px-4 py-2">April 1, 2004</div>
                  </div>
                  <div className="flex justify-center items-center">
                  <button
                    type="button"
                    onClick={handleSave}
                    class={`mx-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
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

export default MyVenuePage;