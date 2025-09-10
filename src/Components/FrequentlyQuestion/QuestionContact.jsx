import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const QuestionContact = () => {
  return (
    <div className="lg:pt-16 lg:w-11/12">
      <div className="bg-white/30 backdrop-blur-2xl p-8 rounded-xl lg:space-y-5 space-y-4">
        <h3 className="xl:text-[36px] lg:text-[32px] text-[28px] font-medium">
          Still have a questions?
        </h3>
        <p className="text-gray-700 xl:text-lg">
          Can't find the answer to your questions? Send us an email and we'll
          get back to you as soon as possible.
        </p>
        <button>
          <h3 className="lg:text-lg font-bold bg-[#F40026] text-white/90 xl:px-6 lg:px-8 px-6 py-3 rounded-xl flex items-center justify-center cursor-pointer hover:backdrop-blur-md border-2 border-[#F40026] hover:text-[#F40026] hover:bg-transparent transition-all duration-700 hover-container gap-2">
            Send Email{" "}
            <GoArrowUpRight className="lg:text-3xl text-2xl font-bold hover-arrow" />
          </h3>
        </button>
      </div>
    </div>
  );
};

export default QuestionContact;
