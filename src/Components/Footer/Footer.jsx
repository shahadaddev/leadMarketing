import FooterContent from "./FooterContent/FooterContent";
import FooterNavigation from "./FooterNavigation/FooterNavigation";
import FooterRights from "./FooterRights/FooterRights";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="">
        <FooterContent></FooterContent>
        <hr className="my-4 text-gray-400" />
        <FooterNavigation></FooterNavigation>
        <hr className="my-4 text-gray-400" />
        <FooterRights></FooterRights>
      </div>
    </div>
  );
};

export default Footer;
