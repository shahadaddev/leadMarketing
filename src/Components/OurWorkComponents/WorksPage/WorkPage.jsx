import Navbar from "../../SharedComponents/Navbar/Navbar";
import WorkContent from "../WorkContent/WorkContent";
import WorkBanner from "./WorkBanner";
import WorkPageContent from "./WorkPageContent";

const WorkPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="xl:max-w-7xl xl:mx-auto xl:pt-24 xl:py-0 mx-4 lg:mt-8">
        <WorkBanner></WorkBanner>
      </div>
      <div className="work-content my-20">
        <div className="lg:py-20 py-8 max-w-7xl xl:mx-auto space-y-14 mx-4">
          <div>
            <h2 className="xl:text-7xl lg:text-6xl text-4xl font-black uppercase xl:leading-15 lg:leading-12 leading-8 text-gray-700 text-center">
              All Our <br /> <span className="text-[#F40026]">Success</span>{" "}
              Stories
            </h2>
            <p className="text-center lg:text-lg pt-2 lg:font-medium leading-5">
              Celebrating the Journeys That Inspire Us because{" "}
              <br className="hidden lg:block" /> every achievement matters.
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
