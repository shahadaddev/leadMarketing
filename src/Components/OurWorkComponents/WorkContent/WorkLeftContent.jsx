import leftImgThree from "../../../assets/works/stockWorkThree.jpg";
import leftImgTwo from "../../../assets/works/stockWorkTwo.jpg";

const WorkLeftContent = () => {
  return (
    <div className="flex gap-0.5">
      <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
        <img
          className="rounded-xl shadow-2xl group-hover:scale-125 transition-all duration-1000"
          src={leftImgThree}
          alt=""
        />
        <div className="absolute inset-4 group-hover:inset-0 transition-all duration-1000 bg-white/25 group-hover:bg-white/0 rounded-xl"></div>
      </div>
      <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
        <img
          className="rounded-xl shadow-2xl group-hover:scale-125 transition-all duration-1000"
          src={leftImgTwo}
          alt=""
        />
        <div className="absolute inset-4 group-hover:inset-0 transition-all duration-1000 bg-white/25 group-hover:bg-white/0 rounded-xl"></div>
      </div>
    </div>
  );
};

export default WorkLeftContent;
