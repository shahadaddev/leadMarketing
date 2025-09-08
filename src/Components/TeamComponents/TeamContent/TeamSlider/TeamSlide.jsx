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

const TeamSlide = () => {
  const teamSlider = [
    {
      id: 1,
      img: memberThree,
      title: "Imtiaj Jehad",
      Designation: "Founder & Marketing Consultant",
    },
    {
      id: 2,
      img: memberTwo,
      title: "Fatema Fahima",
      Designation: "Co-founder & The Creative geek",
    },
    {
      id: 3,
      img: memberFive,
      title: "Darren Martin",
      Designation: "The Mentor",
    },
    {
      id: 4,
      img: memberFour,
      title: "Rayyan Karim",
      Designation: "Asst. Art Director",
    },
    {
      id: 5,
      img: memberSix,
      title: "Ashraf Mamun",
      Designation: "Senior Copywriter",
    },
    {
      id: 6,
      img: memberOne,
      title: "Istiak Sakib",
      Designation: "Senior Visualizer",
    },
    {
      id: 7,
      img: memberSeven,
      title: "Sanila Shawlin",
      Designation: "Portfolio Manager",
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
      >
        {teamSlider.map((team, index) => (
          <SwiperSlide key={team.id} virtualIndex={index}>
            <div className="cursor-pointer relative h-80 w-[280px]">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlide;
