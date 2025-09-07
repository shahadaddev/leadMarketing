import AboutUs from "../../AboutComponents/About/AboutUs";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="bg-gray-50">
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};

export default Home;
