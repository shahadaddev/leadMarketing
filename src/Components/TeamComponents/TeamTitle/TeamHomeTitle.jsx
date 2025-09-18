import TeamButton from "../TeamButton/TeamButton";

const TeamHomeTitle = () => {
  return (
    <div className="flex lg:flex-col lg:justify-between justify-end items-end h-full w-full">
      <div className="text-right items-end flex">
        <h2 className="xl:text-7xl lg:text-6xl text-5xl font-black uppercase xl:leading-15 lg:leading-12 leading-9 text-gray-700">
          The <br /> <span className="text-[#F40026]">People</span> <br />{" "}
          Behind <br /> success
        </h2>
      </div>

      {/* Explore Team Members Button */}
      <div className="hidden lg:block w-full">
        <TeamButton></TeamButton>
      </div>
    </div>
  );
};

export default TeamHomeTitle;
