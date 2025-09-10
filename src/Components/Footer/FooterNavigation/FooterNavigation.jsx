import { NavLink } from "react-router";

const FooterNavigation = () => {
  const navigationStyle = ({ isActive }) =>
    `${
      isActive ? "text-[#F40026]" : "text-gray-500"
    } hover:text-[#F40026] duration-300`;

  const navigation = [
    { link: "/aboutUs", name: "About Us" },
    { link: "/works", name: "Our Works" },
    { link: "/services", name: "Services" },
    { link: "/team", name: "Team" },
    { link: "/career", name: "Career" },
  ];

  return (
    <div className="text-gray-700 space-y-4 py-4">
      <div className="flex flex-col justify-center items-center">
        <h5 className="lg:hidden block text-2xl font-extrabold pb-2">
          Company
        </h5>
        <ul className="lg:flex justify-center gap-8 text-center text-gray-400">
          {navigation.map((nav, index) => (
            <NavLink
              className={navigationStyle}
              key={index}
              to={nav.link}
              // onClick={() => setIsOpen(false)}
            >
              <li className="text-lg font-bold hover:text-[#F40026]">
                {nav.name}
              </li>
            </NavLink>
          ))}
          {/* <NavLink to={}>
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
          </NavLink> */}
        </ul>
      </div>
    </div>
  );
};

export default FooterNavigation;
