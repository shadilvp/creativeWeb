import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaSkype, FaTwitter, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] text-white px-8 md:px-16 py-12 flex flex-col gap-12">

      <div className="flex flex-col md:flex-row gap-12">

        <div className="flex-1 flex flex-col md:flex-row gap-24 items-center">

          <div>
            <h3 className="mb-4 font-semibold">Menu</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>


          <div>
            <h3 className="mb-4 font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>


          <div>
            <h3 className="mb-4 font-semibold">Our company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>
        </div>


        <div className="flex-1">
          <h3 className="mb-4 font-semibold">Join our mailing list</h3>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="p-3 bg-[#4E4D5C] text-white placeholder:text-white flex-1"
            />
            <button
              type="submit"
              className="bg-white text-[#2A254B] font-semibold px-6 py-3"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>


      <div className="border-t border-gray-400 my-6"></div>



      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-300 text-sm">Copyright 2022 Avion LTD</p>
        <div className="flex gap-5 text-white text-lg">
          <FaLinkedinIn className="hover:scale-110 transition-transform duration-200" />
          <FaFacebookF className="hover:scale-110 transition-transform duration-200" />
          <FaInstagram className="hover:scale-110 transition-transform duration-200" />
          <FaSkype className="hover:scale-110 transition-transform duration-200" />
          <FaTwitter className="hover:scale-110 transition-transform duration-200" />
          <FaPinterestP className="hover:scale-110 transition-transform duration-200" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
