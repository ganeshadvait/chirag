// components/AiHealthBanner.jsx
export default function AiHealthBanner() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6">
      <div className="border border-blue-300 rounded-3xl bg-blue-50 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">

        {/* Left Text Section */}
        <div className="max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Your Health, <span className="text-blue-600">Simplified by AI</span>
          </h2>

          <p className="text-gray-700 mt-3 text-lg leading-relaxed">
            Get instant, doctor-backed insights on symptoms,
            treatments, medicines & more.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-full px-8 py-3 text-lg shadow">
            Check Now
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:ml-6">
          <img
            src="/images/ai-health-bot.png"   // replace with your actual image
            alt="AI Health Assistant"
            className="w-40 md:w-56 h-auto"
          />
        </div>

      </div>
    </section>
  );
}
