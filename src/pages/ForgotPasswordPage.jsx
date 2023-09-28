import React, {useState} from 'react';
import users from '../data/users.json';
import { useNavigate } from 'react-router-dom';

export const ForgotPasswordPage = (forgotPassPageProps) => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
      });

    const [error, setError] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    
    const handleLoginDataChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
      };
    
    const submitLogin = (e) => {
        e.preventDefault();
        const usersArray = users.users;
        console.log(loginData);
        const user = usersArray.find((user) => user.email === loginData.email);
        //use navigate to direct use to homepage
        if (user) {
            if (user.password === loginData.password) {
            setError('');
            forgotPassPageProps.handleLogin();
            navigate('/');
            setEmailSent(true); // Set the emailSent state to true
            } else {
            setError('An email has been sent to recreate a new password.');
            }
        } else {
            setError('An email has been sent to recreate a new password.');
        }
    };
  return (
        <section className="bg-gradient-to-b from-yellow-400 to-purple-700 dark:bg-gradient-to-b dark:from-yellow-400 dark:to-purple-700">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-28 h-15 mr-0" src={process.env.PUBLIC_URL + '/assets/hiveX.png'} alt="goMartLogo" />
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">    
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Forgot Password</h1>
                    {error ? <p className="text-sm text-green-500">{error}</p> : null}
                    {emailSent && <p className="text-sm text-green-500">An email has been sent to recreate a new password</p>} {/* Display the message if emailSent is true */}
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
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};