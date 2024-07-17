import React from "react";
import manImg from "../assets/boyImage.png";
import discoverImg from "../assets/Stack.png";
import design from "../assets/processorlog.png";
import bright from "../assets/bright visin.png";
import wconcil from "../assets/wconcil.png";
import myTVS from "../assets/my tvs.png";
import beuty from "../assets/beutySupply.png";
import { CiMicrochip } from "react-icons/ci";

const DevelopmentProc = () => {
  return (
    <>
      <div className="bg-white w-full min-h-screen flex flex-col justify-evenly p-5 md:p-7">
        {/* nav div */}
        <div className="">
          <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-[24px] md:text-[30px] lg:text-[36px] font-semibold">
            Keys Steps In Our Mobile App <br /> Development Process
          </h1>
          <p className="text-[16px] lg:text-[20px] text-[#42526B] px-5 md:px-40 lg:px-[240px] my-5 md:my-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            neque reprehenderit? Beatae consequatur.
          </p>
        </div>

        {/* bottom div */}
        <div className="flex flex-col md:flex-row text-center md:justify-around gap-12 mt-10">
          {/* content section */}
          <div className="bg-[#FFF9EE] md:w-[500px] h-auto rounded-lg mb-2 md:mb-5">
            <div className="flex flex-col justify-center md:flex-row h-auto mt-5">
              <img className="w-10 h-10 ml-5" src={discoverImg} alt="" />
              <div className="gap-20 text-start px-5">
                <p className="text-[20px] text-[#061C3D]">Discover</p>
                <p className="mr-4 text-[16px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat sed iure quos quas ratione facere deserunt assumenda
                  iusto. Voluptatibus, minima!
                </p>
              </div>
            </div>
            <hr className="mt-8" />

            <div className="flex flex-col justify-between md:flex-row mb-5 my-5 h-auto ">
              <div className="ml-5">
                <CiMicrochip
                  className=" text-purple-600 w-10 h-10 "
                  /* style={{ width: "35px", height: "35px" }} */
                />
              </div>
              <div className="gap-20 text-start px-5">
                <h1 className="text-xl">Design</h1>
                <p className="mr-4 text-[16px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat sed iure quos quas ratione facere deserunt assumenda
                  iusto. Voluptatibus, minima!
                </p>
              </div>
            </div>

            <hr className="mt-8" />

            <div className="flex flex-col justify-between md:flex-row my-5 mb-5 h-auto ">
              <div className="ml-5">
                <CiMicrochip
                  className=" text-purple-600 w-10 h-10 "
                  /* style={{ width: "35px", height: "35px" }} */
                />
              </div>
              <div className="gap-20 text-start px-5">
                <h1 className="text-xl">Design</h1>
                <p className="mr-4 text-[16px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat sed iure quos quas ratione facere deserunt assumenda
                  iusto. Voluptatibus, minima!
                </p>
              </div>
            </div>

            <hr className="mt-8" />

            <div className="flex flex-col justify-between md:flex-row my-5 mb-5 h-auto ">
              <div className="ml-5">
                <CiMicrochip
                  className=" text-purple-600 w-10 h-10 "
                  /* style={{ width: "35px", height: "35px" }} */
                />
              </div>
              <div className="gap-20 text-start px-5">
                <h1 className="text-xl">Design</h1>
                <p className="mr-4 text-[16px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat sed iure quos quas ratione facere deserunt assumenda
                  iusto. Voluptatibus, minima!
                </p>
              </div>
            </div>
          </div>

          {/* image section */}
          <div className="flex justify-center">
            <img className="w-full md:w-auto" src={manImg} alt="" />
          </div>
        </div>

        {/* we have trusted customer */}
        <div className="mt-10">
          <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-[24px] md:text-[30px] lg:text-[36px] font-semibold md:mt-12">
            We have Satisfied & Trusted Customers
          </h1>
          <div className="flex flex-col justify-evenly mb-5 md:mb-10 lg:mb-14 md:flex-row mx-24 md:mx-28 lg:mx-32">
            <img
              className="w-16 md:w-24 h-auto mx-auto mt-3 md:mt-5"
              src={bright}
              alt=""
            />
            <img
              className="w-16 md:w-20 mt-3 h-auto mx-auto"
              src={wconcil}
              alt=""
            />
            <img
              className="w-16 md:w-20 mt-3 h-auto mx-auto"
              src={myTVS}
              alt=""
            />
            <img
              className="w-12 h-12 mx-auto mt-4 md:mt-5 "
              src={beuty}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopmentProc;
