export default function WhyChoose({
  heading,
  points,
}) {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#625587] mb-4">
        {heading}
      </h2>

      <div className="rounded-3xl pr-6 py-6">
        <ul className="space-y-6 text-lg text-gray-900">
          {points.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)] hover:ml-2 border border-transparent hover:border-gray-100 rounded-lg p-2 w-fit cursor-default"
            >
              <span className="mr-3 flex-shrink-0">
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
      </div>
    </section>
  );
}
