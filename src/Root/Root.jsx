import { Outlet } from "react-router";
import Navbar from "../Components/SharedComponents/Navbar/Navbar";
import "./Root.css";

const Root = () => {
  return (
    <div className="font-content">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
