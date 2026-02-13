"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import FormModal from "@/components/FormModal/FormModal";
import { SUPPORT_PHONE_DEFAULT, toTel } from "@/constants/contact";

const SUPPORT_PHONE_BLR = "08065916427";

const SUPPORT_PHONE_ROUTES = new Set([
  "/piles/piles-laser-treatment-cost-in-Bangalore",
  "/fistula/anal-fistula-surgery-cost-in-Bangalore",
]);

export function useFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const supportPhone = useMemo(() => {
    // match ONLY these exact routes
    if (pathname && SUPPORT_PHONE_ROUTES.has(pathname)) {
      return SUPPORT_PHONE_BLR;
    }
    return SUPPORT_PHONE_DEFAULT;
  }, [pathname]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Opens modal on desktop, initiates call on mobile
  const handleButtonClick = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      window.location.href = toTel(supportPhone);
    } else {
      openModal();
    }
  };

  const FormModalComponent = () => (
    <FormModal isOpen={isOpen} onClose={closeModal} />
  );

  return {
    openModal,
    closeModal,
    handleButtonClick,
    FormModal: FormModalComponent,
    supportPhone,
  };
}
