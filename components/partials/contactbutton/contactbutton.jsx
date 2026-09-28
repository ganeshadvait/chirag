"use client";

import { contactAction } from "@/hooks/contact";

// Small client island so sections using it can stay Server Components.
export default function ContactButton({ className, children }) {
  return (
    <button onClick={contactAction} className={className}>
      {children}
    </button>
  );
}
