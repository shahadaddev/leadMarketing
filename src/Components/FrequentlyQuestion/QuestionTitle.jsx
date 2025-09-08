import { HiBadgeCheck } from "react-icons/hi";
import QuestionContact from "./QuestionContact";

const QuestionTitle = () => {
  return (
    <div className="w-5/12 sticky top-8">
      <div className="space-y-5">
        <h5 className="flex items-center justify-center gap-1 bg-emerald-100 w-[280px] py-2 rounded-full text-emerald-600 border-1 border-emerald-600 font-medium">
          {" "}
          <HiBadgeCheck className="text-2xl" />
          Frequently asked questions
        </h5>
        <div className="text-left items-end flex">
          <h2 className="xl:text-[80px] lg:text-7xl text-6xl font-black uppercase xl:leading-16 lg:leading-14 leading-12 text-gray-700">
            Common <br /> <i className="text-[#F40026]">Questions</i> <br /> &
            Answers
          </h2>
        </div>
        <QuestionContact></QuestionContact>
      </div>
    </div>
  );
};

export default QuestionTitle;
