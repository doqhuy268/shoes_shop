import React, { useState } from "react";
import Brand from "./shopBy/Brand";
import Category from "./shopBy/Category";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";
import { FiFilter } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const ShopSideNav = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
    // Prevent body scrolling when filter is open
    if (!showMobileFilters) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  return (
    <>
      {/* Mobile Filter Toggle Button */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button 
          onClick={toggleMobileFilters}
          className="bg-primeColor text-white rounded-full p-4 shadow-lg flex items-center justify-center"
          aria-label="Toggle filters"
        >
          <FiFilter className="text-xl" />
        </button>
      </div>
      
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-full">
        <Brand />
        <Category />
        <Color />
        <Price />
      </div>
      
      {/* Mobile Filters Overlay */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="absolute right-0 top-0 h-full w-80 bg-white overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-bold text-xl">Filters</h2>
              <button 
                onClick={toggleMobileFilters}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close filters"
              >
                <IoMdClose className="text-2xl" />
              </button>
            </div>
            
            <div className="p-4">
              <Brand />
              <Category />
              <Color />
              <Price />
              
              <div className="mt-8 flex gap-4">
                <button 
                  className="w-1/2 py-3 bg-gray-200 text-gray-800 rounded font-medium"
                  onClick={toggleMobileFilters}
                >
                  Cancel
                </button>
                <button className="w-1/2 py-3 bg-primeColor text-white rounded font-medium">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopSideNav;