import TeamSlide from "../TeamSlider/TeamSlide";

const TeamHomeContent = () => {
  return (
    <div className="w-full">
      <div>
        <p className="text-justify text-lg">
          At Lead Marketing Inc., we provide a full spectrum of marketing,
          creative, and tech services, from branding and digital marketing to
          web and software development, delivered by a team of experienced,
          talented, and creative professionals.
        </p>
      </div>
      <TeamSlide></TeamSlide>
    </div>
  );
};

export default TeamHomeContent;
