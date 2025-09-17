import Navbar from "../SharedComponents/Navbar/Navbar";
import caseOne from "../../assets/cases/Untitled-1-09-min.webp";
import caseTwo from "../../assets/cases/Untitled-1-10-min.webp";
import caseThree from "../../assets/cases/Untitled-1-11-min.webp";
import caseFour from "../../assets/cases/Untitled-1-12-min.webp";
import caseFive from "../../assets/cases/Untitled-1-13-min.webp";
import caseSix from "../../assets/cases/Untitled-1-15-min.webp";
import caseSeven from "../../assets/cases/Untitled-1-14-min.webp";
import caseEight from "../../assets/cases/Untitled-1-17-min.webp";
import caseNine from "../../assets/cases/Untitled-1-16-min.webp";

const CaseStudy = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto py-16">
        <section className="grid grid-cols-2 gap-10">
          <div>
            <img src={caseOne} alt="" />
          </div>
          <div>
            <img src={caseTwo} alt="" />
          </div>
          <div>
            <img src={caseThree} alt="" />
          </div>
          <div>
            <img src={caseFour} alt="" />
          </div>
          <div>
            <img src={caseFive} alt="" />
          </div>
          <div>
            <img src={caseSix} alt="" />
          </div>
          <div>
            <img src={caseSeven} alt="" />
          </div>
          <div>
            <img src={caseEight} alt="" />
          </div>
          <div>
            <img src={caseNine} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudy;
