import { NavLink } from "react-router";
import logo from "../../../assets/logo/logoBgRemoved.png";
import { IoCall } from "react-icons/io5";
import { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationStyle = ({ isActive }) =>
    `${
      isActive ? "text-[#F40026]" : "text-gray-700"
    } hover:text-[#F40026] duration-300`;

  const navigation = [
    { link: "/", name: "Home" },
    { link: "/aboutUs", name: "About Us" },
    { link: "/works", name: "Our Works" },
    { link: "/services", name: "Services" },
    { link: "/team", name: "Team" },
    { link: "/career", name: "Career" },
    { link: "/contact", name: "Contact" },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="lg:max-w-7xl xl:mx-auto lg:w-full lg:px-4 w-[85%] mx-auto relative">
      <div className="flex justify-between items-center lg:py-3">
        {/* Logo */}
        <div className="md:w-2/12 w-2/6">
          <NavLink to={"/"}>
            <img
              src={logo}
              alt="Lead Marketing Global Logo"
              className="lg:w-4/6"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="w-8/12 hidden md:flex justify-center">
          <ul className="flex xl:gap-10 lg:gap-6 md:gap-4">
            {navigation.map((nav, index) => (
              <NavLink className={navigationStyle} key={index} to={nav.link}>
                <li className="text-lg font-bold">{nav.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button className="text-[#F40026]" onClick={() => setIsOpen(!isOpen)}>
            <HiMenuAlt1 className="text-4xl" />
          </button>
        </div>

        {/* Desktop Let's Talk Button */}
        <div className="w-2/12 hidden md:flex justify-center">
          <NavLink to={"/contactForm"}>
            <button className="flex items-center gap-2 bg-[#F40026] hover:bg-white text-white hover:text-[#F40026] border-2 border-[#F40026] text-lg font-bold xl:px-8 lg:px-6 py-3 rounded-xl cursor-pointer transition-all duration-500">
              <IoCall className="text-xl" />
              Let's Talk
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-gray-800 text-gray-100 z-10 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-center py-8 gap-6`}
      >
        {/* Close Icon */}
        <button
          className="self-end mr-6 font-bold text-white"
          onClick={() => setIsOpen(false)}
        >
          <CgClose className="text-4xl" />
        </button>

        {navigation.map((nav, index) => (
          <NavLink
            className="text-base font-semibold text-gray-100"
            key={index}
            to={nav.link}
            onClick={() => setIsOpen(false)} // close menu on link click
          >
            {nav.name}
          </NavLink>
        ))}

        {/* Mobile Let's Talk Button */}
        <NavLink to={"/contactForm"} onClick={() => setIsOpen(false)}>
          <button className="flex items-center gap-2 bg-[#F40026] hover:bg-white text-white hover:text-[#F40026] border-2 border-[#F40026] text-base font-bold px-6 py-2 rounded-lg cursor-pointer transition-all duration-500">
            <IoCall className="text-lg" />
            Let's Talk
          </button>
        </NavLink>
      </div>

      {/* Horizontal Line */}
      <hr className="text-gray-400 xl:max-w-5xl lg:max-w-4xl mx-auto md:block hidden" />
    </div>
  );
};

export default Navbar;
