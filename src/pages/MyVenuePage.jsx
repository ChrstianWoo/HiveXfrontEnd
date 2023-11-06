import React, { useState, useEffect } from 'react';
import VenueNavbar from '../components/VenueNavigationBar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const MyVenuePage = () => {
  const initialVenueProfile = {
    fullName: 'Jane Doe',
    restaurantName: 'Honey',
    contactNo: '+11 998001001',
    mainLocation: 'Beech Creek, PA, Pennsylvania',
    branchLocation: 'Arlington Heights, IL, Illinois',
    email: 'jane@example.com',
    age: '19',
    password: 'password!',
  };
  const [profile, setProfile] = useState({ ...initialVenueProfile });
  const [showPopup, setShowPopup] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [editedEmail, setEditedEmail] = useState(profile.email);
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  const handleEmailChange = (e) => {
    setEditedEmail(e.target.value);
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
                        <div class="px-4 py-2">{profile.fullName}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Restaurant Name</div>
                        <div class="px-4 py-2">{profile.restaurantName}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Contact No.</div>
                        <div class="px-4 py-2">{profile.contactNo}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Main Location</div>
                        <div class="px-4 py-2">
                          <a 
                            class="" 
                            href={`https://www.google.com/maps/search/${encodeURIComponent(profile.mainLocation)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {profile.mainLocation}
                          </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Branch Location</div>
                      <div class="px-4 py-2">
                        <a 
                          class="" 
                          href={`https://www.google.com/maps/search/${encodeURIComponent(profile.brancLocation)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {profile.branchLocation}
                        </a>
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Email.</div>
                        <div class="px-4 py-2">
                            <a class="text-purple-800" href={`mailto:${editedEmail}`}>{editedEmail}</a>
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Age</div>
                        <div class="px-4 py-2">{profile.age}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Password</div>
                        <div class="px-4 py-2">
                          {isPasswordVisible ? (
                            profile.password
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
                  <h1 className="text-2xl font-bold text-purple-700 mb-4">Edit Your Venue Profile</h1>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">full Name</div>
                    <input
                      type="text"
                      name="fullName"
                      value={profile.fullName}
                      onChange={handleChange}
                      className="px-4 py-2"
                    />
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Restaurant Name</div>
                    <input
                      type="text"
                      name="restaurantName"
                      value={profile.restaurantName}
                      onChange={handleChange}
                      className="px-4 py-2"
                    />
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                    <input
                      type="text"
                      name="conatctNo"
                      value={profile.contactNo}
                      onChange={handleChange}
                      className="px-4 py-2"
                    />
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Main Location</div>
                    <input
                      type="text"
                      name="mainLocation"
                      value={profile.mainLocation}
                      onChange={handleChange}
                      className="px-4 py-2"
                    />
                  </div>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Branch Location</div>
                      <input
                      type="text"
                      name="branchLocation"
                      value={profile.branchLocation}
                      onChange={handleChange}
                      className="px-4 py-2"
                    />
                  </div>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email</div>
                      <input
                        type="text"
                        name="email"
                        value={editedEmail}
                        onChange={handleEmailChange}
                        className="px-4 py-2"
                      />
                  </div>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Age</div>
                      <input
                        type="number"
                        name="age"
                        value={profile.age}
                        onChange={handleChange}
                        className="px-4 py-2"
                      />
                  </div>
                  <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Password</div>
                      <input
                        type="text"
                        name="password"
                        value={profile.password}
                        onChange={handleChange}
                        className="px-4 py-2"
                      />
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