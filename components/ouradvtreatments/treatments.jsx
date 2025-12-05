export default function TreatmentCards({ heading, items }) {
  // const items = [
  //   {
  //     title: "Laser Treatment for Piles and Fissures",
  //     desc: "A pain-free, same-day procedure with faster recovery and minimal downtime.",
  //     icon: "👨‍⚕️",
  //   },
  //   {
  //     title: "Stapler Surgery for Piles",
  //     desc: "An innovative method that offers quick relief with reduced risk of recurrence.",
  //     icon: "🩺",
  //   },
  //   {
  //     title: "Fistula Treatment",
  //     desc: "Advanced surgical options like LIFT procedure, laser ablation, and more.",
  //     icon: "🏥",
  //   },
  // ];

  return (
    <section className="py-4 sm:py-8">
      <h2 className="text-center text-[#7966af] text-[20px] sm:text-3xl font-semibold mb-4 sm:mb-8">
        Our Advanced Treatments
      </h2>

      <div className="max-w-7xl mx-auto grid gap-4 sm:gap-8 md:grid-cols-3 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-3xl bg-[#F4E9D1] p-5 sm:p-10 text-center "
          >
            <div className="text-5xl m-3 sm:mb-6">{item.icon}</div>
            <h3 className="text-[16px] sm:text-xl font-semibold text-[#2D2A32] mb-4">
              {item.title}
            </h3>
            <p className="text-[#4C4855] text-[14px] sm:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
