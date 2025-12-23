"use client";
import Image from "next/image";
import { useFormModal } from "@/hooks/useFormModal";

export default function AiHealthBanner({ heading, buttonText, imageSrc }) {
  const { openModal, FormModal } = useFormModal();

  return (
    <section className="px-0 md:p-6">
      <div className="w-full border border-blue-300 rounded-3xl bg-blue-50 flex flex-col md:flex-row items-center justify-between ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          {/* Left Section */}
          <div className="flex flex-col items-start gap-4 w-full md:basis-7/10 p-6 md:p-8">
            <h2 className="text-[32px] font-bold text-gray-900">{heading}</h2>

            <button
              onClick={openModal}
              className="mt-3 rounded-full bg-[#625587] px-8 py-4 text-sm font-medium text-white hover:bg-white hover:text-black hover:border border-[#625587] transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)] hover:ml-4"
            >
              {buttonText}
            </button>
          </div>

          {/* Right Section */}
          {imageSrc && (
            <div className="hidden md:block md:basis-3/10 rounded-2xl text-center">
              <div className="relative mx-auto w-[90%] aspect-square">
                <Image
                  src={imageSrc}
                  alt="Health CTA"
                  fill
                  className="rounded-lg "
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Form Modal */}
      <FormModal />
    </section>
  );
}
