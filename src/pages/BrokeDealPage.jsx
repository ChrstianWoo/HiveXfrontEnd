import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import BroNavbar from '../components/BrokerNavigationBar';

export const BrokeDealPage = () => {

  return (
    <div className="bg-gray-100 h-screen">
      <BroNavbar />
      <div className="container mt-5">
        <h1>Broker Landing</h1>
      </div>
    </div>
  );
};

export default BrokeDealPage;