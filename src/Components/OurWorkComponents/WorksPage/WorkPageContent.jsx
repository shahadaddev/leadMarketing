import WorkContentSlider from "./WorkContentSlider";
import bsrmImg1 from "../../../assets/works/bsrm/Page 20-08.jpg";
import bsrmImg2 from "../../../assets/works/bsrm/Page 20-05.jpg";

import mogaImg1 from "../../../assets/works/mogador/img1.jpg";
import mogaImg2 from "../../../assets/works/mogador/img2.jpg";
import mogaImg3 from "../../../assets/works/mogador/img3.jpg";
import mogaImg4 from "../../../assets/works/mogador/img4.jpg";

// Hurricane -----------------
import hc1 from "../../../assets/works/hurricane/hurricaneOne.jpg";
import hc2 from "../../../assets/works/hurricane/hurricaneTwo.jpg";
import hc3 from "../../../assets/works/hurricane/hurricaneThree.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router";

const WorkPageContent = () => {
  const worksContent = [
    {
      id: 1,
      title: "Mogador",
      paragraph:
        "A full-stack online store with product browsing, cart functionality, and secure checkout.",
      images: [mogaImg1, mogaImg2, mogaImg3, mogaImg4],
      bulletPoints: [
        "User authentication",
        "Payment gateway support",
        "Product search and filters",
      ],
    },
    {
      id: 2,
      title: "BSRM",
      paragraph:
        "Bangladesh’s top steel manufacturer produces high-strength steel products. A cornerstone in building the nation’s infrastructure since 1952.",
      images: [
        bsrmImg1,
        bsrmImg2,
        // "portfolio-projects.png",
      ],
      bulletPoints: [
        "OVC",
        "Customer Testimonials",
        "Photo Shoot",
        "Video Shoot",
        "Brochure",
      ],
    },
    {
      id: 3,
      title: "NL Hurricanes",
      paragraph:
        "A blogging platform where users can write, edit, and publish articles with markdown support.",
      images: [hc1, hc2, hc3],
      bulletPoints: ["Markdown editor", "SEO-friendly URLs", "Admin dashboard"],
    },
    {
      id: 4,
      title: "Connecting Coast to Coast",
      paragraph:
        "A productivity app for managing daily tasks, deadlines, and priorities.",
      images: ["tasks-home.png", "tasks-list.png", "tasks-detail.png"],
      bulletPoints: [
        "Drag-and-drop tasks",
        "Reminders and notifications",
        "Dark mode support",
      ],
    },
    {
      id: 5,
      title: "PHP Float Glass",
      paragraph:
        "Bangladesh’s first float glass manufacturer offering clear and tinted architectural glass. A pioneer in eco-friendly glass production, catering to diverse construction needs.",
      images: ["weather-home.png", "weather-details.png", "weather-week.png"],
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
      images: [
        "fitness-home.png",
        "fitness-activity.png",
        "fitness-progress.png",
        "fitness-meals.png",
      ],
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
      images: ["recipe-home.png", "recipe-search.png", "recipe-detail.png"],
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
      images: ["travel-home.png", "travel-entry.png", "travel-gallery.png"],
      bulletPoints: ["Photo uploads", "Interactive maps", "Offline support"],
    },
    {
      id: 9,
      title: "Confidence Cement",
      paragraph:
        "A leading cement manufacturer in Bangladesh known for quality and innovation. Pioneered private sector cement production, contributing to national infrastructure.",
      images: [
        "music-home.png",
        "music-player.png",
        "music-playlist.png",
        "music-album.png",
      ],
      bulletPoints: ["Marketing Strategies", "Social Media Content"],
    },
    {
      id: 10,
      title: "Total Tools",
      paragraph: "A real-time chat app with group messaging and media sharing.",
      images: ["chat-home.png", "chat-room.png", "chat-media.png"],
      bulletPoints: [
        "WebSocket real-time updates",
        "Group chats",
        "File and image sharing",
      ],
    },
  ];

  return (
    // <div className="">
    //   <div className="space-y-36 text-gray-700 max-w-7xl mx-auto">
    //     {worksContent.map((work, index) => (
    //       <div
    //         key={work.id}
    //         className={`flex flex-col md:flex-row items-center justify-between mx-4 gap-8 ${
    //           index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
    //         }`}
    //       >
    //         {/* Content Section */}
    //         <div className="md:w-7/12 space-y-5 p-10 rounded-2xl bg-white/30 backdrop-blur-2xl">
    //           <h2 className="text-5xl font-black">{work.title}</h2>
    //           <p className="text-xl font-medium">{work.paragraph}</p>
    //           <ul className="list-disc list-inside space-y-1 text-lg font-medium">
    //             {work.bulletPoints.map((point, i) => (
    //               <li key={i}>{point}</li>
    //             ))}
    //           </ul>
    //           <div className="lg:mt-10 lg:w-1/2 lg:mx-0 w-5/6 mx-auto">
    //             <NavLink to={"/aboutUs"}>
    //               <h3 className="lg:text-lg font-bold bg-white text-[#F40026] px-10 py-4 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#F40026] hover:backdrop-blur-md border-2 border-[#F40026] hover:text-white transition-all duration-700 hover-container gap-2">
    //                 Explore More{" "}
    //                 <GoArrowUpRight className="text-3xl font-bold hover-arrow" />
    //               </h3>
    //             </NavLink>
    //           </div>
    //         </div>

    //         {/* Image Slider Section */}
    //         <div className="md:w-5/12">
    //           <WorkContentSlider work={work} key={work.id}></WorkContentSlider>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="">
      <div className="xl:space-y-36 space-y-14 text-gray-700 max-w-7xl mx-auto">
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
              <div className="lg:mt-10 xl:w-1/2 lg:mx-0 lg:w-4/6 mx-auto">
                <NavLink to={"/aboutUs"}>
                  <h3 className="lg:text-lg font-bold bg-white text-[#F40026] px-10 xl:py-4 py-3 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#F40026] hover:backdrop-blur-md border-2 border-[#F40026] hover:text-white transition-all duration-700 hover-container gap-2">
                    Explore More{" "}
                    <GoArrowUpRight className="text-3xl font-bold hover-arrow" />
                  </h3>
                </NavLink>
              </div>
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
