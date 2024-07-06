import React from "react";
import dainik from "../assets/dailyhunt.png";
import hindustan from "../assets/hindustan.png";
import news from "../assets/new18.png";
import dailyhunt from "../assets/dailyhunt.png";

const Companies = () => {
  return (
    <>
      <div className="w-full h-auto ">
        <div className=" mx-10 text-center md:mx-28 mt-10 md:mt-20 ">
          <h1 className=" text-blue-300 text-center md:text-[30px] font-bold ">
            Big companies are here
          </h1>
          <p className="font-light  text-[#42526B] text-lg  md:px-32 md:mt-5 md:pl-52">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est
            nam exercitationem excepturi deleniti voluptate, molestias ratione
            eius perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Perferendis Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Numquam, quas..
          </p>
        </div>
        <div className="md:flex md:justify-between mx-60 mt-11 md:mb-16">
          <img className="w-24 h-auto" src={dainik} alt="" />
          <img className="w-24 h-auto" src={hindustan} alt="" />
          <img className="w-24 h-auto" src={news} alt="" />
          <img className="w-24 h-auto" src={dailyhunt} alt="" />
        </div>
      </div>
    </>
  );
};

export default Companies;
