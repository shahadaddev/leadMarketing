import leftImgFour from "../../../assets/works/stockWorkFour.jpg";
import leftImgOne from "../../../assets/works/stockWorkOne.jpg";

const WorkRightContent = () => {
  return (
    <div className="flex gap-0.5">
      <div>
        <img className="rounded-xl shadow-2xl" src={leftImgOne} alt="" />
      </div>
      <div>
        <img className="rounded-xl shadow-2xl" src={leftImgFour} alt="" />
      </div>
    </div>
  );
};

export default WorkRightContent;
