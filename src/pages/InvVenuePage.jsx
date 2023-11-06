import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import BroNavbar from '../components/BrokerNavigationBar';
import './InvVenuePage.css'
export const InvVenuePage = () => {
  

  return (
    <div className="bg-gray-100 h-screen">
    <BroNavbar />
    <div className="container mt-5">
      <h1>Invite Venue to HiveX</h1>
    </div>

    <div className="container">
      <div className="column">
        <div className="box">
          <input type="text" placeholder="Owner Email" />
        </div>
        <div className="box">
          <input type="text" placeholder="Owner Mobile" />
        </div>
        <div className="box">
          <input type="text" placeholder="Owner Name" />
        </div>
        <div className="box">
          <input type="text" placeholder="Owner Location" />
        </div>
      </div>

      <div className="column">
        <div className="box">
          <input type="text" placeholder="Restaurant Phone" />
        </div>
        <div className="box">
          <input type="text" placeholder="Restaurant Email" />
        </div>
        <div className="box">
          <input type="text" placeholder="Write Description" />
        </div>
        <div className="box">
          <input type="text" placeholder="HLE Activity" />
        </div>
      </div>
    </div>

    <div className="button_container">
      <div className="column">
        <button className="button">Send Invite</button>
      </div>
    </div>
  </div>
  );
};

export default InvVenuePage;