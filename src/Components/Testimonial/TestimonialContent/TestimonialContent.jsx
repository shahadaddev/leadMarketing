import { FaQuoteLeft } from "react-icons/fa";

const TestimonialContent = () => {
  return (
    <div>
      <div className="flex justify-center">
        <FaQuoteLeft className="text-9xl text-gray-500" />
        <h1 className="text-6xl uppercase font-black text-center leading-13 pt-18">
          What Our <br /> <span className="text-[#F40026]">Customers</span>{" "}
          <br /> Are Saying
        </h1>
      </div>

      {/* Testimonials */}
      <div className="flex justify-center gap-18 w-3/4 mx-auto py-16">
        <div className="relative">
          <div className="bg-emerald-500 shadow-2xl px-10 py-10 rounded-t-4xl rounded-bl-[90px] w-[500px] text-white/90 h-72">
            <p className="text-justify font-medium">
              Lead Bangladesh seamlessly executes our entire digital marketing
              strategy with incredible skill and expertise. Their ability to
              provide consistent results and offer the latest techniques keeps
              our brand ahead of the competition in an ever-changing digital
              environment. We consider the Lead Bangladesh team an extension of
              our company, not just another partner.
            </p>
          </div>

          <div className="absolute bottom-2 right-10 text-right text-white/85">
            <div>
              <h5 className="text-xl font-extrabold">Raul Evan</h5>
              <p>Managing Partner, Friolento</p>
            </div>
          </div>
        </div>

        {/* Number Two */}
        <div className="relative">
          <div className="bg-white shadow-2xl px-10 py-10 rounded-t-4xl rounded-bl-[90px] w-[500px] h-72">
            <p className="text-justify font-medium">
              Working with Lead Bangladesh team provided us with the expert
              guidance we need to take our firm's marketing in digital realm and
              beyond, to another level. Early in the project, we threw a
              curveball in that we decided to refresh our brand and launch a
              more robust digital presence.
            </p>
          </div>

          <div className="absolute bottom-2 right-8 text-right">
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
