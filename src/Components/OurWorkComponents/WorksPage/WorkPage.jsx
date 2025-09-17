import React from "react";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import WorkContent from "../WorkContent/WorkContent";
import WorkLeftContent from "../WorkContent/WorkLeftContent";
import WorkBanner from "./WorkBanner";

const WorkPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl lg:mx-auto xl:pt-24 xl:py-0 py-14 mx-4 mt-8">
        <WorkBanner></WorkBanner>
      </div>
    </div>
  );
};

export default WorkPage;
