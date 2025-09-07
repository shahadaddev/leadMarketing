import { IoPeople } from "react-icons/io5";
import AboutHighlight from "./AboutHighlight";

const AboutHomeContent = () => {
  return (
    <div>
      <div className="w-full my-16 flex items-start justify-between gap-8">
        {/* ------------ About Us Details ------------- */}
        <section className="w-8/12">
          <div className="p-8 rounded-xl text-[#F40026] border-t-2 border-l-2 border-[#F40026] relative">
            <p className="text-xl font-medium leading-7 text-justify">
              Lead Marketing Inc. is a full-service marketing and communications
              agency serving worldwide from Canada. This is the global venture
              of Lead Bangladesh Ltd., a full-service marketing agency with 10
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
              <div className="absolute -top-16 -left-12 flex gap-2 bg-white shadow-2xl px-6 py-4 rounded-xl -rotate-8">
                <IoPeople className="mt-0.5 text-3xl text-indigo-500" />
                <div>
                  <h5 className="text-3xl text-indigo-500 font-extrabold">
                    350+
                  </h5>
                  <p className="text-gray-700 font-semibold">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Explore About Button */}
        </section>

        {/* About Highlight Icons */}
        <AboutHighlight></AboutHighlight>
      </div>
    </div>
  );
};

export default AboutHomeContent;
