export default function StatsSection({
  aboveContetn = "",
  aboveContetna = "",
  heading,
  description,
  stats,
}) {
  return (
    <section className="w-full py-8 mb-0 px-4 sm:px-6 lg:px-8">
      {/* Above Content */}
      {aboveContetn && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 leading-relaxed bg-[#625587] p-5 md:p-6 rounded-lg shadow-lg">
          <div className="w-full sm:w-[65%] lg:w-[70%] sm:pl-2 md:pl-6 text-center sm:text-left order-2 sm:order-1">
            <h2 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-white mb-2">
              {aboveContetn}
            </h2>
            <h3 className="text-base md:text-xl lg:text-xl xl:text-2xl font-medium text-white">
              {aboveContetna}
            </h3>
          </div>
          <div className="w-full sm:w-[35%] lg:w-[30%] flex justify-center order-1 sm:order-2">
            <img
              src="/fistula heilighted image .png"
              alt="Highlighted medical image of a fistula"
              className="w-[110px] md:w-[130px] lg:w-[140px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      <div className="mx-auto p-5 md:p-6 lg:p-8 border border-gray-100 rounded-2xl shadow-lg bg-gray-50/50 backdrop-blur-sm">
        {/* Top heading row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
          <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold whitespace-pre-line shrink-0 md:max-w-[55%]">
            {heading}
          </h2>

          <p className="text-gray-600 max-w-md text-sm md:text-base">
            {description}
          </p>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6 py-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="
                bg-white rounded-xl px-3 py-5 md:px-4 md:py-6 lg:px-5 text-center
                border border-gray-100 hover:shadow-lg
                transition-shadow duration-300
                flex flex-col items-center justify-center
              "
            >
              <p className="text-[22px] sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-black">
                {stat.value}
              </p>
              <p className="text-[13px] sm:text-sm md:text-[15px] xl:text-base text-gray-700 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
