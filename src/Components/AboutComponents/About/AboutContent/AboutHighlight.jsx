import { AiFillAudio } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
import { HiBadgeCheck } from "react-icons/hi";
import { HiMiniTrophy } from "react-icons/hi2";
import { IoImages } from "react-icons/io5";
import { LuCodeXml } from "react-icons/lu";

const AboutHighlight = () => {
  return (
    <div className="xl:w-4/12 lg:w-3/12 flex justify-center lg:py-0 py-12">
      <div className="space-y-8">
        <div className="flex flex-col justify-center items-center bg-white shadow-2xl w-52 py-4 rounded-2xl space-y-2 h-36">
          <IoImages className="mt-0.5 text-5xl text-emerald-500 bg-emerald-100 rounded-full px-3" />
          <div className="text-center">
            <h5 className="text-xl text-gray-700 font-extrabold">
              28k+ Contents
            </h5>
            <p className="text-gray-700 font-medium text-sm">Creatively Made</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white shadow-2xl w-52 py-4 rounded-2xl space-y-2 h-36">
          <LuCodeXml className="mt-0.5 text-5xl text-indigo-500 bg-indigo-100 rounded-full px-2" />
          <div className="text-center">
            <h5 className="text-xl text-gray-700 font-extrabold">
              100+ Websites
            </h5>
            <p className="text-gray-700 font-medium text-sm">
              Developed Pixel Perfect
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white shadow-2xl w-52 py-4 rounded-2xl space-y-2 h-36">
          <AiFillAudio className="mt-0.5 text-5xl text-purple-500 bg-purple-100 rounded-full px-2" />
          <div className="text-center">
            <h5 className="text-xl text-gray-700 font-extrabold">150+</h5>
            <p className="text-gray-700 font-medium text-sm">
              Audio Visuals Produced
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHighlight;
