import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../components/NavigationBar';
import './MyPointsPage.css';
import 'boxicons/css/boxicons.min.css';


  
const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-container">
      <div className="progress-text-top">{`${percentage} Points`}</div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export const MyPointsPage = () => {
  const [progress, setProgress] = useState(90);

  useEffect(() => {
    // You can set the progress based on your data or any other logic
    // For example, fetch data from an API and update the progress accordingly
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="container mt-5 content-container">
        <h1>My Points</h1>
        <ProgressBar percentage={progress} />

        <section className="menu section bd-container" id="menu">
          <h2 className="section-title">(Sample)Deal of the Week</h2>

          <div className="menu__container bd-grid">
            <div className="menu__content">
              <img src="/assets/No symbol.png" alt="" className="menu__img" />
              <h3 className="menu__name">Venue Name</h3>
              <span className="menu__detail">Discount</span>
              <span className="menu__sub">100 pts</span>
              <a href="#" className="button menu__button"><i className='bx bx-cart-alt'></i></a>
            </div>
            <div className="menu__content">
              <img src="/assets/No symbol.png" alt="" className="menu__img" />
              <h3 className="menu__name">Venue Name</h3>
              <span className="menu__detail">Discount</span>
              <span className="menu__sub">100 pts</span>
              <a href="#" className="button menu__button"><i className='bx bx-cart-alt'></i></a>
            </div>
            <div className="menu__content">
              <img src="/assets/No symbol.png" alt="" className="menu__img" />
              <h3 className="menu__name">Venue Name</h3>
              <span className="menu__detail">Discount</span>
              <span className="menu__sub">100 pts</span>
              <a href="#" className="button menu__button"><i className='bx bx-cart-alt'></i></a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MyPointsPage;
