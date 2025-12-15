// components/TreatmentCostDependsOn.jsx
export default function TreatmentCostDependsOn() {
  const items = [
    {
      titleBold: "Type of",
      titleRest: "Procedure",
      icon: "🩺", // replace with your SVG/icon
    },
    {
      titleBold: "Severity of",
      titleRest: "the Disease",
      icon: "📊",
    },
    {
      titleBold: "Past Medical",
      titleRest: "Condition",
      icon: "👨‍⚕️",
    },
    {
      titleBold: "Contact",
      titleRest: "for exact cost",
      icon: "🎧",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Treatment Cost Depends On
      </h2>

      <div className="border border-emerald-400 rounded-3xl px-6 pt-6 pb-4 bg-white shadow-sm">
        {/* Top row of factors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center">
                <span className="text-3xl text-emerald-500">{item.icon}</span>
              </div>
              <div className="text-sm leading-snug">
                <p className="font-semibold text-gray-900">{item.titleBold}</p>
                <p className="text-gray-700">{item.titleRest}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom WhatsApp button */}
        <button className="mt-6 w-full bg-emerald-600 text-white font-semibold rounded-full py-3.5 flex items-center justify-center gap-2 text-lg hover:bg-emerald-700 transition">
          <span className="text-2xl"></span>
          <span>Chat with Expert</span>
        </button>
      </div>
    </section>
  );
}
