import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import Image from "../designLayouts/Image";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <div className="relative bg-[#F5F5F3] flex flex-col lg:flex-row justify-center items-center py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12">
    <div className="w-full lg:w-1/2 max-w-[450px] mb-8 lg:mb-0 lg:mr-8 xl:mr-16 px-4 text-center lg:text-left">
      <h1 className="mb-3 sm:mb-4 md:mb-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-bold leading-tight">
        {text}
      </h1>
      <p className="mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
        {Subtext}
      </p>

      <Link to={buttonLink || "/about"}>
        <button className="bg-primeColor text-white text-sm sm:text-base md:text-lg font-bodyFont w-[140px] sm:w-[160px] md:w-[185px] h-[40px] sm:h-[45px] md:h-[50px] hover:bg-black duration-300 font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
    <div className="w-full lg:w-1/2 max-w-[450px] px-4">
      <Image 
        className="w-full h-auto object-contain mx-auto" 
        imgSrc={imgSrc} 
      />
    </div>
  </div>
);

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        className="absolute transform -translate-y-1/2 left-2 sm:left-7 top-1/2"
      >
        <ul className="m-0"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`cursor-pointer py-2 ${
          i === dotActive 
            ? "w-[25px] sm:w-[30px] text-[#262626] border-r-[3px] border-[#262626]" 
            : "w-[25px] sm:w-[30px] text-transparent border-r-[3px] border-white"
        }`}
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div className="absolute transform -translate-y-1/2 left-2 top-1/2">
              <ul className="m-0"> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              className={`cursor-pointer py-1 text-xs ${
                i === dotActive 
                  ? "w-[25px] text-[#262626] border-r-[3px] border-[#262626]" 
                  : "w-[25px] text-transparent border-r-[3px] border-white"
              }`}
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
      text: "Enhance Your Printing Experience",
      Subtext:
        "Explore our premium printers and consumables for exceptional results",
      buttonLink: "/offer",
      buttonText: "Shop Now",
    },
    {
      imgSrc: bannerImgTwo, // Changed to use different images
      text: "Quality Printing Solutions",
      Subtext:
        "Discover our wide range of printers and consumables designed for professional printing needs.",
      buttonLink: "/shop",
      buttonText: "About-us",
    },
    {
      imgSrc: bannerImgThree, // Changed to use different images
      text: "Efficiency Redefined",
      Subtext:
        "Maximize productivity with our advanced printers and high-quality consumables. ",
      buttonLink: "/contact",
      buttonText: "Contact-us",
    },
  ];
  
  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
