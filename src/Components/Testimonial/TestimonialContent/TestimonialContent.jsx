import { FaQuoteLeft } from "react-icons/fa";

const TestimonialContent = () => {
  return (
    <div className="py-12 lg:py-0">
      <div className="flex justify-center relative lg:w-3/4 mx-auto">
        <div className="absolute lg:bottom-28 bottom-22 xl:left-56 lg:left-32 left-3 z-0">
          <FaQuoteLeft className="lg:text-9xl text-7xl text-gray-500" />
        </div>
        <h1 className="lg:text-6xl text-5xl uppercase font-black text-center lg:leading-13 leading-9 lg:pt-18 z-10">
          What Our <br /> <span className="text-[#F40026]">Customers</span>{" "}
          <br /> Are Saying
        </h1>
      </div>

      {/* Testimonials */}
      <div className="lg:flex justify-center xl:gap-18 lg:gap-5 xl:w-3/4 mx-auto py-16 px-4 xl:px-0 lg:space-y-0 space-y-8">
        <div className="relative">
          <div className="bg-emerald-500 shadow-xl lg:px-10 p-5 lg:py-10 rounded-t-4xl rounded-bl-[90px] xl:w-[500px] lg:w-[480px] text-white/90 lg:h-72 h-80">
            <p className="text-justify font-medium">
              Lead Bangladesh seamlessly executes our entire digital marketing
              strategy with incredible skill and expertise. Their ability to
              provide consistent results and offer the latest techniques keeps
              our brand ahead of the competition in an ever-changing digital
              environment. We consider the Lead Bangladesh team an extension of
              our company, not just another partner.
            </p>
          </div>

          <div className="absolute bottom-2 lg:right-10 right-5 text-right text-white/85">
            <div>
              <h5 className="text-xl font-extrabold">Raul Evan</h5>
              <p>Managing Partner, Friolento</p>
            </div>
          </div>
        </div>

        {/* Number Two */}
        <div className="relative">
          <div className="bg-white shadow-xl lg:px-10 p-5 lg:py-10 rounded-t-4xl rounded-bl-[90px] xl:w-[500px] lg:w-[480px] lg:h-72 h-80">
            <p className="text-justify font-medium">
              Working with Lead Bangladesh team provided us with the expert
              guidance we need to take our firm's marketing in digital realm and
              beyond, to another level. Early in the project, we threw a
              curveball in that we decided to refresh our brand and launch a
              more robust digital presence.
            </p>
          </div>

          <div className="absolute bottom-2 lg:right-8 right-5 text-right">
            <div>
              <h5 className="text-xl font-extrabold">Nafees Munkad</h5>
              <p>The Owner of, Khadi Ghar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialContent;
