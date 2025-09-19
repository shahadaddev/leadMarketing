import { useState } from "react";
import { AiOutlineSound } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { IoMdPrint } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { MdInsertChart } from "react-icons/md";
import { TbCode, TbTargetArrow } from "react-icons/tb";
import { useNavigate } from "react-router";

const ServicesCard = () => {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
    if (window.innerWidth >= 1024) {
      navigate("/services");
    }
  };

  const services = [
    {
      id: 1,
      title: "Web & App Development",
      icon: TbCode,
      description:
        "We specialize in crafting intuitive, engaging, and user-friendly apps and websites that elevate your brand's digital presence",
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
        "Digital marketing isn't just about being online. It's about making an impact. From social media to influencer collaborations, and from content planning to creation, we cover everything needed to grow your audience, build trust, and drive results.",
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
        "Visuals speak louder than words. From films to photography, we produce content that tells stories, sparks emotions.",
      list: [
        "TVC, OVC, AV Production",
        "Documentary Filmmaking",
        "Music Video",
        "Professional Photography(Product, Fashion & All)",
        "Animation & Motion Graphics",
      ],
      height: "h-[350px]",
    },
    {
      id: 6,
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
      id: 7,
      title: "Performance Marketing",
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
      id: 8,
      title: "Strategy",
      icon: FaRegLightbulb,
      description:
        "Every winning brand starts with a clear strategy. Through research and competitor analysis, we design data-driven plans and campaigns that give you an edge and deliver measurable results.",
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
    <div className="xl:w-8/12 lg:w-7/12 text-gray-700">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pt-12 lg:pt-14">
        {services.map((service) => {
          const isActive = activeCard === service.id;

          return (
            <div key={service.id}>
              <div
                onClick={() => handleCardClick(service.id)}
                className={`bg-white/30 backdrop-blur-xs rounded-xl px-5 py-5 space-y-5 relative  w-full mx-auto ${service.height} group transition-all duration-700 cursor-pointer`}
              >
                {/* Icon */}
                <div>
                  <service.icon className="text-[40px] bg-red-200 rounded-full text-[#F40026] p-1" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h4 className="text-xl font-extrabold">{service.title}</h4>
                  <hr className="text-gray-400" />

                  {/* Paragraph */}
                  <p
                    className={`leading-5 pt-7 font-medium transition-all duration-500 ease-in-out
                               group-hover:opacity-0 group-hover:-translate-y-2
                               ${
                                 isActive
                                   ? "opacity-0 -translate-y-2"
                                   : "opacity-100 translate-y-0"
                               }`}
                  >
                    {service.description}
                  </p>

                  {/* List */}
                  <div>
                    <ul
                      className={`absolute top-36 text-md list-disc list-inside transition-all duration-500 ease-in-out
                                 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                                 ${
                                   isActive
                                     ? "opacity-100 translate-y-0 pointer-events-auto"
                                     : "opacity-0 translate-y-3 pointer-events-none"
                                 }`}
                    >
                      {service.list.map((item, i) => (
                        <li key={`${service.id}-${i}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Button */}
                {/* <div className="flex justify-center">
                  <button className="border-1 hover:border-gray-400 hover:bg-transparent hover:text-gray-700 px-8 py-[5px] rounded-lg font-medium cursor-pointer text-white bg-gray-700 border-gray-700 absolute bottom-5 flex items-center transition-all duration-700 hover-container">
                    Book Service
                    <GoArrowUpRight className="text-3xl font-bold hover-arrow" />
                  </button>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCard;
