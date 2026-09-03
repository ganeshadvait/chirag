const DEFAULT_ROWS = [
  { parameter: "Procedure Time", laser: "20–30 minutes", traditional: "45–90 minutes" },
  { parameter: "Anesthesia", laser: "Local / Short GA", traditional: "General / Spinal" },
  { parameter: "Incision Size", laser: "Tiny (few mm)", traditional: "Large (several cm)" },
  { parameter: "Pain Level", laser: "Minimal", traditional: "Moderate to Severe" },
  { parameter: "Hospital Stay", laser: "Same-day discharge", traditional: "1–3 days" },
  { parameter: "Recovery Time", laser: "3–5 days", traditional: "4–8 weeks" },
  { parameter: "Return to Work", laser: "3–5 days", traditional: "2–6 weeks" },
  { parameter: "Scarring", laser: "Minimal / None", traditional: "Significant" },
  { parameter: "Wound Care", laser: "Minimal dressings", traditional: "Daily packing / dressings for weeks" },
  { parameter: "Recurrence Rate", laser: "5–10%", traditional: "10–30%" },
];

export default function LaserVsTraditional({
  heading = "Laser vs Traditional Surgery",
  subheading = "Why laser pilonidal sinus treatment is the preferred choice at Chirag Hospitals.",
  laserLabel = "Laser Treatment (SiLaC)",
  traditionalLabel = "Traditional Open Surgery",
  rows = DEFAULT_ROWS,
}) {
  return (
    <section className="w-full pt-8 md:pt-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1E1B4B] mb-3 md:mb-4">
            {heading}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="overflow-hidden rounded-xl md:rounded-2xl shadow-sm border border-gray-100 bg-white">
          <table className="w-full border-collapse table-fixed">
            <thead>
              <tr className="bg-[#6B46C1] text-white">
                <th className="text-left text-[11px] sm:text-sm md:text-base font-semibold px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 w-1/3">
                  Parameter
                </th>
                <th className="text-left text-[11px] sm:text-sm md:text-base font-semibold px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 w-1/3">
                  {laserLabel}
                </th>
                <th className="text-left text-[11px] sm:text-sm md:text-base font-semibold px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 w-1/3">
                  {traditionalLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-t border-gray-100 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                  }`}
                >
                  <td className="text-[11px] sm:text-sm md:text-[15px] font-semibold text-[#1E1B4B] px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 align-top break-words">
                    {row.parameter}
                  </td>
                  <td className="text-[11px] sm:text-sm md:text-[15px] text-gray-700 px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 align-top break-words">
                    {row.laser}
                  </td>
                  <td className="text-[11px] sm:text-sm md:text-[15px] text-gray-700 px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 align-top break-words">
                    {row.traditional}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
