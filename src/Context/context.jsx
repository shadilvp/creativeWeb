import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();


export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <GlobalContext.Provider value={{ cart, addToCart }}>
      {children}
    </GlobalContext.Provider>
  );
};


export const useGlobalContext = () => useContext(GlobalContext);
