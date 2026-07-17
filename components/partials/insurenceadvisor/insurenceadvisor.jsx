"use client";
import { useFormModal } from "@/hooks/useFormModal";
import { usePathname } from "next/navigation";
import { contactAction } from "@/hooks/contact";

export default function InsuranceAdvisorSection({ cards }) {
  const { handleButtonClick, FormModal } = useFormModal();
  const pathname = usePathname();

  // Pages that should use the alternate number
  const specialPages = new Set([
    "/piles/piles-laser-treatment-cost-in-Bangalore",
    "/fistula/anal-fistula-surgery-cost-in-Bangalore",
  ]);

  // Page trees that should use the 08065916418 number (matches base path and any /[slug] under it)
  const altPhonePrefixes = [
    "/best-pilonidal-sinus-treatment-in-bangalore",
    "/best-rectal-prolapse-treatment-in-bangalore",
    "/expert-pediatric-anal-care-treatment-in-bangalore",
  ];

  const matchesAltPrefix = altPhonePrefixes.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  const phoneNumber = specialPages.has(pathname)
    ? "08065916427"
    : matchesAltPrefix
    ? "08065916418"
    : "08065916415";

  const isMobile = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  const callNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleCTAClick = (idx) => {
    // First card:
    // Desktop -> open modal
    // Mobile  -> call
    if (idx === 0) {
      if (isMobile()) callNow();
      else contactAction();
      return;
    }

    // Second card:
    // Desktop + Mobile -> call
    if (idx === 1) {
      callNow();
      return;
    }
  };

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
                  className="mt-6 w-56 mx-auto"
                />
              )}
            </div>

            <button
              onClick={() => handleCTAClick(idx)}
              className="mt-auto rounded-full bg-[#625587] px-7 py-3.5 text-white font-semibold text-lg shadow hover:bg-white hover:text-black hover:border border-[#625587] transition flex items-center justify-center"
            >
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>

      <FormModal />
    </section>
  );
}
