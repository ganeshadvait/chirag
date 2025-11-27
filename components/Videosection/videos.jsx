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

    </section>
  );
}
