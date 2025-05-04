import React from "react";
import { SplOfferData } from "../../../constants";

const ProductsOnSale = () => {
  return (
    <div className="w-full">
      <h3 className="font-titleFont text-lg sm:text-xl font-semibold mb-4 sm:mb-6 underline underline-offset-4 decoration-[1px]">
        Products on sale
      </h3>
      
      <div className="flex flex-col gap-2 sm:gap-3">
        {SplOfferData.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-2 sm:gap-4 border-b-[1px] border-b-gray-300 py-2 sm:py-3 hover:bg-gray-50 transition-colors"
          >
            <div className="w-16 sm:w-20 md:w-24 flex-shrink-0">
              <img 
                className="w-full h-auto object-cover" 
                src={item.img} 
                alt={item.productName} 
              />
            </div>
            <div className="flex flex-col gap-1 sm:gap-2 font-titleFont overflow-hidden">
              <p className="text-sm sm:text-base font-medium truncate">
                {item.productName}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-blue-600">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Products Link */}
      <div className="mt-4 sm:mt-6 text-center">
        <a 
          href="/shop" 
          className="text-xs sm:text-sm text-blue-500 hover:text-blue-700 hover:underline inline-block py-2"
        >
          View all products on sale
        </a>
      </div>
    </div>
  );
};

export default ProductsOnSale;
