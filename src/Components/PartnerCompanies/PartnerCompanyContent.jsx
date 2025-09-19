import companyOne from "../../assets/images/lead_event.webp";
import companyTwo from "../../assets/images/leadBangladesh.jpg";
import companyThree from "../../assets/images/wfa.webp";

const PartnerCompanyContent = () => {
  return (
    <div className="xl:mt-20 mt-14">
      <div
        className="xl:flex xl:justify-center gap-12
        lg:grid lg:grid-cols-2
      space-y-8 lg:space-y-0 px-2"
      >
        {/* Company One */}
        <div className="lg:flex justify-end">
          <div
            className="bg-white/50 backdrop-blur-3xl
        rounded-2xl xl:h-[620px] xl:mt-40 lg:shadow-xl shadow-lg"
          >
            <div className="p-4">
              <img src={companyOne} className="rounded-xl" alt="" />
            </div>
            <div className="px-8 pb-6 py-4 lg:w-[380px] space-y-4">
              <h4 className="text-2xl font-extrabold">Lead Event</h4>
              <p className="text-justify">
                As a vital member of the Lead Bangladesh Group, Lead Eventz
                specializes in comprehensive program planning and management
                services for corporate events, product launches, activations,
                weddings, and ceremonies throughout Bangladesh. The company
                believes that outstanding events are born from creativity and
                thoughtful design rather than large budgets. Committed to
                excellence, Lead Eventz strives to deliver dynamic and memorable
                experiences that exceed client expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Company Two */}
        <div className="lg:flex justify-start">
          <div
            className="bg-white/50 backdrop-blur-3xl
        rounded-2xl xl:h-[900px] shadow-xl"
          >
            <div className="p-4">
              <img src={companyTwo} className="rounded-xl" alt="" />
            </div>
            <div className=" px-8 pb-6 py-4 lg:w-[380px] space-y-4">
              <h4 className="text-2xl font-extrabold">Lead Bangladesh</h4>
              <p className="text-justify">
                Lead Bangladesh is a dynamic and visionary business group that
                began its transformative journey in 2015. Our foundation is
                built on a profound passion for delivering creative,
                professional, and technological services that leave a lasting
                impact. As a registered private limited company under the
                Registrar of Joint Stock Companies & Firms (RJSC) in Bangladesh,
                and also registered in Canada, the UAE, and the USA, our journey
                is driven by passion and innovation. Supported by data-driven
                analysis and a team of skilled creatives, we develop unique
                business strategies, generate innovative ideas, and execute
                campaigns and events, and provide cutting-edge technology
                services, including web design and development, that exceed
                expectations. What sets Lead Bangladesh apart is not just our
                services but the positive difference our clients make in the
                world. Our journey is a testament to the trust our clients place
                in us, and we take pride in being architects of their success
                stories.
              </p>
            </div>
          </div>
        </div>

        {/* Card Three */}
        <div className="lg:flex justify-center lg:col-span-2">
          <div
            className="bg-white/50 backdrop-blur-3xl
        rounded-2xl xl:h-[620px] xl:mt-40 shadow-xl"
          >
            <div className="p-4">
              <img src={companyThree} className="rounded-xl" alt="" />
            </div>
            <div className="px-8 pb-6 py-4 lg:w-[380px] space-y-4">
              <h4 className="text-2xl font-extrabold">Web For All</h4>
              <p className="text-justify">
                Web For All focuses on turning digital aspirations into engaging
                and impactful realities by designing visually compelling and
                highly functional websites. The team works closely with clients
                to deeply understand their vision, ensuring every website
                reflects the unique values and goals of the brand. By crafting
                tailored online experiences, Web For All helps businesses
                connect meaningfully with their audience and stand out in the
                digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCompanyContent;
