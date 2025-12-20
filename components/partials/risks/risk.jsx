export default function RisksOfDelay({
  heading,
  risks,
}) {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl md:p-6 px-4">
      <h2 className="text-[24px] sm:text-[30px] font-semibold mb-8 text-[#625587]">
        {heading}
      </h2>

      <ul className="space-y-6 text-gray-800">
        {risks.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-4 transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)] hover:ml-4 border border-transparent hover:border-gray-100 rounded-lg p-2 w-fit"
          >
            <span>
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
  );
}
