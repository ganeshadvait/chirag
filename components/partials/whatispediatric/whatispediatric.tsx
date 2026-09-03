"use client";

import { useRef } from "react";

type Chunk = string | { text: string };

type WhatIsPediatricProps = {
  heading?: string;
  paragraphs?: (string | Chunk[])[];
  image?: string;
  imageAlt?: string;
  video?: string;
  poster?: string;
};

export default function WhatIsPediatric({
  heading = "What Is Pediatric Anal Care?",
  paragraphs,
  image = "/ladypilestypes.png",
  imageAlt = "Pediatric anal care illustration",
  video,
  poster,
}: WhatIsPediatricProps) {
  const items = paragraphs || [];
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      <div className="rounded-3xl md:px-10 md:pt-10 md:pb-2">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E1B4B] mb-6">
          {heading}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
          {/* LEFT: Text content */}
          <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
            {items.map((para, idx) => (
              <p key={idx}>
                {typeof para === "string"
                  ? para
                  : (para || []).map((chunk, i) =>
                      typeof chunk === "string" ? (
                        <span key={i}>{chunk}</span>
                      ) : (
                        <span key={i}>{chunk.text}</span>
                      ),
                    )}
              </p>
            ))}
          </div>

          {/* RIGHT: Illustration / video card */}
          <div className="flex justify-center">
            <div className="w-full max-w-[360px] aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center">
              {video ? (
                <video
                  ref={videoRef}
                  src={video}
                  poster={poster}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              ) : (
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
