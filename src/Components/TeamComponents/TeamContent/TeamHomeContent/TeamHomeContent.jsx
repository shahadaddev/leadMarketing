import TeamButton from "../../TeamButton/TeamButton";
import TeamSlide from "../TeamSlider/TeamSlide";

const TeamHomeContent = () => {
  return (
    <div className="w-full lg:space-y-20 space-y-12 lg:py-6 py-6">
      <div>
        <p className="text-justify text-lg lg:w-10/12 lg:leading-7 leading-6">
          At Lead Marketing Inc., we provide a full spectrum of marketing,
          creative, and tech services, from branding and digital marketing to
          web and software development, delivered by a team of experienced,
          talented, and creative professionals.
        </p>
      </div>
      <TeamSlide></TeamSlide>
      <div>
        <TeamButton></TeamButton>
      </div>
    </div>
  );
};

export default TeamHomeContent;
