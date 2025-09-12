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

import worksOne from "../../../assets/images/worksOne.jpg";
import worksTwo from "../../../assets/images/worksTwo.jpg";
import worksThree from "../../../assets/images/worksThree.jpg";

const WorksSlider = () => {
  const works = [
    {
      id: 1,
      img: worksOne,
      title: "Imtiaj Jeha",
      Designation: "Founder & Marketing Consultant",
    },
    {
      id: 2,
      img: worksTwo,
      title: "Fatema Fahima",
      Designation: "Co-founder & The Creative geek",
    },
    {
      id: 3,
      img: worksThree,
      title: "Darren Martin",
      Designation: "The Mentor",
    },
    {
      id: 4,
      img: worksOne,
      title: "Rayyan Karim",
      Designation: "Asst. Art Director",
    },
    {
      id: 5,
      img: worksTwo,
      title: "Ashraf Mamun",
      Designation: "Senior Copywriter",
    },
    {
      id: 6,
      img: worksThree,
      title: "Istiak Sakib",
      Designation: "Senior Visualizer",
    },
    {
      id: 7,
      img: worksTwo,
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
        autoplay={{ delay: 1, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        speed={1700}
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
        {works.map((team, index) => (
          <SwiperSlide key={team.id} virtualIndex={index}>
            <div className="lg:block flex justify-center">
              <div className="cursor-pointer relative">
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
      </Swiper>
    </div>
  );
};

export default WorksSlider;
