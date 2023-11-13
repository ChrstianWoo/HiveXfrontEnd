import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BroNavbar from "../components/BrokerNavigationBar";
import "./InvVenuePage.css";
export const InvVenuePage = () => {
  const [hleActivity, setHleActivity] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleHleActivityChange = (event) => {
    setHleActivity(event.target.value);
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setSelectedImage(imageUrl);
  };

  return (
    <div className="bg-gray-100">
      <BroNavbar />
      <div className="container mt-5">
        <h1>Invite Venue</h1>
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
            <input type="text" placeholder="Venue Location" />
          </div>
        </div>

        <div className="column">
          <div className="box">
            <input type="text" placeholder="Venue Name" />
          </div>
          <div className="box">
            <input type="text" placeholder="Venue Phone" />
          </div>
          <div className="box">
            <input type="text" placeholder="Venue Email" />
          </div>
          <div className="box">
            <select
              name="hleActivity"
              value={hleActivity}
              id="hleActivity"
              onChange={handleHleActivityChange}
              required={true}
              className="choice-style"
            >
              <option value="">HLE Activity</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Leisure">Leisure</option>
            </select>
          </div>

          <div className="box">
            <textarea placeholder="Write Description"></textarea>
          </div>

          <div className="box text-center">
            <label htmlFor="imageInput" className="cursor-pointer">
              <input
                type="file"
                id="imageInput"
                className="hidden"
                onChange={handleImageChange}
              />
              <div className="mx-auto w-40 h-20 border rounded-md p-2 text-gray-400 hover:text-yellow-400 bg-white hover:bg-purple-700 flex items-center justify-center">
                <p className="mx-auto">Add Image</p>
              </div>
            </label>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                className="mt-2 rounded-md max-w-full mx-auto"
                style={{ maxWidth: "200px" }}
              />
            )}
          </div>

          <div className="box text-center">
            <label htmlFor="imageInput" className="cursor-pointer">
              <input
                type="file"
                id="imageInput"
                className="hidden"
                onChange={handleImageChange}
              />
              <div className="mx-auto w-40 h-20 border rounded-md p-2 text-gray-400 hover:text-yellow-400 bg-white hover:bg-purple-700 flex items-center justify-center">
                <p className="mx-auto">Add Menu</p>
              </div>
            </label>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                className="mt-2 rounded-md max-w-full mx-auto"
                style={{ maxWidth: "200px" }}
              />
            )}
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

//<div className="border border-fuchsia-700 rounded p-2 mb-6 text-center text-black text-opacity-50 text-xl">Photo +</div>
