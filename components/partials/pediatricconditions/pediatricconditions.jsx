import {
  Clock,
  Shield,
  Activity,
  Settings,
  BookOpen,
  Heart,
} from "lucide-react";

const ICON_MAP = {
  clock: Clock,
  shield: Shield,
  activity: Activity,
  settings: Settings,
  book: BookOpen,
  heart: Heart,
};

const DEFAULT_CONDITIONS = [
  {
    icon: "clock",
    title: "Acute Pilonidal Abscess",
    description:
      "A sudden, painful swelling near the tailbone caused by an infected pilonidal sinus. The area becomes red, hot, and tender, often with fever. Requires urgent incision and drainage followed by definitive treatment to prevent recurrence.",
  },
  {
    icon: "shield",
    title: "Chronic Pilonidal Sinus",
    description:
      "A long-standing tract or tunnel beneath the skin with one or more openings (pits) along the natal cleft. Causes persistent or intermittent discharge (pus or blood-tinged), foul odor, and dull discomfort. This is the most common presentation.",
  },
  {
    icon: "activity",
    title: "Recurrent Pilonidal Sinus",
    description:
      "Pilonidal sinus that returns after previous treatment, often due to incomplete removal of sinus tracts or continued hair ingrowth. Requires advanced techniques like laser ablation or flap procedures for definitive cure.",
  },
];

export default function PediatricConditions({
  heading = "Pediatric Anorectal Conditions We Treat",
  subheading = "Our team of specialists provides expert diagnosis and treatment for a comprehensive range of pediatric anal and rectal conditions.",
  conditions = DEFAULT_CONDITIONS,
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
          {conditions.map((item, idx) => {
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
