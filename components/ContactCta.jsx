"use client";

import { useSyncExternalStore } from "react";
import { useContactPhone } from "@/hooks/contact";
import { WHATSAPP_URL, isMobileDevice, toTel } from "@/constants/contact";

const subscribe = () => () => {};

/* A real <a> so the browser shows the target URL on hover.
   Desktop → WhatsApp (new tab), mobile → call the page's number.
   Server render assumes desktop; the client switches to tel: on mobile. */
export default function ContactCta({ children, ...props }) {
  const phone = useContactPhone();
  const isMobile = useSyncExternalStore(subscribe, isMobileDevice, () => false);

  if (isMobile) {
    return (
      <a href={toTel(phone)} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
