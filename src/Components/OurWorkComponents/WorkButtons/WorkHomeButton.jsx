import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router";

const WorkHomeButton = () => {
  return (
    <div className="lg:w-full w-5/6">
      <div className="flex justify-start">
        <NavLink to={"/works"} className="lg:w-4/6">
          <h3 className="lg:text-lg font-bold bg-white text-[#F40026] px-10 py-4 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#F40026] hover:backdrop-blur-md border-2 border-[#F40026] hover:text-white transition-all duration-700 hover-container gap-2">
            Our All Works{" "}
            <GoArrowUpRight className="text-3xl font-bold hover-arrow" />
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export default WorkHomeButton;
