import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import BroNavbar from "../components/BrokerNavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const dealsData = [
  {
    name: "Ginger and Spice",
    image: "/assets/ginger and spice.png",
    reviewsLink: "Reviews",
    location: "Kensington St, Chippendale NSW 2008",
    owner: {
      phone: "03435675877",
      email: "Gingerandspice@example.com",
    },
    popularTimes: <img src="/assets/populartime1.png" alt="Popular Times" />,
  },
  {
    name: "Andiamo",
    image: "/assets/andiamo.png",
    reviewsLink: "Reviews",
    location: "565 Great N Rd, Abbotsford NSW 2046",
    owner: {
      phone: "98765432",
      email: "andiamo@example.com",
    },
    popularTimes: <img src="/assets/Populartime2.png" alt="Popular Times" />,
  },
  {
    name: "Shanghai Dumpling Bar",
    image: "/assets/Shanghai Dumpling Bar.png",
    reviewsLink: "Reviews",
    location: "14 Kensington St, Chippendale NSW 2008",
    owner: {
      phone: "98733567",
      email: "dumplings@gmail.com",
    },
    popularTimes: <img src="/assets/Populartime3.png" alt="Popular Times" />,
  },
];

export const VenueBrokerPage = () => {
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
    <div className="bg-white">
      <BroNavbar />
      <div className="max-w-md lg:max-w-4xl mx-auto p-4">
        <div className="text-2xl font-bold mb-4">Your Venue</div>

        {dealsData.map((deal, index) => (
          <div key={index} className="bg-white rounded shadow mb-6 p-4">
            <div className="flex items-center mb-2">
              <img
                src={deal.image}
                alt={deal.name}
                className="rounded-full w-10 h-10 mr-4"
              />
              <div className="text-sm font-bold">{deal.name}</div>
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
                <div className="font-bold mb-1">Location</div>
                <p className="mb-2">{deal.location}</p>

                <div className="mb-4">
                  <div className="font-bold mb-1">More Details</div>
                  <p>Owner Phone: {deal.owner.phone}</p>
                  <p>Owner Email: {deal.owner.email}</p>
                </div>

                <div className="font-bold mb-1">Popular times</div>
                <img
                  src={deal.popularTimes.props.src}
                  alt="Popular Times"
                  className="w-full max-w-sm"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueBrokerPage;
