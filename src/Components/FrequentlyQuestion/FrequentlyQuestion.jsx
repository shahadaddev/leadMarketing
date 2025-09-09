import Questions from "./Questions";
import QuestionTitle from "./QuestionTitle";

const FrequentlyQuestion = () => {
  return (
    <div className="text-gray-700">
      <div className="max-w-7xl mx-auto xl:py-28 lg:py-8 py-14 px-4 xl:px-0">
        <div className="w-full lg:flex justify-between items-start xl:gap-8 lg:relative">
          <QuestionTitle></QuestionTitle>
          <Questions></Questions>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
