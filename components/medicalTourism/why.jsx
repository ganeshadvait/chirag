// File: components/medicalTourism/mtWhyIndia.jsx

const costRows = [
  {
    treatment: "Piles Surgery",
    ukUs: "$6,000–12,000",
    gulf: "$3,000–5,000",
    chirag: "$800–1,200",
    saving: "SAVE 85%",
  },
  {
    treatment: "Fistula Surgery",
    ukUs: "$8,000–15,000",
    gulf: "$4,000–7,000",
    chirag: "$1,000–1,800",
    saving: "SAVE 80%",
  },
  {
    treatment: "Fissure Treatment",
    ukUs: "$4,000–8,000",
    gulf: "$2,000–4,000",
    chirag: "$600–1,000",
    saving: "SAVE 82%",
  },
  {
    treatment: "Pilonidal Sinus",
    ukUs: "$5,000–10,000",
    gulf: "$2,500–5,000",
    chirag: "$800–1,400",
    saving: "SAVE 80%",
  },
  {
    treatment: "Colon Cancer",
    ukUs: "$30,000–80,000",
    gulf: "$15,000–30,000",
    chirag: "$4,000–9,000",
    saving: "SAVE 88%",
  },
];

const whyPoints = [
  {
    icon: "🎯",
    title: "India's Only Dedicated Colorectal Specialist Hospital",
    description:
      "Unlike multi-specialty chains, we focus 100% on proctology & colorectal care — giving you deeper expertise and better outcomes.",
  },
  {
    icon: "🤝",
    title: "Personalized, Not Assembly-Line Care",
    description:
      "Your senior doctor is also your treating specialist. Not an intern. Not a rotation. The same trusted face from consultation to discharge.",
  },
  {
    icon: "✈️",
    title: "End-to-End International Patient Support",
    description:
      "Medical visa guidance, airport pickup, accommodation, interpreter services, and post-treatment follow-up — all handled by our dedicated team.",
  },
];

export default function MtWhyIndia() {
  return (
    <section
      id="why-india"
      className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[2px] text-[#C8963E]">
            Why Medical Tourism in India
          </span>

          <h2 className="text-3xl font-bold leading-tight text-[#625587] sm:text-4xl lg:text-5xl">
            Save 60–80% on World-Class Treatment
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5A7078]">
            The same surgery that costs $8,000 in the UK or $12,000 in the US
            can be done at Chirag Global Hospitals for a fraction of the price —
            with equal or superior outcomes.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="flex items-start gap-4 rounded-xl border-l-[3px] border-[#C8963E] bg-[#FAF7F3] p-[18px]"
              >
                <div className="text-2xl leading-none">{point.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-[#625587]">
                    {point.title}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-[#5A7078]">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-2xl bg-[#FAF7F3] shadow-[0_4px_32px_rgba(11,79,90,0.10)]">
            <div className="grid grid-cols-4 bg-[#625587] px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.5px] text-white sm:px-5 sm:text-[13px]">
              <span className="col-span-1">Treatment</span>
              <span className="text-center">UK / US</span>
              <span className="text-center">Gulf</span>
              <span className="text-center text-[#E4B96A]">Chirag India</span>
            </div>

            <div>
              {costRows.map((row, index) => (
                <div
                  key={row.treatment}
                  className={`grid grid-cols-4 items-center gap-2 border-b border-[#625587]/10 px-4 py-4 text-xs sm:px-5 sm:text-sm ${
                    index % 2 !== 0 ? "bg-[#625587]/[0.03]" : ""
                  }`}
                >
                  <span className="font-semibold text-[#1C2B30]">
                    {row.treatment}
                  </span>

                  <span className="text-center text-[#5A7078]">{row.ukUs}</span>

                  <span className="text-center text-[#5A7078]">{row.gulf}</span>

                  <span className="flex flex-col items-center justify-center gap-1 text-center font-bold text-[#625587] sm:flex-row sm:gap-2">
                    <span>{row.chirag}</span>
                    <span className="rounded-full bg-[#E8F7EE] px-2 py-1 text-[10px] font-bold tracking-[0.5px] text-[#1A7A3E] sm:text-[11px]">
                      {row.saving}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-[#5A7078]">
            *Estimates vary. Contact us for your personalised quote.
          </p>
        </div>
      </div>
    </section>
  );
}