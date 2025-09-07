import { Outlet } from "react-router";
import Navbar from "../Components/SharedComponents/Navbar/Navbar";
import bannerImage from "../assets/banner/bannerImg.jpeg";
import "./Root.css";

const Root = () => {
  return (
    <div
      className="font-content h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(200,200,255,0.6)), url("${bannerImage}")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
