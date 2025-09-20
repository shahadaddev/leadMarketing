import AboutUs from "../../AboutComponents/About/AboutUs";
import ContactForm from "../../ContactComponents/ContactHome/ContactForm";
import FrequentlyQuestion from "../../FrequentlyQuestion/FrequentlyQuestion";
import PartnerCompany from "../../PartnerCompanies/PartnerCompany";
import Services from "../../ServicesComponents/Services/Services";
import Team from "../../TeamComponents/Team/Team";
import Testimonial from "../../Testimonial/Testimonial/Testimonial";
import Banner from "../Banner/Banner";
import "./Home.css";
import OurWorks from "../../OurWorkComponents/OurWorks";
import OurClient from "../../OurClientComponent/OurClient";
import Location from "../../Location/Location";
// import NavbarHome from "../../SharedComponents/Navbar/NavbarHome";
// import homeBanner from "../../../assets/banner/homeBanner.jpg";
import Navbar from "../../SharedComponents/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="relative h-fit home-content">
        {/* <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${homeBanner})` }}
        ></div> */}
        {/* <div
          className="absolute inset-0 bg-gradient-to-r rgba(255, 255, 255, 0.1),
      rgba(8, 42, 78, 0.8)"
        ></div> */}
        <div className="relative">
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
      </div>
      <div className="bg-gray-50">
        <AboutUs></AboutUs>
      </div>
      <div>
        <Services></Services>
      </div>
      <div className="bg-gray-50">
        <OurWorks></OurWorks>
        <OurClient></OurClient>
        <Testimonial></Testimonial>
        <Team></Team>
        <Location></Location>
      </div>
      <div className="h-fit company-content">
        <PartnerCompany></PartnerCompany>
        <FrequentlyQuestion></FrequentlyQuestion>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
