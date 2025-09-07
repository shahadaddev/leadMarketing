import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router";

const AboutHomeButton = () => {
  return (
    <div className="mt-20 w-1/2">
      <NavLink to={"/aboutUs"}>
        <h3 className="text-lg font-bold bg-white text-[#F40026] px-10 py-4 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#F40026] hover:backdrop-blur-md border-2 border-[#F40026] hover:text-white transition-all duration-700 hover-container gap-2">
          More About Us{" "}
          <GoArrowUpRight className="text-3xl font-bold hover-arrow" />
        </h3>
      </NavLink>
    </div>
  );
};

export default AboutHomeButton;
