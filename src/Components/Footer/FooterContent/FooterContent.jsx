import { Link } from "react-router";
import logo from "../../../assets/logo/logo2.png";
import FooterSocial from "../FooterSocial";

const FooterContent = () => {
  return (
    <div className="text-gray-700 w-5/12 mx-auto">
      <div>
        <div className="flex-col items-center justify-center">
          <div className="flex justify-center">
            <img className="w-1/2" src={logo} alt="" />
          </div>
          <div className="flex justify-center text-center">
            <div>
              <address className="text-xl font-bold">
                136 Bonaventure Avenue, <br /> St. John's, NL, Canada.
              </address>
              <div className="flex-row">
                <p>
                  <span className="text-lg font-bold text-start">Phone:</span>{" "}
                  <Link>
                    <a
                      href="tel:+1709 219 5878"
                      className="text-gray 700 hover:text-blue-800"
                    >
                      +1 709 219 5878
                    </a>
                  </Link>
                </p>
                <p>
                  <span className="text-lg font-bold">Email:</span>{" "}
                  <Link>
                    <a href="mailto:office@leadmarketingglobal.com">
                      office@leadmarketingglobal.com
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4">
          <FooterSocial></FooterSocial>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
