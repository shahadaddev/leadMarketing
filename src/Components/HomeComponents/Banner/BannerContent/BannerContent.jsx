import { HiBadgeCheck } from "react-icons/hi";
import BannerIcons from "../BannerIcons/BannerIcons";
import "../Banner.css";

const BannerContent = () => {
  return (
    <div>
      <section className="xl:flex xl:justify-between xl:gap-20 xl:mt-16 lg:mt-14 mt-8 space-y-12">
        <div className="space-y-4 lg:w-2/3 lg:mx-auto mx-4">
          {/* Highlight
          section */}

          <h5 className="md:flex items-center gap-1 bg-emerald-100 xl:w-4/12 lg:w-[200px] text-sm px-5 py-2 rounded-full text-emerald-600 border-1 border-emerald-600 font-bold hidden">
            {" "}
            <HiBadgeCheck className="xl:text-2xl lg:text-xl" />
            Trusted Worldwide
          </h5>

          {/* Sub-Text */}
          <p className="xl:text-2xl lg:text-xl font-medium xl:leading-7 leading-[26px] lg:text-justify text-center text-white/80">
            Lead Marketing Inc. is a full-service marketing and communications
            agency serving worldwide from Canada. This is the global venture of
            Lead Bangladesh Ltd., a full-service marketing agency with
            <span className="font-bold">10 years </span>
            of experience.
          </p>

          {/* Icons */}
          <BannerIcons></BannerIcons>
        </div>

        {/* Youtube Video */}
        <div className="flex justify-center">
          <div className="">
            <iframe
              className="rounded-xl banner-video"
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/-Ru_Zij9cRw?si=7sGFH1ZHRa2BoXrJ&autoplay=1&mute=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerContent;
