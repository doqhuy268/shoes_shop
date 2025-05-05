import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { URL_IMAGE } from "../../../constants";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  
  const renderDescription = () => {
    if (!productInfo.des) {
      return null;
    }

    const description = productInfo.des.split(/:(.*?)-/).map((part, index) => {
      return (
        <span 
          key={index} 
          className={index % 2 === 1 ? "text-red-600 font-bold" : ""}
        >
          {part}
        </span>
      );
    });

    return <>{description}</>;
  };
  
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: productInfo.id,
        name: productInfo.name,
        quantity: productInfo?.sizes?.quantity || 1,
        image: {URL_IMAGE},
        badge: productInfo.badge,
        price: productInfo.price,
        colors: productInfo.color,
      })
    );
  };
  
  return (
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
      {/* Product Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold line-clamp-2">
        {productInfo.name}
      </h2>
      
      {/* Price */}
      <div className="flex items-center flex-wrap">
        <p className="text-xl sm:text-2xl font-semibold">
          {productInfo.price}
        </p>
        <span className="text-xs ml-2 inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-green-600 text-white">
          Save 100
        </span>
      </div>
      
      <hr className="my-1 sm:my-2" />
      
      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600">
        {renderDescription()}
      </p>

      {/* Ratings */}
      <div className="flex items-center py-1">
        <p className="text-xs sm:text-sm mr-2"> Đánh giá </p>
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>

      {/* Stock Status */}
      <p className="text-sm sm:text-base text-green-600 font-medium">En Stock</p>
      
      {/* Size */}
      <p className="text-sm sm:text-base md:text-lg font-medium">
        <span className="font-normal">Size:</span> {productInfo?.sizes?.sizeId}
      </p>
      
      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 duration-300 text-white text-base sm:text-lg font-titleFont rounded-sm md:rounded"
      >
        Add to Cart
      </button>
      
      {/* Categories */}
      <p className="text-xs sm:text-sm font-normal mt-2">
        <span className="text-sm sm:text-base font-medium">Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
