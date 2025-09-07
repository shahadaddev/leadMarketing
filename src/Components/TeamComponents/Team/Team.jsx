import TeamHomeTitle from "../TeamTitle/TeamHomeTitle";
import TeamHomeContent from "../TeamContent/TeamHomeContent/TeamHomeContent";

const Team = () => {
  return (
    <div className="max-w-7xl mx-auto py-28 ">
      <div className="flex w-full justify-between items-start gap-8 ">
        <div className="w-8/12">
          <TeamHomeContent></TeamHomeContent>
        </div>
        <div className="w-4/12 relative h-[485px]">
          <TeamHomeTitle></TeamHomeTitle>
        </div>
      </div>
    </div>
  );
};

export default Team;
