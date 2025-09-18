import React from "react";
import { FaCalendarCheck, FaPhone } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { MdEmail } from "react-icons/md";

const ContactContent = () => {
  return (
    <div>
      <div className="space-y-5">
        {/* --------------- */}
        <div className="flex items-center gap-3 px-5 py-4 bg-emerald-100 rounded-xl border-2 border-emerald-600 cursor-pointer hover-container">
          <MdEmail className="text-3xl text-emerald-600" />
          <div>
            <h5 className="text-xl font-bold flex text-emerald-600">
              Mail Us{" "}
              <GoArrowUpRight className="lg:text-3xl text-2xl font-bold hover-arrow" />
            </h5>
            <h6 className="text-lg text-emerald-700 font-medium">
              info@leadmarketingglobal.com
            </h6>
          </div>
        </div>

        {/* -------------- */}
        <div className="flex items-center gap-3 px-5 py-4 bg-blue-100 rounded-xl border-2 border-blue-600 cursor-pointer hover-container">
          <FaPhone className="text-3xl text-blue-600" />
          <div>
            <h5 className="text-xl font-bold flex text-blue-600">
              Call Us{" "}
              <GoArrowUpRight className="lg:text-3xl text-2xl font-bold hover-arrow" />
            </h5>
            <h6 className="text-lg text-blue-700 font-medium">
              {" "}
              +1 709 219 5878
            </h6>
          </div>
        </div>

        {/* ------------- */}
        <div className="flex items-center gap-3 px-5 py-4 bg-purple-100 rounded-xl border-2 border-purple-600 cursor-pointer hover-container">
          <FaCalendarCheck className="text-3xl text-purple-600" />
          <div>
            <h5 className="text-xl font-bold flex text-purple-600">
              Book Session{" "}
              <GoArrowUpRight className="lg:text-3xl text-2xl font-bold hover-arrow" />
            </h5>
            <h6 className="text-lg text-purple-700 font-medium">
              Free 30 min consultation
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
