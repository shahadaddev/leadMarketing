import { GoArrowUpRight } from "react-icons/go";
// import formBg from "../../../assets/images/formBg.jpg";
import ContactContent from "./ContactContent";
import ContactTitle from "../ContactTitle/ContactTitle";

const ContactForm = () => {
  return (
    <div className="lg:py-20 pt-14 pb-9 text-gray-700 ">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div>
          <ContactTitle></ContactTitle>
        </div>
        <section className="bg-white/30 backdrop-blur-xl shadow-2xl rounded-3xl lg:px-10 px-6 lg:py-20 py-10 flex lg:flex-row flex-col-reverse justify-center items-center gap-12 xl:w-5/6 lg:w-11/12 lg:mx-auto mx-2 lg:mt-20 mt-14">
          {/* ----------------- */}
          <div className="lg:w-5/12 lg:block hidden">
            <ContactContent></ContactContent>
          </div>

          {/* Form */}
          <div className="lg:w-7/12 w-full">
            <form action="" className="space-y-5 w-full">
              <div className="flex lg:flex-row flex-col lg:gap-14 gap-8">
                <div className="space-y-2">
                  <p>
                    <label htmlFor="name">Your Name</label>
                  </p>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Abudul Karim"
                    className="text-gray-500 border-b-2 focus:border-b-2 focus:outline-0 lg:w-52 w-full"
                  />
                </div>
                <div className="space-y-2">
                  <p>
                    <label htmlFor="email">Your Email</label>
                  </p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="me@leadmarketing.com"
                    className="text-gray-500 border-b-2 focus:border-b-2 focus:outline-0 lg:w-52 w-full"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <p>
                  <label htmlFor="phoneNumber">Phone Number</label>
                </p>
                <input
                  type="number"
                  name="number"
                  id="phoneNumber"
                  placeholder="Type number"
                  className="text-gray-500 border-b-2 focus:border-b-2 focus:outline-0 lg:w-52 w-full"
                />
              </div>
              <br />
              <div>
                <p>
                  <label htmlFor="message">Message</label>
                </p>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Type details here"
                  className="text-gray-500 border-b-2 focus:border-b-2 focus:outline-0 lg:w-[480px] w-full"
                ></textarea>
              </div>
              <br />
              <div className="flex justify-center lg:block">
                <button className="lg:w-1/2 w-5/6">
                  <h3 className="lg:text-lg font-bold bg-white text-[#F40026] px-6 py-3 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#F40026] hover:backdrop-blur-md border-2 border-[#F40026] hover:text-white transition-all duration-700 hover-container gap-2">
                    Send Message{" "}
                    <GoArrowUpRight className="lg:text-3xl text-2xl font-bold hover-arrow" />
                  </h3>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
