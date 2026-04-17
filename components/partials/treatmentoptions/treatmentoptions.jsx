import { Clock, Wrench, Shield } from "lucide-react";

const ICON_MAP = {
  clock: Clock,
  wrench: Wrench,
  shield: Shield,
};

const DEFAULT_OPTIONS = [
  {
    icon: "clock",
    title: "Conservative Management",
    description:
      "First-line approach including high-fiber diet modifications, stool softeners, sitz baths, topical creams, and behavioral toilet training techniques. Effective for most early-stage conditions like mild fissures and constipation.",
  },
  {
    icon: "wrench",
    title: "Minimally Invasive Procedures",
    description:
      "When conservative methods are insufficient, our specialists perform gentle procedures such as botox injection for fissures, examination under anesthesia (EUA), and incision & drainage for abscesses — all optimized for pediatric anatomy.",
  },
  {
    icon: "shield",
    title: "Surgical Correction",
    description:
      "For complex conditions like congenital malformations, chronic fistulas, or recurrent prolapse, our experienced surgical team performs advanced reconstructive procedures with pediatric anesthesia support and meticulous post-operative care.",
  },
];

export default function TreatmentOptions({
  heading = "Treatment Options for Pediatric Anorectal Conditions",
  subheading = "From conservative management to advanced surgical care, we offer the full spectrum of treatments tailored for children.",
  options = DEFAULT_OPTIONS,
}) {
  return (
    <section className="w-full py-10 md:py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1B4B] mb-3 md:mb-4">
            {heading}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {options.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || Clock;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#EEECFC] flex items-center justify-center mb-4">
                  <Icon
                    className="w-5 h-5 md:w-6 md:h-6 text-[#6B5AED]"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#1E1B4B] mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
