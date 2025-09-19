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
              <span className="font-extrabold">Lead Marketing Inc.</span> is a
              full-service marketing and communications agency based in Canada,
              serving clients worldwide. It is the global venture of{" "}
              <span className="font-extrabold">Lead Bangladesh Ltd</span>, a
              full-service marketing, creative and tech agency with 10 years of
              experience. Together, we have worked with more than 350 clients.
              Our clients stand out in the market because we combine expertise
              with creativity and strategy. Using data-driven insights, unique
              business strategies, and effective campaign plans, our skilled
              team delivers strong results and practical solutions. Since
              technology is always changing, your business needs to adapt to
              stay successful. We make sure your brand stays ahead, remains
              relevant, and connects with the right audience. We don’t just
              build recognition, we create lasting brand resonance and a
              powerful space for your brand’s voice.
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
