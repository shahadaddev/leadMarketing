import { FaLocationDot } from "react-icons/fa6";
import map from "../../assets/images/map.webp";
import LocationTitle from "./LocationTitle";
import { useEffect, useRef, useState } from "react";

const Location = () => {
  const [activeId, setActiveId] = useState(null);
  const mapRef = useRef(null);

  const togglePopup = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  // Close popup when clicking outside (mobile only)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        window.innerWidth < 768 &&
        mapRef.current &&
        !mapRef.current.contains(e.target)
      ) {
        setActiveId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const locations = [
    {
      id: 1,
      name: "Chittagong, Bangladesh",
      coords: {
        desktop: { top: "50%", left: "68%" },
        mobile: { top: "48%", left: "55%" },
      },
      address: "O R Nizam Road, Road 1, House 8,",
      highlight: "Chittagong, Bangladesh",
    },
    {
      id: 2,
      name: "Dhaka, Bangladesh",
      coords: {
        desktop: { top: "46%", left: "68%" },
        mobile: { top: "32%", left: "58%" },
      },
      address: "1304, Flat:1/C, Road: 17, Avenue:2, Mirpur DOHS,",
      highlight: "Dhaka, Bangladesh",
    },
    {
      id: 3,
      name: "UAE, Dubai",
      coords: {
        desktop: { top: "52%", left: "56%" },
        mobile: { top: "54%", left: "40%" },
      },
      address: "Red Avenue, G43, Al Garhoud,",
      highlight: "UAE, Dubai",
    },
    {
      id: 4,
      name: "NL, Canada",
      coords: {
        desktop: { top: "40%", left: "18%" },
        mobile: { top: "38%", left: "16%" },
      },
      address: "136 Bonaventure Avenue, St. John's,",
      highlight: "NL, Canada",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      <div className="pt-14">
        <LocationTitle />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <img src={map} alt="World Map" className="w-full h-auto" />

        {locations.map((loc) => (
          <div
            key={loc.id}
            className="absolute"
            style={{
              top:
                window.innerWidth >= 768
                  ? loc.coords.desktop.top
                  : loc.coords.mobile.top,
              left:
                window.innerWidth >= 768
                  ? loc.coords.desktop.left
                  : loc.coords.mobile.left,
            }}
          >
            <div className="flex flex-col items-center">
              {/* Marker */}
              <div
                className="relative cursor-pointer z-10 group"
                onClick={() => togglePopup(loc.id)}
              >
                <FaLocationDot className="text-red-600 text-2xl relative z-10" />
                <div className="absolute w-6 h-6 rounded-full bg-[#F40026] opacity-50 animate-ping z-10"></div>

                {/* Popup */}
                <div
                  className={`
                absolute -top-16 left-1/2 transform -translate-x-1/2
                transition-opacity bg-white border border-gray-300
                rounded-md shadow-lg p-2 text-lg leading-6 font-medium text-gray-700 text-center w-48 z-30
                opacity-0
                md:group-hover:opacity-100
                ${activeId === loc.id ? "opacity-100" : ""}
              `}
                >
                  {loc.address} <br />
                  <span className="font-bold text-red-500">
                    {loc.highlight}
                  </span>
                </div>
              </div>

              <span className="mt-2 md:text-sm text-xs font-semibold">
                {loc.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
