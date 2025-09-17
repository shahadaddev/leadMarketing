import Navbar from "../../SharedComponents/Navbar/Navbar";
import Team from "../../TeamComponents/Team/Team";
import AboutPageContent from "./AboutPageContent/AboutPageContent";
import MissionVisionContent from "./MissionVissionPage/MissionVissionContent";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-gray-700 h-fit xl:pt-24 xl:py-0 py-14 lg:mx-0 mx-4 mt-8 company-content">
        <AboutPageContent></AboutPageContent>
      </div>
      <MissionVisionContent></MissionVisionContent>
      <Team></Team>
    </div>
  );
};

export default About;
