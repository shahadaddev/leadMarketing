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

import clientOne from "../../../assets/clients/clientOne.png";
import clientTwo from "../../../assets/clients/clientTwo.png";
import clientThree from "../../../assets/clients/clientOne.png";
import { NavLink } from "react-router";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RxGlobe } from "react-icons/rx";
import React, { useState, useEffect } from "react";

const ClientSlider = () => {
  const client = [
    {
      id: 1,
      img: clientOne,
      title: "Imtiaj Jeha",
      Designation: "Founder & Marketing Consultant",
    },
    {
      id: 2,
      img: clientTwo,
      title: "Fatema Fahima",
      Designation: "Co-founder & The Creative geek",
    },
    {
      id: 3,
      img: clientThree,
      title: "Darren Martin",
      Designation: "The Mentor",
    },
    {
      id: 4,
      img: clientOne,
      title: "Rayyan Karim",
      Designation: "Asst. Art Director",
    },
    {
      id: 5,
      img: clientTwo,
      title: "Ashraf Mamun",
      Designation: "Senior Copywriter",
    },
    {
      id: 6,
      img: clientThree,
      title: "Istiak Sakib",
      Designation: "Senior Visualizer",
    },
    {
      id: 7,
      img: clientTwo,
      title: "Sanila Shawlin",
      Designation: "Portfolio Manager",
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

              {/* Overlay */}
              <div
                className={`
          absolute inset-0 rounded-lg bg-gradient-to-t from-black/90 via-black/10 to-white/10
          transition-all duration-300
          ${
            isMobile
              ? showOverlay
                ? "opacity-100"
                : "opacity-0"
              : "opacity-0 group-hover:opacity-100"
          }
        `}
              ></div>

              {/* Social icons */}
              <div
                className={`
          absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center w-full
          transition-all duration-300
          ${
            isMobile
              ? showOverlay
                ? "opacity-100"
                : "opacity-0"
              : "opacity-0 group-hover:opacity-100"
          }
        `}
              >
                <div className="flex justify-center gap-4">
                  <NavLink
                    to={"https://www.facebook.com/connectingcoasttocoast"}
                  >
                    <FaFacebook className="text-white/80 text-3xl font-bold" />
                  </NavLink>
                  <NavLink
                    to={
                      "https://www.linkedin.com/company/connectingcoasttocoast/"
                    }
                  >
                    <FaLinkedin className="text-white/80 text-3xl font-bold" />
                  </NavLink>
                  <NavLink to={"https://www.connectingcoasttocoast.ca/"}>
                    <RxGlobe className="text-white/80 text-3xl font-bold" />
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSlider;
