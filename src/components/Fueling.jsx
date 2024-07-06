// import React from "react";
// import Test from "../assets/Testimonial.png";
// import page from "../assets/Pagination.png";

// const Fueling = () => {
//   return (
//     <>
//       <div className=" bg-gray-100 w-full min-h-screen mt-20 flex flex-col  text-center ">
//         <div className=" text-center">
//           <h1 className=" text-sky-300  text-center md:text-[30px] font-bold md:mt-20 ">
//             Fueling Entrepreneuial Dreams with Tailored App <br /> Startups -
//             Where Partnerships Thrive Beyond Client <br /> Relationships!
//           </h1>
//           <p className="font-light md:px-72 text-[20px] md:mt-5 md:pl-80  md:mb-10 text-center">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
//             dicta itaque animi tempora, ducimus explicabo odit quia blanditiis
//             quibusdam suscipit.
//           </p>
//         </div>

//         <div className="text-center md:ml-80 md:mb-10">
//           <img className="md:w-[650px] h-auto" src={Test} alt="" />
//           <img
//             className=" flex justify-center text-center md:mt-6 ml-72 w-20"
//             src={page}
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Fueling;

import React from "react";
import Test from "../assets/Testimonial.png";
import page from "../assets/Pagination.png";

const Fueling = () => {
  return (
    <div className="bg-gray-100 w-full h-auto flex flex-col mt-20 items-center text-center px-4">
      <div>
        <h1 className=" text-blue-300 text-center text-xl sm:text-2xl md:text-3xl md:px-28 font-bold mt-10 md:mt-20">
          Fueling Entrepreneurial Dreams with Tailored App Startups - Where
          Partnerships Thrive Beyond Client Relationships!
        </h1>
        <p className=" text-[#42526B] text-lg font-light   mt-4 sm:mt-5 md:mt-5  sm:text-lg md:text-xl mx-auto max-w-screen-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dicta
          itaque animi tempora, ducimus explicabo odit quia blanditiis quibusdam
          suscipit.
        </p>
      </div>

      {/*   /* md:mt-14 */}
      <div className=" mt-10 md:mt-14">
        <img
          className="w-full max-w-md md:max-w-lg  lg:max-w-xl h-auto mx-auto"
          src={Test}
          alt="Testimonial"
        />
        <img
          className="md:mt-6 w-20 mx-auto  mb-5  md:mb-20"
          src={page}
          alt="Pagination"
        />
      </div>
    </div>
  );
};

export default Fueling;
