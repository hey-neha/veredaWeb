import React from "react";
import androidApp from "../assets/AndroidLogo.png";
import Iosapp from "../assets/appleicon.png";
import fullstack from "../assets/FullstackIcon.png";
import websitemainten from "../assets/processorlog.png";
import digitalmarketing from "../assets/digitalMicon.png";
import ondemand from "../assets/Ondemandicon.png";
import { RiAppleLine } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiPenNibStraight } from "react-icons/pi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { CiMicrochip } from "react-icons/ci";
import { PiAndroidLogo } from "react-icons/pi";

const Company = () => {
  return (
    <>
      <div className="bg-gray-100 w-full h-auto flex flex-col sm:mb-10 md:flex-col-6 lg:flex-col-4 gap-5 justify-evenly items-center p-5 ">
        {/* --------- companies around the world
      choose Vereda Digital Technology section--------- */}
        {/*  md:mt-10 */}
        <div className=" mt-5 text-center">
          <h1 className="   text-center   text-xl sm:text-2xl md:text-3xl  font-semibold  md:mt-10 leading-tight  text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]  text-[24px] lg:text-[36px]   ">
            {" "}
            More reasons why companies around the world <br />
            choose Vereda Digital Technology
          </h1>
          {/*     md:mt-5   md:mb-10 */}
          <p className=" text-center text-[16px] px-5  my-5 md:my-6 lg:my-10 md:px-20 lg:mx-32 lg:text-[20px]  text-[#42526B]  font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            sint dolorum consequuntur asperiores veniam impedit aspernatur
            corporis quisquam qui et!
          </p>
        </div>

        {/* card section ________________________________________________*/}
        <div className="flex flex-col md:mb-20 md:flex-row md:flex-wrap text-center justify-center lg:flex-row-2 gap-4 mb-10  md:ml-16">
          <div
            className="bg-white w-[360px] h-60 p-10  rounded-xl text-center flex 
            flex-col
          justify-center "
          >
            <div className=" bg-sky-50 text-blue-400  hover:bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100  hover:text-white rounded-lg my-5  h-auto p-3 hover:p-4 w-14 md:w-16    text-center ml-24 md:mb-2 lg:mb-5 ">
              {/* <img className="bg-gray-100   ml-3" src={Iosapp} alt="" /> */}
              <PiAndroidLogo
                className="bg-gray-100 bg-transparent  w-[35px] h-[35px] md:w-[37px] md:h-[37px]"

                /*  style={{ width: "35px", height: "35px" }} */
              />
            </div>
            <h2 className="text-xl font-bold">Ios App Development</h2>
            <p className="font-light mt-2 md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            </p>
            <div className=" mt-2  text-sky-400 md:mt-3 mb-5 flex flex-row justify-center gap-2">
              <p>Learn More</p>
              <FaLongArrowAltRight className="w-[20px] h-[20px] mt-1" />
            </div>
          </div>

          <div
            className="bg-white w-[360px] h-60 p-10  rounded-xl text-center flex 
            flex-col
          justify-center "
          >
            <div className="  bg-sky-50  text-blue-400 hover:text-white hover:bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100  rounded-lg my-5  h-auto p-3 hover:p-4 w-14 md:w-16    text-center ml-24 mb-2 md:mb-2 lg:mb-5 ">
              {/* <img className="bg-gray-100   ml-3" src={Iosapp} alt="" /> */}
              <RiAppleLine
                className="bg-gray-100 bg-transparent w-[35px] h-[35px] md:w-[37px] md:h-[37px]"

                /*  style={{ width: "35px", height: "35px" }} */
              />
            </div>
            <h2 className="text-xl font-bold">Ios App Development</h2>
            <p className="font-light mt-2 md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            </p>
            <div className=" mt-2 md:mt-3 text-sky-400 mb-5 flex flex-row justify-center gap-3">
              <p>Learn More</p>
              <FaLongArrowAltRight className="w-[20px] h-[20px] mt-1" />
            </div>
          </div>

          <div
            className="bg-white w-[360px] h-60 p-10  rounded-xl text-center flex 
            flex-col
          justify-center "
          >
            {/*   bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100 */}
            <div className=" bg-sky-50   hover:bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100  text-blue-400 hover:text-white rounded-lg my-5  h-auto p-3 hover:p-4 w-14 md:w-16    text-center ml-24 mb-3 md:mb-2 lg:mb-5 ">
              {/* <img className="bg-gray-100   ml-3" src={Iosapp} alt="" /> */}
              <PiPenNibStraight
                className="bg-gray-100 bg-transparent w-[35px] h-[35px] md:w-[37px] md:h-[37px]"

                /*  style={{ width: "35px", height: "35px" }} */
              />
            </div>
            <h2 className="text-xl font-bold">Full stack Development</h2>
            <p className="font-light mt-2 md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            </p>
            <div className=" mt-2 md:mt-3 text-sky-400 mb-5 flex flex-row justify-center gap-3">
              <p>Learn More</p>
              <FaLongArrowAltRight className="w-[20px] h-[20px] mt-1" />
            </div>
          </div>

          <div
            className="bg-white w-[360px] h-60 p-10 rounded-xl text-center flex 
            flex-col
          justify-center "
          >
            <div className="bg-sky-50  hover:bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100  text-blue-400 hover:text-white rounded-lg my-5  h-auto p-3 hover:p-4 w-14 md:w-16  text-center ml-24 mb-3 md:mb-2 lg:mb-5 ">
              {/*  <img className="bg-gray-100  ml-3" src={ondemand} alt="" /> */}
              <CiMicrochip
                className="bg-gray-100 bg-transparent  "
                style={{ width: "37px", height: "37px" }}
              />
            </div>
            <h2 className="text-xl font-bold">On-Demand Developers</h2>
            <p className="font-light mt-2 md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            </p>
            <div className=" mt-2 md:mt-3 text-sky-400 mb-5 flex flex-row justify-center gap-3">
              <p>Learn More</p>
              <FaLongArrowAltRight className="w-[20px] h-[20px] mt-1" />
            </div>
          </div>

          <div
            className="bg-white w-[360px] h-60 p-10 rounded-xl text-center flex 
            flex-col
          justify-center "
          >
            <div className=" bg-sky-50 hover:bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100  rounded-lg my-5  text-blue-400 hover:text-white  h-auto p-3 hover:p-4 w-14  md:w-16  text-center ml-24 md:mb-2 lg:mb-5 ">
              {/*  <img className="bg-gray-100  ml-3" src={ondemand} alt="" /> */}
              <PiChalkboardTeacherLight
                className="bg-gray-100  bg-transparent  "
                style={{ width: "35px", height: "35px" }}
              />
            </div>
            <h2 className="text-xl font-bold">On-Demand Developers</h2>
            <p className="font-light mt-1 md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            </p>
            <div className=" mt-2  md:mt-3 text-sky-400 mb-5 flex flex-row justify-center gap-3">
              <p>Learn More</p>
              <FaLongArrowAltRight className="w-[20px] h-[20px] mt-1" />
            </div>
          </div>
          {/* <SlPeople
                className="bg-gray-100"
                style={{ width: "35px", height: "35px" }}
              /> */}

          <div
            className="bg-white w-[360px] h-60 p-10 rounded-xl text-center flex 
            flex-col
          justify-center "
          >
            <div className=" bg-sky-50 hover:bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100 text-blue-400 hover:text-white rounded-lg my-5  h-auto p-3 hover:p-4 w-14 md:w-16  text-center ml-24 mb-3 md:mb-2 lg:mb-5 ">
              {/*  <img className="bg-gray-100  ml-3" src={ondemand} alt="" /> */}

              <SlPeople
                className="bg-gray-100 bg-transparent"
                style={{ width: "35px", height: "35px" }}
              />
            </div>
            <h2 className="text-xl font-bold">On-Demand Developers</h2>
            <p className="font-light mt-1 md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            </p>
            <div className=" mt-2 md:mt-3 text-sky-400 mb-5 flex flex-row justify-center gap-3">
              <p>Learn More</p>
              <FaLongArrowAltRight className="w-[20px] h-[20px] mt-1" />
            </div>
          </div>

          {/*    end card */}
        </div>
      </div>
    </>
  );
};

export default Company;
