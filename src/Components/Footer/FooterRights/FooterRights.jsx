import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router";

const FooterRights = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex justify-between items-center bg-white max-w-4xl mx-auto py-2 px-5 shadow-2xl rounded-full">
      <div>
        <h5 className="font-medium">
          &copy; {year} Lead Marketing Global. All rights reserved
        </h5>
      </div>
      <div>
        <ul className="flex gap-3">
          <NavLink>
            <FaFacebook className="text-3xl" />{" "}
          </NavLink>
          <NavLink>
            <FaInstagram className="text-3xl" />
          </NavLink>
          <NavLink>
            <FaLinkedin className="text-3xl" />
          </NavLink>
          <NavLink>
            <FaYoutube className="text-3xl" />
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default FooterRights;
