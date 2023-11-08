import React from "react";
import Navbar from "../components/NavigationBar";
import FeaBar from "../components/FeaturesBar";

export const MyWallet = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="flex items-center justify-center w-[233px] h-[91px] text-black text-2xl font-bold font-['Roboto']">
        My Wallet
      </div>
      <FeaBar/>
    </div>
  );
};
