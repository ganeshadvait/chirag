"use client";
import { useFormModal } from "@/hooks/useFormModal";

export default function TreatmentCostDependsOn({ heading, items, ctaText }) {
  const { openModal, FormModal } = useFormModal();

  return (
    <section className="w-full max-w-5xl mx-auto px-0 md:px-4 py-6">
      <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#625587] mb-8 text-center">
        {heading}
      </h2>

      <div className="border border-emerald-400 rounded-3xl px-6 pt-6 pb-4 bg-white shadow-sm">
        {/* Factors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.titleBold}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div className="text-sm leading-snug">
                <p className="font-semibold text-gray-900">{item.titleBold}</p>
                <p className="text-gray-700">{item.titleRest}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={openModal}
          className="mt-6 w-full bg-emerald-600 text-white font-semibold rounded-full py-3.5 flex items-center justify-center gap-2 text-lg hover:bg-emerald-700 transition"
        >
          <span>{ctaText}</span>
        </button>
      </div>

      {/* Form Modal */}
      <FormModal />
    </section>
  );
}
