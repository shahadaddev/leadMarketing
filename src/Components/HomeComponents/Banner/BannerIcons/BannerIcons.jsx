import { HiMiniTrophy } from "react-icons/hi2";
import { IoBusinessSharp, IoPeople } from "react-icons/io5";

const BannerIcons = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center xl:gap-8 lg:gap-5 gap-2 mt-12">
        <div className="bg-white/30 backdrop-blur-2xl text-center rounded-xl xl:py-4 py-3 xl:w-44 lg:w-38 w-full">
          <div className="flex justify-center">
            <HiMiniTrophy className="lg:text-4xl text-3xl text-emerald-400 bg-emerald-100 rounded-full px-2" />
          </div>
          <div>
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
        <div className="bg-white/30 backdrop-blur-2xl text-center rounded-xl xl:py-4 py-3 xl:w-44 lg:w-38 w-full">
          <div className="flex justify-center">
            <IoPeople className="lg:text-4xl text-3xl text-indigo-500 bg-indigo-100 rounded-full px-[6px]" />
          </div>
          <div>
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
        <div className="bg-white/30 backdrop-blur-2xl text-center rounded-xl xl:py-4 py-3 xl:w-44 lg:w-38 w-full">
          <div className="flex justify-center">
            <IoBusinessSharp className="lg:text-4xl text-3xl text-[#F40026] bg-red-100 rounded-full px-2" />
          </div>
          <div>
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

export default BannerIcons;
