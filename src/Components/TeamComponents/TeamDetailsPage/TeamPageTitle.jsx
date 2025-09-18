import teamImg from "../../../assets/images/Joinourteam.webp";

const TeamPageTitle = () => {
  return (
    <div className="bg-gray-100 lg:px-10 px-5 lg:py-10 py-8 rounded-3xl flex lg:flex-row flex-col justify-between items-center space-y-8 lg:space-y-0 mx-4 xl:mx-0">
      <div className="xl:w-4/12 lg:w-5/12 lg:sticky top-8">
        <div className="lg:space-y-8 space-y-6">
          <div className="space-y-4">
            {/* ----------
          Services Title
          ----------- */}
            <h2 className="xl:text-7xl lg:text-6xl text-5xl font-black uppercase xl:leading-14.5 lg:leading-12 leading-9 text-gray-700">
              The <br /> <span className="text-[#F40026]">Brain</span> <br />{" "}
              Behind <br /> every success
            </h2>
          </div>
          <p className="text-justify lg:text-lg w-full">
            At Lead Marketing Inc., we offer a full range of marketing and tech
            services, from Web design and development to strategic branding, and
            digital marketing to content creation. Our expertise ensures your
            brand stands out and thrives in a competitive market.
          </p>
        </div>
      </div>
      <div className="relative lg:w-6/12">
        <img className="rounded-2xl" src={teamImg} alt="" />
        <div className="absolute inset-0 bg-white/30"></div>
      </div>
    </div>
  );
};

export default TeamPageTitle;
