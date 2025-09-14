import React from "react";
import Navbar from "../SharedComponents/Navbar/Navbar";
import ContactForm from "./ContactHome/ContactForm";

const LetsTalk = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:mt-8">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default LetsTalk;
