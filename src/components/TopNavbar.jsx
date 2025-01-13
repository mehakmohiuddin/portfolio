import React from "react";
export default function TopNavbar() {
    return (
      <nav className="flex items-center justify-around px-4 py-3 bg-primary">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Mehak Mohi ud Din
        </h1>
  
        {/* Button */}
        <button className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition duration-200">
          Let’s Connect
        </button>
      </nav>
    );
  }
  