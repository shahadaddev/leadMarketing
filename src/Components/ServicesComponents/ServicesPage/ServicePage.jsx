import { HiBadgeCheck } from "react-icons/hi";
import ServicesHomeButton from "../ServicesButton/ServicesHomeButton";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import ServicePageTitle from "./ServicePageTitle";
import serviceImg from "../../../assets/images/servicesImg.jpg";

const ServicePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl lg:mx-auto xl:pt-24 xl:py-0 py-14 mx-4 mt-8">
        <div className="bg-gray-100 px-10 py-10 rounded-2xl flex justify-between items-center">
          <ServicePageTitle></ServicePageTitle>
          <div>
            <img className="rounded-2xl" src={serviceImg} alt="" />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ServicePage;
