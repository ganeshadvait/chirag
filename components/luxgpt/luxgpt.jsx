"use client";
// import "./luxgptstyles.css";
import Image from "next/image";
import { useState } from "react";
// import { handleWhatsappConnection } from "../../careconsole";
import SpinnerCircleDemo from "../loader";

export default function Luxgpt() {
  const [showModal, setShowModal] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [serviceTitle, setServiceTitle] = useState("");
  const [onClosee, setClosee] = useState(false);

  const runModel = () => {
   alert("Model feature is coming soon!");  
  };
  return (
    <>
      <section className="Luxgpt_section">
        <div className="md:w-1/2 text-center md:text-left left_Container">
          <h2 className="text_luxgot font-500 text-white">
            <span className="text-yellow-400 ">LUXGPT</span> : Your One <br />
            <span className="gpttext_span_mobile text-white">
              Message Away<br></br> Companion
            </span>
            <span className="gpttext_span_desktop text-white">
              Message Away Companion
            </span>
          </h2>
          <p className="mt-7 text-lg leading-relaxed luxgpt_para">
            Healthcare, Simplified—Everything You Need In One Place. From
            Sharing Medical Reports To Getting Answers About Insurance Or Doctor
            Consultations, Just Send A Quick Text Or Voice Note For Instant
            Support.
          </p>

          <div className="mt-6 flex items-center justify-center md:justify-start space-x-2 bg-white rounded-full px-4 py-2 w-fit">
            <input
              type="text"
              id="messageInput"
              placeholder="Ask Me Anything"
              className="bg-transparent text-gray-700 focus:outline-none"
            />
            <button
              onClick={() => {
                handleWhatsappConnection("LuxGPT");
                setShowModal(true);
                setClosee(true);
                runModel();
              }}
              // onClick={() => {
              //   window.location.href = "https://wa.me/917969084444";
              // }}
              className="bg-[#964F9C] text-white p-2 rounded-full w-10 h-10"
            >
              ➜
            </button>
          </div>
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0 second_box">
          {/* <Image
            src="/AskGPTAnything.png"
            alt="LUXGPT Chat"
            className="w-[300px] h-[320px] rounded-xl object-fill gpt_image"
            width={500}
            height={320} // Updated height
          /> */}
          <Image
            src="/AskGPTAnything.png"
            alt="LUXGPT Chat"
            width={500}
            height={320}
            className="w-[300px] h-auto rounded-xl gpt_image"
          />
        </div>
        {/* Modal with Spinner and Fallback */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/20 z-50">
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center relative">
              <button
                className="absolute right-3 top-3 text-gray-900 hover:text-gray-600"
                onClick={() => setShowModal(false)}
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

              <SpinnerCircleDemo />
              <p className="mt-4 text-gray-700">Chat on WhatsApp...</p>

              {showFallback && (
                <a
                  href="https://wa.me/917969084444?text=Hi, I'm interested in LuxGPT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border rounded-xl p-4 mt-2 w-full max-w-md"
                  style={{ border: "1px solid #dedede" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      {/* WhatsApp Icon */}
                      <svg
                        viewBox="0 0 40 40"
                        height="24"
                        width="24"
                        fill="none"
                      >
                        <rect
                          width="40"
                          height="40"
                          rx="2"
                          fill="#25D366"
                        ></rect>
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
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600">
                    Chat ↗
                  </span>
                </a>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
