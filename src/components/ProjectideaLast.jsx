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

const ProjectideaLast = () => {
  return (
    <div className="w-full min-h-screen bg-blue-400 flex justify-center items-center p-4 md:p-14">
      <div className="bg- flex flex-col md:flex-row md:justify-between w-full max-w-6xl">
        {/* Left section */}
        <div className="md:pr-8 md:mt-14">
          <h1 className="text-4xl text-white font-bold">
            Have a project idea! <br /> Drop me a line.
          </h1>
          <p className="font-light mt-4 md:pr-10 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur minima atque libero praesentium harum accusantium enim
            perspiciatis provident at fugit!
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-5">
            <div>
              <img
                className="w-10 rounded-full h-auto mt-4"
                src="https://img.freepik.com/premium-vector/email-envelope-concept_34259-135.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="text-gray-300">Email Us</p>
              <h1 className="text-white text-2xl font-bold">info@gmail.com</h1>
            </div>
          </div>

          {/* Connect with us */}
          <div className="pt-10">
            <p className="text-white">- Connect with us:</p>
            <div className="flex mt-2 gap-4">
              <img className="w-10 h-auto" src={facebook} alt="" />
              <img className="w-10 h-auto" src={twitter} alt="" />
              <img className="w-10 h-auto" src={linkedin} alt="" />
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="bg-white w-full md:w-max h-auto text-center rounded-xl p-8 mt-8 md:mt-0">
          <h1 className="text-black md:text-2xl text-xl font-bold">
            Request A Quote - Let's work together.
          </h1>
          <p className="px-5 mt-3 text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A enim et
            ipsum pariatur corporis impedit similique commodi facere odit.
          </p>

          {/* Form container */}
          <form className="text-start mt-5" action="#">
            <div className="flex flex-col md:flex-row md:justify-evenly ">
              <div className="text-start md:mr-16">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  className="border p-2 px-5 rounded-md w-full"
                  type="text"
                  placeholder="Full name"
                  id="name"
                />
              </div>

              <div className="text-start">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className="border p-2 px-5 rounded-md w-full"
                  type="email"
                  placeholder="Email"
                  id="email"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="subjects">Subjects</label>
              <br />
              <input
                className="border p-2 rounded-md w-full"
                type="text"
                placeholder="Subjects"
                id="subjects"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                id="message"
                className="border p-2 rounded-md w-full"
                placeholder="Tell us about your project"
              ></textarea>
            </div>

            <div className="mt-4 p-3 md:w-1/2 bg-sky-400 rounded text-center">
              <button className="text-white" type="submit">
                Request A Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectideaLast;
