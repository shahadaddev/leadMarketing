// import servicesImg from "../../../assets/images/serviceBgImg.jpg";
import ServicesCard from "../ServicesCard/ServicesCard";
import ServicesHomeTitle from "../ServicesTitle/ServicesHomeTitle";
import "../../HomeComponents/Home/Home.css";

const Services = () => {
  return (
    <div className="service-banner">
      <div className="max-w-7xl mx-auto w-full lg:flex justify-between lg:gap-10 lg:py-28 py-14 lg:relative items-start px-4 lg:px-0">
        <ServicesHomeTitle></ServicesHomeTitle>
        <ServicesCard></ServicesCard>
      </div>
    </div>
  );
};

export default Services;
