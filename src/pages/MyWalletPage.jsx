import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavigationBar';


export const MyWalletPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard'); // Initialize the active tab as 'dashboard'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="container mt-5">
        <h1 class="MyWallet w-60 h-24 mx-auto text-black text-2xl font-bold">My Wallet</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
            <ul className="flex flex-wrap -mb-px" id="myTab" role="tablist">
              <li className="mr-2" role="presentation">
                <button
                  className={`inline-block text-gray-500 hover:text-gray-600 border-b-2 border-transparent rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent ${
                    activeTab === 'dashboard' ? 'text-purple-800 border-purple-800' : ''
                  }`}
                  onClick={() => handleTabClick('dashboard')}
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected={activeTab === 'dashboard'}
                >
                  My Vouchers
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className={`inline-block text-gray-500 hover:text-gray-600 border-b-2 border-transparent rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent ${
                    activeTab === 'settings' ? 'text-purple-800 border-purple-800' : ''
                  }`}
                  onClick={() => handleTabClick('settings')}
                  role="tab"
                  aria-controls="settings"
                  aria-selected={activeTab === 'settings'}
                >
                  My Offers
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block text-gray-500 hover:text-gray-600 border-b-2 border-transparent rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent ${
                    activeTab === 'contacts' ? 'text-purple-800 border-purple-800' : ''
                  }`}
                  onClick={() => handleTabClick('contacts')}
                  role="tab"
                  aria-controls="contacts"
                  aria-selected={activeTab === 'contacts'}
                >
                  History
                </button>
              </li>
            </ul>
          </div>
          <div id="myTabContent">
            <div
              className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
                activeTab === 'profile' ? 'hidden' : ''
              }`}
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                This is some placeholder content for the Profile tab's associated content.
              </p>
            </div>
            <div
              className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
                activeTab === 'dashboard' ? '' : 'hidden'
              }`}
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                This is some placeholder content for the Dashboard tab's associated content.
              </p>
            </div>
            <div
              className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
                activeTab === 'settings' ? 'hidden' : ''
              }`}
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                This is some placeholder content for the Settings tab's associated content.
              </p>
            </div>
            <div
              className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
                activeTab === 'contacts' ? 'hidden' : ''
              }`}
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                This is some placeholder content for the Contacts tab's associated content.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MyWalletPage;
