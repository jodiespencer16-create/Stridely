import React, { useContext, useState } from "react";
import { BiCart, BiSearch, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const { searchProducts, quantity } = useContext(ShopContext);
    const [query, setQuery] = useState("");
    
    const handleSearch = (e) => {
        setQuery(e.target.value);
        searchProducts(e.target.value);
    };
    
    return (
        <nav className="navbar flex justify-between items-center px-6 md:px-14 py-4 w-full z-50 transition-all duration-500 bg-gradient-to-r from-primary via-secondary to-accent shadow">
      <div className="logo flex items-center gap-2">
        <span className="font-bold text-2xl text-neutral-light">Stridely</span>
        <span className="hidden md:inline text-sm text-neutral-light tracking-widest font-medium ml-2">
          Step Up Your Game
        </span>
      </div>
      <div className="relative search flex items-center flex-1 max-w-[420px] mx-6">
        <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg md:text-xl text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search sneakers..."
          className="pl-12 pr-10 py-2 md:py-3 w-full rounded-full border border-accent bg-white text-neutral-dark shadow-sm focus:outline-none"
          aria-label="Search sneakers"
        />
      </div>
      <div className="nav_icon_wrapper flex items-center space-x-8">
        <Link to="/cart" className="relative" aria-label="View cart">
          <BiCart className="text-2xl md:text-3xl text-neutral-light" />
          <span className="absolute -top-1 -right-2 bg-accent text-neutral-dark text-xs h-5 w-5 flex items-center justify-center rounded-full font-bold">
            {quantity}
          </span>
        </Link>
        <BiUser className="text-2xl md:text-3xl text-neutral-light" aria-label="User profile" />
      </div>
    </nav>
    );
};

export default Navbar;