import { FaRegStar } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";

const BannerIcons = () => {
  return (
    <div>
      <div className="flex justify-center gap-8 mt-8">
        <div className="bg-white/30 backdrop-blur-xs text-center rounded-xl py-4 w-40">
          <div className="flex justify-center">
            <FaArrowTrendUp className="text-4xl text-emerald-500" />
          </div>
          <div>
            <h4 className="text-2xl text-gray-700 font-extrabold mt-2">300%</h4>
            <p className="text-gray-700">ROI Increase</p>
          </div>
        </div>
        <div className="bg-white/30 backdrop-blur-xs text-center rounded-xl py-4 w-40">
          <div className="flex justify-center">
            <LuBadgeCheck className="text-4xl text-indigo-500" />
          </div>
          <div>
            <h4 className="text-2xl text-gray-700 font-extrabold mt-2">
              98.5%
            </h4>
            <p className="text-gray-700">Retention Rate</p>
          </div>
        </div>{" "}
        <div className="bg-white/30 backdrop-blur-xs text-center rounded-xl py-4 w-40">
          <div className="flex justify-center">
            <FaRegStar className="text-4xl text-[#F40026]" />
          </div>
          <div>
            <h4 className="text-2xl text-gray-700 font-extrabold mt-2">
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
