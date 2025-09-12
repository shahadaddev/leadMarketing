import leftImgOne from "../../../assets/works/stockWorkOne.jpg";
import leftImgTwo from "../../../assets/works/stockWorkTwo.jpg";

const WorkLeftContent = () => {
  return (
    <div className="flex gap-0.5">
      <div>
        <img className="rounded-xl shadow-2xl" src={leftImgOne} alt="" />
      </div>
      <div>
        <img className="rounded-xl shadow-2xl" src={leftImgTwo} alt="" />
      </div>
    </div>
  );
};

export default WorkLeftContent;
