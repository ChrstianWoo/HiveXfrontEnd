import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import BroNavbar from "../components/BrokerNavigationBar";
import "./InvVenuePage.css";
export const InvVenuePage = () => {
  const [hleActivity, setHleActivity] = useState("");

  const handleHleActivityChange = (event) => {
    setHleActivity(event.target.value);
  };
  return (
    <div className="bg-gray-100">
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
