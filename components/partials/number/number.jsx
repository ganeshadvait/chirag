export default function StatsSection() {
  return (
    <section className="w-full py-8">
      <div className=" mx-auto p-8 border border-gray-100 rounded-2xl shadow-lg bg-gray-50/50 backdrop-blur-sm">
        {/* Top heading row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <h2 className="text-3xl font-bold">
            Trusted by Patients <br></br> Worldwide
          </h2>

          <p className="text-gray-600 max-w-md">
            Our healthcare efficiency, faster discharge times, and superior
            recovery procedures help patients heal quickly and safely.
          </p>
        </div>

        <hr className="my-6 bg-gray-100 text-gray-100" />

        {/* Horizontal scroll stats (similar to logo slider) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:justify-between gap-6 py-4">
          {/* Card 1 */}
          <div className="min-w-[150px] sm:min-w-[200px] bg-white  rounded-xl px-6 py-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <p className="text-[24px] sm:text-3xl font-semibold !text-black">24 hr</p>
            <p className="text-[14px] sm:text-[16px] text-gray-700 mt-1">Discharge</p>
          </div>

          {/* Card 2 */}
          <div className="min-w-[150px] sm:min-w-[200px] bg-white  rounded-xl px-6 py-6 text-center border border-gray-100  hover:shadow-lg transition-shadow duration-300">
            <p className="text-[24px] sm:text-3xl font-semibold !text-black">98%</p>
            <p className="text-[14px] sm:text-[16px] text-gray-700 mt-1">Patient Satisfaction</p>
          </div>

          {/* Card 3 */}
          <div className="min-w-[150px] sm:min-w-[200px] bg-white  rounded-xl px-6 py-6 text-center border border-gray-100  hover:shadow-lg transition-shadow duration-300">
            <p className="text-[24px] sm:text-3xl font-semibold !text-black">3 Days</p>
            <p className="text-[14px] sm:text-[16px] text-gray-700 mt-1">Recovery Time</p>
          </div>
          <div className="min-w-[150px] sm:min-w-[200px] bg-white  rounded-xl px-6 py-6 text-center border border-gray-100  hover:shadow-lg transition-shadow duration-300">
            <p className="text-[24px] sm:text-3xl font-semibold !text-black">5 Days</p>
            <p className="text-[14px] sm:text-[16px] text-gray-700 mt-1">Average Stay</p>
          </div>
        </div>
      </div>
    </section>
  );
}
