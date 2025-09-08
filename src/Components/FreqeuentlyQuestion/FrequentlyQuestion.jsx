import questionBg from "../../assets/images/questionBg.JPG";
import Questions from "./Questions";
import QuestionTitle from "./QuestionTitle";

const FrequentlyQuestion = () => {
  return (
    <div
      className="text-gray-700"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(200,200,255,0.6)), url(${questionBg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto py-28">
        <div className="w-full flex justify-between gap-8">
          <QuestionTitle></QuestionTitle>
          <Questions></Questions>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
