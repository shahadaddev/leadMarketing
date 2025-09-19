import React from "react";

const LocationTitle = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between gap-8 justify-start items-start h-full w-full max-w-7xl mx-auto xl:px-0 px-4">
      <div className="items-start flex xl:w-6/12 lg:w-5/12">
        <h2 className="xl:text-7xl lg:text-6xl text-5xl font-black uppercase xl:leading-14 lg:leading-12 leading-9 text-gray-700">
          the <br /> <span className="text-[#F40026]">places</span> <br /> we
          are <br /> <span className="text-[#F40026]">located</span>
        </h2>
      </div>
      <div className="xl:w-6/12 lg:w-7/12 pt-4">
        <p className="text-xl">
          At Lead Marketing Ltd., our reach goes beyond borders. With roots in
          Canada and a strong large team in Bangladesh, we deliver a full range
          of marketing services, including strategic branding, digital
          marketing, content creation, and campaign management, to clients
          worldwide. No matter where you are, our expertise ensures your brand
          stands out and thrives in a competitive market.
        </p>
      </div>
    </div>
  );
};

export default LocationTitle;
