"use client";

import React from "react";
// import "./vstyles.css";

export default function VideoSection() {
  return (
    <section className={` videos_section fade-in `}>
      <video autoPlay muted loop playsInline className="bg-video">
        <source className="desktop_videosection" src="/final branding video 28.mp4" type="video/mp4" />
        <source className="mobile_videosection" src="/mobile v branding video.mp4" type="video/mp4" />
        Your browser doesn't support HTML5 videos.
      </video>

      {/* <div className="video-overlay-content">
        <ul className="list_text list-outside text-white-700 space-y-2 text-left">
          <li>✔ Designed for comfort</li>
          <li>✔ Spacious rooms</li>
          <li>✔ HEPA air filters</li>
          <li>✔ Premium amenities</li>
          <li>✔ Hotel-like stay</li>
          <li>
            ✔ Top-tier infection control and patient care with plasma
            sterilization
          </li>
          <li>✔ NABH protocols</li>
        </ul>
      </div> */}
    </section>
  );
}
