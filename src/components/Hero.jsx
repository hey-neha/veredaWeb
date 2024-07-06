// import React from "react";
// import Imagirl from "../assets/GirlImage.png";

// const Hero = () => {
//   return (
//     <>
//       <header className="w-full min-h-screen bg-blue-950 ">
//         <div className="md:flex md:justify-evenly  md:px-10 ">
//           <div className="text-white  font-bold mt-16 /* pr-28 */">
//             {" "}
//             <p className="text-sky-400 text-[14px] font-normal ml-12 mb-4 ">
//               DEVELOP & GROW
//             </p>
//             {/*   /* px-8 /* mb-10 */}
//             <h1 className="text-3xl line-clamp-3 pl-11 font-mono">
//               {" "}
//               Crafting bespoke Apps tailored <br /> to fuel your bussiness's
//               growth <br /> trajectory
//             </h1>
//             <p className="font-light px-5 mt-5 pl-12 ">
//               we specialize in creating custom apps me Lorem ipsum dolor sit
//               amet, consectetur adipisicing elit. Enim, sapiente? Lorem ipsum
//               dolor sit amet Lorem ipsum Maiores.
//             </p>
//             <div className="md:mt-5 p-3 md:w-56 h-auto ml-12 flex justify-center bg-sky-400 rounded">
//               <a
//                 className="text-center text-white md:flex md:justify-center"
//                 href="#"
//               >
//                 {" "}
//                 Get Started a Project
//               </a>
//             </div>
//           </div>
//           <div className=" md:mr-20 md:mt-10 ">
//             <img
//               className=" w-[350px] h-[350px] md:w-[850px] md:h-[400px] rounded-full"
//               src={Imagirl}
//               alt=""
//             />
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Hero;

import React from "react";
import Imagirl from "../assets/GirlImage.png";

const Hero = () => {
  return (
    <>
      <header className="w-full h-auto bg-blue-950 flex flex-col md:flex-row md:justify-evenly px-5 md:px-10">
        <div className="text-white font-bold mt-16 md:pr-10">
          <p className="text-sky-400 text-[14px] font-normal mb-4 md:ml-5">
            DEVELOP & GROW
          </p>
          <h1 className="text-3xl line-clamp-3 md:ml-5  font-mono md:text-4xl">
            Crafting bespoke Apps tailored <br /> to fuel your business's growth{" "}
            <br /> trajectory
          </h1>
          <p className="font-light mt-5 md:ml-5 md:pr-10">
            We specialize in creating custom apps. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Enim, sapiente? Lorem ipsum dolor sit
            amet. Maiores.
          </p>
          <div className="mt-8 md:ml-5 p-3 w-56 bg-sky-400 rounded">
            <a className="text-center text-white" href="#">
              Get Started a Project
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:ml-10">
          <img
            className="w-full md:w-auto md:max-w-lg h-auto rounded-full"
            src={Imagirl}
            alt="Hero"
          />
        </div>
      </header>
    </>
  );
};

export default Hero;
