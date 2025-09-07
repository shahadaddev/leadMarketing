import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router";

const ServicesHomeButton = () => {
  return (
    <div className="mt-20 w-full">
      <NavLink to={"/services"}>
        <h3 className="text-lg font-bold bg-white text-[#F40026] px-10 py-4 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#F40026] hover:backdrop-blur-md border-2 border-[#F40026] hover:text-white transition-all duration-700 hover-container gap-2">
          Explore All Services{" "}
          <GoArrowUpRight className="text-3xl font-bold hover-arrow" />
        </h3>
      </NavLink>
    </div>
  );
};

export default ServicesHomeButton;
