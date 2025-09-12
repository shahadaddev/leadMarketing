import leftImgTwo from "../../../assets/works/stockWorkTwo.jpg";
import leftImgThree from "../../../assets/works/stockWorkThree.jpg";

const WorkRightContent = () => {
  return (
    <div className="flex gap-0.5">
      <div>
        <img className="rounded-xl shadow-2xl" src={leftImgThree} alt="" />
      </div>
      <div>
        <img className="rounded-xl shadow-2xl" src={leftImgTwo} alt="" />
      </div>
    </div>
  );
};

export default WorkRightContent;
