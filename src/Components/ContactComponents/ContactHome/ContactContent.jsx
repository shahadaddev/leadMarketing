import React from "react";
import { MdEmail } from "react-icons/md";

const ContactContent = () => {
  return (
    <div className="lg:w-5/12">
      <div className="space-y-4">
        <div className="flex items-center gap-3 px-4 py-4 bg-emerald-100 rounded-xl border-2 border-emerald-500">
          <MdEmail className="text-3xl text-emerald-400" />
          <div className="text-lg font-bold text-gray-700">
            <h5>Mail Us</h5>
            <h5>info@leadmarketingglobal.com</h5>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-4 bg-blue-100 rounded-xl border-2 border-blue-500">
          <MdEmail className="text-3xl text-blue-400" />
          <div className="text-lg font-bold text-gray-700">
            <h5>Mail Us</h5>
            <h5>info@leadmarketingglobal.com</h5>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-4 bg-purple-100 rounded-xl border-2 border-purple-500">
          <MdEmail className="text-3xl text-purple-400" />
          <div className="font-bold text-gray-700">
            <h5 className="text-lg">Book Session</h5>
            <h6 className="text-md">Free 30 min consultation</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
