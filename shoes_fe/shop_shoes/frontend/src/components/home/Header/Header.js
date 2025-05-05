import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Dropdown } from "antd";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { logoLight } from "../../../assets/images";
import {
  isLogin,
  navBarList,
  PATH_ROUTER,
  removeStorage,
} from "../../../constants";
import AxiosClient from "../../../networks/AxiosClient";
import { selectCarts } from "../../../redux/slices/cartsSlice";
import { selectUserInfo } from "../../../redux/slices/usersSlice";
import Flex from "../../designLayouts/Flex";

const Header = () => {
  const navigation = useNavigate();
  const selUserInfo = useSelector(selectUserInfo);
  const selCarts = useSelector(selectCarts);

  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 768) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
    
    // Cleanup function
    return () => {
      window.removeEventListener("resize", ResponsiveMenu);
    };
  }, []);

  const onLogout = async () => {
    try {
      const response = await AxiosClient.post("/auth/logout");
      if (response.code === 0) {
        removeStorage();
        window.location.replace(PATH_ROUTER.SIGN_IN);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const items = [
    {
      label: (
        <div className="py-2 px-3">
          <h3 className="mb-1 font-bold text-center">
            {selUserInfo?.fullName}
          </h3>
          <div className="flex justify-center items-center space-x-1 text-xs italic">
            <h3>ID:</h3>
            <h3>{selUserInfo?.userId}</h3>
          </div>
        </div>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <button
          className="w-full py-2 font-bold text-center text-white bg-slate-500 rounded-md hover:bg-slate-600 transition-colors"
          onClick={onLogout}
        >
          Đăng xuất
        </button>
      ),
      key: "3",
    },
  ];

  return (
    <div className="w-full h-16 sm:h-18 md:h-20 bg-[#111111] sticky top-0 z-[60] border-b-[1px] border-b-gray-200 shadow-sm">
      <nav className="max-w-container mx-auto h-full relative px-4 sm:px-6 md:px-8">
        <Flex className="h-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="w-24 sm:w-28 md:w-32">
              <img 
                src={logoLight} 
                alt="logo" 
                className="w-full object-contain"
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="flex items-center">
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-auto z-50 flex items-center p-0"
              >
                {navBarList.map(({ _id, title, link }) => (
                  <NavLink
                    key={_id}
                    className="flex font-normal hover:font-bold justify-center items-center px-2 sm:px-3 md:px-4 lg:px-6 h-4 text-sm sm:text-base text-white hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#fffafa] md:border-r-[2px] border-r-gray-300 last:border-r-0"
                    to={link}
                    state={{ data: location.pathname.split("/")[1] }}
                  >
                    <li style={{ color: "white" }}>{title}</li>
                  </NavLink>
                ))}

                {isLogin ? (
                  <div className="flex items-center pl-2 sm:pl-3 md:pl-5 space-x-1 cursor-pointer">
                    <Badge
                      count={selCarts?.cartItems?.length || 0}
                      onClick={() => {
                        navigation("/cart");
                      }}
                      className="flex items-center justify-center"
                    >
                      <ShoppingCartOutlined className="text-xl sm:text-2xl text-white" />
                    </Badge>
                    <Link to={"/users"} className="ml-2 sm:ml-3 md:ml-4">
                      <p className="flex font-normal hover:font-bold px-2 sm:px-3 md:px-5 text-sm sm:text-base text-white hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#fffafa] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                        Thông tin
                      </p>
                    </Link>
                  </div>
                ) : (
                  <NavLink
                    className="flex font-normal hover:font-bold justify-center items-center px-2 sm:px-3 md:px-4 lg:px-6 h-4 text-sm sm:text-base text-white hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#fffafa] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                    to={PATH_ROUTER.SIGN_IN}
                    state={{ data: location.pathname.split("/")[1] }}
                  >
                    <li>Đăng nhập</li>
                  </NavLink>
                )}
              </motion.ul>
            )}
            
            {/* Mobile Menu Icon */}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white absolute right-4 top-1/2 -translate-y-1/2 inline-block cursor-pointer md:hidden"
            />
            
            {/* Mobile Sidebar */}
            {sidenav && (
              <div className="bg-opacity-80 w-full h-screen fixed top-0 left-0 z-50 text-white bg-black">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] sm:w-[60%] h-full relative"
                >
                  <div className="bg-primeColor w-full h-full p-4 sm:p-6">
                    <img
                      className="w-24 sm:w-28 mb-6"
                      src={logoLight}
                      alt="logoLight"
                    />
                    <ul className="flex flex-col gap-2 text-white">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-base sm:text-lg text-white hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                            className="block py-2"
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                      
                      {isLogin && (
                        <>
                          <li className="font-normal hover:font-bold items-center text-base sm:text-lg text-white hover:underline underline-offset-[4px] decoration-[1px] hover:text-white">
                            <NavLink
                              to="/cart"
                              onClick={() => setSidenav(false)}
                              className="block py-2 flex items-center"
                            >
                              <ShoppingCartOutlined className="mr-2" />
                              Giỏ hàng ({selCarts?.cartItems?.length || 0})
                            </NavLink>
                          </li>
                          <li className="font-normal hover:font-bold items-center text-base sm:text-lg text-white hover:underline underline-offset-[4px] decoration-[1px] hover:text-white">
                            <NavLink
                              to="/users"
                              onClick={() => setSidenav(false)}
                              className="block py-2"
                            >
                              Thông tin
                            </NavLink>
                          </li>
                        </>
                      )}
                      
                      {!isLogin && (
                        <li className="font-normal hover:font-bold items-center text-base sm:text-lg text-white hover:underline underline-offset-[4px] decoration-[1px] hover:text-white">
                          <NavLink
                            to={PATH_ROUTER.SIGN_IN}
                            onClick={() => setSidenav(false)}
                            className="block py-2"
                          >
                            Đăng nhập
                          </NavLink>
                        </li>
                      )}
                    </ul>
                    
                    {/* Categories Section */}
                    <div className="mt-6">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="font-titleFont flex justify-between items-center mb-2 text-base sm:text-lg cursor-pointer"
                      >
                        Shop by Category{" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="flex flex-col gap-1 text-sm sm:text-base pl-2"
                        >
                          <li className="headerSedenavLi py-1">New Arrivals</li>
                          <li className="headerSedenavLi py-1">Gudgets</li>
                          <li className="headerSedenavLi py-1">Accessories</li>
                          <li className="headerSedenavLi py-1">Electronics</li>
                          <li className="headerSedenavLi py-1">Others</li>
                        </motion.ul>
                      )}
                    </div>
                    
                    {/* Brands Section */}
                    <div className="mt-4">
                      <h1
                        onClick={() => setBrand(!brand)}
                        className="font-titleFont flex justify-between items-center mb-2 text-base sm:text-lg cursor-pointer"
                      >
                        Shop by Brand
                        <span className="text-lg">{brand ? "-" : "+"}</span>
                      </h1>
                      {brand && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="flex flex-col gap-1 text-sm sm:text-base pl-2"
                        >
                          <li className="headerSedenavLi py-1">New Arrivals</li>
                          <li className="headerSedenavLi py-1">Gudgets</li>
                          <li className="headerSedenavLi py-1">Accessories</li>
                          <li className="headerSedenavLi py-1">Electronics</li>
                          <li className="headerSedenavLi py-1">Others</li>
                        </motion.ul>
                      )}
                    </div>
                    
                    {/* User Info in Sidebar (Mobile) */}
                    {isLogin && (
                      <div className="mt-6 pt-4 border-t border-gray-700">
                        <h3 className="text-base sm:text-lg font-bold">
                          {selUserInfo?.fullName}
                        </h3>
                        <div className="flex items-center space-x-1 text-xs sm:text-sm italic mt-1">
                          <h3>ID:</h3>
                          <h3>{selUserInfo?.userId}</h3>
                        </div>
                        <button
                          className="w-full mt-4 py-2 font-bold text-center text-white bg-slate-500 rounded-md hover:bg-slate-600 transition-colors text-sm sm:text-base"
                          onClick={onLogout}
                        >
                          Đăng xuất
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 sm:w-10 sm:h-10 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-xl sm:text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </button>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
