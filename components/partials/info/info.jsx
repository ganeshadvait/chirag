// components/LaserPilesInfo.jsx
export default function LaserPilesInfo() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6">
      <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-6 md:p-8">

        {/* About Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          About Laser Piles Operation
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          In laser piles operation, a special laser is used to shrink the pile mass,
          resulting in reduced swelling and discomfort. This advanced technique provides
          effective treatment with minimal bleeding.
        </p>

        {/* Advantages Section */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Advantages of Laser Operation for Piles
        </h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-6">
          <li>Minimal pain and discomfort</li>
          <li>Quicker recovery time</li>
          <li>Reduced risk of complications</li>
          <li>Early return to daily activities</li>
        </ol>

        {/* Cost Section */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Piles Laser Operation Cost in Hyderabad
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Cost of piles operation depends on the following:
        </p>

        <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-6">
          <li>Hospital reputation</li>
          <li>Doctor&apos;s expertise</li>
          <li>Grades of Piles (1,2,3,4)</li>
          <li>Procedure type (laser, stapler, open)</li>
          <li>Any pre-existing medical conditions</li>
        </ol>

        {/* Read More Link */}
        <a
          href="#"
          className="text-emerald-600 font-medium hover:underline text-lg"
        >
          read more
        </a>
      </div>
    </section>
  );
}
