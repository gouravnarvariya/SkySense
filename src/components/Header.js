import React from "react";
import { logo } from "../contants/keys";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold">SkySense</h1>
      </div>
    </header>
  );
};

export default Header;
