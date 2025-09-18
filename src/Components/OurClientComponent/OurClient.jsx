import ClientSlider from "./ClientSlider/ClientSlider";
import ClientTitle from "./ClientTitle/ClientTitle";

const OurClient = () => {
  return (
    <div className="max-w-7xl lg:mx-auto lg:pb-20 h-full">
      <div className=" lg:gap-8 px-4 xl:px-0 text-gray-700">
        <div className="">
          <ClientTitle></ClientTitle>
        </div>
        <div className="">
          <ClientSlider></ClientSlider>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
