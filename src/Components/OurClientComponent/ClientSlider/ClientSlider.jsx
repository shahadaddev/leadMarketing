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

import clientOne from "../../../assets/clients/clientOne.jpg";
import clientTwo from "../../../assets/clients/clientTwo.jpg";
import clientThree from "../../../assets/clients/10.webp";
import clientFour from "../../../assets/clients/12.webp";
import clientFive from "../../../assets/clients/7.webp";
import clientSix from "../../../assets/clients/9.webp";
import clientSeven from "../../../assets/clients/14.webp";
import clientEight from "../../../assets/clients/15.webp";
import clientNine from "../../../assets/clients/17.webp";
import clientTen from "../../../assets/clients/22.webp";
import clientEleven from "../../../assets/clients/24.webp";
import clientTwelve from "../../../assets/clients/3.webp";
import clientThirteen from "../../../assets/clients/6.webp";
import { useState, useEffect } from "react";

const ClientSlider = () => {
  const client = [
    {
      id: 1,
      img: clientOne,
    },
    {
      id: 2,
      img: clientTwo,
    },
    {
      id: 3,
      img: clientThree,
    },
    {
      id: 4,
      img: clientFour,
    },
    {
      id: 5,
      img: clientFive,
    },
    {
      id: 6,
      img: clientSix,
    },
    {
      id: 7,
      img: clientSeven,
    },
    {
      id: 8,
      img: clientEight,
    },
    {
      id: 9,
      img: clientNine,
    },
    {
      id: 10,
      img: clientTen,
    },
    {
      id: 11,
      img: clientEleven,
    },
    {
      id: 12,
      img: clientTwelve,
    },
    {
      id: 13,
      img: clientThirteen,
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleOverlay = () => {
    if (isMobile) setShowOverlay(!showOverlay);
  };

  return (
    <div className="mb-18">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        loop={true}
        autoplay={{ delay: 800, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        speed={2000}
        style={{
          borderRadius: "12px",
          width: "100%",
        }}
        breakpoints={{
          // when window width is >= 320px (phones)
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 640px (small tablets)
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // extra large screens
          1280: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
      >
        {client.map((team, index) => (
          <SwiperSlide key={team.id} virtualIndex={index}>
            <div
              className={`relative cursor-pointer group`}
              onClick={toggleOverlay}
            >
              <img className="rounded-xl xl:w-full" src={team.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSlider;
