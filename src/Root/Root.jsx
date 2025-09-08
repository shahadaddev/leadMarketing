import { Outlet } from "react-router";
import "./Root.css";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
      <div className="bg-[#F5F5F5]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
