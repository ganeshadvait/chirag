// File: components/medicalTourism/mtHero.jsx

const countries = [
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Saudi Arabia",
  "Kenya",
  "Nigeria",
  "Tanzania",
  "Bangladesh",
  "Sri Lanka",
  "Afghanistan",
  "Other",
];

const treatments = [
  "Piles / Hemorrhoids",
  "Fistula",
  "Fissure",
  "Pilonidal Sinus",
  "Colon Cancer",
  "Ulcerative Colitis",
  "Rectal Prolapse",
  "Constipation",
  "Not Sure / Need Diagnosis",
];

export default function MtHero() {
  return (
    <section className="relative overflow-hidden px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
      {/* Background video */}
      {/* Mobile video */}
      <video
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/benguluru india pointing mobile video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Desktop video */}
      <video
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/benguluru reel pointing to india desktop.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-sm">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-[#F8B956]"
              aria-hidden="true"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>NABH Accredited · Bangalore, India</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            India&apos;s Most Trusted
            <br />
            <em className="not-italic text-[#F8B956]">
              Colorectal Specialists
            </em>
            <br />
            for International Patients
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 !text-white/90 sm:text-lg">
            38 years of expert proctology care. If you're struggling with Piles,
            Fistula, Fissure, or Colon conditions — get world-class treatment at
            a fraction of Western costs. Thousands of patients from various
            countries trust Dr. Rajasekhar's team.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/+919380498256?text=I'm%20an%20international%20patient%20and%20want%20to%20book%20a%20consultation%20at%20Chirag%20Global%20Hospitals"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-4xl bg-[#F8B956] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#625587]"
            >
              Book Consultation
            </a>

            <a
              href="#journey"
              className="inline-flex items-center justify-center rounded-4xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              See How It Works →
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl bg-white/10 px-4 py-5 text-center shadow-sm backdrop-blur-sm">
              <div className="text-2xl font-bold text-[#F8B956] sm:text-3xl">
                38+
              </div>
              <div className="mt-1 text-sm text-white/90">Years Experience</div>
            </div>

            <div className="rounded-2xl bg-white/10 px-4 py-5 text-center shadow-sm backdrop-blur-sm">
              <div className="text-2xl font-bold text-[#F8B956] sm:text-3xl">
                99.5%
              </div>
              <div className="mt-1 text-sm text-white/90">Success Rate</div>
            </div>

            <div className="rounded-2xl bg-white/10 px-4 py-5 text-center shadow-sm backdrop-blur-sm">
              <div className="text-2xl font-bold text-[#F8B956] sm:text-3xl">
                180K+
              </div>
              <div className="mt-1 text-sm text-white/90">Patients Treated</div>
            </div>

            <div className="rounded-2xl bg-white/10 px-4 py-5 text-center shadow-sm backdrop-blur-sm">
              <div className="text-2xl font-bold text-[#F8B956] sm:text-3xl">
                4.7★
              </div>
              <div className="mt-1 text-sm text-white/90">Google Rating</div>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-7 text-[#1C2B30] shadow-[0_12px_64px_rgba(11,79,90,0.16)] sm:p-8">
          <h3 className="text-2xl font-bold text-[#0B4F5A]">
            Book Your Consultation
          </h3>
          <p className="mt-1 text-sm text-[#5A7078]">
            We&apos;ll respond within 2 hours with a detailed plan &amp; cost
            estimate.
          </p>

          <form className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#0B4F5A]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="rounded-lg border border-[#D8E4E7] bg-[#FAF7F3] px-4 py-3 text-sm text-[#1C2B30] outline-none focus:border-[#2A8A9E]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#0B4F5A]">
                Country
              </label>
              <select className="rounded-lg border border-[#D8E4E7] bg-[#FAF7F3] px-4 py-3 text-sm text-[#1C2B30] outline-none focus:border-[#2A8A9E]">
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#0B4F5A]">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 000 000 0000"
                className="rounded-lg border border-[#D8E4E7] bg-[#FAF7F3] px-4 py-3 text-sm text-[#1C2B30] outline-none focus:border-[#2A8A9E]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#0B4F5A]">
                Condition / Treatment Needed
              </label>
              <select className="rounded-lg border border-[#D8E4E7] bg-[#FAF7F3] px-4 py-3 text-sm text-[#1C2B30] outline-none focus:border-[#2A8A9E]">
                <option value="">Select treatment</option>
                {treatments.map((treatment) => (
                  <option key={treatment} value={treatment}>
                    {treatment}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="mt-1 w-full rounded-4xl bg-[#F8B956] px-4 py-3.5 text-base font-bold text-white transition hover:bg-[#625587]"
            >
              Book My Consultation →
            </button>

            <p className="text-center text-xs text-[#5A7078]">
              🔒 100% private. No spam. A coordinator will contact you within 2
              hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
