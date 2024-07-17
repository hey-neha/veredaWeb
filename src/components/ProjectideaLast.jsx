// import React from "react";
// import facebook from "../assets/facebook.png";
// import twitter from "../assets/twitter.png";
// import linkedin from "../assets/linkedingImg.png";

// const ProjectideaLast = () => {
//   return (
//     <div className="w-full h-screen  bg-blue-400 flex  ">
//       <div className=" bg- flex flex-col md:flex-row md:justify-between p-14">
//         {/*   left section --------------- */}
//         <div className="pt-12">
//           <h1 className="text-4xl text-white font-bold">
//             Have a project idea! <br /> Drop me a line.
//           </h1>
//           <p className="font-light mt-4 text-white ">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Consequuntur minima atque libero praesentium harum accusantium enim
//             perspiciatis provident at fugit!
//           </p>

//           <div className="flex flex-col md:flex-row gap-4 mt-5 ">
//             <div>
//               <img
//                 className="w-10 rounded-full h-auto mt-4"
//                 src="https://img.freepik.com/premium-vector/email-envelope-concept_34259-135.jpg"
//                 alt=""
//               />
//             </div>
//             <div>
//               <p className="text-gray-300">Email Us</p>
//               <h1 className="text-white text-2xl font-bold">info@gmail.com</h1>
//             </div>
//           </div>

//           {/*    connect with us----------------- */}

//           <div className="pt-10">
//             <p className="text-white">- Connect with us:</p>
//             <div className="flex mt-2 flex-col md:flex-row md:justify-evenly w-60 ">
//               <img className="w-10 h-auto" src={facebook} alt="" />
//               <img className="w-10 h-auto" src={twitter} alt="" />
//               <img className="w-14 h-auto" src={linkedin} alt="" />
//             </div>
//           </div>
//         </div>

//         {/*     right section-------------------- */}
//         <div className="bg-white w-[900px] h-[450px] text-center rounded-xl ">
//           <h1 className="text-black text-2xl font-bold mt-4">
//             Request A Quote- let's work together.
//           </h1>
//           <p className="px-5 mt-4 text-gray-400">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. A enim et
//             ipsum pariatur corporis impedit similique commodi facere odit .
//           </p>

//           {/*  form container --------------------------------*/}

//           <form className="text-start mt-5" action="#">
//             <div className="flex flex-col md:flex-row md:justify-evenly">
//               <div className="text-start">
//                 <label htmlFor="#">Name</label>
//                 <br />
//                 <input
//                   className=" border p-2 rounded-md  "
//                   type="text"
//                   placeholder="Full name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="#">Email</label>
//                 <br />
//                 <input
//                   className=" border p-2 rounded-md "
//                   type="text"
//                   placeholder="Full name"
//                 />
//               </div>
//             </div>

//             <div className="ml-12 mt-2 mr-4">
//               <label htmlFor="#">Subjects</label>
//               <br />
//               <input
//                 className=" border p-2 rounded-md w-full "
//                 type="text"
//                 placeholder="Subjects"
//               />
//             </div>

//             <div className="ml-12 mt-2 mr-4">
//               <label htmlFor="#">Message</label>
//               <br />
//               <textarea
//                 name=""
//                 id=""
//                 className=" border p-2 rounded-md w-full "
//                 type="text"
//                 placeholder="Tell us about your project"
//               ></textarea>
//             </div>

//             <div className="mt-4 md:ml-11 p-3 w-48 bg-sky-400 rounded">
//               <a className="text-center text-white" href="#">
//                 Request A Quote
//               </a>
//             </div>
//           </form>
//           <div></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectideaLast;

import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedingImg.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectideaLast = () => {
  return (
    <div
      className="w-full h-auto flex justify-center items-center pt-4 md:pt-14 mb-20 md:mb-24"
      style={{
        backgroundImage: `linear-gradient(170deg, #2A7EAC 70%, transparent 30%) `,
        color: `white`,

        // Gradient angle and colors
      }}
    >
      <div className="bg- flex flex-col md:flex-row md:justify-between w-full max-w-6xl">
        {/* Left section */}
        <div className="md:pr-8 md:mt-14">
          <h1 className="text-4xl text-white font-bold">
            Have a project idea! <br /> Drop me a line.
          </h1>
          <p className="  mt-4 md:pr-10 text-white font-normal opacity-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur minima atque libero praesentium harum accusantium enim
            perspiciatis provident at fugit!
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-5">
            <div className="bg-gray-100 bg-opacity-20 w-12 md:w-12 lg:w-14 text-center rounded-full p-2 ">
              {/* <img
                className="w-10 rounded-full h-auto mt-4"
                src="https://img.freepik.com/premium-vector/email-envelope-concept_34259-135.jpg"
                alt=""
              /> */}
              <MdOutlineEmail className=" flex justify-center w-9 h-auto mr-5 md:mr-10" />
            </div>
            <div>
              <p className="text-gray-300">Email Us</p>
              <h1 className="text-white text-2xl font-bold">info@gmail.com</h1>
            </div>
          </div>

          {/* Connect with us */}
          <div className="pt-10">
            <p className="text-white">- Connect with us:</p>
            <div className="flex flex-row   mt-2 gap-2 ">
              <div className=" bg-gray-100  hover:bg-blue-500 bg-opacity-5 p-2 rounded">
                <FaFacebookF className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white text-blue-700 p-2 rounded">
                <FaTwitter className="w-5 h-5" />
              </div>
              <div className="bg-gray-400 bg-opacity-20 p-2 rounded">
                <FaLinkedinIn className="w-5 h-5" />
              </div>
              <div className="bg-gray-400 bg-opacity-20 p-2 rounded">
                <FaInstagram className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="bg-white w-full md:w-max h-auto text-center drop-shadow-2xl rounded-xl p-8 mt-8 md:mt-0">
          <h1 className="text-black md:text-2xl mr-5 text-xl font-bold">
            Request A Quote - Let's work together.
          </h1>
          <p className="px-5 mt-3 text-start  text-lg text-[#42526B] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A enim et
            ipsum pariatur corporis impedit Lorem.
          </p>

          {/* Form container */}
          {/* ----------------------- -----------------*/}

          <form className="text-start w-full  mt-5" action="#">
            {/*  name and email */}

            <div className="flex flex-col w-full md:h-1/2 md:flex-row gap-4 md:gap-6 ">
              {/*    name */}
              <div>
                <label className="text-black" htmlFor="#">
                  Name
                </label>
                <br />
                <input
                  className="p-2 border rounded mt-2  w-full md:w-[230px] "
                  type="text"
                  placeholder="Full name"
                />
              </div>
              {/*  email */}
              <div>
                <label className="text-black" htmlFor="#">
                  Email
                </label>
                <br />
                <input
                  className="p-2 border rounded mt-2  w-full md:w-[230px]"
                  type="text"
                  placeholder="Email address"
                />
              </div>
            </div>

            {/* subjects---------------    */}
            <div className="mt-2">
              <label className="text-black" htmlFor="#">
                Subjects
              </label>
              <br />
              <input
                className="p-2 border rounded mt-2  w-full  "
                type="text"
                placeholder="Subjects"
              />
            </div>

            {/* text-area =----------------------------*/}

            {/*  <div className="mt-2">
              <label className="text-black" htmlFor="#">
                Message
              </label>
              <br />
              <textarea
                className="p-2 border rounded mt-2  w-full"
                type="text"
                placeholder="Tell us abhout your project"
              />
            </div> */}

            <div className="mt-2">
              <label className="text-black block mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="p-2 border rounded w-full resize-none"
                id="message"
                placeholder="Tell us about your project"
              ></textarea>
            </div>

            <div className="mt-3 p-3 w-56 flex flex-row gap-3 justify-center bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100 rounded">
              <a className="text-center text-white  font-bold " href="#">
                Request a Quote
              </a>
              <FaLongArrowAltRight className="w-6 h-6" />
            </div>

            {/*  -----------------------  ------ */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectideaLast;
