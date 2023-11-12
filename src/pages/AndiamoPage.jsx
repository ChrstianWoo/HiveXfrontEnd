import React from "react";
import { Link } from "react-router-dom";

const AndiamoPage = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold mb-4">Andiamo</div>
        <img
          src="/assets/andiamo.png"
          alt="Andiamo Logo"
          className="w-16 h-16 rounded-full"
        />
      </div>

      <div className="mb-4">
        <p className="font-bold mb-2">Italian</p>
        <p>
          Andiamo’s menu reflects our love for simple, great quality food that
          is served with care. Italians understand that food is also memory. We
          love to make great meals so that you can enjoy the experience and time
          with your family, friends or on your own – in the company of the
          village.
        </p>
        <p>
          Our Southern Italian style pizza is hand-prepared in artisan style and
          Stonebaked to perfection. Our pasta sauces are slow-simmered and our
          favourite rustic Italian specialties prepared with Nonna’s original
          recipes. Bellissimo!
        </p>
      </div>

      <div className="mb-4">
        <p className="font-bold mb-2">Menu</p>
        <a href="/assets/Andiamo_menu.pdf" download="Andiamo_Menu.pdf" className="underline">
          Download Menu
        </a>
      </div>

      <div className="mb-4">
        <p className="font-bold mb-2">FAVOURITES</p>
        <ul>
          <li>Supreme</li>
          <li>Meat Lovers Pizza</li>
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

export default AndiamoPage;
