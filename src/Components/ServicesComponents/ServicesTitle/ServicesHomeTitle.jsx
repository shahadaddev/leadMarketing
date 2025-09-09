import { HiBadgeCheck } from "react-icons/hi";
import ServicesHomeButton from "../ServicesButton/ServicesHomeButton";

const ServicesHomeTitle = () => {
  return (
    <div className="xl:w-4/12 lg:w-5/12 lg:sticky top-8">
      <div className="lg:space-y-8 space-y-6">
        <div className="space-y-4">
          <h5 className="flex items-center justify-center gap-1 bg-emerald-100 lg:w-[180px] w-[140px] lg:py-2 py-1 rounded-full text-emerald-600 border-1 border-emerald-600 font-semibold lg:text-md text-sm">
            {" "}
            <HiBadgeCheck className="lg:text-2xl text-lg" />
            Our Services
          </h5>

          {/* ----------
          Services Title
          ----------- */}
          <h2 className="xl:text-[80px] lg:text-[66px] text-5xl font-black uppercase xl:leading-17 lg:leading-13 leading-9 text-gray-700">
            One <br className="hidden lg:block" /> Stop <br />{" "}
            <span className="text-[#F40026]">Business</span> <br /> Solution
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
