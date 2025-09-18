import Navbar from "../SharedComponents/Navbar/Navbar";
import teamImg from "../../assets/images/Joinourteam.webp";
import Team from "../TeamComponents/Team/Team";

const CareerPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-24 mt-8">
        <div className="bg-gray-100 p-10 rounded-3xl flex justify-center items-center">
          <div className="space-y-4 lg:w-7/12">
            <h2 className="xl:text-[80px] lg:text-7xl text-5xl font-black uppercase xl:leading-17 lg:leading-14 leading-9 text-gray-700">
              Join <br /> Our <br />{" "}
              <span className="text-[#F40026]">Team</span>
            </h2>
            <p className="w-3/4 text-lg font-medium pt-5">
              Grow, innovate, and make an impact with us — discover
              opportunities where your skills and passion drive real success.
            </p>
          </div>
          <div className="relative">
            <img className="rounded-2xl" src={teamImg} alt="" />
            <div className="absolute inset-0 bg-white/30"></div>
          </div>
        </div>
        <div className="pt-8">
          <Team></Team>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
