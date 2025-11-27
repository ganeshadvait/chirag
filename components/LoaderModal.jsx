// components/LoaderModal.jsx
import React from "react";
import SpinnerCircleDemo from "./loader"; // Adjust the import path as necessary

export default function LoaderModal({
  serviceTitle,
  showFallback,
  onClose = () => { },
}) {
  const whatsappLink = `https://wa.me/917969084444?text=Hi, I'm interested in ${serviceTitle}`;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/20 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center relative">
        {typeof onClose === "function" && (
          <button
            className="absolute right-3 top-3 text-gray-900 hover:text-gray-600"
            onClick={() => {
              console.log("Close clicked!");
              onClose();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        <SpinnerCircleDemo />
        <p className="mt-4 text-gray-700">Chat on WhatsApp...</p>

        {showFallback && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border rounded-xl p-4 mt-2 w-full max-w-md"
            style={{
              border: "1px solid #dedede",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <svg
                  viewBox="0 0 40 40"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                >
                  <rect width="40" height="40" rx="2" fill="#25D366"></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.16 19.89C7.16 12.81 12.95 7.06 20.05 7.06C23.5 7.06 26.74 8.4 29.17 10.82C31.6 13.24 32.94 16.47 32.94 19.9C32.94 26.97 27.16 32.73 20.05 32.73C17.95 32.72 15.88 32.21 14.04 31.24L7.58 32.93C7.27 33.01 6.99 32.72 7.07 32.41L8.8 26.15C7.73 24.24 7.16 22.09 7.16 19.89ZM20.05 30.44C18.16 30.44 16.32 29.93 14.71 28.98L14.32 28.76L10.36 29.79L11.42 25.94L11.17 25.55C10.12 23.89 9.56 21.97 9.56 20C9.57 14.24 14.27 9.56 20.05 9.56C22.85 9.56 25.48 10.65 27.46 12.62C29.44 14.59 30.53 17.22 30.53 20C30.53 25.76 25.82 30.44 20.05 30.44Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">Open in WhatsApp</p>
                <p className="text-xs text-gray-600">
                  If it doesn’t open automatically, click here.
                </p>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600"
            >
              Chat ↗
            </a>
          </a>
        )}

        {/* Add QR code here */}
        {/* <div className="hidden md:block text-left mt-6 mx-auto">
          <img
            src="/Lux QR WhatsApp.avif"
            alt="Lux Whatsapp QR Code"
            className="w-40 h-40 mx-auto"
          />
          <p className="text-xs text-gray-500 mt-2 text-center">
            Scan the Q  R code to open WhatsApp
          </p>
        </div> */}
      </div>
    </div>

  );
}
