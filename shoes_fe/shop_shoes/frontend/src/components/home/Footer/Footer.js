import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../designLayouts/Image";

const Footer = () => {
  return (
    <div className="w-full bg-secondaryBg border-t border-lightBorder text-primaryText py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <FooterListTitle title="Về SHOES SHOP" />
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base text-secondaryText">
                Chuyên cung cấp các mẫu giày thời trang chất lượng cao với giá cả phải chăng cho mọi người.
              </p>
              <ul className="flex items-center gap-3 mt-2">
                <li className="w-8 h-8 bg-accentColor text-white rounded-full flex justify-center items-center transition-colors hover:bg-primeColor cursor-pointer">
                  <FaFacebook />
                </li>
                <li className="w-8 h-8 bg-accentColor text-white rounded-full flex justify-center items-center transition-colors hover:bg-primeColor cursor-pointer">
                  <FaInstagram />
                </li>
                <li className="w-8 h-8 bg-accentColor text-white rounded-full flex justify-center items-center transition-colors hover:bg-primeColor cursor-pointer">
                  <FaYoutube />
                </li>
              </ul>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <FooterListTitle title="Danh mục" />
            <ul className="flex flex-col gap-2">
              <li className="text-sm md:text-base text-secondaryText hover:text-accentColor hover:pl-1 transition-all cursor-pointer duration-300">
                Giày Nam
              </li>
              <li className="text-sm md:text-base text-secondaryText hover:text-accentColor hover:pl-1 transition-all cursor-pointer duration-300">
                Giày Nữ
              </li>
              <li className="text-sm md:text-base text-secondaryText hover:text-accentColor hover:pl-1 transition-all cursor-pointer duration-300">
                Phụ kiện
              </li>
              <li className="text-sm md:text-base text-secondaryText hover:text-accentColor hover:pl-1 transition-all cursor-pointer duration-300">
                Hàng mới về
              </li>
              <li className="text-sm md:text-base text-secondaryText hover:text-accentColor hover:pl-1 transition-all cursor-pointer duration-300">
                Khuyến mãi
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <FooterListTitle title="Tài khoản" />
            <ul className="flex flex-col gap-2">
              <li className="text-sm md:text-base text-secondaryText hover:text-accentColor hover:pl-1 transition-all cursor-pointer duration-300">
                Thông tin cá nhân
              </li>
              <li className="text-sm md:text-base text-secondaryText hover:text-accentColor hover:pl-1 transition-all cursor-pointer duration-300">
                Đơn hàng
              </li>
              <li className="text-sm md:text-base text-secondaryText hover:text-accentColor hover:pl-1 transition-all cursor-pointer duration-300">
                Địa chỉ
              </li>
              <li className="text-sm md:text-base text-secondaryText hover:text-accentColor hover:pl-1 transition-all cursor-pointer duration-300">
                Yêu thích
              </li>
              <li className="text-sm md:text-base text-secondaryText hover:text-accentColor hover:pl-1 transition-all cursor-pointer duration-300">
                Lịch sử mua hàng
              </li>
            </ul>
          </div>

          {/* Contact & Payment */}
          <div>
            <FooterListTitle title="Liên hệ" />
            <div className="flex flex-col gap-2">
              <p className="text-sm md:text-base text-secondaryText">
                <span className="font-semibold text-primaryText">Địa chỉ:</span> 123 Đường ABC, Quận XYZ, TP. HCM
              </p>
              <p className="text-sm md:text-base text-secondaryText">
                <span className="font-semibold text-primaryText">Điện thoại:</span> (028) 1234 5678
              </p>
              <p className="text-sm md:text-base text-secondaryText">
                <span className="font-semibold text-primaryText">Email:</span> info@shoesshop.com
              </p>
              <div className="mt-4">
                <p className="text-sm md:text-base font-semibold text-primaryText mb-2">Phương thức thanh toán</p>
                <Image className="w-full max-w-[200px]" imgSrc={paymentCard} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-lightBorder mt-8 pt-6 text-center">
          <p className="text-sm text-secondaryText">
            © {new Date().getFullYear()} SHOES SHOP. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
