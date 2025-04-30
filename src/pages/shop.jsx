import React, { useState } from "react";
import shopheader from "../assets/ShopHeader.png";
import products from "../../src/datas/product.json";
import CheckboxPrice from "../utils/ui/checkBoxprice";
import CatagoryRadio from "../utils/ui/catagoryCheckBox";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrices, setSelectedPrices] = useState([]);
  const navigate = useNavigate()

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleCategoryFilter = (value) => {
    setSelectedCategory(value);
    setVisibleCount(9);
  };

  const handlePriceCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedPrices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
    setVisibleCount(9);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category.toLowerCase() === selectedCategory
      : true;

    const matchesPrice =
      selectedPrices.length === 0
        ? true
        : selectedPrices.some((range) => {
            const price = product.price;
            if (range === "0-100") return price >= 0 && price <= 100;
            if (range === "100-250") return price > 100 && price <= 250;
            if (range === "250+") return price > 250;
            return false;
          });

    return matchesCategory && matchesPrice;
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const priceOptions = [
    { label: "$0 - $100", value: "0-100" },
    { label: "$100 - $250", value: "100-250" },
    { label: "$250+", value: "250+" },
  ];

  return (
    <div className="flex w-screen flex-col items-center ">
      <div className="mt-5">
        <img
          src={shopheader}
          alt="Shop Header"
          className="w-screen max-h-[100px] object-cover"
        />
      </div>
      <div className="flex w-full px-4 md:px-5 ">
        <div className="mt-10 w-2/9 hidden md:block mb-10 ml-10 sticky top-10 self-start scrollbar-hide  rounded-xl p-10 bg-[#e8e8e8] shadow-xl">
          <div className="space-y-6">
            {/* Filter by Category */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Category</h2>
              <CatagoryRadio
                selectedCategory={selectedCategory}
                onChange={handleCategoryFilter}
              />
            </div>
            <br />

            {/* Filter by Price */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Price</h2>
              <div className="flex ">
                <CheckboxPrice
                  options={priceOptions}
                  selectedOptions={selectedPrices}
                  onChange={handlePriceCheckboxChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-7/9 mx-2 md:ml-20">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10 gap-x-1">
            {visibleProducts.map((product) => (
              <div key={product.id} className="text-[#000224] " onClick={() => navigate(`/shop/${product.id}`)}>
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" object-cover h-80 w-60 rounded-xs"
                  />
                </div>
                <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
                <p className="text-[#0106645c]">${product.price}</p>
              </div>
            ))}
          </div>

          {visibleCount < filteredProducts.length && (
            <div className="flex justify-center mb-10">
              <button
                onClick={handleShowMore}
                className="bg-[#f0f0f0] text-black px-6 py-2 rounded hover:bg-[#b4b4b4] transition-opacity"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
