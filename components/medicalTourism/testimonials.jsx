// File: components/medicalTourism/mtTestimonials.jsx

const testimonials = [
  {
    stars: "★★★★★",
    quote:
      "I flew from Dubai after struggling with a complex fistula for 2 years. Dr. Rajasekhar operated the very next day. Zero complications. Back to Dubai in a week — completely cured.",
    initials: "AK",
    name: "Ahmed K.",
    flag: "🇦🇪",
    country: "Dubai, UAE",
  },
  {
    stars: "★★★★★",
    quote:
      "Fantastic hospital. The coordinator arranged everything — visa letter, airport pickup, even a hotel recommendation near the hospital. Dr. Rajasekhar is truly world-class.",
    initials: "JM",
    name: "James M.",
    flag: "🇬🇧",
    country: "London, UK",
  },
  {
    stars: "★★★★★",
    quote:
      "My husband and I were nervous coming to India. But the team made it completely smooth. The doctors and nursing staff treated us like family. Saved $9,000 compared to a UK quote.",
    initials: "PW",
    name: "Priya W.",
    flag: "🇰🇪",
    country: "Nairobi, Kenya",
  },
];

export default function MtTestimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#625587] px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[2px] text-[#E4B96A]">
          Patient Stories
        </span>

        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Real Patients. Real Results.
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 !text-white/65">
          Thousands of international patients have trusted Chirag Global
          Hospitals for their most sensitive conditions.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={`${item.name}-${item.country}`}
              className="rounded-2xl border border-white/10 bg-white/10 p-7 backdrop-blur-[4px] transition duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              <div className="mb-4 text-lg tracking-[2px] text-[#E4B96A]">
                {item.stars}
              </div>

              <p className="mb-5 text-sm italic leading-7 !text-white/85">
                &quot;{item.quote}&quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#C8963E] text-sm font-bold text-[#625587]">
                  {item.initials}
                </div>

                <div>
                  <div className="text-sm font-semibold text-white">
                    {item.name} <span className="text-base">{item.flag}</span>
                  </div>
                  <div className="text-xs text-white/55">{item.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}