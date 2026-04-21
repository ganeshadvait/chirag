const DEFAULT_FEATURES = [
  {
    title: "38+ Years of Colorectal Expertise",
    description:
      "Dr. Rajasekhar M R and team have extensive experience in all surgical approaches for rectal prolapse, from laparoscopic rectopexy to perineal procedures.",
  },
  {
    title: "Advanced Laparoscopic Surgery",
    description:
      "Cashless treatment, insurance support, zero-interest EMI through GMoney, and transparent pricing with no hidden charges.",
  },
  {
    title: "Comprehensive Diagnostics",
    description:
      "In-house access to MRI defecography, anorectal manometry, and colonoscopy for accurate staging and treatment planning.",
  },
  {
    title: "Individualized Treatment Plans",
    description:
      "No one-size-fits-all approach. Treatment is tailored to your age, overall health, prolapse stage, and presence of associated conditions like incontinence or constipation.",
  },
  {
    title: "180K+ Patients Trusted Us",
    description:
      "With a 99.5% success rate across all colorectal conditions, families from across India trust Chirag Hospitals for expert care.",
  },
  {
    title: "Affordable & Insurance-Friendly",
    description:
      "Cashless treatment, insurance support, zero-interest EMI through GMoney, and transparent pricing with no hidden charges.",
  },
];

export default function WhyChoosePediatric({
  heading = "Why Choose Chirag Hospitals for Rectal Prolapse Treatment",
  subheading = "Bangalore's most experienced colorectal team for complex rectal prolapse management.",
  features = DEFAULT_FEATURES,
}) {
  return (
    <section className="w-full py-10 md:py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1E1B4B] mb-3 md:mb-4">
            {heading}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-lg bg-[#E9E4F7] text-[#6B46C1] flex items-center justify-center text-sm md:text-base font-semibold">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-[#1E1B4B] mb-1.5 md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
