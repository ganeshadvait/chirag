"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import FormModal from "@/components/FormModal/FormModal";
import {
  SUPPORT_PHONE_DEFAULT,
  SUPPORT_PHONE_FISTULA,
  toTel,
} from "@/constants/contact";

export function useFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const supportPhone = useMemo(() => {
    // match ONLY this exact route
    if (pathname === "/fistula/anal-fistula-surgery-cost-in-Bangalore") {
      return SUPPORT_PHONE_FISTULA;
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
    supportPhone, // optional: expose it if you want to display it
  };
}
