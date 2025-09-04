import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
  <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center" style={{position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100}}>
      {/* Left Section (Logo + Links) */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="text-4xl font-bold">
          <NavLink to="/" className="hover:text-blue-300">
            QR<span className="text-blue-400">Gen</span>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            About
          </NavLink>
        </div>
      </div>

      {/* Right Section (Auth Buttons) */}
      <div className="flex space-x-4">
        <NavLink to="/login" className="px-4 py-2 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition">
          Login
        </NavLink>
        <NavLink to="/signup" className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition">
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
