//This contains the code for you to implement the google maps feature 
import React, { useState, useEffect } from 'react';
import users from '../data/users.json';
import { useNavigate } from 'react-router-dom';

export const LoginPage = (loginPageProps) => {
 


  useEffect(() => {
    // (Jack Api)
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDbmf_oibOuPXvtR11eQJiFcvY148s_Aow&callback=initMap&libraries=&v=weekly`;
    script.async = true;
    document.head.appendChild(script);


    window.initMap = () => {
      const sydneyOperaHouse = { lat: -33.8568, lng: 151.2153 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: sydneyOperaHouse,
      });
    };

    
    return () => {
      document.head.removeChild(script);
    };
  }, []); 
  return (
    <div className="h-64 w-64 bg-gray-100 flex items-center justify-center">
      <div id="map" className="h-full w-full"></div>
    </div>
  );
};
