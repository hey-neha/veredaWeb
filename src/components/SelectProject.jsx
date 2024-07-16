import React from "react";
import project1 from "../assets/ProjecrtImg1.png";
import project2 from "../assets/ProjectImg2.png";
import project3 from "../assets/Project3.png";

// const SelectProject = () => {
//   return (
//     <div className="w-full h-auto py-5 md:p-10 lg:p-20 mb-5 md:mb-6 items-center  flex flex-col justify-center">
//       <div className="  text-center">
//         <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-[24px] lg:text-[36px] font-bold  my-5  text-center  md:text-[30px]  ">
//           Selected Projects
//         </h1>
//         {/*   md:px-60 md:mt-5 md:pl-64 */}
//         <p className="font-light mb-5 md:mb-10 lg:mb-16 text-[16px] mx-5 md:mx-20 lg:mx-72 lg:text-[20px]  text-[#42526B]  text-lg">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
//           natus perferendis esse explicabo, dolore veritatis.
//         </p>
//       </div>
//       {/*   image container */}
//       {/*  md:ml-16 lg:ml-20 mt-14 */}
//       <div className=" items-center text-center  md:gap-5 flex flex-col justify-between flex-wrap md:flex-row gap-3 ">
//         <div className="text-start">
//           <img className="w-[350px] h-auto text-center" src={project2} alt="" />
//           <h3 className="text-xl mt-3 md:mt-5 font-semibold  ">
//             E-tutor-educations & online LMS
//           </h3>
//           <p className="text-sky-400 mt-2 md:mt-3">View Case Study</p>
//         </div>

//         <div className="text-start">
//           <img className="w-[350px] h-auto text-center" src={project2} alt="" />
//           <h3 className="text-xl mt-3 md:mt-5 font-semibold  ">
//             E-tutor-educations & online LMS
//           </h3>
//           <p className="text-sky-400 mt-2 md:mt-3">View Case Study</p>
//         </div>

//         <div className="text-start">
//           <img className="w-[350px] h-auto text-center" src={project2} alt="" />
//           <h3 className="text-xl mt-3 md:mt-5 font-semibold  ">
//             E-tutor-educations & online LMS
//           </h3>
//           <p className="text-sky-400 mt-2 md:mt-3">View Case Study</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SelectProject;

const SelectProject = () => {
  return (
    <div className="w-full h-auto py-5 md:p-10 lg:p-20 mb-5 md:mb-6 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-[24px] md:text-[30px] lg:text-[36px] font-bold my-5">
          Selected Projects
        </h1>
        <p className="font-light mb-5 md:mb-10 lg:mb-16 text-[16px] mx-5 md:mx-20 lg:mx-72 lg:text-[20px] text-[#42526B]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          natus perferendis esse explicabo, dolore veritatis.
        </p>
      </div>
      {/* image container */}
      <div className="flex flex-col md:flex-row md:gap-5 gap-3 justify-center flex-wrap items-center text-center">
        <div className="text-start w-[350px]">
          <img className="w-full h-auto" src={project1} alt="" />
          <h3 className="text-xl mt-3 md:mt-5 font-semibold">
            E-tutor-educations & online LMS
          </h3>
          <p className="text-sky-400 mt-2 md:mt-3">View Case Study</p>
        </div>
        <div className="text-start w-[350px]">
          <img className="w-full h-auto" src={project2} alt="" />
          <h3 className="text-xl mt-3 md:mt-5 font-semibold">
            E-tutor-educations & online LMS
          </h3>
          <p className="text-sky-400 mt-2 md:mt-3">View Case Study</p>
        </div>
        <div className="text-start w-[350px]">
          <img className="w-full h-auto" src={project3} alt="" />
          <h3 className="text-xl mt-3 md:mt-5 font-semibold">
            E-tutor-educations & online LMS
          </h3>
          <p className="text-sky-400 mt-2 md:mt-3">View Case Study</p>
        </div>
      </div>
    </div>
  );
};

export default SelectProject;
