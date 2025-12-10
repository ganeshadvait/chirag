export default function StatsCard() {
  return (
    <section className="w-full py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl px-6 py-8">

        <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">

          <div className="px-4">
            <p className="text-3xl font-semibold text-green-600">24 hr</p>
            <p className="text-gray-700 mt-1">Discharge</p>
          </div>

          <div className="px-4">
            <p className="text-3xl font-semibold text-green-600">98%</p>
            <p className="text-gray-700 mt-1">Patient Satisfaction</p>
          </div>

          <div className="px-4">
            <p className="text-3xl font-semibold text-green-600">3 Days</p>
            <p className="text-gray-700 mt-1">Recovery</p>
          </div>

        </div>

      </div>
    </section>
  );
}
