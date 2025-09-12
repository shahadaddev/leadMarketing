import React from "react";
import WorksTitle from "./WorksTitle/WorksTitle";
import OurWorksContent from "./OurWorksContent/OurWorksContent";

const OurWorks = () => {
  return (
    <div className="max-w-7xl lg:mx-auto lg:py-20 py-14">
      <div className="flex lg:flex-row flex-col-reverse w-full lg:justify-between lg:items-start lg:gap-8 px-4 lg:px-0">
        <div className="xl:w-4/12 lg:w-5/12">
          <WorksTitle></WorksTitle>
        </div>
        <div className="xl:w-8/12">
          <OurWorksContent></OurWorksContent>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
