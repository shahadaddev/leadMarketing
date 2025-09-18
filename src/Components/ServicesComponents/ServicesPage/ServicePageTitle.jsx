const ServicePageTitle = () => {
  return (
    <div className="xl:w-4/12 lg:w-5/12 lg:sticky top-8">
      <div className="lg:space-y-8 space-y-6">
        <div className="space-y-4">
          {/* ----------
          Services Title
          ----------- */}
          <h2 className="xl:text-[72px] lg:text-[60px] text-4xl font-black uppercase xl:leading-14 lg:leading-12 leading-7 text-gray-700">
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
        {/* <ServicesHomeButton></ServicesHomeButton> */}
      </div>
    </div>
  );
};

export default ServicePageTitle;
