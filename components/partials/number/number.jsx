export default function StatsSection({
  
  aboveContetn = "",
  aboveContetna = "",
  heading,
  description,
  stats,
}) {
  return (
    <section className="w-full py-8 mb-0">
      {/* Above Content */}
        {aboveContetn && (
          <div className="flex flex-row items-center justify-between mb-6 text-gray-700 leading-relaxed bg-[#625587] p-6 rounded-lg shadow-lg">
            <div className="w-full sm:w-[70%] sm:pl-6 text-center sm:text-left">
              <h2 className="text-[16px] md:text-3xl font-semibold text-white mb-2">
                {aboveContetn}
              </h2>
              <h3 className="text-[14px] md:text-2xl font-medium text-white mb-4">
                {aboveContetna}
              </h3>
            </div>
            <div className="w-full sm:w-[30%] flex justify-center sm:justify-center">
              <img
                src="/fistula heilighted image .png"
                alt="Highlighted medical image of a fistula"
                className="w-[100px] md:w-[140px] max-w-xs sm:max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      <div className="mx-auto p-8 border border-gray-100 rounded-2xl shadow-lg bg-gray-50/50 backdrop-blur-sm">

        {/* Top heading row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <h2 className="text-3xl font-bold whitespace-pre-line">
            {heading}
          </h2>

          <p className="text-gray-600 max-w-md">
            {description}
          </p>
        </div>

        <hr className="my-6 bg-gray-100 text-gray-100" />

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 py-4 lg:flex lg:justify-between">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="
                min-w-[150px]
                max-[400px]:min-w-[130px]
                max-[330px]:min-w-[110px]
                sm:min-w-[200px]
                bg-white rounded-xl px-6 py-6 text-center
                border border-gray-100 hover:shadow-lg
                transition-shadow duration-300
              "

            >
              <p className="text-[24px] sm:text-3xl font-semibold text-black">
                {stat.value}
              </p>
              <p className="text-[14px] sm:text-[16px] text-gray-700 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
      
    </section>
  );
}
