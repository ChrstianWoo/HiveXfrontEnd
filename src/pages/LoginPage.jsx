import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center">Login</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-indigo-300"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-indigo-300"
              placeholder="Your password"
              required
            />
          </div>
          <div className="text-right">
            <a href="/forgot-password" className="text-indigo-500 hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full mt-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          Don't have an account?{' '}
          <a href="/signup" className="text-indigo-500 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
