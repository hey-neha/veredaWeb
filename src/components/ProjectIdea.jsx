import React from "react";
import Img from "../assets/902.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectIdea = () => {
  return (
    <div className="flex flex-col h-auto md:flex-row md:justify-between md:py-10 w-full bg-[#161C2D]">
      {/*   image section-------------------------------- */}
      <div className="flex justify-center md:justify-start mb-5 ">
        <img
          className=" w-[250px] md:w-[400px] ml-5 md:ml-10 lg:w-[500px] h-auto"
          src={Img}
          alt=""
        />
      </div>

      {/*     content section --------------------------------*/}
      {/*   md:ml-10 */}
      <div className="md:pt-24 md:ml-14 lg:ml-40 mb-5 md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold text-white">
          Have a Project idea! Let's Work <br />
          together.
        </h1>
        <p className="text-white py-8 text-[16px] lg:text-[20px] md:mr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat
          natus, voluptates modi dignissimos unde?
        </p>
        {/*   <div className="p-3 text-center flex flex-row justify-center gap-2 md:gap-3 w-full mt-3 md:w-1/3 bg-sky-400 text-white rounded">
          <a className="font-bold" href="#">
            Talk To Our Expert
          </a>
          <FaLongArrowAltRight className=" mt-1 w-5 h-5" />
        </div> */}
        <div className="mt-8  p-3 w-56 ml-20 md:ml-1  flex flex-row text-center justify-center gap-2 text-white  mb-5 bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100 rounded">
          <a className="text-center flex justify-center text-white" href="#">
            Get Started a Project
          </a>
          <FaLongArrowAltRight className="mt-1 " />
        </div>
      </div>
    </div>
  );
};

export default ProjectIdea;
