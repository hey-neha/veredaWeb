import React from "react";
import vereda from "../assets/vereda2.png";
import facebook from "../assets/facebooimge.png";
import linkedin from "../assets/linkedingImg.png";
import twitter from "../assets/TwitterImg.png";
import instagram from "../assets/instImg.png";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-auto pt-5 md:pt-14 lg:pt-28  bg-[#161C2D] flex flex-col md:flex-row justify-evenly text-center md:text-left space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <img className="w-32 md:w-48" src={vereda} alt="Vereda" />
          <div className="text-start mt-4 md:mt-6 ml-48 md:ml-7">
            <h1 className="font-semibold text-white my-2 md:my-5">Address</h1>
            {/*  mr-5 md:mr-10 lg:mr-60 */}
            <p className="text-gray-400">
              A block, 5th floor, B HUB (Maurya complex) <br /> Patna. 80001
            </p>
          </div>
        </div>

        {/* Pages */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-semibold mb-2 md:mb-4 text-white">PAGES</h1>
          <ul className="flex flex-col gap-1 md:gap-2 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-semibold mb-2 md:mb-4 text-white">SUPPORT</h1>
          <ul className="flex flex-col gap-1 md:gap-2 text-gray-400">
            <li>Help Center</li>
            <li>Contact Support</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start ">
          <h1 className="font-semibold text-white mb-2 md:mb-4">
            SOCIAL LINKS
          </h1>
          <div className="flex  flex-col justify-center gap-3 ">
            <div
              className="text-white flex flex-row rounded justify-center bg-gray-100
            bg-opacity-10  p-3 gap-3"
            >
              <FaFacebookF className="w-5 h-5" />
              <p className="font-normal text-[17px]">Facebook</p>
            </div>

            <div className="text-white flex flex-row rounded justify-center bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100 p-3 gap-3">
              <FaLinkedinIn className="w-5 h-5 mt-1" />
              <p className="font-normal text-[17px]">Linkdin</p>
            </div>

            <div className="text-white flex flex-row rounded justify-center bg-opacity-10 bg-gray-100   p-3 gap-3">
              <FaTwitter className="w-5 h-5 mt-1" />
              <p className="font-normal text-[17px]">Twitter</p>
            </div>

            <div className="text-white flex flex-row rounded justify-center bg-opacity-10 bg-gray-100 p-3 gap-3">
              <FaInstagram className="w-5 h-5 mt-1" />
              <p className="font-normal text-[17px] ">Instagram</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#161C2D] h-auto p-5 md:p-20">
        <hr className="" />
        <p className="text-center mt-5 md:mt-7 text-white">
          @2024-All rights reserved to vereda digital learning
        </p>
      </div>
    </div>
  );
};

export default Footer;
