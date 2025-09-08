import { Outlet } from "react-router";
import "./Root.css";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="font-content">
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      <div className="bg-gray-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
