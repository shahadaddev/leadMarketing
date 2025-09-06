import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 text-gray-700">
      <div>
        <h1 className="text-6xl font-black text-center text-gray-700">
          Creative <i className="text-[#F40026]">Marketing</i> Solutions For{" "}
          <br /> Lasting Brand <i className="text-[#F40026]">Growth</i>
        </h1>
      </div>
      <section className="flex justify-between gap-16 mt-16">
        <div className="space-y-6">
          <h5 className="flex items-center gap-1 bg-emerald-100 w-4/12 px-5 py-2 rounded-xl text-emerald-600 border-1 border-emerald-600 font-bold">
            {" "}
            <HiBadgeCheck className="text-2xl" />
            Trusted Worldwide
          </h5>
          <p className="text-2xl font-medium  leading-7 text-justify">
            Lead Marketing Inc. is a full-service marketing and communications
            agency serving worldwide from Canada. This is the global venture of
            Lead Bangladesh Ltd, a full-service marketing agency with{" "}
            <span className="font-bold">10 years </span>
            of experience.
          </p>
        </div>
        <div className="">
          <iframe
            className="rounded-xl"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-Ru_Zij9cRw?si=7sGFH1ZHRa2BoXrJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Banner;
