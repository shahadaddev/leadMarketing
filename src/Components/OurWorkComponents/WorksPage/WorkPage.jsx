import Navbar from "../../SharedComponents/Navbar/Navbar";
import WorkContent from "../WorkContent/WorkContent";
import WorkBanner from "./WorkBanner";
import WorkPageContent from "./WorkPageContent";

const WorkPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl lg:mx-auto xl:pt-24 xl:py-0 py-14 mx-4 mt-8">
        <WorkBanner></WorkBanner>
      </div>
      <div className="work-content my-20">
        <div className="py-20 max-w-7xl mx-auto space-y-14">
          <div>
            <h2 className="xl:text-[80px] lg:text-7xl text-5xl font-black uppercase xl:leading-17 lg:leading-14 leading-9 text-gray-700 text-center">
              All Our <br /> <span className="text-[#F40026]">Success</span>{" "}
              Stories
            </h2>
            <p className="text-center text-lg pt-2 font-medium">
              Celebrating the Journeys That Inspire Us because <br /> every
              achievement matters.
            </p>
          </div>
          <WorkContent></WorkContent>
          <WorkPageContent></WorkPageContent>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
