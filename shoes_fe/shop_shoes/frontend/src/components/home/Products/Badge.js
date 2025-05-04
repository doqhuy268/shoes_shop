import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-primeColor w-[70px] h-[30px] sm:w-[80px] sm:h-[32px] md:w-[92px] md:h-[35px] text-white flex justify-center items-center text-xs sm:text-sm md:text-base font-semibold hover:bg-black duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default Badge;