import React, { useState } from "react";
import homeImg from "../assets/homepage.png";
import expImage1 from "../assets/expImage1.png";
import expImage2 from "../assets/expImage2.png";
import tetsimoni1 from "../assets/testimoni1.png";
import tetsimoni2 from "../assets/testimoni2.png";
import tetsimoni3 from "../assets/testimoni3.png";

import { FiSearch } from "react-icons/fi";
import ProductInfoCircle from "../utils/ui/productInfoCircle";
import MoreinfoButton from "../utils/ui/moreInfoButton";
import BestSellingNavRadio from "../utils/ui/bestSellingNavbar";
import products from "../../src/datas/product.json";
import AddButton from "../utils/ui/addButton";
import ShopNowButton from "../utils/ui/shopNow";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context/context";

const Home = () => {
  const { addToCart } = useGlobalContext();

  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState("chair");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProducts = products.filter(
    (product) => product.category === currentCategory
  );

  const visibleProducts = filteredProducts.slice(
    currentIndex,
    currentIndex + 6
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <div className="relative w-screen">
        {/* main */}
        <div className="hidden sm:block">
          <img
            src={homeImg}
            alt="home"
            className="w-screen h-full object-cover"
          />
          <h1 className="absolute top-2/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl text-center font-bold tracking-wide">
            Make your interior more <br />
            minimalistic & modern
          </h1>

          <ProductInfoCircle
            positionClass="absolute top-5/6 left-4/19 transform -translate-x-1/2 -translate-y-1/2"
            circleSize="w-15 h-15"
            innerCircleSize="w-1/3 h-1/3"
          />
          <ProductInfoCircle
            positionClass="absolute top-20/20 left-14/25 transform -translate-x-1/2 -translate-y-1/2"
            circleSize="w-8 h-8"
            innerCircleSize="w-1/3 h-1/3"
          />
          <ProductInfoCircle
            positionClass="absolute top-18/20 left-2/25 transform -translate-x-1/2 -translate-y-1/2"
            circleSize="w-8 h-8"
            innerCircleSize="w-1/3 h-1/3"
          />
          <ProductInfoCircle
            positionClass="absolute top-10/10 right-0/20 transform -translate-x-1/2 -translate-y-1/2"
            circleSize="w-8 h-8"
            innerCircleSize="w-1/3 h-1/3"
          />
          <h1 className="absolute top-3/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#d3d3d3] text-center tracking-wide">
            Turn your room with panto into a lot more minimalist <br />
            and modern with ease and speed
          </h1>
          <div className="absolute top-4/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/8 bg-opacity-70">
            <input
              type="text"
              className="w-full pl-4 pr-12 py-2 rounded-full border border-gray-300 bg-[#9592927f] bg-opacity-70 text-[#fff] focus:outline-none focus:ring-1 focus:ring-[#fff]"
              placeholder="Search..."
            />

            <FiSearch
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#fff] bg-amber-500 rounded-4xl p-1"
              size={30}
            />
          </div>
        </div>

        <div className="sm:hidden bg-blue-500 w-full h-[500px] flex items-center justify-center">
          <h1 className="text-white text-3xl text-center font-bold px-4">
            Make your interior more minimalistic & modern
          </h1>
        </div>
      </div>

      <div className="bg-white flex h-auto justify-between w-full flex-wrap my-12 px-4 sm:px-0">
        <div className="text-black font-semibold w-full sm:w-1/4 flex justify-center sm:justify-center items-center mb-8 sm:mb-0">
          <h1 className="text-3xl">
            Why <br />
            Choosing Us
          </h1>
        </div>
        <div className="flex flex-col w-full sm:w-1/4 items-start mb-8 sm:mb-0 p-8 sm:px-0">
          <h1 className="font-medium text-xl font-sans pb-4">
            Luxury facilities
          </h1>
          <p className="max-w-[31ch] text-[#969494]">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
          <button className="mt-4" onClick={() => navigate("/shop")}>
            <MoreinfoButton />
          </button>
        </div>
        <div className="flex flex-col w-full sm:w-1/4 items-start mb-8 sm:mb-0 p-8 sm:px-0">
          <h1 className="font-medium text-xl font-sans pb-4">
            Affordable Price
          </h1>
          <p className="max-w-[31ch] text-[#969494]">
            You get premium quality workspace at competitive prices with
            exclusive amenities.
          </p>
          <button className="mt-4" onClick={() => navigate("/shop")}>
            <MoreinfoButton />
          </button>
        </div>
        <div className="flex flex-col w-full sm:w-1/4 items-start p-8 sm:px-0">
          <h1 className="font-medium text-xl font-sans pb-4">Many Choices</h1>
          <p className="max-w-[31ch] text-[#969494]">
            Diverse workspace options to match your preferences and work style
            perfectly.
          </p>
          <button className="mt-4" onClick={() => navigate("/shop")}>
            <MoreinfoButton />
          </button>
        </div>
      </div>
      {/* second page  */}
      <div className="flex flex-col items-center pt-10 min-h-screen w-full bg-[#ebebeb]">
        <h1 className="text-black text-3xl font-semibold">
          Best selling products
        </h1>
        <div className="pt-9">
          <BestSellingNavRadio
            currentCategory={currentCategory}
            setCurrentCategory={(category) => {
              setCurrentCategory(category);
              setCurrentIndex(0);
            }}
          />
        </div>
        <div className="relative flex items-center w-full justify-center mt-8 px-8">
          {/* Product Cards */}

          <div className="flex gap-x-12 overflow-x-auto scroll-smooth mt-10 mb-10 px-4 max-w-3/4 scrollbar-hide">
            {visibleProducts.map((product, index) => (
              <div
                className="w-[200px] h-[380px] bg-white rounded-xl shadow-md overflow-hidden  gap-x-7 flex flex-col shrink-0"
                onClick={() => handleAddToCart(product)}
              >
                <div className="w-full h-48 bg-[#ebebeb]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col flex-1 p-4">
                  <h3 className="text-sm font-medium text-gray-400 capitalize">
                    {product.category}
                  </h3>

                  <h2 className="text-lg font-semibold text-[#0D1B39] mt-1 leading-tight">
                    {product.name}
                  </h2>

                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-[#FFAD33] fill-current mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847 1.416 8.257L12 18.896l-7.416 4.956L6 15.595 0 9.748l8.332-1.73z" />
                      </svg>
                    ))}
                  </div>

                  <div className="flex-grow" />

                  <div className="flex items-center justify-between mt-2">
                    <p className="text-lg font-semibold text-[#0D1B39]">
                      ${product.price}
                    </p>
                    <button
                      className="w-5 h-5 flex items-center justify-center  text-white rounded-full"
                      onClick={() => navigate(`/cart`)}
                    >
                      <AddButton />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full mb-10" onClick={() => navigate("/shop")}>
          <ShopNowButton />
        </button>
      </div>

      {/* third div */}
      <div className="mt-20 space-y-20">
        {/* First Section */}
        <div className="flex items-center justify-between">
          <img
            src={expImage1}
            alt="Image"
            className="w-1/2 object-cover hidden md:block"
          />
          <div className="max-w-xl p-20 ">
            <h2 className="text-[#E58411] font-light text-xl mb-2">
              EXPERIENCES
            </h2>
            <h1 className="font-bold text-3xl mb-4">
              We Provide You The <br /> Best Experience
            </h1>
            <p className="max-w-[50ch] text-gray-300">
              You don’t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and luxurious style and with premium quality
              materials
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex items-center justify-between mb-20">
          <div className="max-w-2xl p-20">
            <h2 className="text-[#E58411] font-light  text-xl mb-2">
              MATERIALS
            </h2>
            <h1 className="font-bold text-3xl mb-4">
              Very Serious <br /> Materials For Making <br /> Furniture
            </h1>
            <p className="max-w-[50ch] text-gray-300">
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </p>
          </div>
          <div className="relative w-1/2">
            <img
              src={expImage2}
              alt="Image 3"
              className="rounded-xl object-cover w-full   relative -right-[20.5%] hidden md:block"
            />
          </div>
        </div>
      </div>
      {/* fourt div */}
      <div className="flex flex-col items-center gap-5">
        <div className="text-[#E58411] font-light  text-xl mb-2">
          Testimonials
        </div>
        <div className="font-bold text-3xl mb-4">Our Client Reviews</div>
        <div className="flex justify-center max-w-4/9">
          <img src={tetsimoni1} alt="Image" className=" object-cover w-1/2" />{" "}
          <img src={tetsimoni2} alt="Image" className="object-cover w-1/2" />{" "}
          <img src={tetsimoni3} alt="Image" className="object-cover w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
