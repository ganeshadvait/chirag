export default function StatsSection({
  heading,
  description,
  stats,
}) {
  return (
    <section className="w-full py-8">
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
