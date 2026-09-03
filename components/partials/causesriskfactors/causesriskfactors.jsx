import { Search } from "lucide-react";

const DEFAULT_CAUSES = [
  {
    title: "Chronic constipation & straining:",
    description:
      "Years of straining during bowel movements is the most common contributing factor, gradually weakening the pelvic floor muscles and rectal supports.",
  },
  {
    title: "Childbirth & pregnancy:",
    description:
      "Multiple vaginal deliveries, prolonged labor, and large babies can damage the pelvic floor muscles and nerves, making women particularly susceptible.",
  },
  {
    title: "Aging & muscle weakness:",
    description:
      "Natural weakening of pelvic floor muscles with age is a significant factor, especially in women over 50.",
  },
  {
    title: "Neurological conditions:",
    description:
      "Conditions affecting nerve supply to the pelvic floor, including spinal cord injuries, MS, and diabetic neuropathy, increase risk.",
  },
  {
    title: "Previous pelvic surgery:",
    description:
      "Prior hysterectomy or other pelvic surgeries can weaken supporting structures.",
  },
  {
    title: "Chronic cough/COPD:",
    description:
      "Persistent coughing increases intra-abdominal pressure, straining the pelvic floor over time.",
  },
];

export default function CausesRiskFactors({
  heading = "Causes & Risk Factors",
  intro = "Rectal prolapse develops when the structures supporting the rectum weaken. Understanding the causes helps in both treatment and prevention:",
  image = "/rectalprolapse/causes and risk factor rectal prolapse.png",
  imageAlt = "Causes and risk factors illustration",
  causes = DEFAULT_CAUSES,
}) {
  return (
    <section className="w-full pt-8 md:pt-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* LEFT: Content */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1E1B4B] mb-4 md:mb-5 leading-snug">
              {heading}
            </h2>
            <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-5 md:mb-6">
              {intro}
            </p>
            <div className="space-y-4 md:space-y-5">
              {causes.map((cause, idx) => (
                <p
                  key={idx}
                  className="text-sm md:text-[15px] text-gray-600 leading-relaxed"
                >
                  <span className="font-semibold text-[#1E1B4B]">
                    {cause.title}
                  </span>{" "}
                  {cause.description}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px] aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#EEECFC] via-[#F3EAFB] to-[#FDEEE6] flex items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <Search
                  className="w-20 h-20 md:w-24 md:h-24 text-[#6B5AED]"
                  strokeWidth={2}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
