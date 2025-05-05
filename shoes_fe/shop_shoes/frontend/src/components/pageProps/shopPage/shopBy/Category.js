import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import { FaMinus } from "react-icons/fa";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../../../../redux/orebiSlice";
import { motion } from "framer-motion";

const Category = () => {
  const [showCategories, setShowCategories] = useState(true);
  const [showSubCatOne, setShowSubCatOne] = useState(false);

  const checkedCategorys = useSelector(
    (state) => state.orebiReducer.checkedCategorys
  );
  const dispatch = useDispatch();

  const category = [
    {
      _id: 9006,
      title: "Imprimante",
      icons: true,
      subcategories: ["Laser", "Inkjet", "Dot Matrix"]
    },
    {
      _id: 9007,
      title: "Encre",
    },
    {
      _id: 9008,
      title: "Ruban",
    },
    {
      _id: 9009,
      title: "Bac de dechet",
    },
  ];

  const handleToggleCategory = (category) => {
    dispatch(toggleCategory(category));
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="w-full mb-6 sm:mb-8">
      <NavTitle 
        title="Shop by Category" 
        icons={true} 
        isOpen={showCategories}
        onClick={toggleCategories}
      />
      
      {showCategories && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-2 sm:mt-3"
        >
          <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4 text-[#767676]">
            {category.map((item) => (
              <li
                key={item._id}
                className="border-b border-[#F0F0F0] pb-2"
              >
                <div className="flex items-center justify-between">
                  <label 
                    htmlFor={`cat-${item._id}`}
                    className="flex items-center cursor-pointer py-1 flex-grow text-sm sm:text-base"
                  >
                    <input
                      type="checkbox"
                      id={`cat-${item._id}`}
                      checked={checkedCategorys.some((b) => b._id === item._id)}
                      onChange={() => handleToggleCategory(item)}
                      className="mr-3 w-4 h-4 sm:w-5 sm:h-5 accent-primeColor cursor-pointer"
                    />
                    <span>{item.title}</span>
                  </label>
                  
                  {item.icons && (
                    <button
                      onClick={() => setShowSubCatOne(!showSubCatOne)}
                      className="p-1 text-xs sm:text-sm cursor-pointer text-gray-500 hover:text-primeColor rounded-full hover:bg-gray-100 transition-colors duration-300"
                      aria-label={showSubCatOne ? "Hide subcategories" : "Show subcategories"}
                    >
                      {showSubCatOne ? <FaMinus /> : <ImPlus />}
                    </button>
                  )}
                </div>
                
                {/* Subcategories */}
                {item.icons && showSubCatOne && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="ml-8 mt-2 flex flex-col gap-1 text-xs sm:text-sm"
                  >
                    {item.subcategories?.map((subcat, idx) => (
                      <li key={idx} className="hover:text-primeColor cursor-pointer">
                        {subcat}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Category;
