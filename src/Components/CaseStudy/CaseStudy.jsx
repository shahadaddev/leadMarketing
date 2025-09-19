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
import caseTen from "../../assets/cases/case for ij web 1.jpg";
import caseEleven from "../../assets/cases/Case Study.jpg";

const CaseStudy = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl xl:mx-auto lg:pt-24 lg:mt-8 pb-8 mx-5">
        <div className="lg:space-y-4 lg:px-12 px-5 lg:py-16 py-8 flex lg:flex-row flex-col justify-between lg:gap-16 gap-8 bg-gray-100 rounded-3xl lg:mb-24 mb-12 mx-5 lg:mx-0">
          {/* --------------- */}
          <h2 className="lg:text-7xl text-4xl font-black uppercase xl:leading-15 lg:leading-14 leading-7 text-gray-700 text-left">
            Our <br className="lg:hidden block" />
            <span className="text-[#F40026]">
              Project <br />
            </span>{" "}
            and Cases
          </h2>

          {/* ---------------- */}
          <p className="text-left text-lg lg:pt-8 font-medium">
            Proven Strategies, Real-World Impact — uncovering the lessons behind
            every success. Each case study highlights real challenges,
            innovative solutions, and measurable outcomes. These stories reflect
            resilience, creativity, and collaboration, offering both inspiration
            and practical insights. They stand as proof that the right approach
            can turn obstacles into meaningful opportunities for growth and
            lasting success.
          </p>
        </div>
        <section className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 mx-5 lg:mx-0">
          <div>
            <img
              className="lg:w-[620px] xl:h-[500px] lg:h-[420px]"
              src={caseOne}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:w-[620px] xl:h-[500px] lg:h-[420px]"
              src={caseTwo}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:w-[620px] xl:h-[500px] lg:h-[420px]"
              src={caseThree}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:w-[620px] xl:h-[500px] lg:h-[420px]"
              src={caseFour}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:w-[620px] xl:h-[500px] lg:h-[420px]"
              src={caseFive}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:w-[620px] xl:h-[500px] lg:h-[420px]"
              src={caseSix}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:w-[620px] xl:h-[500px] lg:h-[420px]"
              src={caseSeven}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:w-[620px] xl:h-[500px] lg:h-[420px]"
              src={caseEight}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:w-[620px] xl:h-[500px] lg:h-[420px]"
              src={caseNine}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:w-[620px] xl:h-[500px] lg:h-[420px]"
              src={caseTen}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:w-[620px] xl:h-[500px] lg:h-[420px]"
              src={caseEleven}
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudy;
