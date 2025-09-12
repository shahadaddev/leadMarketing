import WorksButtonHome from "../WorksButton/WorksButtonHome";

const WorksTitle = () => {
  return (
    <div className="flex lg:flex-col justify-start lg:justify-between items-end h-full w-full">
      <div className="text-left justify-start flex">
        <h2 className="xl:text-[80px] lg:text-7xl text-5xl font-black uppercase xl:leading-17 lg:leading-14 leading-9 text-gray-700">
          The <br /> <span className="text-[#F40026]">stories</span> <br />{" "}
          We've <br /> built
        </h2>
      </div>

      {/* Explore Team Members Button */}
      <div className="hidden lg:block w-full">
        <WorksButtonHome></WorksButtonHome>
      </div>
    </div>
  );
};

export default WorksTitle;
