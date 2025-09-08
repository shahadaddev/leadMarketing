import Questions from "./Questions";
import QuestionTitle from "./QuestionTitle";

const FrequentlyQuestion = () => {
  return (
    <div className="text-gray-700">
      <div className="max-w-7xl mx-auto py-28">
        <div className="w-full flex justify-between items-start gap-8 relative">
          <QuestionTitle></QuestionTitle>
          <Questions></Questions>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
