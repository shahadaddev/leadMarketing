import { NavLink } from "react-router";

const FooterNavigation = () => {
  return (
    <div className="text-gray-700 space-y-4 py-4">
      <div className="flex flex-col justify-center items-center">
        <h5 className="lg:hidden block text-2xl font-extrabold pb-2">
          Company
        </h5>
        <ul className="lg:flex justify-center gap-8 text-center text-gray-500">
          <NavLink>
            <li className="text-lg font-bold hover:text-[#F40026]">About Us</li>
          </NavLink>
          <NavLink>
            <li className="text-lg font-bold hover:text-[#F40026]">Works</li>
          </NavLink>
          <NavLink>
            <li className="text-lg font-bold hover:text-[#F40026]">Services</li>
          </NavLink>
          <NavLink>
            <li className="text-lg font-bold hover:text-[#F40026]">Team</li>
          </NavLink>
          <NavLink>
            <li className="text-lg font-bold hover:text-[#F40026]">Career</li>
          </NavLink>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h5 className="lg:hidden block text-2xl font-extrabold pb-2">Legal</h5>
        <ul className="lg:flex justify-center gap-8 text-center text-gray-500">
          <NavLink>
            <li className="text-lg font-bold hover:text-[#F40026]">
              Privacy Policy
            </li>
          </NavLink>
          <NavLink>
            <li className="text-lg font-bold hover:text-[#F40026]">
              Terms & Condition
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default FooterNavigation;
