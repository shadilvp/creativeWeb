import React, { useState } from "react";
import { FiSearch,FiShoppingCart, FiUser  } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate()

  return (
    <nav className="flex flex-col">
      {/* Top navbar */}
      <div className="flex justify-between items-center p-4 px-6 border-b border-gray-300">
      <span className="text-xl cursor-pointer text-gray-800">
          <FiSearch />
        </span>

        <h1 className="text-xl font-semibold text-gray-800">Avion</h1>


        <div className="hidden md:flex ">
          <span className="text-xl cursor-pointer pr-4">
            <FiShoppingCart />
          </span>
          <span className="text-xl cursor-pointer">
            <FiUser />
          </span>
        </div>


        <div className="text-2xl cursor-pointer text-gray-800 md:hidden" onClick={toggleMenu}>
          ☰
        </div>
      </div>


      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col absolute top-16 right-0 w-full bg-white border-t border-gray-200 justify-center md:flex md:flex-row md:static md:w-auto md:border-none md:bg-transparent md:gap-6 z-10`}
      >
        <li>
          <a onClick={()=> navigate("/")} className="block py-2 px-4 text-gray-600 hover:text-black cursor-pointer">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-gray-600 hover:text-black">
            About
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-gray-600 hover:text-black">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
