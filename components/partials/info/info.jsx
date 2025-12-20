"use client";
import { useState } from "react";

export default function LaserPilesInfo({
  aboutTitle,
  aboutText,
  advantagesTitle,
  advantages,
  costTitle,
  costIntro,
  costPoints,
  expandedContent,
  readMoreText = "Read more",
  readLessText = "Read less",
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6">
      <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-6 md:p-8">

        {/* About Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {aboutTitle}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {aboutText}
        </p>

        {/* Advantages Section */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {advantagesTitle}
        </h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-6">
          {advantages.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>

        {/* Cost Section */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {costTitle}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          {costIntro}
        </p>

        <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-4">
          {costPoints.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>

        {/* Expandable Content */}
        {expanded && (
          <div className="text-gray-700 leading-relaxed space-y-3 mb-4">
            {expandedContent.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        )}

        {/* Read More / Less */}
        {expandedContent?.length > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-emerald-600 font-medium text-lg hover:underline focus:outline-none"
          >
            {expanded ? readLessText : readMoreText}
          </button>
        )}

      </div>
    </section>
  );
}
