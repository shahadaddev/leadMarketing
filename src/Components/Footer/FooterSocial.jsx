import { BsThreadsFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { NavLink } from "react-router";

const FooterSocial = () => {
  return (
    <div>
      <ul className="flex gap-5 text-gray-700">
        <NavLink
          to={"https://www.facebook.com/LeadMarketingGlobal/"}
          target="_blank"
        >
          <FaFacebook className="text-3xl hover:text-[#1877F2] hover:scale-125 duration-300" />{" "}
        </NavLink>
        <NavLink
          to={"https://www.instagram.com/leadmarketingglobal/"}
          target="_blank"
        >
          <FaInstagram className="text-3xl hover:bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] rounded-lg transition-all hover:scale-125 duration-300" />
        </NavLink>
        <NavLink
          to={"https://www.linkedin.com/company/leadmarketingglobal/"}
          target="_blank"
        >
          <FaLinkedin className="text-3xl hover:text-[#0077B5] hover:scale-125 duration-300" />
        </NavLink>
        <NavLink
          to={"https://www.youtube.com/@LeadMarketingInc."}
          target="_blank"
        >
          <FaYoutube className="text-3xl hover:text-[#FF0000] hover:scale-125 duration-300" />
        </NavLink>
        <NavLink
          to={"https://www.youtube.com/@LeadMarketingInc."}
          target="_blank"
        >
          <BsThreadsFill className="text-3xl hover:scale-125 duration-300" />
        </NavLink>
        <NavLink
          to={"https://www.youtube.com/@LeadMarketingInc."}
          target="_blank"
        >
          <IoLogoTiktok className="text-3xl hover:scale-125 duration-300 hover:text-[#FE2C55]" />
        </NavLink>
      </ul>
    </div>
  );
};

export default FooterSocial;
