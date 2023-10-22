import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../components/NavigationBar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const MyPointsPage = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="container mt-5">
        <h1>My Points</h1>
      </div>
    </div>
  );
};

export default MyPointsPage;
