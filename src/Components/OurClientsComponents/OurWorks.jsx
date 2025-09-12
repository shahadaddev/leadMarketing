import React from "react";
import ClientTitle from "./WorkTitle/WorkTitle";
import ClientContent from "./WorkContent/WorkContent";
import WorkTitle from "./WorkTitle/WorkTitle";
import WorkContent from "./WorkContent/WorkContent";

const OurWorks = () => {
  return (
    <div className="max-w-7xl mx-auto text-gray-700 py-20">
      <WorkTitle></WorkTitle>
      <WorkContent></WorkContent>
    </div>
  );
};

export default OurWorks;
