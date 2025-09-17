import Navbar from "../../SharedComponents/Navbar/Navbar";
import Team from "../../TeamComponents/Team/Team";
import AboutPageContent from "./AboutPageContent/AboutPageContent";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-gray-700 h-fit xl:py-24 py-14 lg:mx-0 mx-4 my-8 company-content">
        <AboutPageContent></AboutPageContent>
      </div>
      <Team></Team>
    </div>
  );
};

export default About;
