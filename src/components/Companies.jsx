// import React from "react";
// import dainik from "../assets/dailyhunt.png";
// import hindustan from "../assets/hindustan.png";
// import news from "../assets/new18.png";
// import dailyhunt from "../assets/dailyhunt.png";
// import bhaskar from "../assets/bhaskar.png";

// const Companies = () => {
//   return (
//     <>
//       <div className="w-full h-auto flex flex-col">
//         <div className=" mx-10 text-center md:mx-28  mt-5 md:mt-5 ">
//           <h1 className=" text-center md:text-[30px] md:mt-16  text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-[24px] lg:text-[36px] font-semibold  ">
//             Big companies are here
//           </h1>
//           {/*  text-center  text-xl sm:text-2xl md:text-3xl  font-semibold  md:mt-10 leading-tight  text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]  text-[24px] lg:text-[36px] */}
//           <p className="font-light  text-[#42526B] text-lg md:mr-5 md:px-32 md:mt-5 md:pl-52">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est
//             nam exercitationem excepturi deleniti voluptate, molestias ratione
//             eius perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing
//             elit.quas..
//           </p>
//         </div>
//         {/*    image section -------------------------*/}
//         <div className="md:flex md:justify-between text-center gap-5 mx-10 md:mt-5 md:mb-16">
//           <img className="md:w-28 w-24 h-auto md:mb-10" src={bhaskar} alt="" />
//           <img className="md:w-32 w-24  md:mt-5 h-11" src={hindustan} alt="" />
//           <img className="md:w-28 w-24 md:mt-5  h-11" src={news} alt="" />
//           <img className="md:w-28 w-24  md:mt-5 h-11 " src={dailyhunt} alt="" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Companies;

import React from "react";
import dainik from "../assets/dailyhunt.png";
import hindustan from "../assets/hindustan.png";
import news from "../assets/new18.png";
import dailyhunt from "../assets/dailyhunt.png";
import bhaskar from "../assets/bhaskar.png";

const Companies = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col text-center p-5 md:p-14 lg:p-20">
        <div className="mx-10 text-center md:mx-28  ">
          <h1 className="text-center md:text-[30px]  text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-[24px] lg:text-[36px] font-semibold">
            Big companies are here
          </h1>
          <p className="font-light text-[#42526B] my-4 md:my-5 text-center text-lg px-5 md:px-10 lg:px-20 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est
            nam exercitationem excepturi deleniti voluptate, molestias ratione
            eius perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing
            elit.quas..
          </p>
        </div>
        {/* Image section */}
        {/* grid grid-cols-2 md:grid-cols-4 mt-5 md:mt-8 mx-10 md:mx-52 */}
        {/*   <div className=" flex flex-col-2 justify-evenly md:flex-row my-5 md:my-6 lg:my-7 ">
          <img className="w-28 h-auto  md:mb-0" src={bhaskar} alt="Bhaskar" />
          <img
            className="w-32 h-11 mx-2 md:mx-0 mt-5 md:mt-0"
            src={hindustan}
            alt="Hindustan"
          />
          <img
            className="w-28 h-11 mx-2 md:mx-0 mt-5 md:mt-0"
            src={news}
            alt="News"
          />
          <img
            className="w-28 h-11 mx-2 md:mx-0 mt-5 md:mt-0"
            src={dailyhunt}
            alt="Dailyhunt"
          />
        </div> */}

        <div className="  grid grid-cols-2 md:grid-cols-4 md:mt-5 mb-5 mx-5 md:mx-10 lg:mx-20 ">
          <img className=" w-20 md:w-32 h-auto mx-auto" src={bhaskar} alt="" />
          <img
            className="w-20 md:w-36 h-auto mx-auto md:mt-4"
            src={hindustan}
            alt=""
          />
          <img
            className="w-12 md:w-24 md:mt-4 h-auto mx-auto"
            src={news}
            alt=""
          />
          <img
            className="w-20 md:w-28 md:mt-5 h-auto mx-auto"
            src={dailyhunt}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Companies;
