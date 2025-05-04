import React from "react";
import { BiCaretDown } from "react-icons/bi";

const NavTitle = ({ title, icons, isOpen, onClick }) => {
  return (
    <div 
      className="flex items-center justify-between pb-2 sm:pb-3 md:pb-5 cursor-pointer"
      onClick={onClick}
    >
      {icons ? (
        <>
          <h3 className="font-bold text-lg sm:text-lg md:text-xl text-primeColor">{title}</h3>
          <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            <BiCaretDown className="text-base sm:text-lg" />
          </span>
        </>
      ) : (
        <h3 className="font-bold text-lg sm:text-lg md:text-xl text-primeColor">{title}</h3>
      )}
    </div>
  );
};

export default NavTitle;
