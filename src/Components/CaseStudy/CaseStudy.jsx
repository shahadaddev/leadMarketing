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
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 xl:py-28 py-16 flex justify-between gap-16">
          <h2 className="lg:text-7xl text-5xl font-black uppercase xl:leading-15 lg:leading-14 leading-9 text-gray-700 text-left">
            Our{" "}
            <span className="text-[#F40026]">
              Project <br />
            </span>{" "}
            and Cases
          </h2>
          <p className="text-left text-lg pt-8 font-medium">
            Proven Strategies, Real-World Impact — uncovering the lessons behind
            every success. Each case study highlights real challenges,
            innovative solutions, and measurable outcomes. These stories reflect
            resilience, creativity, and collaboration, offering both inspiration
            and practical insights. They stand as proof that the right approach
            can turn obstacles into meaningful opportunities for growth and
            lasting success.
          </p>
        </div>
        <section className="grid lg:grid-cols-2 grid-cols-1 gap-10">
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
