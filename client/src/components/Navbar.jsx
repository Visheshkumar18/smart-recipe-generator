import React from "react";
import logo from "../assets/logo.svg";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row border-b-4 rounded-md mx-1 justify-between items-center p-2 fixed top-0 z-20 bg-black w-full">
      {/* Logo + Title */}
      <div className="flex items-center mb-2 sm:mb-0">
        <img src={logo} className="w-10 h-10" alt="Logo" />
        <h1 className="text-white text-2xl font-extrabold mx-2">RecipAI</h1>
      </div>

      {/* Searchbar */}
      <div className="w-full sm:w-auto mb-2 sm:mb-0">
        <Searchbar />
      </div>

      {/* Button */}
      <div>
        <button className="btn btn-outline btn-primary w-full sm:w-auto">
          Generate New
        </button>
      </div>
    </div>
  );
};

export default Navbar;
