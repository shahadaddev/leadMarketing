import { AiOutlineSound } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { IoMdPrint } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { MdInsertChart } from "react-icons/md";
import { TbCode, TbTargetArrow } from "react-icons/tb";

const ServicePageContent = () => {
  const services = [
    {
      id: 1,
      title: "Web & App Development",
      icon: TbCode,
      description:
        "Lead Bangladesh doesn’t just build websites and apps; we create digital experiences that connect, convert, and grow with your business. From sleek user interfaces to robust backend systems, our development team brings your ideas to life with precision and purpose.",
      list: [
        "Website Design & Development",
        "User Experience (UX) & Interface (UI)",
        "E-commerce Solutions",
        "SEO & Performance Optimization",
        "Ongoing Support & Maintenance",
      ],
      height: "h-[350px]",
    },
    {
      id: 2,
      title: "Creative & Brand",
      icon: LuBrain,
      description:
        "Strong brands don't just happen, they're built with intention. We craft identities, stories, and visuals that set you apart and keep your brand consistent everywhere.",
      list: [
        "Brand Strategy & Positioning",
        "Creative Design & Visual Identity",
        "Copywriting & Storytelling",
        "Campaign Concept Development",
        "Brand Guidelines & Consistency",
      ],
      height: "h-[350px]",
    },
    {
      id: 3,
      title: "Digital Marketing",
      icon: MdInsertChart,
      description:
        "Lead Bangladesh elevates your brand with strategic digital marketing designed to drive results. We help you connect with your audience across every platform for meaningful growth. We provide data-backed digital marketing to sustain your brand visibility.",
      list: [
        "Social Media Marketing",
        "Influencer Marketing",
        "Content Marketing",
        "Email Marketing & Automation",
        "Analytics & Performance Tracking",
      ],
      height: "h-[350px]",
    },
    {
      id: 4,
      title: "Media Buying & Planning",
      icon: AiOutlineSound,
      description:
        "We design smart advertising strategies that put your brand in front of the right platforms. From choosing the best channels to optimizing ad spend, our approach ensures maximum reach, engagement, and ROI.",
      list: [
        "Social Media Ads",
        "Search Ads",
        "Display Ads",
        "Video Ads",
        "Affiliate Marketing Ads",
      ],
      height: "h-[350px]",
    },
    {
      id: 5,
      title: "Visual Production",
      icon: IoVideocam,
      description:
        "Lead Bangladesh transforms ideas into visuals that truly connect with people. From sharing your brand story to showcasing products or celebrating important events, we manage every step with creativity and care to bring your vision to life.",
      list: [
        "TVC, OVC, AV Production",
        "Documentary Filmmaking",
        "Music Video",
        "Animation & Motion Graphics",
        "Professional Photography(Product, Fashion & All)",
      ],
      height: "h-[350px]",
    },
    {
      id: 7,
      title: "Print & Packaging",
      icon: IoMdPrint,
      description:
        "Your brand deserves to look as good in hand as it does online. From packaging to print materials, we create designs that stand out, build trust, and leave a lasting impression.",
      list: [
        "Custom Packaging Design",
        "Product Labels and Tags",
        "Marketing Collateral (Brochures, Flyers, Posters)",
        "Corporate Stationery (Business Cards, etc.)",
        "High-Quality Printing Solutions",
      ],
      height: "h-[350px]",
    },
    {
      id: 8,
      title: "Lead Generation",
      icon: TbTargetArrow,
      description:
        "We specialize in crafting intuitive, engaging, and user-friendly apps and websites that elevate your brand's digital presence.",
      list: [
        "ROI-Focused Campaigns",
        "Paid Media (Social, Search Display)",
        "Conversion Rate Optimization",
        "Lead Nurturing & Automation",
        "Analytics & Performance Tracking",
      ],
      height: "h-[350px]",
    },
    {
      id: 9,
      title: "Strategy Planning",
      icon: FaRegLightbulb,
      description:
        "Strategy at Lead Bangladesh is about unlocking what’s next for your brand. We work hand in hand with your leadership and marketing teams to develop data-driven, result-oriented strategies that drive growth and keep you ahead in a constantly changing market.",
      list: [
        "Market Research & Insights",
        "Competitor Analysis",
        "Data Driven Planning",
        "Campaign Strategy Development",
        "Performance Measurement & Optimization",
      ],
      height: "h-[350px]",
    },
  ];
  return (
    <div className="lg:py-16 py-10 mx-5 lg:mx-0">
      <div>
        <h1 className="lg:text-5xl text-4xl lg:leading-10 leading-7 uppercase font-black text-center">
          The <span className="text-[#F40026]">Services</span>{" "}
          <br className="block lg:hidden" /> We{" "}
          <br className="hidden lg:block" /> provide
        </h1>
        <p className="text-center lg:text-xl my-2 lg:w-2/3 mx-auto">
          Tailored Solutions for Every Need — delivering expertise that adapts
          to your goals. From strategy to execution, we provide services
          designed to solve challenges and empowering your growth to achieve
          lasting success.
        </p>
      </div>
      <div className="space-y-20 text-gray-700 py-10 lg:px-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-start justify-between gap-10 xl:px-8 xl:py-20 lg:p-6 p-4 rounded-3xl xl:mx-5 ${
              index % 2 === 0
                ? "bg-white/30 backdrop-blur-lg text-gray-700"
                : "bg-black/30 backdrop-blur-lg text-white md:flex-row-reverse"
            }`}
          >
            {/* Left Side: Number + Title + Description */}
            <div className="md:w-4/12 xl:w-5/12 space-y-4 w-full">
              <div className="flex items-center gap-3">
                <h1 className="text-6xl md:text-[120px] font-black">
                  {index + 1}
                </h1>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-black xl:leading-10 md:leading-8 leading-tight uppercase">
                  {service.title}
                </h2>
              </div>
              <p className="text-base md:text-lg font-medium lg:font-normal text-justify">
                {service.description}
              </p>
            </div>

            {/* Right Side: List */}
            <div className="md:w-7/12 xl:w-7/12 rounded-2xl w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {service.list.map((point, i) => (
                  <li
                    key={i}
                    className={`px-4 py-6 md:py-8 rounded-2xl text-base md:text-lg font-semibold md:font-medium cursor-pointer transition ${
                      index % 2 === 0
                        ? "bg-white/50 text-gray-700 hover:bg-white"
                        : "bg-black/30 text-white hover:bg-black"
                    }`}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePageContent;
