import memberOne from "../../../assets/team/teamMemberOne.jpg";
import memberTwo from "../../../assets/team/teamMemberTwo.jpg";
import memberThree from "../../../assets/team/teamMemberThree.jpg";
import memberFour from "../../../assets/team/teamMemberFour.jpg";
import memberFive from "../../../assets/team/teamMemberFive.jpg";
import memberSix from "../../../assets/team/teamMemberSix.jpg";
import memberSeven from "../../../assets/team/teamMemberSeven.jpg";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import TeamPageTitle from "./TeamPageTitle";

const TeamPage = () => {
  const teamSlider = [
    {
      id: 1,
      img: memberThree,
      title: "Imtiaj Jehad",
      Designation: "Founder & Marketing Consultant",
      details: `Imtiaj Jehad is the visionary mind behind Lead Marketing Ltd. and the founder of Lead Marketing Inc., where he leads global operations with purpose and passion. With over 10 years of hands-on experience in advertising, digital marketing, creativity, and technology, he has built a reputation for turning ideas into results and challenges into opportunities.
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
      details: `Fatema Yeasmin Chowdhury is the Co-founder and The creative Geek at Lead Marketing Inc. and the Director of Communications at Lead Marketing Ltd. blends creativity with cutting-edge technology. Armed with an MSc in Computer Science from the Memorial University of Newfoundland, Fatema is a creative geek and a visionary who excels in data-driven planning, digital marketing, and communication strategies. With a rich tapestry of experience spanning six years, she held the esteemed role of Creative Head at a leading marketing agency in her home country. Upon coming to Canada to pursue her MSc, she brought her unique blend of skills to work with prestigious social enterprises like Newbornlander, Home Again Furniture Bank, and non-profit organisations like Women in Resource Development Corporation. \n\n
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
      details: `Istiak Sakib, a Senior Visualizer with over four years of experience, specializes in transforming ideas into impactful visual narratives that elevate brand communication. His work reflects a balance of creativity, strategy, and attention to detail, allowing him to craft designs that are not only visually appealing but also aligned with business objectives. \n\n Working as a core member of the creative team at Lead Marketing Ltd., Sakib contributes significantly to the development of brand campaigns, digital content, and cross-platform visual assets. His strong understanding of market trends, audience behavior, and visual storytelling helps ensure each project resonates with its intended audience. Whether developing fresh concepts or refining brand visuals, Sakib approaches each task with a collaborative mindset and a strong sense of purpose. His ability to blend aesthetic sense with strategic thinking continues to add value across a wide range of creative initiatives.
`,
    },
    {
      id: 7,
      img: memberSeven,
      title: "Sanila Shawlin",
      Designation: "Portfolio Manager",
      details: `Sanila Shawlin Chowdhury is the Portfolio Manager at Lead Marketing Ltd., where she leads the creative team with passion and expertise. Over seven years of experience across industries including FMCG, food and beverage, healthcare, education, construction, and retail have helped her develop a deep understanding of what makes brands truly connect with people. She combines creativity with sharp analytical thinking to craft thoughtful marketing strategies that span traditional advertising, on-ground activations, and digital transformation efforts. \n\n Known for her ability to blend consumer insights with data, Sanila develops cohesive and impactful campaigns that tell a brand’s story while driving real growth and meaningful engagement. Her work has played a key role in shaping some of the country’s most trusted brands, always keeping the consumer at the center of every decision.
`,
    },
  ];
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <section className="service-banner lg:mt-12">
        <div className="max-w-7xl mx-auto py-16 space-y-12">
          <div>
            <TeamPageTitle></TeamPageTitle>
          </div>
          {teamSlider.map((team, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-full lg:px-10 px-5"
            >
              <div
                className={`p-4 lg:p-6 rounded-3xl w-full relative 
            flex flex-col items-center gap-8 
            bg-white/30 backdrop-blur-xl 
            lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } 
            lg:h-auto h-auto lg:overflow-y-auto`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-3/12 flex-shrink-0 lg:pt-0">
                  <img
                    src={team.img}
                    alt={team.title}
                    className="w-full object-cover rounded-xl"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-9/12 bg-white/50 text-gray-700 p-4 rounded-xl">
                  <h3 className="text-xl font-extrabold">{team.title}</h3>
                  <h5 className="text-lg font-medium">{team.Designation}</h5>

                  <div className="pt-2">
                    {team.details.split("\n\n").map((para, idx) => (
                      <p key={idx} className="space-y-2 mb-2">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
