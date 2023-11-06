import React, { useState } from 'react';
import users from '../data/users.json';
import { useNavigate } from 'react-router-dom';

export const VenueEmailRegistration = (venueEmailPageProps) => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
    });

    const [error, setError] = useState('');
    const [errorType, setErrorType] = useState('');
    const [emailNotFound, setEmailNotFound] = useState(false); // New state variable

    const handleLoginDataChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const submitLogin = (e) => {
        e.preventDefault();
        const usersArray = users.users;
        console.log(loginData);
        const user = usersArray.find((user) => user.email === loginData.email);
        // Use navigate to direct the user to the homepage
        if (user) {
            if (user.password === loginData.password) {
                setErrorType('success');
                venueEmailPageProps.handleLogin();
                navigate('/login');
            } else {
                setErrorType('red');
                setError('Your data is in our database. Please try again.');
                //connect with backend to send email
            }
        } else {
            setEmailNotFound(true); // Set the emailNotFound state to true
            navigate('/venue-register');
        }
    };
    

    return (
        <section className="bg-gradient-to-b from-yellow-400 to-purple-700 dark:bg-gradient-to-b dark:from-yellow-400 dark:to-purple-700">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-28 h-15 mr-0" src={process.env.PUBLIC_URL + '/assets/hiveX.png'} alt="hiveX" />
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Get Email registration for venue</h1>
                        {error && (<p className={`text-sm ${errorType === 'red' ? 'text-red-500' : 'text-green-500'}`}>{error}</p>)}

                        

                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={submitLogin}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={loginData.email}
                                    id="email"
                                    onChange={handleLoginDataChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required={true}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-purple-700 hover:bg-purple-500 active:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Get email to create new password
                            </button>
                            <center>
                                <a
                                    onClick={() => navigate('/login')}
                                    className="cursor-pointer font-medium text-center text-primary-600 hover:underline text-purple-700 hover:text-purple-500"
                                >
                                    Return to Login
                                </a>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
