// File: components/medicalTourism/mtJourney.jsx

const steps = [
  {
    number: "1",
    icon: "/medicaltourism/Book Consultation.svg",
    title: "Book Consultation",
    description:
      "Share your reports via WhatsApp. Get a diagnosis, cost estimate & travel plan within 24 hrs.",
  },
  {
    number: "2",
    icon: "/medicaltourism/Visa & Travel.svg",
    title: "Visa & Travel",
    description:
      "We send your Medical Visa invitation letter. Our team guides you through Indian e-Visa formalities.",
  },
  {
    number: "3",
    icon: "/medicaltourism/Treatment.svg",
    title: "Treatment",
    description:
      "Daycare or inpatient surgery. Our specialist team oversees your procedure and recovery.",
  },
  {
    number: "4",
    icon: "/medicaltourism/Follow-Up from Home.svg",
    title: "Follow-Up from Home",
    description:
      "Post-discharge reports, video consultations and WhatsApp support — wherever you are in the world.",
  },
];

export default function MtJourney() {
  return (
    <section
      id="journey"
      className="bg-[#625587] px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[2px] text-[#E4B96A]">
          Your Care Journey
        </span>

        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          From Enquiry to Recovery — In 4 Simple Steps
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 !text-white/65">
          Our International Patient Coordinator handles everything. You focus on
          healing — we handle the rest.
        </p>

        <div className="relative mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden h-[2px] bg-white/20 xl:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative px-3 text-center">
              <div className="relative z-[1] mx-auto mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-[#C8963E]/50 bg-white/10 text-[1.8rem] transition duration-300 hover:scale-110 hover:border-[#C8963E] hover:bg-[#C8963E]">
                <img src={step.icon} alt="icon" className="w-10 h-10" />
                <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#F8B956] text-[11px] font-bold text-white">
                  {step.number}
                </div>
              </div>

              <h4 className="text-lg font-bold text-white">{step.title}</h4>

              <p className="mt-2 text-sm leading-6 !text-white/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}