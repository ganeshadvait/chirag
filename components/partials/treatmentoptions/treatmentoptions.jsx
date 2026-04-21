import { Clock, Wrench, Shield, Zap, FileText, Hexagon, Smile, Heart } from "lucide-react";

const ICON_MAP = {
  clock: Clock,
  wrench: Wrench,
  shield: Shield,
  zap: Zap,
  filetext: FileText,
  hexagon: Hexagon,
  smile: Smile,
  heart: Heart,
};

const DEFAULT_OPTIONS = [
  {
    icon: "heart",
    title: "Conservative Management",
    description:
      "For early internal prolapse and mucosal prolapse. Includes high-fiber diet, stool softeners, pelvic floor physiotherapy, biofeedback training, and avoiding straining. Effective for mild symptoms and in patients unfit for surgery.",
  },
  {
    icon: "clock",
    title: "Laparoscopic Rectopexy (Keyhole Surgery)",
    description:
      "The gold standard for adult rectal prolapse. The rectum is mobilized and secured (fixed) to the sacrum through small keyhole incisions. Offers excellent cure rates (over 95%), preserves bowel function, minimal scarring, shorter hospital stay (2–3 days), and faster recovery compared to open surgery.",
  },
  {
    icon: "zap",
    title: "Ventral Mesh Rectopexy",
    description:
      "A modern laparoscopic technique where a mesh is placed on the front of the rectum and attached to the sacrum, lifting and supporting the rectum. Avoids nerve damage, preserves bowel function, and has excellent long-term results. Particularly effective for women with associated pelvic organ prolapse.",
  },
  {
    icon: "wrench",
    title: "Delorme's Procedure (Perineal Approach)",
    description:
      "A perineal (from below) approach where the excess mucosal lining is removed and the muscle wall is plicated (folded). Performed without abdominal incisions, ideal for elderly or high-risk patients who cannot tolerate abdominal surgery. Lower recurrence than Altemeier's procedure.",
  },
  {
    icon: "hexagon",
    title: "Altemeier's Procedure (Perineal Proctosigmoidectomy)",
    description:
      "A perineal procedure where the prolapsed rectum and sigmoid colon are removed from below and reconnected. Suitable for elderly patients with large prolapse and significant comorbidities. Can be performed under regional anesthesia.",
  },
  {
    icon: "shield",
    title: "STARR Procedure",
    description:
      "Stapled Transanal Rectal Resection — a minimally invasive technique for internal prolapse (intussusception) and obstructed defecation syndrome. Uses a circular stapler to remove the prolapsing tissue from inside, with no external incisions. Quick recovery and effective symptom relief.",
  },
];

export default function TreatmentOptions({
  heading = "Treatment Options for Rectal Prolapse",
  subheading = "From conservative management to advanced laparoscopic surgery — comprehensive care for every stage.",
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
