import { HiBadgeCheck } from "react-icons/hi";
import WorksButtonHome from "../WorksButton/WorksButtonHome";

const WorksTitle = () => {
  return (
    <div className="flex lg:flex-col justify-start lg:justify-between h-full w-full">
      <div className="space-y-4">
        <h5 className="flex items-center justify-center gap-1 bg-red-200 lg:w-[140px] w-[140px] lg:py-1.5 py-1 rounded-full text-red-600 border-1 border-red-600 font-semibold lg:text-md text-sm">
          {" "}
          <HiBadgeCheck className="lg:text-xl text-lg" />
          Our Works
        </h5>
        <h2 className="xl:text-[80px] lg:text-7xl text-5xl font-black uppercase xl:leading-17 lg:leading-14 leading-9 text-gray-700">
          The <br /> <span className="text-[#F40026]">stories</span> <br />{" "}
          We've <br /> built
        </h2>
      </div>

      {/* Explore Team Members Button */}
      <div className="hidden lg:block w-full">
        <WorksButtonHome></WorksButtonHome>
      </div>
    </div>
  );
};

export default WorksTitle;
