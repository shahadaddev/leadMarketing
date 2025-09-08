import React from "react";
import PartnerCompanyTitle from "./PartnerCompanyTitle";
import PartnerCompanyContent from "./PartnerCompanyContent";

const PartnerCompany = () => {
  return (
    <div className="text-gray-700 pt-28 pb-24 max-w-7xl mx-auto">
      <div>
        <PartnerCompanyTitle></PartnerCompanyTitle>
        <PartnerCompanyContent></PartnerCompanyContent>
      </div>
    </div>
  );
};

export default PartnerCompany;
