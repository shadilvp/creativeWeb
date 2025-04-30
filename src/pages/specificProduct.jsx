import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../../src/datas/product.json";
import { FiCheck, FiCreditCard } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import Swal from "sweetalert2";

import { PiPlantLight } from "react-icons/pi";
import { useGlobalContext } from "../Context/context";

const SpecificProduct = () => {
  const { cart, addToCart } = useGlobalContext();
  console.log(cart);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleAddToCart = (product) => {
    addToCart(product);

    Swal.fire({
      title: "Item is added to cart",
      showClass: {
        popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
      },
      hideClass: {
        popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
      },
    });
    setTimeout(() => {
      navigate("/cart");
    }, 2000);
  };

  const product = products.find((item) => String(item.id) === id);

  return (
    <div className="flex flex-col mb-5">
      <div className="flex w-screen h-[calc(95vh-80px)] flex-wrap">
        <div className="w-1/2 h-full ">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-xs"
          />
        </div>
        <div className="flex flex-col justify-between w-1/2 h-full p-25 pl-40 text-[#2A254B]">
          <h1 className="text-4xl font-light mask-r-from-neutral-500">
            {product.name}
          </h1>
          <br />
          <p className="text-2xl text-black font-light">£{product.price}</p>
          <br />
          <div>
            <h3 className="text-xl font-light mb-1 ">Description</h3>
            <p className="max-w-[35ch] text-[#2a254ba5]">
              {product.description}
            </p>
          </div>
          <br />
          <div className="w-3/5">
            <h3 className="text-xl font-light mb-1 ">Dimensions</h3>
            <div className="flex justify-between font-light text-center text-[#2a254ba5]">
              <div className="pr-5">
                <h4>Height</h4>
                <p>{product?.dimensions?.height || "Not Defined"}</p>
              </div>
              <div className="px-5">
                <h4>width</h4>
                <p>{product?.dimensions?.height || "Not Defined"}</p>
              </div>
              <div className="px-5">
                <h4>Depth</h4>
                <p>{product?.dimensions?.depth || "Not Defined"}</p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <button
            className="p-3 bg-[#2A254B] text-white w-1/4 h-1/4 text-center rounded-xs"
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-15">
        <h1 className="font-light text-2xl md:pl-48 my-2 text-[#2A254B]">
          You might also like
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 my-2 ">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="text-[#000224] "
                onClick={() => navigate(`/shop/${product.id}`)}
              >
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" object-cover h-80 w-60 rounded-xs"
                  />
                </div>
                <h2 className="text-lg font-semibold mt-3 text-[#2A254B]">
                  {product.name}
                </h2>
                <p className="text-[#0106645c]">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className="p-3 text-black font-light bg-[#F9F9F9] text-center md:ml-165"
          onClick={() => navigate("/shop")}
        >
          View all
        </button>
      </div>
      <div className="flex flex-col items-center m-12">
        <h1 className="font-light text-[#2A254B] text-2xl m-10">
          What makes our brand different
        </h1>
        <div className="flex justify-evenly gap-y-4">
          <div className="px-6">
            <CiDeliveryTruck size={35} />
            <h2 className="font-light text-xl text-[#2A254B] my-2 ">
              Next day as standard
            </h2>
            <p className="font-light text-[#2a254bd0]">
              Order before 3pm and get your <br /> order the next day as
              standard
            </p>
          </div>
          <div className="px-6">
            <FiCheck size={35} />
            <h2 className="font-light text-xl text-[#2A254B] my-2 ">
              Next day as standard
            </h2>
            <p className="font-light text-[#2a254bd0]">
              Order before 3pm and get your <br /> order the next day as
              standard
            </p>
          </div>
          <div className="px-6">
            <FiCreditCard size={35} />
            <h2 className="font-light text-xl text-[#2A254B] my-2 ">
              Next day as standard
            </h2>
            <p className="font-light text-[#2a254bd0] my-2 ">
              Order before 3pm and get your <br /> order the next day as
              standard
            </p>
          </div>
          <div className="px-6">
            <PiPlantLight size={35} />
            <h2 className="font-light text-xl text-[#2A254B] my-2 ">
              Next day as standard
            </h2>
            <p className="font-light text-[#2a254bd0]">
              Order before 3pm and get your <br /> order the next day as
              standard
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SpecificProduct;
