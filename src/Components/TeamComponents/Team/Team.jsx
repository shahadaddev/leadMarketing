import TeamHomeTitle from "../TeamTitle/TeamHomeTitle";
import TeamHomeContent from "../TeamContent/TeamHomeContent/TeamHomeContent";

const Team = () => {
  return (
    <div className="max-w-7xl lg:mx-auto lg:py-28 py-14">
      <div className="flex lg:flex-row flex-col-reverse w-full lg:justify-between lg:items-start lg:gap-8 px-4">
        <div className="lg:w-8/12">
          <TeamHomeContent></TeamHomeContent>
        </div>
        <div className="lg:w-4/12 relative lg:h-[485px]">
          <TeamHomeTitle></TeamHomeTitle>
        </div>
      </div>
    </div>
  );
};

export default Team;
