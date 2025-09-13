import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import memberOne from "../../../../assets/team/teamMemberOne.jpg";
import memberTwo from "../../../../assets/team/teamMemberTwo.jpg";
import memberThree from "../../../../assets/team/teamMemberThree.jpg";
import memberFour from "../../../../assets/team/teamMemberFour.jpg";
import memberFive from "../../../../assets/team/teamMemberFive.jpg";
import memberSix from "../../../../assets/team/teamMemberSix.jpg";
import memberSeven from "../../../../assets/team/teamMemberSeven.jpg";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const TeamSlide = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teamSlider = [
    {
      id: 1,
      img: memberThree,
      title: "Imtiaj Jehad",
      Designation: "Founder & Marketing Consultant",
      details: `Imtiaj Jehad is the visionary mind behind Lead Bangladesh Ltd. and the founder of Lead Marketing Inc., where he leads global operations with purpose and passion. With over 10 years of hands-on experience in advertising, digital marketing, creativity, and technology, he has built a reputation for turning ideas into results and challenges into opportunities.
      \n\n
      Imtiaj works closely with brands across a wide range of industries including IT, FMCG, food and beverage, real estate, healthcare, tourism, and e-commerce. He crafts strategies that are insight driven and impact focused. His deep understanding of data, consumer behavior, and market dynamics enables him to guide clients toward smarter decisions and stronger return on investment.
      \n\n
      Since 2014, Imtiaj has supported over 400 businesses worldwide not just as a service provider but as a creative partner and problem solver. Known for his energy, curiosity, and ability to connect the dots, he continues to lead with heart, innovation, and a clear vision for the future of marketing.`,
    },
    {
      id: 2,
      img: memberTwo,
      title: "Fatema Fahima",
      Designation: "Co-founder & The Creative geek",
      details: `Fatema Yeasmin Chowdhury is the Co-founder and The creative Geek at Lead Marketing Inc. and the Director of Communications at Lead Bangladesh Ltd. blends creativity with cutting-edge technology. Armed with an MSc in Computer Science from the Memorial University of Newfoundland, Fatema is a creative geek and a visionary who excels in data-driven planning, digital marketing, and communication strategies. With a rich tapestry of experience spanning six years, she held the esteemed role of Creative Head at a leading marketing agency in her home country. Upon coming to Canada to pursue her MSc, she brought her unique blend of skills to work with prestigious social enterprises like Newbornlander, Home Again Furniture Bank, and non-profit organisations like Women in Resource Development Corporation. \n\n
      In her realm, every pixel is carefully curated to weave a narrative of seamless creativity, where technology and ideation dance in perfect harmony to bring results.`,
    },
    {
      id: 3,
      img: memberFive,
      title: "Darren Martin",
      Designation: "The Mentor",
      details: `Darren, a seasoned financial services professional, brings nearly four decades of industry experience, spanning roles in Retail, Small Business, Internal Audit, Commercial, and International Banking. Excelling at Scotiabank, he managed Eastern Canada's largest Retail and Small Business branch. His leadership extends to boardrooms, including a significant tenure with the St. John's International Airport Authority.
      \n\n
      Currently, as the Business Development Support Services Officer at the Association for New Canadians, Darren passionately mentors newcomers, fostering entrepreneurship. His commitment to community service is evident through roles with Big Brothers Big Sisters, Canadian Cancer Society, and the Cerebral Palsy Association. Darren's outstanding volunteerism has garnered numerous awards, including the Canadian Cancer Society's Impact Award and Scotiabank's Canadian Community Leadership award.
`,
    },
    {
      id: 4,
      img: memberFour,
      title: "Rayyan Karim",
      Designation: "Asst. Art Director",
      details: `Mohammed Rayyan Karim is an Assistant Art Director at Lead Marketing Inc. He brings over five years of experience in the digital world, combining expertise in creative direction, design, and technology to deliver fresh ideas that help brands stand out and connect with their audiences. Rayyan has a natural ability to lead and motivate creative teams, ensuring every project looks great and meets client goals. \n\n Throughout his career, Rayyan has shown a strong passion for understanding the latest digital trends and using that knowledge to create meaningful and engaging content. He believes that good design extends beyond visuals to tell a story and build meaningful connections. Focusing on collaboration and innovation, Rayyan continues to push creative boundaries while delivering work that truly makes an impact.
`,
    },
    {
      id: 5,
      img: memberSix,
      title: "Ashraf Mamun",
      Designation: "Senior Copywriter",
      details: `Ashraf Mamun is a Senior Copywriter at Lead Marketing Inc., bringing over three and a half years of experience crafting engaging and impactful digital content. He specializes in transforming ideas into compelling narratives that deeply connect brands with their audiences, inspiring meaningful action. His expertise combines creativity and strategic thinking to develop content that not only captures attention but also drives measurable results while preserving a consistent and authentic brand voice. \n\n
      Renowned for his meticulous attention to detail and adaptability across diverse industries, Ashraf consistently delivers exceptional work that aligns with business objectives and elevates audience engagement. He views copywriting as an art of storytelling that builds trust, ignites interest, and propels growth. His dedication to creating meaningful communication makes him an invaluable contributor to any team striving to leave a powerful mark in the digital landscape.`,
    },
    {
      id: 6,
      img: memberOne,
      title: "Istiak Sakib",
      Designation: "Senior Visualizer",
      details: `Istiak Sakib, a Senior Visualizer with over four years of experience, specializes in transforming ideas into impactful visual narratives that elevate brand communication. His work reflects a balance of creativity, strategy, and attention to detail, allowing him to craft designs that are not only visually appealing but also aligned with business objectives. \n\n Working as a core member of the creative team at Lead Bangladesh Ltd., Sakib contributes significantly to the development of brand campaigns, digital content, and cross-platform visual assets. His strong understanding of market trends, audience behavior, and visual storytelling helps ensure each project resonates with its intended audience. Whether developing fresh concepts or refining brand visuals, Sakib approaches each task with a collaborative mindset and a strong sense of purpose. His ability to blend aesthetic sense with strategic thinking continues to add value across a wide range of creative initiatives.
`,
    },
    {
      id: 7,
      img: memberSeven,
      title: "Sanila Shawlin",
      Designation: "Portfolio Manager",
      details: `Sanila Shawlin Chowdhury is the Portfolio Manager at Lead Bangladesh Ltd., where she leads the creative team with passion and expertise. Over seven years of experience across industries including FMCG, food and beverage, healthcare, education, construction, and retail have helped her develop a deep understanding of what makes brands truly connect with people. She combines creativity with sharp analytical thinking to craft thoughtful marketing strategies that span traditional advertising, on-ground activations, and digital transformation efforts. \n\n Known for her ability to blend consumer insights with data, Sanila develops cohesive and impactful campaigns that tell a brand’s story while driving real growth and meaningful engagement. Her work has played a key role in shaping some of the country’s most trusted brands, always keeping the consumer at the center of every decision.
`,
    },
  ];

  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        loop={true}
        autoplay={{ delay: 800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        speed={2000}
        style={{
          borderRadius: "12px",
        }}
        breakpoints={{
          // when window width is >= 320px (phones)
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 640px (small tablets)
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // extra large screens
          1280: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {/* {teamSlider.map((team, index) => (
          <SwiperSlide key={team.id} virtualIndex={index}>
            <div className="lg:block flex justify-center">
              <div className="cursor-pointer relative xl:h-80 lg:w-[280px] w-fit">
                <img className="rounded-xl" src={team.img} alt="" />
                <div
                  className="absolute inset-0 rounded-lg
              bg-gradient-to-t from-black/90
              via-black/20 to-white/10"
                ></div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center w-full">
                  <h5 className="text-white/80 text-lg font-bold flex justify-center">
                    {team.title}
                  </h5>
                  <p className="text-white/65 font-medium flex justify-center">
                    {team.Designation}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))} */}

        <div className="relative">
          {/* Swiper Slides */}
          {teamSlider.map((team, index) => (
            <SwiperSlide key={team.id} virtualIndex={index}>
              <div className="lg:block flex justify-center">
                <div
                  className="cursor-pointer relative xl:h-80 lg:w-[280px] w-fit"
                  onClick={() => setSelectedTeam(team)}
                >
                  <img className="rounded-xl" src={team.img} alt="" />
                  <div
                    className="absolute inset-0 rounded-lg
                bg-gradient-to-t from-black/90
                via-black/20 to-white/10"
                  ></div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center w-full">
                    <h5 className="text-white/80 text-lg font-bold flex justify-center">
                      {team.title}
                    </h5>
                    <p className="text-white/65 font-medium flex justify-center">
                      {team.Designation}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      {/* Popup Modal (outside Swiper so it won’t be clipped) */}
      {selectedTeam && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[9999] w-full">
          <div className="flex justify-center items-center gap-8 bg-white p-6 rounded-3xl shadow-lg max-w-7xl w-full relative">
            <div className="w-3/12">
              <img
                src={selectedTeam.img}
                alt={selectedTeam.title}
                className="w-full rounded-2xl"
              />
            </div>
            <div className="w-10/12 bg-blue-100 text-gray-700 p-4 rounded-2xl">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-extrabold">
                    {selectedTeam.title}
                  </h3>
                  <h5 className="text-lg font-medium">
                    {selectedTeam.Designation}
                  </h5>
                </div>
                <div>
                  <button
                    onClick={() => setSelectedTeam(null)}
                    className="text-[#F40026] hover:scale-125 transition-all duration-300 cursor-pointer "
                  >
                    <IoClose className="text-4xl" />
                  </button>
                </div>
              </div>
              <div className="pt-2">
                {selectedTeam.details.split("\n\n").map((para, idx) => (
                  <p key={idx} className="space-y-2 mb-2">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSlide;
