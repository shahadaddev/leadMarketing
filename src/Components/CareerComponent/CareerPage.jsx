import Navbar from "../SharedComponents/Navbar/Navbar";
import teamImg from "../../assets/images/Joinourteam.webp";
import Team from "../TeamComponents/Team/Team";

const CareerPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto lg:pt-24 lg:mt-8">
        <div className="bg-gray-100 lg:p-10 px-5 py-8 rounded-3xl flex lg:flex-row flex-col justify-center items-center space-y-8 lg:space-y-0 mx-5">
          <div className="lg:space-y-4 lg:w-7/12">
            <h2 className="xl:text-[80px] lg:text-7xl text-4xl font-black uppercase xl:leading-17 lg:leading-14 leading-7 text-gray-700">
              Join <br /> Our <br />{" "}
              <span className="text-[#F40026]">Team</span>
            </h2>
            <p className="lg:w-4/5 lg:text-lg font-medium pt-5">
              We’re not hiring for any specific positions at the moment, but
              we’re always on the lookout for creative minds. If you’re a
              digital marketing enthusiast with a knack for innovative
              strategies and clever hacks, feel free to send your resume to
              hello.leadmarketing@gmail.com. We’d love to hear from you!
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
