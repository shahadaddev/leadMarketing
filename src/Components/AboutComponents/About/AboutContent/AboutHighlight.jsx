import { GoClockFill } from "react-icons/go";
import { HiBadgeCheck } from "react-icons/hi";
import { HiMiniTrophy } from "react-icons/hi2";

const AboutHighlight = () => {
  return (
    <div className="w-4/12 flex justify-center">
      <div className="space-y-8">
        <div className="flex flex-col justify-center items-center bg-white shadow-2xl w-52 py-4 rounded-2xl space-y-2 h-36">
          <HiMiniTrophy className="mt-0.5 text-5xl text-emerald-400 bg-emerald-100 rounded-full px-3" />
          <div className="text-center">
            <h5 className="text-xl text-gray-700 font-extrabold">10+ Years</h5>
            <p className="text-gray-700 font-medium text-sm">
              Market Experience
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white shadow-2xl w-52 py-4 rounded-2xl space-y-2 h-36">
          <HiBadgeCheck className="mt-0.5 text-5xl text-indigo-400 bg-indigo-100 rounded-full px-3" />
          <div className="text-center">
            <h5 className="text-xl text-gray-700 font-extrabold">
              20+ Industry
            </h5>
            <p className="text-gray-700 font-medium text-sm">Happily Served</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white shadow-2xl w-52 py-4 rounded-2xl space-y-2 h-36">
          <GoClockFill className="mt-0.5 text-5xl text-purple-500 bg-purple-100 rounded-full px-3" />
          <div className="text-center">
            <h5 className="text-xl text-gray-700 font-extrabold">24/7</h5>
            <p className="text-gray-700 font-medium text-sm">Expert Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHighlight;
