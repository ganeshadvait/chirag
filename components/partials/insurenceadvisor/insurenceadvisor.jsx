// components/InsuranceAdvisorSection.jsx
export default function InsuranceAdvisorSection() {
  return (
    <section className="w-full max-w-5xl mx-auto  px-0 md:px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card 1 – Insurance Coverage */}
        <div className="flex flex-col rounded-3xl border border-orange-200 bg-orange-50 px-6 md:px-10 py-6 shadow-sm gap-4">

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">
              Check <span className="text-orange-500">Insurance Coverage</span>
            </h2>

            <p className="mt-3 text-gray-700 text-lg leading-relaxed">
              Find out if this treatment is covered in your insurance policy or not.
            </p>

            <img
              src="/images/insurance-family.png"
              alt="Insurance coverage illustration"
              className="mt-6 w-56"
            />
          </div>

          {/* Button pinned to bottom */}
          <button className="mt-auto rounded-full bg-orange-500 px-7 py-3.5 text-white font-semibold text-lg shadow hover:bg-orange-600 transition">
            <span className="mr-2 text-xl"></span>
            Check Insurance Coverage
          </button>
        </div>


        {/* Card 2 – Health Advisor */}
        <div className="flex flex-col rounded-3xl border border-orange-200 bg-orange-50 px-6 md:px-10 py-6 shadow-sm gap-4">

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">
              Talk To <span className="text-orange-500">Health Advisor</span>
            </h2>

            <p className="mt-3 text-gray-700 text-lg leading-relaxed">
              Find the best hospitals and best doctors for treatment.
            </p>

            <img
              src="/images/health-advisor.png"
              alt="Health advisor illustration"
              className="mt-6 w-56"
            />
          </div>

          {/* Button pinned to bottom */}
          <button className="mt-auto rounded-full bg-orange-500 px-7 py-3.5 text-white font-semibold text-lg shadow hover:bg-orange-600 transition flex items-center justify-center">
            <span className="mr-2 text-xl"></span>
            Call Advisor Now
          </button>
        </div>


      </div>
    </section>
  );
}
