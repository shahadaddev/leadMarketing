import { IoPeople } from "react-icons/io5";
import AboutHighlight from "./AboutHighlight";
import AboutHomeButton from "../AboutButton/AboutHomeButton";

const AboutHomeContent = () => {
  return (
    <div>
      <div className="w-full mt-16 mb-8 lg:flex xl:items-start lg:items-end justify-between xl:gap-8 lg:gap-5">
        {/* ------------ About Us Details ------------- */}
        <section className="xl:w-8/12 lg:w-9/12 lg:pt-0 pt-4">
          <div className="lg:p-8 px-5 pt-12 rounded-xl text-gray-700 border-t-2 border-l-2 border-[#F40026] relative">
            <p className="lg:text-xl text-lg font-medium lg:leading-7 leading-6 text-justify">
              Lead Marketing Inc. is a full-service marketing and communications
              agency serving worldwide from Canada. This is the global venture
              of Lead Marketing Ltd., a full-service marketing agency with 10
              years of experience. We have served 350+ clients. Our clients
              create a positive difference in the market with our proper blend
              of expertise and excellence. With data-driven analysis of unique
              business strategies, creative ideas, and effective campaign plans
              our team of skilled and bold creatives are delivering performance
              and robust solutions. Technology is constantly evolving and your
              business must evolve with it to remain successful. We ensure that
              your brand anticipates what's next and remains relevant. We help
              to build brand resonance as well as create a place for your
              brand's expressions.
            </p>
            <div>
              <div className="absolute lg:-top-16 -top-10 lg:-left-12 -left-8 flex gap-2 bg-white shadow-2xl px-6 lg:py-4 py-[10px] rounded-xl lg:-rotate-12 -rotate-16">
                <IoPeople className="lg:mt-0.5 mt-1 lg:text-3xl text-2xl text-indigo-500" />
                <div>
                  <h5 className="lg:text-3xl text-2xl text-indigo-500 font-extrabold">
                    350+
                  </h5>
                  <p className="text-gray-700 font-semibold">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Explore About Button */}
          <div className="lg:block hidden">
            <AboutHomeButton></AboutHomeButton>
          </div>
        </section>

        {/* About Highlight Icons */}
        <AboutHighlight></AboutHighlight>

        {/* ------------------------
        -------------------------
        --------------------------- */}

        <div className="block lg:hidden">
          <AboutHomeButton></AboutHomeButton>
        </div>
      </div>
    </div>
  );
};

export default AboutHomeContent;
