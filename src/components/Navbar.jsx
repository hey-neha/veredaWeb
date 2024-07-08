import React from "react";
import vereda from "../assets/vereda2.png";
import womenImage from "../assets/GirlImage.png";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-[#161C2D] w-full  h-auto px-4 md:px-4  items-center ">
        <div className=" flex justify-between py-3">
          {/*   px-10 pt-3 */}
          <div className="">
            <img
              className="md:ml-5 md:mt-5 md:w-36  h-auto "
              src={vereda}
              alt=""
            />
          </div>
          <ul className="md:flex hidden text-white /* mt-7 gap-6  */">
            <li className="mx-[10px]">Demos</li>
            <li className="mx-[10px]">Pages</li>
            <li className="mx-[10px]">Support</li>
            <li className="mx-[10px]">Contact</li>
          </ul>
          {/*  <div className=" hidden md:block  p-2 w-44 h-auto  mt-6 bg-sky-400 rounded">
            {/*  w-44 h-auto  mt-10*/}
          {/* <a
            className="text-center text-white flex flex-col md:flex md:justify-center"
            href="#"
          >
            {" "}
            Get Started a Project
          </a> */}
          {/*   </div> */}

          {/* <div className=" hidden  mt-8 md:ml-5 p-3 w-56  bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100 rounded">
            <a className="text-center text-white" href="#">
              Get Started a Project
            </a>
          </div> */}

          <div
            className=" hidden md:block  md:w-1/6 my-3 w-full
            bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100 rounded"
          >
            <a
              className="text-center mt-3 text-[16px] flex justify-center text-white"
              href="#"
            >
              Get Started a Projects
            </a>
          </div>

          <div className="md:hidden">
            <a className="text-4xl" href="#">
              &#8801;
            </a>
          </div>
        </div>
        {/* hero section **************************************************/}
        {/* <div className=" w-full h-full md:mt-20 px-14 flex flex-col md:flex-row md:flex md:justify-between m-10">
          <div className="md:w-[1000px]">
            <p className="text-sky-400 mb-6 font-mono">DEVELOP & GROW</p>
            <h1 className="text-4xl leading-10 text-white font-bold font-sans md:font-serif ">
              Crafting bespoke Apps tailored <br /> to fuel your bussiness's
              growth <br /> trajectory{" "}
            </h1>
            <p className="text-slate-400 pr-60 md:pt-4 font-sans md:w-[700px]">
              we specialize in creating custom apps me Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Enim, sapiente? Lorem ipsum
              dolor sit amet Lorem ipsum Maiores.
            </p>
            <div className="md:mt-8 p-3 md:w-56 h-auto flex justify-center bg-sky-400 rounded">
              <a
                className="text-center text-white md:flex md:justify-center"
                href="#"
              >
                {" "}
                Get Started a Project
              </a>
            </div>
          </div>
          {/*     image container */}
        {/*  <div className="">
            <img className="w-[460px] h-[360px]" src={womenImage} alt="" />
          </div> */}
        {/*  </div> */}
      </nav>
    </>
  );
};
