export default function Dpatientloveuse({
  testimonials,
  StarRating,
  title = "Our Patients Say",
}) {
  return (
    <section id="reviews">
      <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#1a237e] mb-12">
            {title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-[0px 4px 10px 0px #5252521A
] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]  transition-shadow duration-300"
                style={{
                  borderRadius: "20px",
                }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div> */}

                  <StarRating rating={testimonial.rating} />

                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    "{testimonial.review}"
                  </p>

                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
