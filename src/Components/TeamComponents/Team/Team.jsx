import TeamHomeTitle from "../TeamTitle/TeamHomeTitle";
import TeamHomeContent from "../TeamContent/TeamHomeContent/TeamHomeContent";

const Team = () => {
  return (
    <div className="max-w-7xl mx-auto py-24">
      <div className="flex w-full justify-between gap-8">
        <div className="w-8/12">
          <TeamHomeContent></TeamHomeContent>
        </div>
        <div className="w-4/12">
          <TeamHomeTitle></TeamHomeTitle>
        </div>
      </div>
    </div>
  );
};

export default Team;
