import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context/context";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useGlobalContext();
  console.log(cart);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="h-full px-10 mx-60">
      <div className="text-3xl font-light mt-10 text-left text-[#2A254B]">
        Your shopping cart
      </div>

      {cart.length === 0 ? (
        <p className="text-xl text-gray-600 mt-10">Your cart is empty</p>
      ) : (
        <>
          <div className="border-y-2 my-10 py-6 border-gray-100 space-y-8">
            {cart.map((item, index) => (
              <div key={index} className="text-[#2A254B]">
                <div className="flex justify-between items-start">
                  <div className="flex">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-32 object-cover mr-4"
                    />
                    <div>
                      <h2 className="text-xl font-light mb-1">{item.name}</h2>
                      <p className="text-gray-500 text-sm mt-1 max-w-[29ch]">
                        {item.description}
                      </p>
                      <p className="text-gray-600 mt-1">£{item.price}</p>
                    </div>
                  </div>

                  <div>
                    <p className="mt-2 font-light">Quantity: 1</p>
                  </div>

                  <div>
                    <p className="text-gray-600 mt-1 font-light">
                      £{item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="flex justify-end mt-20 mb-20">
            <div className="flex flex-col gap-5 text-right">
              <h1 className="text-xl text-[#2a254bd6]">
                Subtotal{" "}
                <span className="text-[#2A254B] font-light">
                  £{subtotal.toFixed(2)}
                </span>
              </h1>
              <p className="text-[#4E4D93] font-light text-xs">
                Taxes and shipping are calculated at checkout
              </p>
              <button className="p-3 bg-[#2A254B] text-white text-center rounded-none w-64">
                Go to checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
