import React from "react";
import AboutHomeContent from "./AboutContent/AboutHomeContent";
import AboutHomeTitle from "./AboutTitle/AboutHomeTitle";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto text-gray-700 h-screen my-28">
      <AboutHomeTitle></AboutHomeTitle>
      <AboutHomeContent></AboutHomeContent>
    </div>
  );
};

export default AboutUs;
