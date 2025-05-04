import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";

const Color = () => {
  const [showColors, setShowColors] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  
  const colors = [
    {
      _id: 9001,
      title: "Green",
      base: "#22c55e",
    },
    {
      _id: 9002,
      title: "Gray",
      base: "#a3a3a3",
    },
    {
      _id: 9003,
      title: "Red",
      base: "#dc2626",
    },
    {
      _id: 9004,
      title: "Yellow",
      base: "#f59e0b",
    },
    {
      _id: 9005,
      title: "Blue",
      base: "#3b82f6",
    },
  ];
  
  const toggleColors = () => {
    setShowColors(!showColors);
  };
  
  const handleColorSelect = (colorId) => {
    setSelectedColor(selectedColor === colorId ? null : colorId);
  };

  return (
    <div className="mb-6 sm:mb-8">
      <NavTitle 
        title="Shop by Color" 
        icons={true} 
        isOpen={showColors}
        onClick={toggleColors}
      />
      
      {showColors && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-2 sm:mt-3"
        >
          <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4 text-[#767676]">
            {colors.map((item) => (
              <li
                key={item._id}
                className={`border-b border-[#F0F0F0] pb-2 flex items-center gap-3 py-1 cursor-pointer hover:text-primeColor transition-colors duration-300 ${
                  selectedColor === item._id ? 'text-primeColor' : ''
                }`}
                onClick={() => handleColorSelect(item._id)}
              >
                <span
                  style={{ background: item.base }}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full inline-block border ${
                    selectedColor === item._id ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                  }`}
                  aria-hidden="true"
                ></span>
                <span className="text-sm sm:text-base">{item.title}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Color;
