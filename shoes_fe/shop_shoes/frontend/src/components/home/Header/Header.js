import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
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

  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();

  const onLogout = async () => {
    const response = await AxiosClient.post("/auth/logout");
    if (response.code == 0) {
      removeStorage();
      window.location.replace(PATH_ROUTER.SIGN_IN);
    }
  };

  return (
    <div className="w-full h-auto bg-white sticky top-0 z-50 border-b border-lightBorder shadow-sm">
      <nav className="container mx-auto px-4 py-3 lg:py-0">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img className="w-24 md:w-32" src={logoLight} alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center space-x-1 lg:space-x-4">
              {navBarList.map(({ _id, title, link }) => (
                <NavLink
                  key={_id}
                  className="px-2 lg:px-4 py-5 text-sm lg:text-base text-primaryText hover:text-accentColor hover:font-bold hover:underline underline-offset-4 transition-all"
                  to={link}
                  state={{ data: location.pathname.split("/")[1] }}
                >
                  <li>{title}</li>
                </NavLink>
              ))}
            </ul>

            <div className="flex items-center ml-4 space-x-2">
              {isLogin ? (
                <>
                  <Badge
                    count={selCarts?.cartItems?.length || 0}
                    onClick={() => navigation("/cart")}
                    className="cursor-pointer"
                  >
                    <ShoppingCartOutlined className="text-xl text-primaryText hover:text-accentColor transition-colors" />
                  </Badge>
                  <Link to="/users">
                    <p className="px-4 text-sm lg:text-base text-primaryText hover:text-accentColor hover:font-bold hover:underline underline-offset-4 transition-all">
                      Thông tin
                    </p>
                  </Link>
                </>
              ) : (
                <NavLink
                  className="px-4 py-2 text-sm lg:text-base text-white bg-accentColor hover:bg-primeColor rounded-md transition-colors"
                  to={PATH_ROUTER.SIGN_IN}
                  state={{ data: location.pathname.split("/")[1] }}
                >
                  <li>Đăng nhập</li>
                </NavLink>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setSidenav(!sidenav)}
              className="text-primaryText p-2"
              aria-label="Toggle menu"
            >
              <HiMenuAlt2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {sidenav && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-[280px] h-full bg-white relative shadow-lg"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <img className="w-24" src={logoLight} alt="logoLight" />
                <button
                  onClick={() => setSidenav(false)}
                  className="text-primaryText"
                  aria-label="Close menu"
                >
                  <MdClose className="w-6 h-6" />
                </button>
              </div>

              <ul className="space-y-4">
                {navBarList.map((item) => (
                  <li key={item._id} className="border-b border-lightBorder pb-2">
                    <NavLink
                      to={item.link}
                      state={{ data: location.pathname.split("/")[1] }}
                      onClick={() => setSidenav(false)}
                      className="text-primaryText text-lg hover:text-accentColor hover:font-bold"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-lightBorder pt-4">
                {isLogin ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-primaryText font-medium">
                        {selUserInfo?.fullName}
                      </h3>
                      <Badge
                        count={selCarts?.cartItems?.length || 0}
                        onClick={() => {
                          navigation("/cart");
                          setSidenav(false);
                        }}
                        className="cursor-pointer"
                      >
                        <ShoppingCartOutlined className="text-xl text-primaryText hover:text-accentColor" />
                      </Badge>
                    </div>
                    <Link
                      to="/users"
                      onClick={() => setSidenav(false)}
                      className="block text-primaryText hover:text-accentColor hover:underline"
                    >
                      Thông tin tài khoản
                    </Link>
                    <button
                      onClick={onLogout}
                      className="w-full py-2 text-white bg-accentColor rounded-md hover:bg-primeColor transition-colors"
                    >
                      Đăng xuất
                    </button>
                  </div>
                ) : (
                  <NavLink
                    to={PATH_ROUTER.SIGN_IN}
                    onClick={() => setSidenav(false)}
                    className="block w-full py-2 text-center text-white bg-accentColor rounded-md hover:bg-primeColor transition-colors"
                  >
                    Đăng nhập
                  </NavLink>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Header;
