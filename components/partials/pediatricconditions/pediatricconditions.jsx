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
    title: "Anal Fissures in Children",
    description:
      "Small tears in the anal lining causing pain during bowel movements, bleeding, and irritability. Often caused by hard stools or chronic constipation. We offer dietary management, topical therapies, and gentle procedures when needed.",
  },
  {
    icon: "shield",
    title: "Perianal Abscess & Fistula",
    description:
      "Painful, swollen lumps near the anus caused by infected glands, common in infants under 2 years. Our specialists perform safe incision and drainage with meticulous wound care for quick healing.",
  },
  {
    icon: "activity",
    title: "Rectal Bleeding",
    description:
      "Blood in a child's stool can be alarming. Causes range from fissures and polyps to allergic colitis. Our team provides thorough evaluation to identify the cause and deliver targeted, gentle treatment.",
  },
  {
    icon: "settings",
    title: "Rectal Prolapse",
    description:
      "When part of the rectal lining protrudes through the anus, common in children aged 1–3. We offer conservative management and, when needed, minimally invasive surgical correction with excellent outcomes.",
  },
  {
    icon: "book",
    title: "Chronic Constipation",
    description:
      "Persistent constipation in children can lead to fissures, fecal impaction, and behavioral issues. We provide holistic management including dietary guidance, medications, and behavioral therapy approaches.",
  },
  {
    icon: "heart",
    title: "Congenital Anorectal Malformations",
    description:
      "Birth defects affecting the anus and rectum, including imperforate anus. Our surgical team has extensive experience in reconstructive procedures with careful long-term follow-up for optimal development.",
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
