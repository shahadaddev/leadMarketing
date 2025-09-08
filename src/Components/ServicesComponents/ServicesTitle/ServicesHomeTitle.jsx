import { HiBadgeCheck } from "react-icons/hi";
import ServicesHomeButton from "../ServicesButton/ServicesHomeButton";

const ServicesHomeTitle = () => {
  return (
    <div className="lg:w-4/12 sticky top-8">
      <div className="lg:space-y-8 space-y-6">
        <div className="space-y-4">
          <div className="flex justify-center lg:flex-none">
            <h5 className="flex items-center justify-center gap-1 bg-emerald-100 w-[180px] py-2 rounded-full text-emerald-600 border-1 border-emerald-600 font-semibold">
              {" "}
              <HiBadgeCheck className="text-2xl" />
              Our Services
            </h5>
          </div>
          <h2 className="xl:text-[80px] lg:text-7xl text-[55px] font-black uppercase xl:leading-17 lg:leading-14 leading-11 text-gray-700 lg:text-start text-center">
            One <br className="hidden lg:block" /> Stop <br />{" "}
            <i className="text-[#F40026]">Business</i> <br /> Solution
          </h2>
        </div>
        <p className="text-justify lg:text-lg w-full">
          At Lead Marketing Inc., we offer a full range of marketing and tech
          services, from Web design and development to strategic branding, and
          digital marketing to content creation. Our expertise ensures your
          brand stands out and thrives in a competitive market.
        </p>
        {/* Explore All Services Button */}
        <ServicesHomeButton></ServicesHomeButton>
      </div>
    </div>
  );
};

export default ServicesHomeTitle;
