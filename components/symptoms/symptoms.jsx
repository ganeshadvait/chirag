export default function PilesSymptoms({ heading, symptoms, icon }) {
  return (
    <section className=" my-4 sm:my-8 py-10">
      <h2 className="text-center text-[#7966af] text-[20px] sm:text-3xl font-semibold mb-5 sm:mb-10">
        {heading}
      </h2>

      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6">
        {symptoms.map((symptom, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-[#ffffff] p-4 sm:p-6 rounded-3xl shadow-sm border border-gray-100  hover:shadow-lg transition-shadow duration-300 hover:border-[#7966af]"
          >
            <span className="text-3xl text-[#6A5A8A]">{icon}</span>

            <p className="font-semibold text-[#2B2A2F] leading-snug">
              {symptom}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
