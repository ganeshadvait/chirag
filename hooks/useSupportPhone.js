"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { SUPPORT_PHONE_DEFAULT } from "@/constants/contact";

const SUPPORT_PHONE_BLR = "08065916427";

const SUPPORT_PHONE_ROUTES = new Set([
  "/piles/piles-laser-treatment-cost-in-Bangalore",
  "/fistula/anal-fistula-surgery-cost-in-Bangalore",
]);

// Lightweight hook for components that only need the phone number,
// so they don't pull the FormModal bundle in through useFormModal.
export function useSupportPhone() {
  const pathname = usePathname();

  return useMemo(() => {
    // match ONLY these exact routes
    if (pathname && SUPPORT_PHONE_ROUTES.has(pathname)) {
      return SUPPORT_PHONE_BLR;
    }
    return SUPPORT_PHONE_DEFAULT;
  }, [pathname]);
}
