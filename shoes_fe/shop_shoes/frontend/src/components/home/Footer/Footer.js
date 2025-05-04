import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../designLayouts/Image";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };
  
  return (
    <div className="w-full bg-[#111111] text-white py-10 sm:py-16 md:py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-10">
        {/* About section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-2">
          <FooterListTitle title="More about Orebi Shop" />
          <div className="flex flex-col gap-4 sm:gap-6">
            <p className="text-sm sm:text-base w-full xl:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
            <ul className="flex items-center gap-3">
              <a
                href="https://www.youtube.com/@reactjsBD"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-8 h-8 sm:w-9 sm:h-9 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a
                href="https://github.com/noorjsdivs"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-8 h-8 sm:w-9 sm:h-9 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://www.facebook.com/Noorlalu143/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-8 h-8 sm:w-9 sm:h-9 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-8 h-8 sm:w-9 sm:h-9 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        
        {/* Shop section */}
        <div className="col-span-1">
          <FooterListTitle title="Shop" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-sm sm:text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Accesories
            </li>
            <li className="font-titleFont text-sm sm:text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Clothes
            </li>
            <li className="font-titleFont text-sm sm:text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Electronics
            </li>
            <li className="font-titleFont text-sm sm:text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Home appliances
            </li>
            <li className="font-titleFont text-sm sm:text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              New Arrivals
            </li>
          </ul>
        </div>
        
        {/* Your account section */}
        <div className="col-span-1">
          <FooterListTitle title="Your account" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-sm sm:text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Profile
            </li>
            <li className="font-titleFont text-sm sm:text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Orders
            </li>
            <li className="font-titleFont text-sm sm:text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Addresses
            </li>
            <li className="font-titleFont text-sm sm:text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Account Details
            </li>
            <li className="font-titleFont text-sm sm:text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Payment Options
            </li>
          </ul>
        </div>
        
        {/* Newsletter section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-2 flex flex-col w-full">
          <FooterListTitle title="Subscribe to our newsletter." />
          <div className="w-full">
            <p className="text-sm sm:text-base mb-4">
              A at pellentesque et mattis porta enim elementum.
            </p>
            
            {/* Newsletter form */}
            {!subscription ? (
              <div className="w-full flex flex-col sm:flex-row gap-2 mb-4">
                <input
                  onChange={(e) => setEmailInfo(e.target.value)}
                  value={emailInfo}
                  className="w-full sm:w-3/5 h-12 border-b border-gray-400 bg-transparent px-4 text-white text-sm focus:outline-none placeholder:text-gray-400"
                  type="text"
                  placeholder="Insert your email ..."
                />
                <button
                  onClick={handleSubscription}
                  className="bg-white text-black w-full sm:w-2/5 h-12 hover:bg-black hover:text-white duration-300 text-sm font-semibold"
                >
                  Subscribe
                </button>
              </div>
            ) : (
              <p className="text-base text-green-500 mb-4">
                Thank you for your subscription!
              </p>
            )}
            {errMsg && (
              <p className="text-red-500 text-sm mb-4">{errMsg}</p>
            )}
            
            <Image
              className={`w-[80%] sm:w-[70%] lg:w-[60%] mx-auto mt-2`}
              imgSrc={paymentCard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
