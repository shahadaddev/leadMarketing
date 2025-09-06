import { GoArrowUpRight } from "react-icons/go";
import "../Banner.css";

const BannerButton = () => {
  return (
    <div className="flex justify-center gap-8 mt-24">
      <div>
        <h3 className="text-lg font-bold bg-[#F40026] text-white px-10 py-4 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/30 hover:backdrop-blur-md border-2 border-[#F40026] hover:text-[#F40026] transition-all duration-1000 hover-container w-72">
          Start A Journey
          <GoArrowUpRight className="text-3xl font-bold hover-arrow" />
        </h3>
      </div>
      <div>
        <h3 className="text-lg font-bold bg-white/30 backdrop-blur-md text-[#F40026] border-2 border-[#F40026] hover:bg-[#F40026] hover:text-white px-8 py-4 rounded-xl transition-all duration-1000 hover-container flex items-center justify-center cursor-pointer w-72">
          Visit Lead Bangladesh{" "}
          <GoArrowUpRight className="text-3xl font-extrabold hover-arrow" />
        </h3>
      </div>
    </div>
  );
};

export default BannerButton;
