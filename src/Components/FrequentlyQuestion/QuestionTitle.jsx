import { HiBadgeCheck } from "react-icons/hi";
import QuestionContact from "./QuestionContact";

const QuestionTitle = () => {
  return (
    <div className="lg:w-5/12 lg:sticky lg:top-8">
      <div className="space-y-5">
        <h5 className="flex items-center justify-center gap-1 bg-emerald-100 lg:w-[280px] w-[200px] py-2 lg:text-md text-xs rounded-full text-emerald-600 border-1 border-emerald-600 font-semibold">
          {" "}
          <HiBadgeCheck className="lg:text-2xl text-md" />
          Frequently asked questions
        </h5>
        <div className="text-left items-end flex">
          <h2 className="xl:text-[80px] lg:text-7xl text-5xl font-black uppercase xl:leading-16 lg:leading-14 leading-9 text-gray-700">
            Common <br /> <i className="text-[#F40026]">Questions</i> <br /> &
            Answers
          </h2>
        </div>
        {/* <div>
          <p className="text-justify text-lg text-gray-800 block lg:hidden">
            At Lead Marketing Inc., we provide a full spectrum From branding to
            digital marketing, we offer innovative solutions that elevate your
            brand and deliver measurable results. Discover how we can turn your
            vision into reality.
          </p>
        </div> */}
        <div className="lg:block hidden">
          <QuestionContact></QuestionContact>
        </div>
      </div>
    </div>
  );
};

export default QuestionTitle;
