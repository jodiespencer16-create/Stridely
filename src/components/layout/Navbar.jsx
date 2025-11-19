import React from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center px-6 md:px-14 py-4 w-full z-50 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <BiMenu className="text-2xl text-neutral-dark cursor-pointer" />
      </div>
      
      <div className="logo flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
        <span className="font-bold text-xl text-neutral-dark">Landing Page</span>
      </div>
      
      <div className="flex items-center gap-6">
        <a href="#" className="text-neutral-dark hover:text-[#1A7B7B] transition text-sm">Home</a>
        <a href="#about" className="text-neutral-dark hover:text-[#1A7B7B] transition text-sm">About</a>
        <a href="#features" className="text-neutral-dark hover:text-[#1A7B7B] transition text-sm">Features</a>
        <a href="#contact" className="text-neutral-dark hover:text-[#1A7B7B] transition text-sm">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
