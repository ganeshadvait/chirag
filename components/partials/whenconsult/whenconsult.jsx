const DEFAULT_SIGNS = [
  "Crying or screaming during bowel movements",
  "Blood spots on the diaper or in stool",
  "Swelling, redness, or lump near the anus",
  "Chronic constipation lasting more than 2 weeks",
  "Stool withholding behavior or fear of toilet",
  "Tissue protruding from the anus after passing stool",
  "Fever with a painful perianal lump",
  "Persistent itching or irritation around the anal area",
  "Fecal soiling or incontinence in toilet-trained child",
  "Recurring anal fissures that don't heal with home care",
];

export default function WhenConsult({
  heading = "When Should You Consult a Pediatric Anal Care Specialist?",
  subheading = "Don't ignore these signs in your child. Early consultation ensures faster relief and prevents complications.",
  signs = DEFAULT_SIGNS,
}) {
  return (
    <section className="w-full py-10 md:py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-[#1E1B4B] mb-3 md:mb-4">
            {heading}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {signs.map((sign, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 shadow-[0_2px_8px_rgba(16,24,40,0.08)] px-4 py-3 md:px-5 md:py-4 flex items-start gap-3"
            >
              <span className="mt-[7px] w-2 h-2 rounded-full bg-[#F8B956] flex-shrink-0" />
              <span className="text-sm md:text-[15px] text-[#1E1B4B] leading-snug">
                {sign}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
