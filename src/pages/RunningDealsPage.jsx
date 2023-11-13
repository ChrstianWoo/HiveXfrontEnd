import React, { useState } from "react";
import { Link } from "react-router-dom";
import VenueNavbar from "../components/VenueNavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const dealsData = [
  {
    name: "Adiamo",
    image: "/assets/andiamo.png",
    couponDetails: "Discount Up to 10%",
    validity: "Valid Until November 30, 2023",
    conditions: "Entry before 2 pm\nDine in only\nMaximum of 3 patrons",

    restaurantDetails: {
      phone: "+61",
      email: "Meow@gmail.com",
    },
  },
  {
    name: "Adiamo",
    image: "/assets/andiamo.png",
    couponDetails: "Discount Up to 50%",
    validity: "Valid Until November 20, 2023",
    conditions: "Entry before 10 am\nTake away only",

    restaurantDetails: {
      phone: "+61",
      email: "Meow@gmail.com",
    },
  },
  // Add more deals as needed
];

export const RunningDealsPage = () => {
  const [accordionOpen, setAccordionOpen] = useState(
    Array(dealsData.length).fill(false)
  );

  const toggleAccordion = (index) => {
    setAccordionOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <VenueNavbar />
      <div className="max-w-md lg:max-w-4xl mx-auto p-4">
        <div className="text-2xl font-bold mb-4">My Deals</div>

        {dealsData.map((deal, index) => (
          <div key={index} className="bg-white rounded shadow mb-6 p-4">
            <div className="flex items-center mb-2">
              <img
                src={deal.image}
                alt={deal.name}
                className="rounded-full w-10 h-10 mr-4"
              />
              <div>
                <div className="text-sm font-bold">{deal.name}</div>
                <p className="text-xs text-gray-500">{deal.couponDetails}</p>
              </div>
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <div className="text-sky-500 text-xs underline">
                {deal.reviewsLink}
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`w-4 h-4 transition-transform transform ${
                    accordionOpen[index] ? "rotate-180" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                />
              </div>
            </div>

            {accordionOpen[index] && (
              <div className="text-xs mt-2">
                <div className="font-bold mb-1">Conditions</div>
                {deal.conditions.split("\n").map((line, lineIndex) => (
                  <p key={lineIndex}>{line}</p>
                ))}

                <div className="font-bold mt-2">
                  Coupon Details: {deal.couponDetails}
                </div>
                <div>{deal.validity}</div>
                <div className="mt-2 font-bold">Restaurant Details:</div>
                <div>Phone: {deal.restaurantDetails.phone}</div>
                <div>Email: {deal.restaurantDetails.email}</div>
                <div className="flex justify-end">
                  <Link
                    to="/pause-deal"
                    className="bg-black text-white rounded px-4 py-2"
                  >
                    Pause
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningDealsPage;
{
  /* <div className="flex justify-end">
                <Link to="/pause-deal" className="bg-black text-white rounded px-4 py-2">Pause</Link>
</div>*/
}
