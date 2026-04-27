const DEFAULT_POINTS = [
  {
    title: "Minimally invasive",
    description:
      "The laser fiber is inserted through a tiny opening — no large wounds or extensive tissue removal. This preserves healthy tissue and dramatically reduces post-operative pain.",
  },
  {
    title: "Precision destruction",
    description:
      "The laser energy specifically targets and destroys the sinus lining while sealing the tract, leaving surrounding tissue undamaged.",
  },
  {
    title: "Rapid recovery",
    description:
      "Most patients return to normal activities within 3–5 days compared to weeks of painful wound care with traditional surgery.",
  },
  {
    title: "Office-friendly",
    description:
      "Can often be performed under local anesthesia, making it suitable for patients who want to avoid general anesthesia.",
  },
  {
    title: "Cosmetic advantage",
    description:
      "Minimal to no visible scarring, which is particularly important for younger patients concerned about appearance.",
  },
];

export default function WhyLaserBest({
  heading = "Why Laser Is the Best Treatment for Pilonidal Sinus",
  subheading = "Laser pilonidal sinus treatment represents a paradigm shift from traditional open surgery. Here's why our patients and surgeons prefer it:",
  points = DEFAULT_POINTS,
  image = "/pilonidalsinus.svg",
  imageAlt = "Laser pilonidal sinus treatment illustration",
}) {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 ${
            image ? "lg:grid-cols-[1.2fr_1fr]" : ""
          } gap-8 md:gap-10 lg:gap-12 items-center`}
        >
          {/* LEFT: Text content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1E1B4B] mb-3 md:mb-4 leading-snug">
              {heading}
            </h2>
            <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-5 md:mb-6">
              {subheading}
            </p>

            <ul className="space-y-4 md:space-y-5">
              {points.map((point, idx) => (
                <li
                  key={idx}
                  className="text-sm md:text-[15px] text-gray-700 leading-relaxed"
                >
                  <span className="font-semibold text-[#1E1B4B]">
                    {point.title}:
                  </span>{" "}
                  {point.description}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Illustration card */}
          {image && (
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
