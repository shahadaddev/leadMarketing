import { FaRegStar } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";

const BannerIcons = () => {
  return (
    <div>
      <div className="flex justify-center gap-8 mt-8">
        <div className="bg-white/30 backdrop-blur-xs text-center rounded-xl xl:py-4 py-3 xl:w-40 lg:w-36">
          <div className="flex justify-center">
            <FaArrowTrendUp className="xl:text-4xl lg:text-3xl text-emerald-500" />
          </div>
          <div>
            <h4 className="xl:text-2xl lg:text-xl text-gray-700 font-extrabold mt-2">
              300%
            </h4>
            <p className="text-gray-700">ROI Increase</p>
          </div>
        </div>
        <div className="bg-white/30 backdrop-blur-xs text-center rounded-xl xl:py-4 py-3 xl:w-40 lg:w-36">
          <div className="flex justify-center">
            <LuBadgeCheck className="xl:text-4xl lg:text-3xl text-indigo-500" />
          </div>
          <div>
            <h4 className="xl:text-2xl lg:text-xl text-gray-700 font-extrabold mt-2">
              98.5%
            </h4>
            <p className="text-gray-700">Retention Rate</p>
          </div>
        </div>{" "}
        <div className="bg-white/30 backdrop-blur-xs text-center rounded-xl xl:py-4 py-3 xl:w-40 lg:w-36">
          <div className="flex justify-center">
            <FaRegStar className="xl:text-4xl lg:text-3xl text-[#F40026]" />
          </div>
          <div>
            <h4 className="xl:text-2xl lg:text-xl text-gray-700 font-extrabold mt-2">
              4.5/5
            </h4>
            <p className="text-gray-700">Client Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerIcons;
