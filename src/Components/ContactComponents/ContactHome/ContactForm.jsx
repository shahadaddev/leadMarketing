import { GoArrowUpRight } from "react-icons/go";
import formBg from "../../../assets/images/formBg.jpg";
import ContactContent from "./ContactContent";
import ContactTitle from "../ContactTitle/ContactTitle";

const ContactForm = () => {
  return (
    <div
      className="py-20 text-gray-700"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(200,200,255,0.6)), url(${formBg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div>
          <ContactTitle></ContactTitle>
        </div>
        <section className="bg-white/30 backdrop-blur-xl shadow-2xl rounded-3xl px-10 py-20 flex justify-center gap-12 w-5/6 mx-auto mt-20">
          <ContactContent></ContactContent>

          {/* Form */}
          <div className="w-7/12">
            <div>
              <form action="" className="space-y-5">
                <div className="flex gap-14">
                  <div className="space-y-2">
                    <p>
                      <label htmlFor="name">Your Name</label>
                    </p>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Abudul Karim"
                      className="text-gray-500 border-b-2 focus:border-b-2 focus:outline-0 w-52"
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
                      className="text-gray-500 border-b-2 focus:border-b-2 focus:outline-0 w-52"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <p>
                    <label htmlFor="phoneNumber">Phone Number</label>
                  </p>
                  <input
                    type="number"
                    name="number"
                    id="phoneNumber"
                    placeholder="Type number"
                    className="text-gray-500 border-b-2 focus:border-b-2 focus:outline-0 w-52"
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
                    className="text-gray-500 border-b-2 focus:border-b-2 focus:outline-0 w-[480px]"
                  ></textarea>
                </div>
                <br />
                <div className="w-1/2">
                  <button>
                    <h3 className="text-lg font-bold bg-white text-[#F40026] px-6 py-3 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#F40026] hover:backdrop-blur-md border-2 border-[#F40026] hover:text-white transition-all duration-700 hover-container gap-2">
                      Send Message{" "}
                      <GoArrowUpRight className="text-3xl font-bold hover-arrow" />
                    </h3>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
