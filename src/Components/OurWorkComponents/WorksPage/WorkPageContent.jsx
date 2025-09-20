import WorkContentSlider from "./WorkContentSlider";
import bsrmImg1 from "../../../assets/works/bsrm/Page 20-08.jpg";
import bsrmImg2 from "../../../assets/works/bsrm/Page 20-05.jpg";

import mogaImg1 from "../../../assets/works/mogador/img1.jpg";
import mogaImg2 from "../../../assets/works/mogador/img2.jpg";
import mogaImg3 from "../../../assets/works/mogador/img3.jpg";
import mogaImg4 from "../../../assets/works/mogador/img4.jpg";

// -------- connecting coast to coast ----------------
import coastImg1 from "../../../assets/works/connectingc2c/mission.jpg";
import coastImg2 from "../../../assets/works/connectingc2c/vission.jpg";
import coastImg3 from "../../../assets/works/connectingc2c/banner.jpg";

// Hurricane -----------------
import hc1 from "../../../assets/works/hurricane/hurricaneOne.jpg";
import hc2 from "../../../assets/works/hurricane/hurricaneTwo.jpg";
import hc3 from "../../../assets/works/hurricane/hurricaneThree.jpg";

// ------------- PHP Float Glass  ---------------
import php1 from "../../../assets/works/php/php1.jpeg";
import php2 from "../../../assets/works/php/php2.jpeg";
import php3 from "../../../assets/works/php/php3.jpeg";
import php4 from "../../../assets/works/php/php4.jpeg";

// ---------- Total Tools -------------
import tools1 from "../../../assets/works/tools/tools1.jpg";
import tools2 from "../../../assets/works/tools/tools2.jpg";
import tools3 from "../../../assets/works/tools/tools3.jpg";
import tools4 from "../../../assets/works/tools/tools4.jpg";

// ----------- Gravity --------------
import gravity1 from "../../../assets/works/gravity/gravity1.jpg";
import gravity2 from "../../../assets/works/gravity/gravity2.jpg";
import gravity3 from "../../../assets/works/gravity/gravity3.jpg";

// --------- Confidence ------------
import confidence1 from "../../../assets/works/confidence/confidence1.jpg";
import confidence2 from "../../../assets/works/confidence/confidence2.jpg";
import confidence3 from "../../../assets/works/confidence/confidence3.jpg";

// ------------ Disperse Beauty -----------
import disperse1 from "../../../assets/works/disperse/disperse1.jpg";
import disperse2 from "../../../assets/works/disperse/disperse2.jpg";
import disperse3 from "../../../assets/works/disperse/disperse3.jpg";
import disperse4 from "../../../assets/works/disperse/disperse4.jpg";

// ------------ Asian University for women ----------
import auw1 from "../../../assets/works/auw/auw1.jpg";
import auw2 from "../../../assets/works/auw/auw2.jpg";
import auw3 from "../../../assets/works/auw/auw3.jpg";
import auw4 from "../../../assets/works/auw/auw4.jpg";

const WorkPageContent = () => {
  const worksContent = [
    {
      id: 1,
      title: "Mogador Restaurant",
      paragraph:
        "Mogador Restaurant is a fully Halal eatery in St. John’s, NL, Canada, offering authentic Shawarma, nachos, tacos, and a fusion of Mexican and Moroccan flavors.",
      images: [mogaImg1, mogaImg2, mogaImg3, mogaImg4],
      bulletPoints: [
        "Logo design",
        "Brand Identity design",
        "Web design and development",
        "Social media management",
        "Photo and video production",
      ],
    },
    {
      id: 2,
      title: "BSRM",
      paragraph:
        "Bangladesh’s top steel manufacturer produces high-strength steel products. A cornerstone in building the nation’s infrastructure since 1952.",
      images: [bsrmImg1, bsrmImg2],
      bulletPoints: [
        "OVC",
        "Customer Testimonials",
        "Photo Shoot",
        "Video Shoot",
        "Brochure Design",
      ],
    },
    {
      id: 3,
      title: "NL Hurricanes",
      paragraph:
        "NL Hurricanes is a dynamic cricket team based in St. John’s, NL, Canada, founded in 2020.",
      images: [hc1, hc2, hc3],
      bulletPoints: [
        "Brand Identity design",
        "Web design and development",
        "Social media management",
        "Photo and video production",
      ],
    },
    {
      id: 4,
      title: "Connecting Coast to Coast",
      paragraph:
        "Connecting Coast to Coast is a community-first social organization that accelerates opportunities for students, recent graduates, young professionals, and small business owners.",
      images: [coastImg1, coastImg2, coastImg3],
      bulletPoints: [
        "Logo design",
        "Brand Identity design",
        "Web design and development",
        "Social media management",
        "Photo and video production",
      ],
    },
    {
      id: 5,
      title: "PHP Float Glass",
      paragraph:
        "Bangladesh’s first float glass manufacturer offering clear and tinted architectural glass. A pioneer in eco-friendly glass production, catering to diverse construction needs.",
      images: [php1, php2, php3, php4],
      bulletPoints: [
        "Marketing Strategies",
        "Social Media Content",
        "Photoshoot",
        "Video Shoot",
        "Brochure",
        "OVC",
      ],
    },
    {
      id: 6,
      title: "Gravity Fitness",
      paragraph:
        "A modern fitness center in Chattogram equipped with world-class equipment. Provides 24/7 services with expert trainers and a motivating atmosphere.",
      images: [gravity1, gravity2, gravity3],
      bulletPoints: [
        "Marketing Strategies",
        "Social Media Content",
        "Video Shoot",
      ],
    },
    {
      id: 7,
      title: "Disperse Beauty",
      paragraph:
        "A cooking app where users can search and save recipes based on ingredients.",
      images: [disperse1, disperse2, disperse3, disperse4],
      bulletPoints: [
        "Ingredient-based search",
        "Favorites list",
        "Nutritional info display",
      ],
    },
    {
      id: 8,
      title: "Asian University for Women",
      paragraph:
        "An international university in Chattogram empowering women through liberal arts education. Hosts students from over 35 countries, fostering global leadership.",
      images: [auw1, auw2, auw3, auw4],
      bulletPoints: ["Photo uploads", "Interactive maps", "Offline support"],
    },
    {
      id: 9,
      title: "Confidence Cement",
      paragraph:
        "A leading cement manufacturer in Bangladesh known for quality and innovation. Pioneered private sector cement production, contributing to national infrastructure.",
      images: [confidence1, confidence2, confidence3],
      bulletPoints: ["Marketing Strategies", "Social Media Content"],
    },
    {
      id: 10,
      title: "Total Tools",
      paragraph: "A real-time chat app with group messaging and media sharing.",
      images: [tools1, tools2, tools3, tools4],
      bulletPoints: [
        "WebSocket real-time updates",
        "Group chats",
        "File and image sharing",
      ],
    },
  ];

  return (
    <div className="">
      <div className="xl:space-y-36 lg:space-y-14 space-y-14 text-gray-700 max-w-7xl mx-auto">
        {worksContent.map((work, index) => (
          <div
            key={work.id}
            className={`flex flex-col md:items-center md:justify-between mx-4 gap-8 
          ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Content Section */}
            <div className="md:w-7/12 lg:w-6/12 space-y-5 xl:p-10 px-5 py-8 rounded-2xl bg-white/30 backdrop-blur-2xl">
              <h2 className="xl:text-5xl lg:text-4xl text-3xl font-black">
                {work.title}
              </h2>
              <p className="xl:text-xl lg:text-lg text-md font-medium">
                {work.paragraph}
              </p>
              <ul className="list-disc list-inside space-y-1 lg:text-lg font-medium">
                {work.bulletPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {/* <div className="lg:mt-10 xl:w-1/2 lg:mx-0 lg:w-4/6 mx-auto">
                <NavLink to={"/works"}>
                  <h3 className="lg:text-lg font-bold bg-white text-[#F40026] px-10 xl:py-4 py-3 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#F40026] hover:backdrop-blur-md border-2 border-[#F40026] hover:text-white transition-all duration-700 hover-container gap-2">
                    Explore More{" "}
                    <GoArrowUpRight className="text-3xl font-bold hover-arrow" />
                  </h3>
                </NavLink>
              </div> */}
            </div>

            {/* Image Slider Section */}
            <div className="md:w-5/12">
              <WorkContentSlider work={work} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPageContent;
