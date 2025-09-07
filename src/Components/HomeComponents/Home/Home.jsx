import AboutUs from "../../AboutComponents/About/AboutUs";
import Services from "../../ServicesComponents/Services/Services";
import Team from "../../TeamComponents/Team/Team";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="bg-gray-50">
        <AboutUs></AboutUs>
      </div>
      <Services></Services>
      <div className="bg-gray-50">
        <Team></Team>
      </div>
    </div>
  );
};

export default Home;
