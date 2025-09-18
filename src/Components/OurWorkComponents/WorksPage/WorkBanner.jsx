import WorkLeftContent from "../WorkContent/WorkLeftContent";

const WorkBanner = () => {
  return (
    <div className="bg-gray-100 lg:p-10 px-5 py-8 rounded-3xl">
      <div className="flex lg:flex-row flex-col w-full items-center space-y-8 lg:space-y-0">
        <div className="lg:space-y-4 lg:w-5/12">
          <h2 className="xl:text-7xl lg:text-6xl text-5xl font-black uppercase xl:leading-14 lg:leading-12 leading-9 text-gray-700">
            The <br /> <span className="text-[#F40026]">stories</span> <br />{" "}
            We've <br /> built
          </h2>
          <p className="w-4/5 text-lg font-medium pt-5">
            When you partner with Lead Marketing, we take care of the heavy
            lifting, so you can enjoy more website traffic, leads, and revenue.
          </p>
        </div>
        <div className="lg:w-7/12">
          <WorkLeftContent></WorkLeftContent>
        </div>
      </div>
    </div>
  );
};

export default WorkBanner;
