import FooterContent from "./FooterContent/FooterContent";
import FooterNavigation from "./FooterNavigation/FooterNavigation";
import FooterRights from "./FooterRights/FooterRights";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="">
        <FooterContent></FooterContent>
        <hr className="my-4 text-gray-400 lg:w-2/3 w-4/5 mx-auto" />
        <FooterNavigation></FooterNavigation>
        <hr className="my-4 text-gray-400 lg:w-2/3 w-4/5 mx-auto" />
        <FooterRights></FooterRights>
      </div>
    </div>
  );
};

export default Footer;
