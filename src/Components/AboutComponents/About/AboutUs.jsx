import React from "react";
import AboutHomeContent from "./AboutContent/AboutHomeContent";
import AboutHomeTitle from "./AboutTitle/AboutHomeTitle";

const AboutUs = () => {
  return (
    <div className="max-w-7xl xl:mx-auto text-gray-700 h-fit xl:py-24 py-14 lg:mx-8 mx-4">
      <AboutHomeTitle></AboutHomeTitle>
      <AboutHomeContent></AboutHomeContent>
    </div>
  );
};

export default AboutUs;
