import TeamButton from "../TeamButton/TeamButton";

const TeamHomeTitle = () => {
  return (
    <div className="w-4/12 text-right items-end flex">
      <h2 className="xl:text-[80px] lg:text-7xl text-6xl font-black uppercase xl:leading-17 lg:leading-14 leading-12 text-gray-700">
        The <br /> <i className="text-[#F40026]">People</i> <br /> Behind <br />{" "}
        success
      </h2>{" "}
      {/* Explore Team Members Button */}
      <TeamButton></TeamButton>
    </div>
  );
};

export default TeamHomeTitle;
