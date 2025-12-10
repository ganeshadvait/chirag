// components/WhyChooseHexa.jsx
export default function WhyChooseHexa() {
  const points = [
    "Advanced Laser Techniques",
    "Expert Surgeons Team",
    "Zero Waiting Time",
    "Affordable Treatment Options",
    "24/7 Patient Support",
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
        Why Choose HexaHealth for Piles Treatment in Hyderabad?
      </h2>

      <div className="bg-emerald-50 rounded-3xl px-6 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
        <ul className="space-y-3 text-lg text-gray-900">
          {points.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-emerald-600"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
