import { Outlet } from "react-router";
import Navbar from "../Components/SharedComponents/Navbar/Navbar";
import bannerImage from "../assets/banner/bannerImg.jpeg";
import "./Root.css";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div
      className="font-content "
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(100,100,200,0.6)), url("${bannerImage}")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="bg-gray-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
