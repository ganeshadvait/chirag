// contact.js
import { usePathname } from "next/navigation";
import {
  WHATSAPP_URL,
  getPhoneForPath,
  isMobileDevice,
  toTel,
} from "@/constants/contact";

// Phone number for the current page (08065916415 / 08065916418 / 08065916427).
export const useContactPhone = () => getPhoneForPath(usePathname());

export const contactAction = () => {
  if (typeof window === "undefined") return;

  const phoneNumber = getPhoneForPath(window.location.pathname);

  if (isMobileDevice()) {
    // Mobile → Call
    window.location.href = toTel(phoneNumber);
  } else {
    // Desktop → WhatsApp
    window.open(WHATSAPP_URL, "_blank");
  }
};
