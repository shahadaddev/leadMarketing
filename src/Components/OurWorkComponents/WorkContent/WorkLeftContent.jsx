import capitolReel from "../../../assets/reelVideo/capitolReel.mp4";
import hurricaneReel from "../../../assets/reelVideo/hurricaneReel.mp4";

const WorkLeftContent = () => {
  return (
    <div className="flex gap-0.5 w-full">
      <div className="relative group overflow-hidden rounded-2xl cursor-pointer w-1/2">
        <video autoPlay muted loop>
          <source src={capitolReel} type="video/mp4" />
        </video>
        <div className="absolute inset-0 transition-all duration-1000 bg-white/25 group-hover:bg-white/0 rounded-xl"></div>
      </div>
      <div className="relative group overflow-hidden rounded-2xl cursor-pointer w-1/2">
        <video autoPlay muted loop>
          <source src={hurricaneReel} type="video/mp4" />
        </video>
        <div className="absolute inset-0 transition-all duration-1000 bg-white/25 group-hover:bg-white/0 rounded-xl"></div>
      </div>
    </div>
  );
};

export default WorkLeftContent;
