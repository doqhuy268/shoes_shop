import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrand } from "../../../../redux/orebiSlice";

const Brand = () => {
  const [showBrands, setShowBrands] = useState(true);
  const checkedBrands = useSelector(
    (state) => state.orebiReducer.checkedBrands
  );
  const dispatch = useDispatch();

  const brands = [
    {
      _id: 900,
      title: "Pantum",
    },
    {
      _id: 901,
      title: "Hp",
    },
    {
      _id: 902,
      title: "Epson",
    },
    {
      _id: 903,
      title: "Ricoh",
    },
  ];

  const handleToggleBrand = (brand) => {
    dispatch(toggleBrand(brand));
  };

  const toggleShowBrands = () => {
    setShowBrands(!showBrands);
  };

  return (
    <div className="mb-6 sm:mb-8">
      <NavTitle 
        title="Shop by Brand" 
        icons={true} 
        isOpen={showBrands}
        onClick={toggleShowBrands}
      />
      
      {showBrands && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-2 sm:mt-3"
        >
          <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4 text-[#767676]">
            {brands.map((item) => (
              <li
                key={item._id}
                className="border-b border-[#F0F0F0] pb-2 flex items-center hover:text-primeColor hover:border-gray-400 transition-colors duration-300"
              >
                <div className="flex items-center w-full">
                  <label 
                    htmlFor={`brand-${item._id}`} 
                    className="flex items-center cursor-pointer py-1 w-full text-sm sm:text-base"
                  >
                    <input
                      type="checkbox"
                      id={`brand-${item._id}`}
                      checked={checkedBrands.some((b) => b._id === item._id)}
                      onChange={() => handleToggleBrand(item)}
                      className="mr-3 w-4 h-4 sm:w-5 sm:h-5 accent-primeColor cursor-pointer"
                    />
                    <span>{item.title}</span>
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Brand;
