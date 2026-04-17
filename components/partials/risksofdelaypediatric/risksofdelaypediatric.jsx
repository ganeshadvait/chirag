const DEFAULT_RISKS = [
  {
    title: "Chronic pain and behavioral changes:",
    description:
      "Untreated anal fissures and constipation cause children to withhold stool, creating a vicious cycle of pain, harder stools, and worsening tears.",
  },
  {
    title: "Recurrent infections:",
    description:
      "Perianal abscesses that aren't properly drained can develop into complex fistula tracts requiring more extensive surgery later.",
  },
  {
    title: "Growth and development impact:",
    description:
      "Chronic pain, poor appetite from constipation, and iron deficiency from rectal bleeding can affect your child's growth milestones.",
  },
  {
    title: "Psychological effects:",
    description:
      "Toilet anxiety, fecal soiling, and social embarrassment can severely impact a child's confidence and emotional wellbeing.",
  },
  {
    title: "Complex surgical needs:",
    description:
      "Conditions caught early are often manageable with conservative treatment, but delayed cases may require surgical intervention.",
  },
];

export default function RisksOfDelayPediatric({
  heading = "Risks of Delaying Pediatric Anal Treatment",
  intro = "Many parents hesitate to seek specialized care for their child's anorectal issues, often hoping the problem will resolve on its own. However, delayed treatment can lead to serious complications:",
  image = "/ladypilestypes.png",
  imageAlt = "Risks of delaying pediatric anal treatment",
  risks = DEFAULT_RISKS,
}) {
  return (
    <section className="w-full py-10 md:py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* LEFT: Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-full max-w-[460px] aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1E1B4B] mb-4 md:mb-5 leading-snug">
              {heading}
            </h2>
            <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-5 md:mb-6">
              {intro}
            </p>
            <div className="space-y-4 md:space-y-5">
              {risks.map((risk, idx) => (
                <p
                  key={idx}
                  className="text-sm md:text-[15px] text-gray-600 leading-relaxed"
                >
                  <span className="font-semibold text-[#1E1B4B]">
                    {risk.title}
                  </span>{" "}
                  {risk.description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
