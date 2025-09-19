import React from "react";
import Navbar from "../SharedComponents/Navbar/Navbar";
import ContactForm from "./ContactHome/ContactForm";
import FrequentlyQuestion from "../FrequentlyQuestion/FrequentlyQuestion";

const ContactPage = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <Navbar></Navbar>
      <div className="company-content lg:mt-8">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default ContactPage;
