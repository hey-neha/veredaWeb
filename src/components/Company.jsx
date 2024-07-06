import React from "react";
import androidApp from "../assets/AndroidLogo.png";
import Iosapp from "../assets/appleicon.png";
import fullstack from "../assets/FullstackIcon.png";
import websitemainten from "../assets/processorlog.png";
import digitalmarketing from "../assets/digitalMicon.png";
import ondemand from "../assets/Ondemandicon.png";

const Company = () => {
  return (
    <>
      <div className="bg-gray-100 w-full h-auto flex flex-col sm:mb-10 md:flex-col-6 lg:flex-col-4 gap-5 justify-evenly items-center ">
        {/* --------- companies around the world
      choose Vereda Digital Technology section--------- */}
        <div className="mt-5">
          <h1 className="  text-blue-300  text-center md:text-[30px] font-bold md:mt-20 ">
            {" "}
            More reasons why companies around the world <br />
            choose Vereda Digital Technology
          </h1>
          <p className=" text-center    text-[#42526B] text-lg   font-light md:px-72 md:mt-5 md:pl-80  md:mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            sint dolorum consequuntur asperiores veniam impedit aspernatur
            corporis quisquam qui et!
          </p>
        </div>

        {/* card section ________________________________________________*/}
        <div className="flex flex-col md:mb-20 md:flex-row md:flex-wrap text-center justify-center lg:flex-row-2 gap-4 mb-10  md:ml-16">
          <div
            className="bg-white w-[360px] h-60 p-10 rounded-xl text-center flex 
            flex-col
          justify-center "
          >
            <div className="bg-gray-100 h-24 w-16 text-center ml-24 md:mb-2 ">
              <img className="bg-gray-100  ml-3" src={androidApp} alt="" />
            </div>
            <h2 className="text-xl font-bold">Android App Development</h2>
            <p className="font-light md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            </p>
            <div className="md:mt-3 text-sky-400">Learn More</div>
          </div>

          <div
            className="bg-white w-[360px] h-60 p-10 rounded-xl text-center flex 
            flex-col
          justify-center "
          >
            <div className="bg-gray-100 h-24 w-16 text-center ml-24 md:mb-2 ">
              <img className="bg-gray-100  ml-3" src={Iosapp} alt="" />
            </div>
            <h2 className="text-xl font-bold">Ios App Development</h2>
            <p className="font-light md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            </p>
            <div className="md:mt-3 text-sky-400">Learn More</div>
          </div>

          <div
            className="bg-white w-[360px] h-60 p-10 rounded-xl text-center flex 
            flex-col
          justify-center "
          >
            <div className="h-24 w-16 text-center ml-24 md:mb-2 ">
              <img className="bg-gray-100  ml-3" src={fullstack} alt="" />
            </div>
            <h2 className="text-xl font-bold">Full Stack Development</h2>
            <p className="font-light md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            </p>
            <div className="md:mt-3 text-sky-400">Learn More</div>
          </div>

          <div
            className="bg-white w-[360px] h-60 p-10 rounded-xl text-center flex 
            flex-col
          justify-center "
          >
            <div className="bg-gray-100 h-24 w-16 text-center ml-24 md:mb-2 ">
              <img className="bg-gray-100  ml-3" src={websitemainten} alt="" />
            </div>
            <h2 className="text-xl font-bold">Website Maintenance Services</h2>
            <p className="font-light md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            </p>
            <div className="md:mt-3 text-sky-400">Learn More</div>
          </div>

          <div
            className="bg-white w-[360px] h-60 p-10 rounded-xl text-center flex 
            flex-col
          justify-center "
          >
            <div className="bg-gray-100 h-24 w-16 text-center ml-24 md:mb-2 ">
              <img
                className="bg-gray-100  ml-3"
                src={digitalmarketing}
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold">
              Digital Marketing and Strategies
            </h2>
            <p className="font-light md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            </p>
            <div className="md:mt-3 text-sky-400">Learn More</div>
          </div>

          <div
            className="bg-white w-[360px] h-60 p-10 rounded-xl text-center flex 
            flex-col
          justify-center "
          >
            <div className="bg-gray-100 h-24 w-16 text-center ml-24 md:mb-2 ">
              <img className="bg-gray-100  ml-3" src={ondemand} alt="" />
            </div>
            <h2 className="text-xl font-bold">On-Demand Developers</h2>
            <p className="font-light md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            </p>
            <div className="md:mt-3 text-sky-400">Learn More</div>
          </div>

          {/*    end card */}
        </div>
      </div>
    </>
  );
};

export default Company;
