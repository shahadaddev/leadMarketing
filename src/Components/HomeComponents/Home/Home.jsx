import AboutUs from "../../AboutComponents/About/AboutUs";
import Services from "../../ServicesComponents/Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="bg-gray-50">
        <AboutUs></AboutUs>
      </div>
      <Services></Services>
    </div>
  );
};

export default Home;
