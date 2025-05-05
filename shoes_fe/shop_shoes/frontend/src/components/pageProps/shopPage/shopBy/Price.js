import React, { useState } from "react";
import NavTitle from "./NavTitle";
import { motion } from "framer-motion";

const Price = () => {
  const [showPrice, setShowPrice] = useState(true);
  const [selectedPrice, setSelectedPrice] = useState(null);
  
  const priceList = [
    {
      _id: 950,
      priceOne: 0.0,
      priceTwo: 49.99,
    },
    {
      _id: 951,
      priceOne: 50.0,
      priceTwo: 99.99,
    },
    {
      _id: 952,
      priceOne: 100.0,
      priceTwo: 199.99,
    },
    {
      _id: 953,
      priceOne: 200.0,
      priceTwo: 399.99,
    },
    {
      _id: 954,
      priceOne: 400.0,
      priceTwo: 599.99,
    },
    {
      _id: 955,
      priceOne: 600.0,
      priceTwo: 1000.0,
    },
  ];
  
  const togglePrice = () => {
    setShowPrice(!showPrice);
  };
  
  const handlePriceSelect = (priceId) => {
    setSelectedPrice(selectedPrice === priceId ? null : priceId);
  };
  
  return (
    <div className="mb-6 sm:mb-8">
      <NavTitle 
        title="Shop by Price" 
        icons={true}
        isOpen={showPrice}
        onClick={togglePrice}
      />
      
      {showPrice && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-2 sm:mt-3 font-titleFont"
        >
          <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4 text-[#767676]">
            {priceList.map((item) => (
              <li
                key={item._id}
                className={`border-b border-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 transition-colors duration-300 py-1 cursor-pointer ${
                  selectedPrice === item._id ? 'text-primeColor border-gray-400' : ''
                }`}
                onClick={() => handlePriceSelect(item._id)}
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center border border-gray-300 rounded-full mr-2">
                  {selectedPrice === item._id && (
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primeColor rounded-full"></div>
                  )}
                </div>
                <span className="text-sm sm:text-base">
                  ${item.priceOne.toFixed(2)} - ${item.priceTwo.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Price;
