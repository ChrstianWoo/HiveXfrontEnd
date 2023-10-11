import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../components/NavigationBar';
import './memberDashboardPage/DashboardPage.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const DashboardPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next index or loop back to 0 when at the last item
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // Sample data for savings history (you can replace this with real data)
  const savingsHistory = [
    { month: 'January', amount: 500 },
    { month: 'February', amount: 600 },
    { month: 'March', amount: 700 },
    // Add more months as needed
  ];

  const couponData = [
    {
      imageSrc: 'assets/hiveX.png',
      title: 'Coupon 1',
      description: 'Get 20% off on your next purchase.',
      linkTo: '/coupon-1', // Link to the desired page
    },
    {
      imageSrc: 'assets/hiveX.png',
      title: 'Coupon 2',
      description: 'Save $10 on your order.',
      linkTo: '/coupon-2', // Link to the desired page
    },
    {
      imageSrc: 'assets/hiveX.png',
      title: 'Coupon 3',
      description: 'Buy 1 Get 1 Free on select items.',
      linkTo: '/coupon-3', // Link to the desired page
    },
  ];

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Welcome, User!</h1>

        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Here are some coupons for expiring offers:</h2>
                <Carousel
                  autoPlay
                  interval={3000}
                  infiniteLoop
                  selectedItem={activeIndex}
                  showArrows={true}
                  showStatus={false}
                  showThumbs={false}
                >
                  {couponData.map((coupon, index) => (
                    <div key={index}>
                      <Link to={coupon.linkTo}>
                        <img src={coupon.imageSrc} alt={coupon.title} className="w-12 h-12"/>
                      </Link>
                      <div className="coupon-box coupon-info">
                        <h3>{coupon.title}</h3>
                        <p>{coupon.description}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card text-center">
              <div className="card-body">
                <h2 className="card-title">How much you have saved this month:</h2>
                <h1 className="display-4">$500</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Display savings history */}
        <div className="mt-5">
          <h2 className="text-center">Savings History</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Month</th>
                <th>Savings Amount</th>
              </tr>
            </thead>
            <tbody>
              {savingsHistory.map((item, index) => (
                <tr key={index}>
                  <td>{item.month}</td>
                  <td>${item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
