const DEFAULT_FEATURES = [
  {
    title: "38+ Years of Colorectal Expertise",
    description:
      "Led by Dr. Rajasekhar M R, one of Bangalore's most experienced colorectal surgeons with decades of handling complex pediatric cases.",
  },
  {
    title: "Child-Friendly Environment",
    description:
      "Our facility is designed to reduce anxiety in young patients with a comforting atmosphere, gentle staff, and age-appropriate communication.",
  },
  {
    title: "Conservative-First Philosophy",
    description:
      "We always exhaust non-surgical options before recommending procedures, ensuring your child receives the least invasive treatment possible.",
  },
  {
    title: "Parent Education & Support",
    description:
      "Comprehensive guidance for parents on home care, dietary changes, and preventive measures to ensure lasting recovery and prevent recurrence.",
  },
  {
    title: "High Patient Satisfaction",
    description:
      "180K+ patients treated with a 99.5% success rate. Trusted by families across Bangalore and beyond for expert pediatric colorectal care.",
  },
  {
    title: "Affordable & Insurance-Friendly",
    description:
      "Hassle-free cashless treatment and insurance support through GMoney with zero processing fees and interest-free finance options.",
  },
];

export default function WhyChoosePediatric({
  heading = "Why Choose Chirag Hospitals for Pediatric Anal Care",
  subheading = "Bangalore's most experienced colorectal team, now with specialized pediatric expertise.",
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
