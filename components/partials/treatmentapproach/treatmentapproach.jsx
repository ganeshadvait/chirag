const DEFAULT_STEPS = [
  {
    title: "Child-Friendly Consultation",
    description:
      "Thorough evaluation in a comfortable, non-intimidating environment. Our specialists take time to understand your child's history and symptoms while keeping them at ease.",
  },
  {
    title: "Gentle Diagnosis",
    description:
      "Minimally uncomfortable diagnostic approaches using age-appropriate examination techniques, ultrasound, and other non-invasive tests to accurately identify the condition.",
  },
  {
    title: "Personalized Treatment",
    description:
      "Customized treatment plan that may include dietary changes, medications, topical therapies, or minimally invasive procedures — always prioritizing the least invasive option first.",
  },
  {
    title: "Recovery & Follow-Up",
    description:
      "Detailed home care instructions for parents, scheduled follow-ups to monitor healing, and ongoing dietary and lifestyle guidance to prevent recurrence.",
  },
];

export default function TreatmentApproach({
  heading = "Our Treatment Approach",
  subheading = "A gentle, step-by-step process designed specifically for the comfort and safety of young patients.",
  steps = DEFAULT_STEPS,
}) {
  return (
    <section className="w-full py-10 md:py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-[#1E1B4B] mb-3 md:mb-4">
            {heading}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-2"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#6B46C1] text-white flex items-center justify-center text-sm md:text-base font-semibold shadow-md">
                {idx + 1}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#1E1B4B] mb-2 md:mb-3">
                {step.title}
              </h3>
              <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
