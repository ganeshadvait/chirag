"use client";
import { useState } from "react";
import FormModal from "@/components/FormModal/FormModal";
import { SUPPORT_PHONE_TEL } from "@/constants/contact";

export function useFormModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Opens modal on desktop, initiates call on mobile
  const handleButtonClick = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      window.location.href = SUPPORT_PHONE_TEL;
    } else {
      openModal();
    }
  };

  const FormModalComponent = () => (
    <FormModal isOpen={isOpen} onClose={closeModal} />
  );

  return { openModal, closeModal, handleButtonClick, FormModal: FormModalComponent };
}
