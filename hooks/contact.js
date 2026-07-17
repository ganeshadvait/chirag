// contact.js

export const contactAction = () => {
  if (typeof window === "undefined") return;

  // Strip a trailing slash so "/page/" still matches "/page".
  const pathname = window.location.pathname.replace(/\/$/, "");

  // ─── Special pages → 08065916427 ────────────────────────────
  const specialPages = new Set([
    "/piles/piles-laser-treatment-cost-in-Bangalore",
    "/fistula/anal-fistula-surgery-cost-in-Bangalore",
  ]);

  // ─── Special pages → 08065916418 ────────────────────────────
  const specialPagesTwo = new Set([
    "/best-pilonidal-sinus-treatment-in-bangalore",
    "/best-rectal-prolapse-treatment-in-bangalore",
    "/expert-pediatric-anal-care-treatment-in-bangalore",
  ]);

  // Decide phone number
  let phoneNumber = "08065916415"; // default
  if (specialPages.has(pathname)) {
    phoneNumber = "08065916427";
  } else if (specialPagesTwo.has(pathname)) {
    phoneNumber = "08065916418";
  }

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // Mobile → Call
    window.location.href = `tel:${phoneNumber}`;
  } else {
    // Desktop → WhatsApp
    window.open("https://wa.me/919380498256", "_blank");
  }
};