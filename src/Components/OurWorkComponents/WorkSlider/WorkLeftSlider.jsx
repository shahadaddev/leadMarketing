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

import workOne from "../../../assets/works/workSlideOne.jpg";
import workTwo from "../../../assets/works/workSlideTwo.jpg";
import workThree from "../../../assets/works/workSlideThree.jpg";
import workFour from "../../../assets/works/workSlideFour.jpg";
import workFive from "../../../assets/works/worksSlideFive.jpg";
import workSix from "../../../assets/works/worksSlideSix.jpg";
import workSeven from "../../../assets/works/worksSlideSeven.jpg";

import { NavLink } from "react-router";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RxGlobe } from "react-icons/rx";
import React, { useState, useEffect } from "react";

const WorkLeftSlider = () => {
  const works = [
    {
      id: 1,
      img: workOne,
      title: "Imtiaj Jeha",
      Designation: "Founder & Marketing Consultant",
    },
    {
      id: 2,
      img: workTwo,
      title: "Fatema Fahima",
      Designation: "Co-founder & The Creative geek",
    },
    {
      id: 3,
      img: workThree,
      title: "Darren Martin",
      Designation: "The Mentor",
    },
    {
      id: 4,
      img: workFour,
      title: "Rayyan Karim",
      Designation: "Asst. Art Director",
    },
    {
      id: 5,
      img: workFive,
      title: "Ashraf Mamun",
      Designation: "Senior Copywriter",
    },
    {
      id: 6,
      img: workSix,
      title: "Istiak Sakib",
      Designation: "Senior Visualizer",
    },
    {
      id: 7,
      img: workSeven,
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
    <div className="">
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {works.map((team, index) => (
          <SwiperSlide key={team.id} virtualIndex={index}>
            {/* <div className="lg:block flex justify-center">
              <div className="cursor-pointer relative">
                <img className="rounded-xl w-full" src={team.img} alt="" />

                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/90 via-black/10 to-white/10"></div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center w-full">
                  <div className="flex justify-center gap-4">
                    <NavLink>
                      <FaFacebook className="text-white/80 text-3xl font-bold flex justify-center"></FaFacebook>
                    </NavLink>
                    <NavLink>
                      <FaLinkedin className="text-white/80 text-3xl font-bold flex justify-center"></FaLinkedin>
                    </NavLink>
                    <NavLink>
                      <RxGlobe className="text-white/80 text-3xl font-bold flex justify-center"></RxGlobe>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div> */}

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

export default WorkLeftSlider;
