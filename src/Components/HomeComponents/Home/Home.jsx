import AboutUs from "../../AboutComponents/About/AboutUs";
import ContactForm from "../../ContactComponents/ContactHome/ContactForm";
import FrequentlyQuestion from "../../FrequentlyQuestion/FrequentlyQuestion";
import PartnerCompany from "../../PartnerCompanies/PartnerCompany";
import Services from "../../ServicesComponents/Services/Services";
import Team from "../../TeamComponents/Team/Team";
import Testimonial from "../../Testimonial/Testimonial/Testimonial";
import Banner from "../Banner/Banner";
import questionBg from "../../../assets/images/questionBg.JPG";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import bannerImage from "../../../assets/banner/bannerImg.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-content">
        {/* <Navbar></Navbar> */}
        <Banner></Banner>
      </div>
      <div className="bg-gray-50">
        <AboutUs></AboutUs>
      </div>
      <div>
        <Services></Services>
      </div>
      {/* <div className="bg-gray-50">
        <Team></Team>
        <Testimonial></Testimonial>
      </div>
      <div
        className="h-fit"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(200,200,255,0.6)), url(${questionBg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <PartnerCompany></PartnerCompany>
        <FrequentlyQuestion></FrequentlyQuestion>
      </div>
      <ContactForm></ContactForm> */}
    </div>
  );
};

export default Home;
