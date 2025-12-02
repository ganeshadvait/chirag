export default function StatsSection() {
  const stats = [
    { value: "38+", label: "Years of experience" },
    { value: "180K+", label: "Patients treated" },
    { value: "12", label: "Unique procedures" },
    { value: "99.5%", label: "Success rate" },
  ];

  return (
    <section className="bg-[#C5B4F5] py-6 sm:py-12 my-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center px-6 py-8">
        {stats.map((item, idx) => (
          <div key={idx}>
            <h3 className=" text-[24px] sm:text-5xl font-semibold text-black">
              {item.value}
            </h3>
            <p style={{
                color: "black",
            }} className="text-[16px] sm:text-lg font-semibold !text-black mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
