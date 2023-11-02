import React from 'react';
import { Link } from 'react-router-dom';
import BroNavbar from '../components/BrokerNavigationBar';

export const InvVenuePage = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <BroNavbar />
      <div className="pt-16 px-4">
        <div className="text-center text-black text-2xl font-bold mb-6">Invite Venue to HIVE X</div>

         {/* Input fields centered in a column */}
        <div className="space-y-4 mb-6 w-full max-w-xs px-4">
          <input type="email" placeholder="Owner Email" className="border border-fuchsia-700 rounded p-2 w-full" />
          <input type="tel" placeholder="Owner Mobile" className="border border-fuchsia-700 rounded p-2 w-full" />
          <input type="text" placeholder="Owner Name" className="border border-fuchsia-700 rounded p-2 w-full" />
          <input type="text" placeholder="Location" className="border border-fuchsia-700 rounded p-2 w-full" />
          <textarea placeholder="Restaurant Details: Phone: Email:" className="border border-fuchsia-700 rounded p-2 w-full h-24" />
          <textarea placeholder="Write Description" className="border border-fuchsia-700 rounded p-2 w-full h-24" />
          <textarea placeholder="HLE Activity" className="border border-fuchsia-700 rounded p-2 w-full h-24" />
        </div>

        {/* Photo upload section */}
        <div className="border border-fuchsia-700 rounded p-2 mb-6 text-center text-black text-opacity-50 text-xl">Photo +</div>

        {/* Send Invite button */}
        <div className="text-center">
          <button className="bg-black text-white rounded py-2 px-4">Send Invite</button>
        </div>
      </div>
    </div>
  );
};

export default InvVenuePage;
