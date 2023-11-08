import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturesBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className={`lg:flex items-center justify-center space-x-4 ${menuOpen ? 'hidden' : ''}`}>
            <Link to="/my-wallet" className="text-purple-400 hover:text-purple-700 link-with-underline">My Vouchers</Link>
            <Link to="/my-wallet" className="text-purple-400 hover:text-purple-700 link-with-underline">My Offers</Link>
            <Link to="/history" className="text-purple-400 hover:text-purple-700 link-with-underline">History</Link>
        </div>
    )
};

export default FeaturesBar;