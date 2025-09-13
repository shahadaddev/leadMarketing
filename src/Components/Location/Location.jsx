import map from "../../assets/images/map.webp";
import LocationTitle from "./LocationTitle";

const Location = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="pt-14">
        <LocationTitle></LocationTitle>
      </div>
      <div className="max-w-7xl mx-auto ">
        <div>
          <img src={map} alt="" />
        </div>

        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Location;
