import React from "react";
import CartButton from "../utils/ui/cartIcon";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
      <nav className="flex items-center justify-between w-full px-8 py-4 absolute top-0 left-0 z-20 bg-transparent">
        

        <div className="text-white text-2xl font-bold">
          avion
        </div>

        <div className="flex gap-8">
          <a onClick={()=>navigate("/shop")} className="text-white text-pretty hover:text-[#9b9b9b] cursor-pointer">Shop</a>
          <a href="#" className="text-white text-pretty hover:text-[#9b9b9b]">About</a>
          <a href="#" className="text-white text-pretty hover:text-[#9b9b9b]">Contact</a>
        </div>

        <div className="text-white text-2xl cursor-pointer">
          <CartButton />
        </div>

      </nav>
    </div>
  );
};

export default Header;
