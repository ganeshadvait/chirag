export default function RisksOfDelay() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-red-50 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">
        Risks of Delay in Piles Operation
      </h2>

      <ul className="space-y-3 text-gray-800">
        {[
          "Intolerable Pain",
          "Excessive Blood in Stool",
          "Risk of Severe Infection",
          "Prolapsed (Bulging) Piles",
          "Risk of Anaemia",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="h-2 w-2 bg-red-600 rounded-full mt-2 mr-3"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
