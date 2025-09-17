import React from "react";
import WorkLeftContent from "../WorkContent/WorkLeftContent";
import { HiBadgeCheck } from "react-icons/hi";

const WorkBanner = () => {
  return (
    <div>
      <div className="flex w-full">
        <div className="space-y-4 lg:w-5/12">
          <h5 className="flex items-center justify-center gap-1 bg-red-200 lg:w-[180px] w-[140px] lg:py-1.5 py-1 rounded-full text-red-600 border-1 border-red-600 font-semibold lg:text-md text-sm">
            {" "}
            <HiBadgeCheck className="lg:text-xl text-lg" />
            Our Success Stories
          </h5>
          <h2 className="xl:text-[80px] lg:text-7xl text-5xl font-black uppercase xl:leading-17 lg:leading-14 leading-9 text-gray-700">
            The <br /> <span className="text-[#F40026]">stories</span> <br />{" "}
            We've <br /> built
          </h2>
          <p className="w-4/5 text-lg font-medium pt-5">
            When you partner with Lead Marketing, we take care of the heavy
            lifting, so you can enjoy more website traffic, leads, and revenue.
          </p>
        </div>
        <div className="lg:w-7/12">
          <WorkLeftContent></WorkLeftContent>
        </div>
      </div>
    </div>
  );
};

export default WorkBanner;
