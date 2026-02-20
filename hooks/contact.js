// contact.js

export const contactAction = () => {
  if (typeof window === "undefined") return;

  const pathname = window.location.pathname;

  // Special pages
  const specialPages = new Set([
    "/piles/piles-laser-treatment-cost-in-Bangalore",
    "/fistula/anal-fistula-surgery-cost-in-Bangalore",
  ]);

  // Decide phone number
  const phoneNumber = specialPages.has(pathname)
    ? "08065916427"
    : "08065916415";

  const isMobile = /Android|iPhone|iPad|iPod/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    // Mobile → Call
    window.location.href = `tel:${phoneNumber}`;
  } else {
    // Desktop → WhatsApp
    window.open("https://wa.me/919019954658", "_blank");
  }
};