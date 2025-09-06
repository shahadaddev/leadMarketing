import { NavLink } from "react-router";
import logo from "../../../assets/logo/logoBgRemoved.png";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  const navigationStyle = ({ isActive }) =>
    `${isActive ? "text-[#F40026]" : ""} hover:text-[#F40026] duration-300`;

  const navigation = [
    { link: "/", name: "Home" },
    { link: "/aboutUs", name: "About Us" },
    { link: "/works", name: "Our Works" },
    { link: "/services", name: "Services" },
    { link: "/team", name: "Team" },
    { link: "/career", name: "Career" },
    { link: "/contact", name: "Contact" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="w-2/12">
          <NavLink>
            <img
              src={logo}
              alt="Lead Marketing Global Logo"
              className="w-4/6"
            />
          </NavLink>
        </div>
        <div className="w-8/12 flex justify-center">
          <ul className="flex gap-10">
            {navigation.map((nav, index) => (
              <NavLink className={navigationStyle} key={index} to={nav.link}>
                <li className="text-lg font-bold">{nav.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="w-2/12 flex justify-center">
          <NavLink to={"/contactForm"}>
            <button className="flex items-center gap-2 bg-[#F40026] hover:bg-white text-white hover:text-[#F40026] border-2 border-[#F40026] text-lg font-bold px-8 py-3 rounded-xl cursor-pointer transition-all duration-500">
              <IoCall className="text-xl" />
              Let's Talk
            </button>
          </NavLink>
        </div>
      </div>
      <hr className="text-gray-300 max-w-5xl mx-auto" />
    </div>
  );
};

export default Navbar;
