import { contactAction } from "@/hooks/contact";

export default function SymptomsInfo({
  symptomsHeading,
  symptoms,
  ctaText,
  diagnosisHeading,
  diagnosisText,
}) {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6 space-y-10">
      {/* Symptoms */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#625587] mb-6">
          {symptomsHeading}
        </h2>

        <ul className="space-y-6 text-gray-800">
          {symptoms.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-4 transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)] hover:ml-2 border border-transparent hover:border-gray-100 rounded-lg p-2 w-fit"
            >
              <span className="mt-1 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {ctaText && (
          <button
            onClick={contactAction}
            className="mt-6 bg-[#F8B956] hover:bg-transparent transition text-white hover:text-black border-2 border-transparent hover:border-[#F8B956] font-semibold rounded-full px-8 py-3 text-lg"
          >
            {ctaText}
          </button>
        )}
      </div>

      {/* Why Early Diagnosis */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#625587] mb-4">
          {diagnosisHeading}
        </h2>
        <p className="text-gray-700 text-lg">{diagnosisText}</p>
      </div>
    </section>
  );
}
