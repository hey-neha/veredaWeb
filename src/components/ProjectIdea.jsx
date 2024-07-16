import React from "react";
import Img from "../assets/902.png";

const ProjectIdea = () => {
  return (
    <div className="flex flex-col h-auto md:flex-row md:justify-between md:pt-10 px-4 w-full bg-[#161C2D]">
      <div className="flex justify-center md:justify-start md:w-1/2">
        <img className="w-full md:w-auto h-auto" src={Img} alt="" />
      </div>
      <div className="md:pt-24 md:ml-10 mb-5 md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold text-white">
          Have a Project idea! Let's Work <br />
          together.
        </h1>
        <p className="text-white py-8 text-[16px] lg:text-[20px] md:mr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat
          natus, voluptates modi dignissimos unde?
        </p>
        <div className="p-3 text-center w-full md:w-1/2 bg-sky-400 text-white rounded">
          <a className="font-bold" href="#">
            Talk To Our Expert
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectIdea;
