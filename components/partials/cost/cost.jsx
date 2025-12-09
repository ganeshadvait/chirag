import Image from "next/image";

export default function SurgeryCostCTA() {
  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto bg-[#FFF8F0] border border-[#E4C8A0] rounded-2xl p-4 md:p-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Check <span className="text-orange-600">Surgery Cost</span>
          </h2>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Find the total cost of Surgery at the best hospitals in your city.
          </p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 transition text-white font-semibold rounded-full px-8 py-3 text-lg">
            Calculate Surgery Cost
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/chiraggpt.png" // Replace with your actual file path
            alt="Surgeons performing surgery illustration"
            width={250}
            height={150}
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
