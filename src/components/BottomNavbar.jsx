"use client"
import { IoIosHome } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import { IoBagRemoveSharp } from "react-icons/io5";
import { FcContacts } from "react-icons/fc";
import { useState } from "react";

export default function BottomNavbar() {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="fixed inset-x-0 bottom-2 mx-auto w-full max-w-xl py-1 bg-transparent border border-gray-100 rounded-lg">
      <div className="flex justify-between items-center h-full w-full px-2 sm:px-4 space-x-20">
        
        <button
          type="button"
          onClick={() => handleButtonClick("home")}
          className={`flex flex-col items-center justify-center p-2 rounded-full ${
            activeButton === "home" ? "bg-purple-400" : "hover:bg-purple-200"
          }`}
        >
          <IoIosHome className="text-lg sm:text-xl" style={{color: "white"}}/>
          <span className="sr-only">Home</span>
        </button>
        
        <button
          type="button"
          onClick={() => handleButtonClick("wallet")}
          className={`flex flex-col items-center justify-center p-2 rounded-full ${
            activeButton === "wallet" ? "bg-purple-400" : "hover:bg-purple-200"
          }`}
        >
          <BsFillPersonFill className="text-lg sm:text-xl" style={{color: "white"}}/>
          <span className="sr-only">Wallet</span>
        </button>
        
        <button
          type="button"
          onClick={() => handleButtonClick("new")}
          className={`flex items-center justify-center w-8 h-8 p-2 rounded-full ${
            activeButton === "new" ? "bg-purple-400" : "hover:bg-purple-200"
          }`}
        >
          <FaAddressBook className="text-lg sm:text-xl" style={{color: "white"}}/>
          <span className="sr-only">New item</span>
        </button>
        
        <button
          type="button"
          onClick={() => handleButtonClick("projects")}
          className={`flex flex-col items-center justify-center p-2 rounded-full ${
            activeButton === "projects" ? "bg-purple-400" : "hover:bg-purple-200"
          }`}
        >
          <IoBagRemoveSharp className="text-lg sm:text-xl" style={{color: "white"}}/>
          <span className="sr-only">Projects</span>
        </button>
        
        <button
          type="button"
          onClick={() => handleButtonClick("contact")}
          className={`flex flex-col items-center justify-center p-2 rounded-full ${
            activeButton === "contact" ? "bg-purple-400" : "hover:bg-purple-200"
          }`}
        >
          <FcContacts className="text-lg sm:text-xl" style={{color: "white"}}/>
          <span className="sr-only">Contact</span>
        </button>
        
      </div>
    </div>
  );
}
