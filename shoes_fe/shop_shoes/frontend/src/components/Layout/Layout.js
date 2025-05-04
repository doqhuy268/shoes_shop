import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { KEY_STORAGE } from "../../constants";
import { fetchGetLstCarts } from "../../redux/thunks/cartThunk";
import { fetchGetUserInfo } from "../../redux/thunks/userThunk";
import Footer from "../home/Footer/Footer";
import Header from "../home/Header/Header";

export default function Layout(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem(KEY_STORAGE.TOKEN);
    if (token) {
      dispatch(fetchGetUserInfo());
      dispatch(fetchGetLstCarts());
    }
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow min-h-[60vh] w-full">
        {/* Responsive container to control content width */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
