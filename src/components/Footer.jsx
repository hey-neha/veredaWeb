import React from "react";
import vereda from "../assets/vereda2.png";
import facebook from "../assets/facebooimge.png";
import linkedin from "../assets/linkedingImg.png";
import twitter from "../assets/TwitterImg.png";
import instagram from "../assets/instImg.png";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-blue-950">
      <div className="flex flex-col md:flex-row md:justify-between pt-20 text-center mx-20 ">
        <div className="flex flex-col text-start">
          <img className="bg-white rounded-xl w-44" src={vereda} alt="" />
          <h1 className=" text-gray-400 font-bold p-5">Address</h1>
          <p className="text-gray-400">
            A block,5th floor , HUB(Maurya Complex) Patna 80001
          </p>
        </div>
        {/*        pages ---------*/}
        <div className="center">
          <h1 className="text-white font-bold">PAGES</h1>
          <ul className="flex flex-col gap-1 mt-4 text-start md:ml-6 text-gray-400 ">
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
          <h1 className="text-white font-bold">SUPPORT</h1>
          <ul className="flex flex-col gap-1 mt-4 text-start md:ml-8 text-gray-400 ">
            <li>Help</li>
            <li>Contact support</li>
          </ul>
        </div>

        {/*   social links --------------*/}

        <div>
          <h1 className="text-white font-bold">SOCIAL LINKS</h1>
          <ul className="flex flex-col gap-2 mt-4 text-start md:ml-8 text-gray-400">
            <img className="w-28" src={facebook} alt="" />
            <img className="w-28" src={linkedin} alt="" />
            <img className="w-28" src={twitter} alt="" />
            <img className="w-28" src={instagram} alt="" />
          </ul>
        </div>
      </div>

      <div className="w-full h-auto bg-blue-950 ">
        <hr className="text-white md:mt-20" />
        <div className="text-center text-xl mt-10  text-white">
          @ 2024 - All rights reserved to vereda digital learning
        </div>
      </div>
    </div>
  );
};

export default Footer;
