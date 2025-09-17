import { IoPeople } from "react-icons/io5";
import AboutPageHighlight from "../AboutPageHighlight/AboutPageHighlight";
import AboutPageHighlightTwo from "../AboutPageHighlight/AboutPageHighlightTwo";

const AboutPageContent = () => {
  return (
    <div className="">
      <div className="w-full xl:gap-8 lg:gap-5 ">
        {/* ------------ About Us Details ------------- */}
        <div className="flex justify-center items-center gap-12 max-w-7xl mx-auto bg-white/60 px-12 py-22 rounded-2xl">
          <div className="xl:w-3/12">
            <h1 className="lg:text-8xl lg:leading-18 text-5xl uppercase font-black text-left">
              who <br /> <span className="text-[#F40026]">we</span> <br /> are
            </h1>
            <p className="text-left lg:text-lg my-2">
              Our work isn't about ads. It's about creating impact that lasts.
            </p>
          </div>
          <section className="xl:w-8/12 max-w-5xl mx-auto lg:w-9/12 lg:pt-0 pt-4">
            <div className="lg:p-8 px-5 pt-12 rounded-xl text-gray-700 border-t-2 border-l-2 border-[#F40026] relative">
              <p className="lg:text-xl text-lg font-medium lg:leading-8 leading-6 text-justify">
                Lead Marketing Inc. is a full-service marketing and
                communications agency serving worldwide from Canada. This is the
                global venture of Lead Bangladesh Ltd., a full-service marketing
                agency with 10 years of experience. We have served 350+ clients.
                Our clients create a positive difference in the market with our
                proper blend of expertise and excellence. With data-driven
                analysis of unique business strategies, creative ideas, and
                effective campaign plans our team of skilled and bold creatives
                are delivering performance and robust solutions. Technology is
                constantly evolving and your business must evolve with it to
                remain successful. We ensure that your brand anticipates what's
                next and remains relevant. We help to build brand resonance as
                well as create a place for your brand's expressions.
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
          </section>
        </div>

        {/* About Highlight Icons */}
        <div>
          <div className="py-24 space-y-12 max-w-6xl mx-auto">
            <AboutPageHighlight></AboutPageHighlight>
            <AboutPageHighlightTwo></AboutPageHighlightTwo>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageContent;
