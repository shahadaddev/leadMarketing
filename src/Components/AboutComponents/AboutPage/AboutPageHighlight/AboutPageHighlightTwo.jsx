import React from "react";
import { HiMiniTrophy } from "react-icons/hi2";
import { IoBusinessSharp, IoPeople } from "react-icons/io5";

const AboutPageHighlightTwo = () => {
  return (
    <div className="w-full lg:py-0 py-8">
      <div className="flex lg:flex-row flex-col justify-start">
        <div className="flex flex-col justify-center items-center bg-white/60 lg:w-52 py-5 rounded-2xl shadow-lg space-y-2 h-36 mt-24 lg:mt-0">
          <div className="flex justify-center">
            <HiMiniTrophy className="mt-0.5 text-5xl text-emerald-500 bg-emerald-100 rounded-full px-3" />
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
        <div className="flex flex-col justify-center items-center bg-white/60 lg:w-52 py-5 rounded-2xl shadow-lg space-y-2 h-36 xl:ml-40 lg:ml-28 mt-24 lg:mt-0">
          <div className="flex justify-center">
            <IoPeople className="mt-0.5 text-5xl text-indigo-500 bg-indigo-100 rounded-full px-2" />
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
        <div className="flex flex-col justify-center items-center bg-white/60 lg:w-52 py-5 rounded-2xl shadow-lg space-y-2 h-36 xl:ml-40 lg:ml-28 mt-24 lg:mt-0">
          <div className="flex justify-center">
            <IoBusinessSharp className="mt-0.5 text-5xl text-purple-500 bg-purple-100 rounded-full px-2" />
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
