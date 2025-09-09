import TeamButton from "../TeamButton/TeamButton";

const TeamHomeTitle = () => {
  return (
    <div className="flex lg:flex-col lg:justify-between justify-end items-end h-full w-full">
      <div className="text-right items-end flex">
        <h2 className="xl:text-[80px] lg:text-7xl text-5xl font-black uppercase xl:leading-17 lg:leading-14 leading-9 text-gray-700">
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
