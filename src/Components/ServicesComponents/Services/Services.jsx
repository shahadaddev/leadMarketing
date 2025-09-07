import servicesImg from "../../../assets/images/serviceBgImg.jpg";
import ServicesCard from "../ServicesCard/ServicesCard";
import ServicesHomeTitle from "../ServicesTitle/ServicesHomeTitle";

const Services = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(200,200,255,0.6)), url(${servicesImg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between gap-10 py-28">
        <ServicesHomeTitle></ServicesHomeTitle>
        <ServicesCard></ServicesCard>
      </div>
    </div>
  );
};

export default Services;
