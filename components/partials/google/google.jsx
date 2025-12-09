// components/PatientReviews.jsx
export default function PatientReviews() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        What our Patients Say
      </h2>

      {/* Card */}
      <div className="border border-emerald-400 rounded-3xl p-6 shadow-sm bg-white space-y-4">

        {/* Google Reviews Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-1 text-xl font-semibold">
              <img
                src="/images/google-logo.png" // Replace with your Google logo
                alt="Google"
                className="h-7"
              />
              <span className="text-gray-900">Reviews</span>
            </div>

            {/* Rating Row */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-2xl font-bold text-gray-900">4.8</span>

              {/* Stars */}
              <div className="flex text-yellow-400 text-xl">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <span className="text-gray-600 text-sm">
                (3,222 Reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Book Appointment Button */}
        <button className="w-full bg-emerald-600 text-white rounded-full py-4 text-lg font-semibold flex items-center justify-center gap-3 hover:bg-emerald-700 transition">
          <span className="text-2xl">📅</span>
          Book Appointment
        </button>

      </div>
    </section>
  );
}
