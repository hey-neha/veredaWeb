import React from "react";

const Number = () => {
  return (
    <>
      <div className="bg-white  text-[#061C3D] flex flex-col gap-20 w-full ">
        <div className="md:flex md:justify-evenly mx-20 mt-12 mb-8">
          <div className="md:flex md:flex-col text-center gap-2">
            <p className=" md:text-[40px]  leading-tight font-semibold ">
              1000+
            </p>
            <p className="md:px-2 md:text-[16px] font-bold">
              Apps & Web Apps Launched
            </p>
          </div>

          <div className="md:flex md:flex-col text-center gap-2">
            <p className=" md:text-[40px]  leading-tight font-semibold ">
              500+
            </p>
            <p className="md:px-2 md:text-[16px] font-bold">Client Served</p>
          </div>

          <div className="md:flex md:flex-col text-center gap-2">
            <p className=" md:text-[40px]  leading-tight font-semibold ">
              $10M
            </p>
            <p className="md:px-2 md:text-[16px] font-bold">
              Revenue Generated
            </p>
          </div>

          <div className="md:flex md:flex-col text-center gap-2">
            <p className=" md:text-[40px]  leading-tight font-semibold ">10+</p>
            <p className="md:px-2 md:text-[16px] font-bold">Awards Won</p>
          </div>

          {/* <div className="md:flex md:flex-col text-center gap-3 ">
            <p className=" md:text-[40px]  leading-tight">500+</p>
            <p className=" md:px-2 md:text-[18px]">Clients Served</p>
          </div> */}

          {/*  <div className="md:flex md:flex-col text-center gap-3">
            <p className=" md:text-[40px]  leading-tight">$10M</p>
            <p className=" md:text-[18px]">Revenue Generated</p>
          </div> */}

          {/*   <div className="md:flex md:flex-col text-center gap-3">
            <p className=" md:text-[40px]  leading-tight">10+</p>
            <p className=" md:text-[18px]">Awards Won</p>
          </div> */}
        </div>
      </div>
      <hr className="md:mt-5" />
    </>
  );
};

export default Number;
