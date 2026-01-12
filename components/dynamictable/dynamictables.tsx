"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HospitalComparisonProps {
  theading: string;
  ConditionVideo: string;
  title: string;
  description: React.ReactNode;
  points: string[];
  imageSrc?: string;
}

export default function HospitalComparison({
  theading,
  ConditionVideo,
  title,
  description,
  points,
  imageSrc,
}: HospitalComparisonProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🔥 prevents hydration mismatch

  const isLadyPiles = pathname?.includes("ladypiles");

  const safeImageSrc =
    imageSrc && imageSrc.startsWith("/")
      ? imageSrc
      : "/ladypilestypes.png";

  return (
    <section className="w-[95%] md:w-[96%] max-w-[1500px] mx-auto py-4">
      <h2 className="table_heading text-center text-xl font-bold text-[#625587]">
        {theading}
      </h2>

      <div className="tablevideo fade-in mt-6 gap-6 flex flex-col lg:flex-row items-center">
        {/* MEDIA SECTION */}
        <div className="w-full lg:w-1/2">
          {isLadyPiles ? (
            <div className="w-full h-[240px] lg:h-[280px] relative rounded-lg overflow-hidden">
              <Image
                src={safeImageSrc}
                alt="Lady piles treatment"
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <video
              className="w-full h-[240px] lg:h-[280px] rounded-lg video-container"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src={ConditionVideo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* INFO SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-[20px] sm:text-2xl md:text-3xl font-semibold text-[#6A5A8A] mb-4">
            {title}
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            {description}
          </p>

          <ul className="space-y-4 list-disc marker:text-[#6A5A8A] marker:text-[20px] pl-6">
            {points.map((p, i) => (
              <li
                key={i}
                className="text-[16px] sm:text-lg font-medium text-gray-900 leading-relaxed"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
