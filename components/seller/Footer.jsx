import React from "react";
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10">
      <div className="flex items-center gap-4">
        <a href="/" className="aguafina-script-regular text-2xl">M.9-SHOP</a>
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2025 © greatstack.dev All Right Reserved.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <a href="#">
          <i className="bxl bx-facebook-circle" style={{ color: "#040303" }}></i>
        </a>
        <a href="#">
          <i className="bxl bx-twitter-x" style={{ color: "#040303" }}></i>
        </a>
        <a href="#">
          <i className="bxl bx-instagram-alt" style={{ color: "#040303" }}></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
