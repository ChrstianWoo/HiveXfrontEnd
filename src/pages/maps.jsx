//This contains the code for you to implement the google maps feature 
import React, { useState, useEffect } from 'react';
import users from '../data/users.json';
import { useNavigate } from 'react-router-dom';

export const LoginPage = (loginPageProps) => {
 


  useEffect(() => {
    // Load the Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDbmf_oibOuPXvtR11eQJiFcvY148s_Aow&callback=initMap&libraries=&v=weekly`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize the map when the script is loaded
    window.initMap = () => {
      const sydneyOperaHouse = { lat: -33.8568, lng: 151.2153 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: sydneyOperaHouse,
      });
    };

    // Clean up the script tag on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="h-64 w-64 bg-gray-100 flex items-center justify-center">
      <div id="map" className="h-full w-full"></div>
    </div>
  );
};
