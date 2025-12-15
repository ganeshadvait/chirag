// components/AiHealthBanner.jsx
import Image from 'next/image';
export default function AiHealthBanner() {
  return (
    <>
      <section className='px-0 md:p-6'>
        <div className="w-full border border-blue-300 rounded-3xl bg-blue-50 flex flex-col md:flex-row items-center justify-between rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">

            {/* Left Section - 70% */}
            <div className="flex flex-col items-start gap-4 w-full md:basis-7/10">

              <div>
                <h2 className="text-[32px] font-700 text-gray-900">
                  Your Health Matters – Schedule Your Visit
                </h2>
              </div>
              <button
                className="mt-3 rounded-full bg-blue-500 px-8 py-4 text-sm font-medium text-white hover:bg-blue-600 transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)] hover:ml-4"
              >
                Calculate Surgery Cost
              </button>
            </div>

            {/* Right Card - 30% */}
            <div className="w-full md:basis-3/10 rounded-2xl p-2 text-center">
              <Image
                src="/chiraggpt.png"
                alt="Franchise Offer"
                width={150}
                height={100}
                className="mx-auto mb-4 rounded-lg"
              />
            </div>

          </div>

        </div></section></>

  );
}
