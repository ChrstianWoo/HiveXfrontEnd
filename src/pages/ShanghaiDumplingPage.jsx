import React from "react";
import { Link } from "react-router-dom";

const ShanghaiDumplingPage = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold mb-4">Shanghai Dumpling Bar</div>
        <img
          src="/assets/Shanghai Dumpling Bar.png"
          alt="Shanghai Dumpling Bar Logo"
          className="w-16 h-16 rounded-full"
        />
      </div>

      <div className="mb-4">
        <p className="font-bold mb-2">CHINESE</p>
        <p>
          Shanghai Dumpling Bar specializes in rustic, brightly colored
          dumplings handmade in unique flavored pastry, including vegetable,
          chicken, sweet corn, and mixed seafood dumplings.
        </p>
    
        <p>
          The dumplings can be served two ways: potsticker or boiled, complete
          with your choice of dipping sauce. Shanghai Dumpling Bar also serves
          Chinese crispy pockets and noodle dishes such as Pork Chop Dan Dan
          Noodles or Black Pepper Beef Toss Noodles, making it the perfect spot
          to enjoy rustic, street-style Chinese food while soaking up the
          vibrant surroundings of Spice Alley.
        </p>
      </div>

      <div className="mb-4">
        <p className="font-bold mb-2">No Menu Available</p>
       
      </div>
      
      <div className="mb-4">
        <p className="font-bold mb-2">FAVOURITES</p>
        <ul>
          <li>Rainbow Dumplings</li>
          <li>Pork Chop Dan Dan Noodle</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-bold mb-2">Contact Details:</p>
        <ul>
          <li>Phone: 0423442342</li>
          <li>Email: Sample@email.com</li>
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <Link to="/my-deals" className="text-blue-500">
          Back
        </Link>
      </div>
    </div>
  );
};

export default ShanghaiDumplingPage;
