"use client";
import { useFormModal } from "@/hooks/useFormModal";

export default function ExampleUsage() {
  const { openModal, FormModal } = useFormModal();

  return (
    <div>
      {/* Trigger from anywhere - Button 1 */}
      <button
        onClick={openModal}
        className="bg-[#F8B956] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e5a742] transition"
      >
        Book Consultation
      </button>

      {/* Trigger from anywhere - Button 2 */}
      <button
        onClick={openModal}
        className="bg-[#625587] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#514771] transition mt-4"
      >
        Get Free Checkup
      </button>

      {/* Another trigger */}
      <div onClick={openModal} className="cursor-pointer">
        <p className="text-blue-600 underline">Click here to book</p>
      </div>

      {/* Modal Component */}
      <FormModal />
    </div>
  );
}
