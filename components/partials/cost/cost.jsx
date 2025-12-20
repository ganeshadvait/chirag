import Image from "next/image";

export default function Cost({
  title,
  points,
  buttonText,
  imageSrc,
}) {
  return (
    <div className="w-full bg-teal-50 rounded-2xl p-6 md:p-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Section */}
        <div className="flex flex-col items-start gap-4 max-w-md">
          <div>
            <h2 className="text-[30px] sm:text-[32px] font-semibold text-gray-900 mb-4">
              {title}
            </h2>

            <ul className="mt-2 text-gray-600 text-[16px] sm:text-[18px] list-disc list-outside pl-2 sm:pl-6 space-y-2">
              {points?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <button
            className="mt-3 rounded-full bg-[#625587] px-8 py-4 text-sm font-medium text-white hover:bg-teal-600 transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)] hover:ml-4"
          >
            {buttonText}
          </button>
        </div>

        {/* Right Section */}
        {imageSrc && (
          <div className="hidden md:block w-full max-w-md rounded-2xl p-2 text-center">
            <Image
              src={imageSrc}
              alt="Surgery Cost"
              width={250}
              height={200}
              className="mx-auto mb-4 rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
