import { contactAction } from "@/hooks/contact";

export default function TreatmentOptions({ heading, options, ctaText }) {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#625587] mb-6">
        {heading}
      </h2>

      <ul className="space-y-6 text-gray-800">
        {options.map((item, idx) => (
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
            <span>
              <strong>{item.title}:</strong> {item.description}
            </span>
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
    </section>
  );
}
