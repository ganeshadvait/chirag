"use client";
import { useState } from "react";
import FormModal from "@/components/FormModal/FormModal";

export function useFormModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const FormModalComponent = () => (
    <FormModal isOpen={isOpen} onClose={closeModal} />
  );

  return { openModal, closeModal, FormModal: FormModalComponent };
}
