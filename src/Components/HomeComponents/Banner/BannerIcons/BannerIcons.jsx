import { FaIndustry, FaRegStar } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiMiniTrophy } from "react-icons/hi2";
import { IoBusinessSharp, IoPeople } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";

const BannerIcons = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center lg:gap-5 gap-4 mt-8">
        <div className="bg-white/30 backdrop-blur-xs text-center rounded-xl xl:py-4 py-3 xl:w-44 lg:w-36 w-full">
          <div className="flex justify-center">
            <HiMiniTrophy className="xl:text-4xl lg:text-3xl text-2xl text-emerald-400 bg-emerald-100 rounded-full px-2" />
          </div>
          <div>
            <h4 className="xl:text-xl lg:text-xl text-gray-700 font-extrabold mt-2">
              10+ Years
            </h4>
            <p className="text-gray-700">Market Experience</p>
          </div>
        </div>
        {/*------------
         Number Two
         ------------ */}
        <div className="bg-white/30 backdrop-blur-xs text-center rounded-xl xl:py-4 py-3 xl:w-44 lg:w-36 w-full">
          <div className="flex justify-center">
            <IoPeople className="xl:text-4xl lg:text-3xl text-2xl text-indigo-500 bg-indigo-100 rounded-full px-[6px]" />
          </div>
          <div>
            <h4 className="xl:text-xl lg:text-xl text-gray-700 font-extrabold mt-2">
              350+ Clients
            </h4>
            <p className="text-gray-700">Happily Served</p>
          </div>
        </div>{" "}
        {/* -----------------
         Number Three 
         --------------- */}
        <div className="bg-white/30 backdrop-blur-xs text-center rounded-xl xl:py-4 py-3 xl:w-44 lg:w-36 w-full">
          <div className="flex justify-center">
            <IoBusinessSharp className="xl:text-4xl lg:text-3xl text-2xl text-[#F40026] bg-red-100 rounded-full px-2" />
          </div>
          <div>
            <h4 className="xl:text-xl lg:text-xl text-gray-700 font-extrabold mt-2">
              20+ Industry
            </h4>
            <p className="text-gray-700">Happily Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerIcons;
