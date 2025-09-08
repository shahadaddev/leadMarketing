import React from "react";
import AboutHomeContent from "./AboutContent/AboutHomeContent";
import AboutHomeTitle from "./AboutTitle/AboutHomeTitle";

const AboutUs = () => {
  return (
    <div className="max-w-7xl lg:mx-auto text-gray-700 h-fit lg:py-24 py-14 mx-4">
      <AboutHomeTitle></AboutHomeTitle>
      <AboutHomeContent></AboutHomeContent>
    </div>
  );
};

export default AboutUs;
