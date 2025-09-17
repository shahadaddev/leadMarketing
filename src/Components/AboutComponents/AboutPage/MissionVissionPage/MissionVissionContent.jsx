import teamMeeting from "../../../../assets/images/Joinourteam.webp";

const MissionVisionContent = () => {
  return (
    <div className="max-w-7xl mx-auto w-full pt-20">
      <div className="flex gap-5">
        <div className="relative xl:w-6/12">
          <img src={teamMeeting} className="rounded-2xl" alt="" />
          <div className="absolute inset-0 bg-white/30 rounded-2xl"></div>
        </div>
        <div className="w-6/12 flex flex-col justify-center gap-5">
          <div className="w-full bg-[#F40026] text-white/90 px-8 py-14 rounded-2xl space-y-5">
            <h3 className="text-2xl font-extrabold">Our Mission</h3>
            <p className="text-xl">
              Our mission is to lead the charge with innovative strategies,
              transforming client visions into success stories through our
              innovative products and services.
            </p>
          </div>
          <div className="w-full bg-[#18105E] text-white/90 px-8 py-14 rounded-2xl space-y-5">
            <h3 className="text-2xl font-extrabold">Our Vision</h3>
            <p className="text-xl">
              Our vision is to be recognized as the premier destination for
              groundbreaking and creatively exceptional solutions, setting the
              standard for cutting-edge strategies and unparalleled results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionContent;
