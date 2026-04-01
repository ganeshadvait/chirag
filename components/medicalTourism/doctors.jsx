// File: components/medicalTourism/mtDoctorsStrip.jsx

const doctors = [
  {
    name: "Dr. Rajasekhar M.R.",
    qualification: "MBBS, MS",
    role: "Chief Proctologist & Colorectal Surgeon",
    experience: "38+ Years · 50,000+ Procedures",
    badge: "Founder",
    avatar: "👨‍⚕️",
    whatsappText:
      "I'd%20like%20to%20book%20a%20consultation%20with%20Dr.%20Rajasekhar",
  },
  {
    name: "Dr. Shreedevi K.N.",
    qualification: "MBBS, MS, FSGE",
    role: "Surgical Gastroenterology & Colorectal Surgeon",
    experience: "Senior Specialist",
    avatar: "👩‍⚕️",
    whatsappText:
      "I'd%20like%20to%20book%20a%20consultation%20with%20Dr.%20Shreedevi",
  },
  {
    name: "Dr. Suchitra N. Adiga",
    qualification: "BAMS, MS",
    role: "Proctologist — Integrative & Minimally Invasive",
    experience: "Integrative Care Specialist",
    avatar: "👩‍⚕️",
    whatsappText:
      "I'd%20like%20to%20book%20a%20consultation%20with%20Dr.%20Suchitra",
  },
];

export default function MtDoctorsStrip() {
  return (
    <section
      id="doctors"
      className="border-b border-[#625587]/10 bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[2px] text-[#C8963E]">
            Meet Your Treating Specialists
          </span>

          <h2 className="text-3xl font-bold leading-tight text-[#625587] sm:text-4xl">
            India&apos;s Most Experienced Proctologists
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#5A7078] sm:text-base">
            Led by Dr. Rajasekhar Mysore — 38+ years, 50,000+ successful
            procedures. You&apos;ll be treated by the specialist, not handed off
            to a junior.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group relative overflow-hidden rounded-[18px] border border-[#625587]/10 bg-[#FAF7F3] px-5 pb-6 pt-7 text-center transition duration-300 hover:-translate-y-1.5 hover:border-[#625587] hover:shadow-[0_4px_32px_rgba(11,79,90,0.10)] sm:px-6"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#C8963E] to-[#2A8A9E] opacity-0 transition duration-300 group-hover:opacity-100" />

              {doctor.badge && (
                <div className="absolute right-4 top-4 rounded-full bg-[#F8B956] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.5px] text-white">
                  {doctor.badge}
                </div>
              )}

              <div className="mx-auto mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[3px] border-[#C8963E]/25 bg-gradient-to-br from-[#625587] to-[#1A6B7A] text-5xl shadow-[0_4px_20px_rgba(11,79,90,0.15)]">
                {doctor.avatar}
              </div>

              <div className="text-xl font-bold text-[#625587]">
                {doctor.name}
              </div>

              <div className="mt-1 text-xs font-semibold tracking-[0.5px] text-[#C8963E]">
                {doctor.qualification}
              </div>

              <div className="mt-2 text-sm leading-6 text-[#5A7078]">
                {doctor.role}
              </div>

              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#625587]/7 px-3 py-1.5 text-xs font-semibold text-[#625587]">
                <span>⏱</span>
                <span>{doctor.experience}</span>
              </div>

              <a
                href={`https://wa.me/+919380498256?text=${doctor.whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 block rounded-4xl bg-[#625587] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#F8B956]"
              >
                📅 Book Consultation
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}