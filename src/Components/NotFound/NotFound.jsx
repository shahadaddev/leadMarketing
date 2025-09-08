import Navbar from "../SharedComponents/Navbar/Navbar";
import buildingWeb from "../../assets/images/buildingWeb.jpg";

const NotFound = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center">
        <img className="" src={buildingWeb} alt="" />
      </div>
      <h2 className="text-gray-700 text-7xl font-bold text-center py-4">
        Coming soon .......
      </h2>
    </div>
  );
};

export default NotFound;
