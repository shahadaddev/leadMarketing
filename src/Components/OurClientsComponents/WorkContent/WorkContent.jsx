import WorkLeftSlider from "../WorkSlider/WorkLeftSlider";
import WorkSliderOne from "../WorkSlider/WorkLeftSlider";
import WorkRightSlider from "../WorkSlider/WorkRightSlider";
import WorkLeftContent from "./WorkLeftContent";
import WorkSideContentOne from "./WorkLeftContent";
import WorkRightContent from "./WorkRightContent";

const WorkContent = () => {
  return (
    <div className="py-8">
      <div className="flex gap-5">
        <div className="w-6/12 space-y-4">
          <WorkLeftContent></WorkLeftContent>
          <WorkLeftSlider></WorkLeftSlider>
        </div>
        <div className="w-6/12 space-y-8">
          <WorkRightSlider></WorkRightSlider>
          <WorkRightContent></WorkRightContent>
        </div>
      </div>
    </div>
  );
};

export default WorkContent;
