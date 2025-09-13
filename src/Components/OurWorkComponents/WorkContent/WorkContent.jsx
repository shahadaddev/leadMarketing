import WorkLeftSlider from "../WorkSlider/WorkLeftSlider";
import WorkRightSlider from "../WorkSlider/WorkRightSlider";
import WorkLeftContent from "./WorkLeftContent";
import WorkRightContent from "./WorkRightContent";

const WorkContent = () => {
  return (
    <div className="lg:py-8 mx-2">
      <div className="flex lg:flex-row flex-col xl:gap-5 lg:gap-2 space-y-8">
        <div className="lg:w-6/12 space-y-4">
          <WorkLeftContent></WorkLeftContent>
          <WorkLeftSlider></WorkLeftSlider>
        </div>
        <div className="lg:w-6/12 lg:block flex flex-col-reverse lg:space-y-4 gap-4">
          <WorkRightSlider></WorkRightSlider>
          <WorkRightContent></WorkRightContent>
        </div>
      </div>
    </div>
  );
};

export default WorkContent;
