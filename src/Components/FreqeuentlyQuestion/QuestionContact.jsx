import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const QuestionContact = () => {
  return (
    <div className="pt-[200px]">
      <div className="bg-white/30 backdrop-blur-2xl p-8 rounded-xl space-y-8">
        <h3 className="text-[40px] font-medium">Still have a questions?</h3>
        <p className="text-gray-700 text-lg">
          Can't find the answer to your questions? Send us an email and we'll
          get back to you as soon as possible.
        </p>
        <button>
          <h3 className="text-lg font-bold bg-[#F40026] text-white/90 px-6 py-3 rounded-xl flex items-center justify-center cursor-pointer hover:backdrop-blur-md border-2 border-[#F40026] hover:text-[#F40026] hover:bg-transparent transition-all duration-700 hover-container gap-2">
            Send Email{" "}
            <GoArrowUpRight className="text-3xl font-bold hover-arrow" />
          </h3>
        </button>
      </div>
    </div>
  );
};

export default QuestionContact;
