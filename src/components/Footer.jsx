import React from "react";
import vereda from "../assets/vereda2.png";
import facebook from "../assets/facebooimge.png";
import linkedin from "../assets/linkedingImg.png";
import twitter from "../assets/TwitterImg.png";
import instagram from "../assets/instImg.png";

const Footer = () => {
  return (
    <div className="w-full h-auto  bg-[#161C2D] text-center ">
      <div className=" pt-5 md:pt-20 text-center mx-20 flex flex-col md:flex-row md:justify-between  ">
        <div className="flex flex-col text-start">
          <img
            className="bg-white rounded-xl ml-10 md:ml-2 flex justify-center w-44"
            src={vereda}
            alt=""
          />
          <h1
            className=" text-gray-400 font-bold pt-5 text-center md:flex 
            md:justify-start
          "
          >
            Address
          </h1>
          <p className="text-gray-400 text-center  md:mr-10 ">
            A block,5th floor , HUB(Maurya Complex) Patna 80001
          </p>
        </div>
        {/*        pages ---------*/}
        <div className="center">
          <h1 className="text-white font-bold  ">PAGES</h1>
          <ul className="flex flex-col gap-1 mt-4   text-gray-400 ">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
            <li>Blogs</li>
          </ul>
        </div>
        {/* support ----------------*/}

        <div>
          <h1 className="text-white font-bold ">SUPPORT</h1>
          <ul className="flex flex-col mt-4 text-gray-400 ">
            <li>Help</li>
            <li>Contact support</li>
          </ul>
        </div>

        {/*   social links --------------*/}

        <div className="text-center">
          <h1 className="text-white font-bold text-center">SOCIAL LINKS</h1>
          <ul className=" flex-col  gap-2 mt-4 flex justify-center ml-20 mb-4 md:ml-2 text-gray-400">
            <img className="w-20 md:w-28 text-center" src={facebook} alt="" />
            <img className="w-20 md:w-28 text-center" src={linkedin} alt="" />
            <img className="w-20 md:w-28 text-center" src={twitter} alt="" />
            <img className="w-20 md:w-28 text-center" src={instagram} alt="" />
          </ul>
        </div>
      </div>

      <div className="w-full h-auto bg-[#161C2D]">
        <hr className="text-white mt-6 md:mt-20" />
        <div className="text-center text-[16px] md:mt-10 mt-4  text-white">
          @ 2024 - All rights reserved to vereda digital learning
        </div>
      </div>
    </div>
  );
};

export default Footer;
