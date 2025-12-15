// components/AiHealthBanner.jsx
import Image from 'next/image';
export default function AiHealthBanner() {
  return (
   <>
   <section className='p-6'>
    <div className="w-full border border-blue-300 rounded-3xl bg-blue-50 flex flex-col md:flex-row items-center justify-between rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
    
            {/* Left Section */}
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex h-22 w-22 items-center justify-center rounded-full bg-white ">
                <span className="text-xl">🏪</span>
              </div>
    
              <div>
                <h2 className="text-[32px] font-semibold text-gray-900 mb-4">
                  Check Surgery Cost
                </h2>
                <p className="mt-2 text-gray-600 text-[18px]">
                  Find the total cost of Surgery at the best hospitals in your city.
                </p>
              </div>
            </div>
    
            {/* Right Card */}
            <div className="w-full max-w-md rounded-2xl  p-2 text-center">
              <Image
                src="/chiraggpt.png"
                alt="Franchise Offer"
                width={150}
                height={100}
                className="mx-auto mb-4 rounded-lg"
              />
    
              <button
                className="mt-3 rounded-full bg-blue-500 px-8 py-4 text-sm font-medium text-white hover:bg-blue-600 transition transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)] hover:ml-4"
              >
                Calculate Surgery Cost
              </button>
            </div>
    
    
          </div>
        </div></section></>
    
  );
}
