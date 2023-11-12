import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import BroNavbar from "../components/BrokerNavigationBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const BrokeDealPage = () => {
  const [validUntil, setValidUntil] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    const imageUrl = URL.createObjectURL(selectedFile);

    setSelectedImage(imageUrl);
  };
  useEffect(() => {
    // (Jack Api)
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDbmf_oibOuPXvtR11eQJiFcvY148s_Aow&callback=initMap&libraries=&v=weekly`;
    script.async = true;
    document.head.appendChild(script);

    window.initMap = () => {
      const sydneyOperaHouse = { lat: -33.8568, lng: 151.2153 };
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: sydneyOperaHouse,
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <BroNavbar />
      <div className="container mt-5">
        <h1 className="font-bold">Broker Deal</h1>
        <h2 className="text-center text-4xl">Coupon Details</h2>

        <p className="text-center mt-2">Prefilled Venue Name</p>

        <div className="h-64 w-96 bg-gray-100 flex items-center justify-center mx-auto mt-4">
          <div id="map" className="h-full w-full"></div>
        </div>

        <h3 className="text-center mt-4">Prefilled Location</h3>
        <input
          type="text"
          className="w-full border rounded-md p-2 mt-2"
          placeholder="Deal"
        />
        <textarea
          className="w-full h-40 border rounded-md p-2 mt-2"
          placeholder="Write Description"
        ></textarea>
        <div className="flex justify-center items-center mt-2">
          <input
            type="text"
            className="w-50 h-10 border rounded-md p-2 text-center"
            placeholder="Amount of Coupons"
          />
        </div>

        <div className="flex justify-center items-center mt-2">
          <DatePicker
            selected={validUntil}
            onChange={(date) => setValidUntil(date)}
            placeholderText="Valid Until"
            className="w-50 h-10 border rounded-md p-2 text-center"
          />
        </div>

        <div className="flex justify-center items-center flex-col mt-2">
          <label htmlFor="imageInput" className="cursor-pointer">
            <input
              type="file"
              id="imageInput"
              className="hidden"
              onChange={handleImageChange}
            />
            <div className="flex items-center justify-center w-40 h-20 border rounded-md p-2 text-center text-gray-400 hover:text-yellow-400 bg-white hover:bg-purple-700">
              <p>Add Image</p>
            </div>
          </label>

          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="mt-2 rounded-md max-w-full"
              style={{ maxWidth: "200px" }}
            />
          )}
        </div>
        <div className="flex justify-between items-center mt-2">
          <div>
            <p>Restaurant Details</p>
            <p>Phone Number: Sample Number</p>
            <p>Email: Sample Email</p>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Broker Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrokeDealPage;
