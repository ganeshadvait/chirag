// components/InsuranceAdvisorSection.jsx
export default function InsuranceAdvisorSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8 space-y-5">
      {/* Card 1 – Insurance Coverage */}
      <div className="flex flex-col md:flex-row items-center justify-between rounded-3xl border border-orange-200 bg-orange-50 px-6 md:px-10 py-6 shadow-sm">
        {/* Text */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            Check <span className="text-orange-500">Insurance Coverage</span>
          </h2>
          <p className="mt-3 text-gray-700 text-lg leading-relaxed">
            Find out if this treatment is covered in your insurance policy or not.
          </p>

          <button className="mt-5 inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 text-white font-semibold text-lg shadow hover:bg-orange-600 transition">
            Check Insurance Coverage
          </button>
        </div>

        {/* Illustration */}
        <div className="mt-6 md:mt-0 md:ml-6">
          <img
            src="/images/insurance-family.png" // replace with your image
            alt="Insurance coverage illustration"
            className="w-56 md:w-64 h-auto"
          />
        </div>
      </div>

      {/* Card 2 – Health Advisor */}
      <div className="flex flex-col md:flex-row items-center justify-between rounded-3xl border border-orange-200 bg-orange-50 px-6 md:px-10 py-6 shadow-sm">
        {/* Text */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            Talk To <span className="text-orange-500">Health Advisor</span>
          </h2>
          <p className="mt-3 text-gray-700 text-lg leading-relaxed">
            Find the best hospitals and best doctors for treatment.
          </p>

          <button className="mt-5 inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 text-white font-semibold text-lg shadow hover:bg-orange-600 transition">
            <span className="mr-2 text-xl">📞</span>
            Call Advisor Now
          </button>
        </div>

        {/* Illustration */}
        <div className="mt-6 md:mt-0 md:ml-6">
          <img
            src="/images/health-advisor.png" // replace with your image
            alt="Health advisor illustration"
            className="w-56 md:w-64 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
