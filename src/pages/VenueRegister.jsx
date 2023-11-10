import React, { useState } from 'react';
import users from '../data/users.json';
import { useNavigate } from 'react-router-dom';

export const VenueRegister = () => {
const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '', // First Name field
    mobileNumber: '', // Mobile Number field
    ageRange: '18-21', // Age range dropdown
    accountType: 'venue',
  });

  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const submitRegister = (e) => {
    e.preventDefault();
    const usersArray = users.users;

    // Validate Phone Number
    const phoneNumber = registerData.mobileNumber;
    const phoneNumberRegex = /^(02|03|04|07)\d{8,9}$/;

    if (!phoneNumberRegex.test(phoneNumber)) {
      setErrorMessage('Please enter a valid Australian mobile number starting with "04" and having 9 digits.');
      return;
    }

    // Validate Password and Confirm Password
    if (registerData.password !== registerData.confirmPassword) {
      setErrorMessage('Passwords do not match. Please try again.');
      return;
    }

    const isEmailExists = usersArray.some((user) => user.email === registerData.email);
    if (isEmailExists) {
      setErrorMessage('This email is already registered. Please use a different email.');
      return;
    }

    // Handle form submission and further processing here
    console.log('register credentials submitted');

    // After successful registration, navigate to the login page
    if (registerData.accountType === 'member') {
      navigate('/'); // Replace with the actual URL for the member account dashboard
    } else if (registerData.accountType === 'venue') {
      navigate('/venue-dashboard');
    }
    
  };
  const handleRegisterDataChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    setErrorMessage(''); // Clear any previous error message
  };

  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="full-page bg-gradient-to-b from-yellow-400 to-purple-700 dark:bg-gradient-to-b dark:from-yellow-400 dark:to-purple-700 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-28 h-15 mr-0" src={process.env.PUBLIC_URL + '/assets/hiveX.png'} alt="hiveXLogo" />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Register Your Venue Account</h1>
            <a
              onClick={openPopup}
              className="cursor-pointer font-medium text-center text-primary-600 hover:underline text-purple-700 hover-text-purple-500"
            >
              What is a Venue?
            </a>
            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>} {/* Display error message */}
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={submitRegister}>
                <div>
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={registerData.firstName}
                  id="fullName"
                  onChange={handleRegisterDataChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Full Name"
                  required={true}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={registerData.email}
                  id="email"
                  onChange={handleRegisterDataChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={registerData.mobileNumber}
                  id="mobileNumber"
                  onChange={handleRegisterDataChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Mobile Number"
                  required={true}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={registerData.password}
                  id="password"
                  onChange={handleRegisterDataChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  id="confirmPassword"
                  onChange={handleRegisterDataChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div>
                <label htmlFor="venueDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tell Us About Your Venue
                </label>
                <textarea
                name="venueDescription"
                value={registerData.venueDescription}
                id="venueDescription"
                onChange={handleRegisterDataChange}
                rows="4" // You can adjust the number of rows as needed
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tell us about your venue..."
                required={true}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-purple-700 hover:bg-purple-500 active-bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-primary-600 dark-hover-bg-primary-700 dark-focus-ring-primary-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
        {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50" onClick={closePopup}></div>
          <div className="relative bg-white w-full md:w-96 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-purple-700 mb-4">Perks of Being a Venue</h1>
            <p className="text-gray-900 dark:text-white">
              {"Partnering with hiveX means increased visibility and access to new customers. You can benefit from regular orders that provide a steady revenue stream and can streamline their operations for efficiency. Marketing support and insights into customer preferences are additional advantages, along with flexibility in menu offerings. These services maintain quality control to ensure the food's quality during delivery, which reflects positively on the venues."}
            </p>
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
    </section>
  );
};
