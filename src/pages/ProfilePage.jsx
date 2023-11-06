import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavigationBar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Switch } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';

export const ProfilePage = () => {
  const initialProfile = {
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'Female',
    contactNo: '+11 998001001',
    currentAddress: 'Beech Creek, PA, Pennsylvania',
    permanentAddress: 'Arlington Heights, IL, Illinois',
    email: 'jane@example.com',
    age: '19',
    password: 'password!',
    dateOfBirth: 'April 1, 2004',
  };
  const [profile, setProfile] = useState({ ...initialProfile });
  const [showPopup, setShowPopup] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Track password visibility
  const [selectedGender, setSelectedGender] = useState(profile.gender);
  const [editedEmail, setEditedEmail] = useState(profile.email);
  const [dob, setDob] = useState(new Date('2004-04-01'));
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
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
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
      <Navbar />
      <div className="container mt-5 ">
        <div class="bg-white p-3 shadow-lg rounded-sm">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span class="tracking-wide">Profile</span>
            </div>
            <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">First Name</div>
                      <div class="px-4 py-2">{profile.firstName}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Last Name</div>
                      <div class="px-4 py-2">{profile.lastName}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Gender</div>
                      <div class="px-4 py-2">{selectedGender}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Contact No.</div>
                      <div class="px-4 py-2">{profile.contactNo}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Current Address</div>
                      <div class="px-4 py-2">{profile.currentAddress}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Permanant Address</div>
                      <div class="px-4 py-2">{profile.permanentAddress}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email</div>
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
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Date of Birth</div>
                      <div class="px-4 py-2">{dob.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    </div>
                </div>
            </div>
            <a
             onClick={openPopup}
             class="block w-full text-purple-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4 text-center">
              Edit
            </a>
        </div>
        <hr className="border-t-2 my-4" />
        <div class="bg-white p-3 shadow-lg rounded-sm">
          <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span class="tracking-wide">Notification Preference</span>
          </div>
          <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email</div>
                    <div class="px-4 py-2"><Switch color="amber" defaultChecked /></div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Mobile</div>
                    <div class="px-4 py-2"><Switch color="amber" defaultChecked /></div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Notification</div>
                    <div class="px-4 py-2"><Switch color="amber" defaultChecked /></div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                    <div class="px-4 py-2"><Switch color="amber" defaultChecked /></div>
                </div>
              </div>
          </div>
        </div>
        <hr className="border-t-2 my-4" />
        <div class="bg-white p-3 shadow-lg rounded-sm">
          <div class="flex items-center justify-center space-x-2 font-semibold text-gray-900 leading-8">
            <span class="tracking-wide">Update Preference</span>
          </div>
          <div class="text-gray-700">
            <div class="grid md:grid-cols-2 text-sm">
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Email</div>
                <div class="px-4 py-2">Jane</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Mobile</div>
                <div class="px-4 py-2">Doe</div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-2 my-4" />
        <div class="bg-white p-3 shadow-lg rounded-sm">
          <div class="flex items-center justify-center space-x-2 font-semibold text-gray-900 leading-8">
            <span clas="text-green-500">
              <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <span class="tracking-wide">+ INVITE FRIENDS</span>
          </div>
          <div class="text-gray-700">
            <div class="grid md:grid-cols-2 text-sm">
            </div>
          </div>
        </div>
        {showPopup && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50" onClick={closePopup}></div>
              <div className="relative bg-white w-full md:w-96 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-purple-700 mb-4">Edit Your Profile</h1>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">First Name</div>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    className="px-4 py-2"
                  />
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Last Name</div>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    className="px-4 py-2"
                  />
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Gender</div>
                  <select
                    name="gender"
                    value={selectedGender}
                    onChange={handleGenderChange}
                    className="px-4 py-2"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                  <input
                    type="text"
                    name="contactNo"
                    value={profile.contactNo}
                    onChange={handleChange}
                    className="px-4 py-2"
                  />
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Current Address</div>
                  <input
                    type="text"
                    name="currentAddress"
                    value={profile.currentAddress}
                    onChange={handleChange}
                    className="px-4 py-2"
                  />
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Permanant Address</div>
                  <input
                    type="text"
                    name="permanentAddress"
                    value={profile.permanentAddress}
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
                <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Date of Birth</div>
                    <div className="px-4 py-2">
                      <DatePicker
                        selected={dob}
                        onChange={(date) => setDob(date)}
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

export default ProfilePage;
