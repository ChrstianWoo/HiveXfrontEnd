import React from 'react';
import { Link } from 'react-router-dom';
import VenueNavbar from '../components/VenueNavigationBar';



export const VenueDashboard = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <VenueNavbar />
      <div className="container mt-5">
        <h1>Venue Landing</h1>
      </div>
    </div>
  );
};
