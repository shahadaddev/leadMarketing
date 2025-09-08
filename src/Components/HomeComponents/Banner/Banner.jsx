import BannerButton from "./BannerButton/BannerButton";
import BannerContent from "./BannerContent/BannerContent";
import BannerTitle from "./BannerTitle/BannerTitle";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto xl:my-16 lg:my-14 py-10 text-gray-700">
      <BannerTitle></BannerTitle>
      <BannerContent></BannerContent>
      {/* <BannerButton></BannerButton> */}
    </div>
  );
};

export default Banner;
