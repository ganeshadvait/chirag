const DEFAULT_SIGNS = [
  "Tissue visibly protruding from the anus during or after bowel movements",
  "Feeling of a lump or mass coming out of the rectum",
  "Fecal incontinence — inability to control bowel movements",
  "Mucus or bloody discharge from the rectum",
  "Feeling of incomplete evacuation after bowel movements",
  "Chronic constipation and excessive straining",
  "Rectal pain or discomfort, especially when sitting",
  "Need to manually push tissue back inside after passing stool",
  "Rectal bleeding during or after bowel movements",
  "Ulceration or skin irritation around the anal area",
];

export default function WhenConsult({
  heading = "Symptoms of Rectal Prolapse",
  subheading = "Recognize these warning signs and seek expert evaluation early for best outcomes.",
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
