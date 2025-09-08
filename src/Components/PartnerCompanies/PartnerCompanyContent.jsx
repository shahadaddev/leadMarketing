import companyOne from "../../assets/images/lead_event.webp";
import companyTwo from "../../assets/images/lead_event.webp";
import companyThree from "../../assets/images/wfa.webp";

const PartnerCompanyContent = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center gap-12">
        {/* Company One */}
        <div
          className="bg-white/50 backdrop-blur-3xl
        rounded-xl h-[620px] mt-36 shadow-xl"
        >
          <div className="p-4">
            <img src={companyOne} className="rounded-xl" alt="" />
          </div>
          <div className="px-8 pb-6 py-4 w-[380px] space-y-4">
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

        {/* Company Two */}
        <div
          className="bg-white/50 backdrop-blur-3xl
        rounded-xl h-[640px] shadow-xl"
        >
          <div className="p-4">
            <img src={companyTwo} className="rounded-xl" alt="" />
          </div>
          <div className="px-8 pb-6 py-4 w-[380px] space-y-4">
            <h4 className="text-2xl font-extrabold">Lead Bangladesh</h4>
            <p className="text-justify">
              Lead Marketing Inc. serves as a full-service marketing and
              communications agency and the global partner of Lead Bangladesh
              Ltd., proudly supporting clients around the world for over a
              decade. The agency combines creative expertise with data-driven
              strategies to deliver powerful, effective solutions that help
              brands stay relevant and adapt to ever-evolving technologies.
              Trusted by more than 400 clients, Lead Marketing Inc. drives
              growth and performance through innovative ideas and meticulous
              execution.
            </p>
          </div>
        </div>

        {/* Card Three */}
        <div
          className="bg-white/50 backdrop-blur-3xl
        rounded-xl h-[620px] mt-36 shadow-xl"
        >
          <div className="p-4">
            <img src={companyThree} className="rounded-xl" alt="" />
          </div>
          <div className="px-8 pb-6 py-4 w-[380px] space-y-4">
            <h4 className="text-2xl font-extrabold">Web For All</h4>
            <p className="text-justify">
              Web For All focuses on turning digital aspirations into engaging
              and impactful realities by designing visually compelling and
              highly functional websites. The team works closely with clients to
              deeply understand their vision, ensuring every website reflects
              the unique values and goals of the brand. By crafting tailored
              online experiences, Web For All helps businesses connect
              meaningfully with their audience and stand out in the digital
              landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCompanyContent;
