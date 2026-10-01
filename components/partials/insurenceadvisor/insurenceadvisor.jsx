"use client";
// import { useFormModal } from "@/hooks/useFormModal";
import ContactCta from "@/components/ContactCta";
import { useContactPhone } from "@/hooks/contact";
import { toTel } from "@/constants/contact";

const buttonClass =
  "mt-auto rounded-full bg-[#625587] px-7 py-3.5 text-white font-semibold text-lg shadow hover:bg-white hover:text-black hover:border border-[#625587] transition flex items-center justify-center";

export default function InsuranceAdvisorSection({ cards }) {
  // const { handleButtonClick, FormModal } = useFormModal();
  const phoneNumber = useContactPhone();

  return (
    <section className="w-full max-w-5xl mx-auto px-0 md:px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-3xl bg-white border border-gray-100 px-6 md:px-10 py-6 shadow-sm gap-4"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 leading-snug">
                {card.titlePrefix}{" "}
                <span className="text-[#625587]">{card.titleHighlight}</span>
              </h2>

              <p className="mt-3 text-gray-700 text-lg leading-relaxed">
                {card.description}
              </p>

              {card.image && (
                <img
                  src={card.image}
                  alt={card.imageAlt || card.titleHighlight}
                  loading="lazy"
                  decoding="async"
                  className="mt-6 w-56 mx-auto"
                />
              )}
            </div>

            {/* First card: desktop → WhatsApp, mobile → call.
                Second card ("Call Our Advisors"): call on desktop + mobile. */}
            {idx === 1 ? (
              <a href={toTel(phoneNumber)} className={buttonClass}>
                {card.buttonText}
              </a>
            ) : (
              <ContactCta className={buttonClass}>{card.buttonText}</ContactCta>
            )}
          </div>
        ))}
      </div>

      {/* <FormModal /> */}
    </section>
  );
}
