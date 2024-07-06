import React from "react";
import project1 from "../assets/ProjecrtImg1.png";
import project2 from "../assets/ProjectImg2.png";
import project3 from "../assets/Project3.png";

const SelectProject = () => {
  return (
    <div className="w-full h-auto mb-8 items-center">
      <div className=" mx-5 text-center md:mx-28 md:mt-20 mt-5 ">
        <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-[24px] lg:text-[36px] font-bold  text-center  md:text-[30px]  ">
          Selected Projects
        </h1>
        <p className="font-light  text-[16px] lg:text-[20px]  text-[#42526B]       text-lg   md:px-60 md:mt-5 md:pl-64">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          natus perferendis esse explicabo, dolore veritatis omnis harum
          perspiciatis impedit sed!
        </p>
      </div>
      {/*   image container */}
      <div className="flex flex-col md:mb-20 md:flex-row md:flex-wrap items-center text-center justify-center lg:flex-row-2 gap-4  md:ml-16 mt-14">
        <div className="text-start">
          <img className="w-[350px] h-auto text-center" src={project1} alt="" />
          <h3 className="text-xl mt-3 font-semibold">
            E-tutor-educations & online LMS
          </h3>
          <p className="text-sky-400 mt-2">View Case Study</p>
        </div>

        <div className="text-start">
          <img className="w-[350px] h-auto text-center" src={project2} alt="" />
          <h3 className="text-xl mt-3 font-semibold  ">
            E-tutor-educations & online LMS
          </h3>
          <p className="text-sky-400 mt-2">View Case Study</p>
        </div>

        <div className="text-start">
          <img className="w-[350px] h-auto text-center" src={project3} alt="" />
          <h3 className="text-xl mt-3 font-semibold ">
            E-tutor-educations & online LMS
          </h3>
          <p className="text-sky-400 mt-2">View Case Study</p>
        </div>
      </div>
    </div>
  );
};

export default SelectProject;
