import React from "react";
import PartnerCompanyTitle from "./PartnerCompanyTitle";
import PartnerCompanyContent from "./PartnerCompanyContent";

const PartnerCompany = () => {
  return (
    <div className="text-gray-700 lg:pt-28 pt-14 lg:pb-24 pb-12 max-w-7xl mx-auto px-4 lg:px-0">
      <div>
        <PartnerCompanyTitle></PartnerCompanyTitle>
        {/* <PartnerCompanyContent></PartnerCompanyContent> */}
      </div>
    </div>
  );
};

export default PartnerCompany;
