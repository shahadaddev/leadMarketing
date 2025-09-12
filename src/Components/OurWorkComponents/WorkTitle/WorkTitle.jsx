import { HiBadgeCheck } from "react-icons/hi";
import WorkHomeButton from "../WorkButtons/WorkHomeButton";

const WorkTitle = () => {
  return (
    <div className="flex justify-between lg:justify-between h-full w-full pb-16">
      <div className="space-y-4 w-4/12">
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
      <div className="hidden w-6/12 lg:flex lg:flex-col items-center justify-between pt-12">
        <div className="">
          <p className="text-justify text-lg lg:w-11/12 lg:leading-7 leading-6">
            At Lead Marketing Inc, we offer a full range of marketing services,
            from strategic branding and digital marketing to content creation
            and campaign management. Our expertise ensures your brand stands out
            and thrives in a competitive market.
          </p>
        </div>
        <WorkHomeButton></WorkHomeButton>
      </div>
    </div>
  );
};

export default WorkTitle;
