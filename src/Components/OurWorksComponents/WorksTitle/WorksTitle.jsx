import { HiBadgeCheck } from "react-icons/hi";
import WorksButtonHome from "../WorksButton/WorksButtonHome";

const ClientTitle = () => {
  return (
    <div className="relative lg:w-3/4 mx-auto">
      <h1 className="lg:text-6xl text-5xl uppercase font-black text-center lg:leading-13 leading-9 z-10">
        Our Valuable & <br /> <span className="text-[#F40026]">Trusted</span>{" "}
        Clients
      </h1>
      <p className="text-center text-lg py-1">
        Built on trust, shaped by collaboration, and growing <br /> together
        toward lasting success.
      </p>
    </div>
  );
};

export default ClientTitle;
