import Questions from "./Questions";
import QuestionTitle from "./QuestionTitle";

const FrequentlyQuestion = () => {
  return (
    <div className="text-gray-700">
      <div className="max-w-7xl mx-auto lg:py-28 py-14 px-4 lg:px-0">
        <div className="w-full lg:flex justify-between items-start lg:gap-8 lg:relative">
          <QuestionTitle></QuestionTitle>
          <Questions></Questions>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
