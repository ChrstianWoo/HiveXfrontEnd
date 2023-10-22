import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import VenueNavbar from '../components/VenueNavigationBar';

export const DealsApprovingPage = () => {
  

  return (
    <div className="bg-gray-100 h-screen">
      <VenueNavbar />
      <div className="container mt-5">
        <h1>Deals Approving</h1>
      </div>
    </div>
  );
};

export default DealsApprovingPage;