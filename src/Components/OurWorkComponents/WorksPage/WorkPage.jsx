import Navbar from "../../SharedComponents/Navbar/Navbar";
import WorkBanner from "./WorkBanner";
import WorkContent from "./WorkContent";

const WorkPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl lg:mx-auto xl:pt-24 xl:py-0 py-14 mx-4 mt-8">
        <WorkBanner></WorkBanner>
      </div>
      <WorkContent></WorkContent>
    </div>
  );
};

export default WorkPage;
