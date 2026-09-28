"use client";

import { useState } from "react";
import FormModal from "@/components/FormModal/FormModal";
import { toTel } from "@/constants/contact";
import { useSupportPhone } from "@/hooks/useSupportPhone";

export function useFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const supportPhone = useSupportPhone();

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
