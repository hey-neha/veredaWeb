import React from "react";

const Number = () => {
  return (
    <>
      <div className="bg-white flex flex-col gap-20 w-full ">
        <div className="md:flex md:justify-evenly mx-20 mt-12 mb-8">
          <div className="md:flex md:flex-col text-center gap-3">
            <p className=" md:text-[30px] font-bold leading-tight ">1000+</p>
            <p className="md:px-2">Apps & Web Apps Launched</p>
          </div>

          <div className="md:flex md:flex-col text-center gap-3 ">
            <p className=" md:text-[30px] font-bold leading-tight">500+</p>
            <p className="">Clients Served</p>
          </div>

          <div className="md:flex md:flex-col text-center gap-3">
            <p className=" md:text-[30px] font-bold leading-tight">$10M</p>
            <p className="">Revenue Generated</p>
          </div>

          <div className="md:flex md:flex-col text-center gap-3">
            <p className=" md:text-[30px] font-bold leading-tight">10+</p>
            <p className="">Awards Won</p>
          </div>
        </div>
      </div>
      <hr className="md:mt-10" />
    </>
  );
};

export default Number;
