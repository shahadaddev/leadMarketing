import BannerButton from "./BannerButton/BannerButton";
import BannerContent from "./BannerContent/BannerContent";
import BannerTitle from "./BannerTitle/BannerTitle";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto xl:py-16 lg:py-14 pb-10 pt-5">
      <BannerTitle></BannerTitle>
      <BannerContent></BannerContent>
      <BannerButton></BannerButton>
    </div>
  );
};

export default Banner;
