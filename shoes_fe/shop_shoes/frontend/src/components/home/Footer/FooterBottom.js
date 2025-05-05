import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-14 md:pb-20 px-4 sm:px-6 md:px-8">
        <p className="text-titleFont font-normal text-center flex flex-col sm:flex-row sm:items-center justify-center text-lightText duration-200 text-xs sm:text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          <span>Copyright 2022 | Orebi shopping | All Rights Reserved |</span>
          <a href="https://reactbd.com/" target="_blank" rel="noreferrer">
            <span className="ml-0 sm:ml-1 font-medium group-hover:text-primeColor">
              Powered by ReactBD.com
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;