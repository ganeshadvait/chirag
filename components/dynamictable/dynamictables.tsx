"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HospitalComparisonProps {
  theading: string;
  title: string;
  description: React.ReactNode;
  points: string[];

  /** MEDIA PROPS */
  imageSrc?: string;
  videoSrc?: string;
}

export default function HospitalComparison({
  theading,
  title,
  description,
  points,
  imageSrc,
  videoSrc,
}: HospitalComparisonProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const safeImageSrc =
    imageSrc && imageSrc.startsWith("/")
      ? imageSrc
      : "/ladypilestypes.png";

  return (
    <section className="w-[95%] md:w-[96%] max-w-[1500px] mx-auto py-4">
      {/* MAIN HEADING */}
      <h2 className="table_heading text-center text-xl font-bold text-[#625587]">
        {theading}
      </h2>

      <div className="tablevideo fade-in mt-6 gap-8 flex flex-col lg:flex-row items-center">
        {/* ================= MEDIA SECTION ================= */}
        <div className="w-full lg:w-1/2 flex justify-center">
          {imageSrc ? (
            <div className="w-full max-w-[520px] h-[240px] lg:h-[280px] relative rounded-lg overflow-hidden">
              <Image
                src={safeImageSrc}
                alt="Treatment visual"
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : videoSrc ? (
            <video
              className="w-full max-w-[520px] h-[240px] lg:h-[280px] rounded-lg"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src={videoSrc} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          ) : null}
        </div>

        {/* ================= INFO SECTION ================= */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h3 className="text-[20px] sm:text-2xl md:text-3xl font-semibold text-[#6A5A8A] mb-4">
            {title}
          </h3>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            {description}
          </p>

          <ul className="space-y-4 list-disc marker:text-[#6A5A8A] marker:text-[20px] pl-6">
            {points.map((point, index) => (
              <li
                key={index}
                className="text-[16px] sm:text-lg font-medium text-gray-900 leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
