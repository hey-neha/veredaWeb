import React from "react";
import manImg from "../assets/boyImage.png";
import discoverImg from "../assets/Stack.png";
import design from "../assets/processorlog.png";
import bright from "../assets/bright visin.png";
import wconcil from "../assets/wconcil.png";
import myTVS from "../assets/my tvs.png";
import beuty from "../assets/beutySupply.png";

const DevelopmentProc = () => {
  return (
    <>
      <div className=" bg-white w-full min-h-screen mt-5 flex flex-col md:flex-col-6 lg:flex-col-4  justify-evenly ">
        {/*   nav div -----*/}
        <div className="">
          <h1 className=" text-sky-300  text-center md:text-[30px] font-bold md:mt-20 ">
            Keys Steps In Our Mobile App <br /> Development Process{" "}
          </h1>
          <p className="font-light md:px-72 md:mt-5 md:pl-80  md:mb-10 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            neque reprehenderit? Beatae consequatur qui natus consectetur
            exercitationem facilis debitis voluptas.
          </p>
        </div>

        {/* bottom div ---------------*/}
        <div className="flex flex-col md:flex-row text-center md:justify-around gap-12 mt-10">
          {/*    content section */}
          <div className="bg-red-50 md:w-[500px] h-auto rounded-lg ">
            <div className="flex flex-col justify-center md:flex-row h-auto mt-5">
              <img className=" w-10 h-10 ml-5 " src={discoverImg} alt="" />
              <div className=" gap-20 text-start px-5 ">
                <h1 className="text-xl ">Discover</h1>
                <p className="mr-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat sed iure quos quas ratione facere deserunt assumenda
                  iusto. Voluptatibus, minima!
                </p>
              </div>
            </div>
            <hr className="mt-8" />

            <div className="flex flex-col justify-center md:flex-row h-auto mt-5">
              <img className=" w-10 h-10 ml-5 " src={design} alt="" />
              <div className=" gap-20 text-start px-5 ">
                <h1 className="text-xl ">Design</h1>
                <p className="px-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat sed iure quos quas ratione facere deserunt assumenda
                  iusto. Voluptatibus, minima!
                </p>
              </div>
            </div>
            <hr className="mt-8" />

            <div className="flex flex-col justify-center md:flex-row h-auto mt-5">
              <img className=" w-10 h-10 ml-5 " src={design} alt="" />
              <div className=" gap-20 text-start px-5 ">
                <h1 className="text-xl ">Develop</h1>
                <p className="px-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat sed iure quos quas ratione facere deserunt assumenda
                  iusto. Voluptatibus, minima!
                </p>
              </div>
            </div>
            <hr className="mt-8" />

            <div className="flex flex-col justify-center md:flex-row h-auto mt-5">
              <img className=" w-10 h-10 ml-5 " src={design} alt="" />
              <div className=" gap-20 text-start px-5 ">
                <h1 className="text-xl ">Test</h1>
                <p className="px-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat sed iure quos quas ratione facere deserunt assumenda
                  iusto. Voluptatibus, minima!
                </p>
              </div>
            </div>
            <hr className="mt-8" />
          </div>
          {/*     image section */}
          <div>
            <img className="md:w-[500px] h-auto" src={manImg} alt="" />
          </div>
        </div>

        {/*    we have trusted customer -----------------------------------*/}

        <div className="mt-10">
          <h1 className=" text-sky-300  text-center md:text-[35px] font-bold md:mt-12  ">
            We have Satisfied & Trusted Customers
          </h1>
          <div className="flex flex-col items-center md:flex-row mx-20 md:gap-36 pt-5 md:ml-72 ">
            <img className="w-16 h-16" src={bright} alt="" />
            <img className="w-16 h-16" src={wconcil} alt="" />

            <img className="w-16 h-16" src={myTVS} alt="" />

            <img className="w-10 h-10 mt-5" src={beuty} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopmentProc;
