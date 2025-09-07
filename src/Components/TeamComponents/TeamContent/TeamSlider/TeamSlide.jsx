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
    { id: 1, img: memberOne },
    { id: 2, img: memberTwo },
    { id: 3, img: memberThree },
    { id: 4, img: memberFour },
    { id: 5, img: memberFive },
    { id: 6, img: memberSix },
    { id: 7, img: memberSeven },
  ];

  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        loop={true}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        speed={2000}
      >
        {teamSlider.map((team, index) => (
          <SwiperSlide key={team.id} virtualIndex={index}>
            <img className="h-80" src={team.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlide;
