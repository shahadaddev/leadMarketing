import WorksSlider from "../WorksSlider/WorksSlider";

const OurWorksContent = () => {
  return (
    <div className="w-full lg:space-y-15 space-y-12 lg:py-6 py-6">
      <div className="">
        <p className="text-justify text-lg lg:w-10/12 lg:leading-7 leading-6">
          At Lead Marketing Inc, we offer a full range of marketing services,
          from strategic branding and digital marketing to content creation and
          campaign management. Our expertise ensures your brand stands out and
          thrives in a competitive market.
        </p>
      </div>
      <WorksSlider></WorksSlider>
      <div className="lg:hidden block">{/* <TeamButton></TeamButton> */}</div>
    </div>
  );
};

export default OurWorksContent;
