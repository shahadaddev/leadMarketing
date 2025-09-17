import React from "react";
import { HiMiniTrophy } from "react-icons/hi2";
import { IoBusinessSharp, IoPeople } from "react-icons/io5";

const AboutPageHighlightTwo = () => {
  return (
    <div className="w-full lg:py-0 py-12">
      <div className="flex justify-start">
        <div className="flex flex-col justify-center items-center bg-white shadow-2xl border-t-1 border-l-1 border-[#F40026] w-52 py-4 rounded-2xl space-y-2 h-36">
          <div className="flex justify-center">
            <HiMiniTrophy className="lg:text-4xl text-3xl text-emerald-400 bg-emerald-100 rounded-full px-2" />
          </div>
          <div className="text-center">
            <h4 className="xl:text-xl lg:text-lg text-gray-700 font-extrabold mt-2">
              10+ Years
            </h4>
            <p className="text-gray-700 md:text-[16px] text-xs">
              Market Experience
            </p>
          </div>
        </div>
        {/*------------
           Number Two
           ------------ */}
        <div className="flex flex-col justify-center items-center bg-white shadow-2xl border-t-1 border-l-1 border-[#F40026] w-52 py-4 rounded-2xl space-y-2 h-36 ml-52">
          <div className="flex justify-center">
            <IoPeople className="lg:text-4xl text-3xl text-indigo-500 bg-indigo-100 rounded-full px-[6px]" />
          </div>
          <div className="text-center">
            <h4 className="xl:text-xl lg:text-lg text-gray-700 font-extrabold mt-2">
              350+ Clients
            </h4>
            <p className="text-gray-700 md:text-[16px] text-xs">
              Happily Served
            </p>
          </div>
        </div>{" "}
        {/* -----------------
           Number Three 
           --------------- */}
        <div className="flex flex-col justify-center items-center bg-white shadow-2xl border-t-1 border-l-1 border-[#F40026] w-52 py-4 rounded-2xl space-y-2 h-36 ml-52">
          <div className="flex justify-center">
            <IoBusinessSharp className="lg:text-4xl text-3xl text-[#F40026] bg-red-100 rounded-full px-2" />
          </div>
          <div className="text-center">
            <h4 className="xl:text-xl lg:text-lg text-gray-700 font-extrabold mt-2">
              20+ Industry
            </h4>
            <p className="text-gray-700 md:text-[16px] text-xs">
              Happily Served
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageHighlightTwo;
