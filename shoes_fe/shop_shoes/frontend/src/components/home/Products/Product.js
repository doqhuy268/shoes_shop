import React, { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { toast } from "react-toastify";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  const [wishList, setWishList] = useState([]);
  const navigate = useNavigate();
  const productItem = props;
  
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };

  const handleWishList = () => {
    toast.success("Product add to wish List");
    setWishList(wishList.push(props));
    console.log(wishList);
  };
  
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: props._id,
        name: props.productName,
        quantity: 1,
        image: props.img,
        badge: props.badge,
        price: props.price,
        colors: props.color,
      })
    );
  };
  
  return (
    <div className="w-full relative group">
      {/* Product Image Container */}
      <div className="aspect-square w-full relative overflow-hidden">
        <div 
          onClick={handleProductDetails}
          className="w-full h-full cursor-pointer"
        >
          <Image className="w-full h-full object-cover object-center" imgSrc={props.img} />
        </div>
        
        {/* Badge */}
        <div className="absolute top-2 sm:top-4 md:top-6 left-2 sm:left-4 md:left-8">
          {props.badge && <Badge text="New" />}
        </div>
        
        {/* Action Buttons - Desktop Hover */}
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700 hidden sm:block">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Compare
              <span>
                <GiReturnArrow />
              </span>
            </li>
            <li
              onClick={handleAddToCart}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
            <li
              onClick={handleWishList}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li>
          </ul>
        </div>
        
        {/* Mobile Quick Actions */}
        <div className="absolute bottom-0 left-0 w-full py-2 px-4 bg-black bg-opacity-50 flex justify-between sm:hidden">
          <button 
            onClick={handleAddToCart}
            className="text-white flex items-center gap-1 text-sm"
          >
            <FaShoppingCart />
            <span>Add</span>
          </button>
          <button 
            onClick={handleProductDetails}
            className="text-white flex items-center gap-1 text-sm"
          >
            <MdOutlineLabelImportant />
            <span>View</span>
          </button>
          <button 
            onClick={handleWishList}
            className="text-white flex items-center gap-1 text-sm"
          >
            <BsSuitHeartFill />
            <span>Wish</span>
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="w-full py-4 sm:py-5 md:py-6 flex flex-col gap-1 border-[1px] border-t-0 px-3 sm:px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-base sm:text-lg text-primeColor font-bold truncate pr-2">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[12px] sm:text-[14px]">${props.price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[12px] sm:text-[14px]">{props.color}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
