import React from "react";
import Img from "../assets/902.png";

const ProjectIdea = () => {
  return (
    <div className="flex flex-col h-auto md:h-screen md:flex-row md:justify-between md:pt-10 px-4 w-full  bg-[#161C2D]">
      <div className="ml-20">
        <img className=" items-center  md:w-[1000px] h-auto" src={Img} alt="" />
      </div>
      <div className="md:pt-24 md:ml-40 mb-5 ">
        <h1 className="text-3xl  font-bold text-white">
          Have a Project idea! Let's Work <br />
          together.
        </h1>
        <p className="text-white py-8 mr-24  text-[16px] lg:text-[20px] text-lg  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat
          natus, voluptates modi dignissimos unde?
        </p>
        <div className=" p-3 text-center  w-full md:w-1/2 bg-sky-400 text-white rounded">
          <a className=" text-center font-bold" href="#">
            Talk To Our Export
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectIdea;
