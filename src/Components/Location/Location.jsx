import { FaLocationDot } from "react-icons/fa6";
import map from "../../assets/images/map.webp";
import LocationTitle from "./LocationTitle";

const Location = () => {
  return (
    <div className="bg-white">
      <div className="pt-14">
        <LocationTitle />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <img src={map} alt="World Map" className="w-full h-auto" />

        {/* Chittagong */}
        <div className="absolute" style={{ top: "50%", left: "68%" }}>
          <div className="group relative flex flex-col items-center">
            <FaLocationDot className="text-red-600 text-2xl relative z-10" />
            <div className="absolute w-6 h-6 rounded-full bg-[#F40026] opacity-0 group-hover:opacity-50 animate-ping"></div>
            <span className="mt-2 text-sm font-semibold">Chittagong, BD</span>
          </div>
        </div>

        {/* Dhaka */}
        <div className="absolute" style={{ top: "46%", left: "68%" }}>
          <div className="group relative flex flex-col items-center">
            <FaLocationDot className="text-red-600 text-2xl relative z-10" />
            <div className="absolute w-6 h-6 rounded-full bg-[#F40026] opacity-0 group-hover:opacity-50 animate-ping"></div>
            <span className="mt-2 text-sm font-semibold">Dhaka, BD</span>
          </div>
        </div>

        {/* UAE */}
        <div className="absolute" style={{ top: "52%", left: "56%" }}>
          <div className="group relative flex flex-col items-center">
            <FaLocationDot className="text-red-600 text-2xl relative z-10" />
            <div className="absolute w-6 h-6 rounded-full bg-[#F40026] opacity-0 group-hover:opacity-50 animate-ping"></div>
            <span className="mt-2 text-sm font-semibold">UAE</span>
          </div>
        </div>

        {/* Toronto, Canada */}
        <div className="absolute" style={{ top: "40%", left: "18%" }}>
          <div className="group relative flex flex-col items-center">
            <FaLocationDot className="text-red-600 text-2xl relative z-10" />
            <div className="absolute w-6 h-6 rounded-full bg-[#F40026] opacity-0 group-hover:opacity-50 animate-ping"></div>
            <span className="mt-2 text-sm font-semibold">Toronto, Canada</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
