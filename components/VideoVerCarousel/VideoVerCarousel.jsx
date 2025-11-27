"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function VideoWithCarousel() {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const interactionTimeoutRef = useRef(null);
  const isAutoScrolling = useRef(false);

  const images = [
    { id: 1, imageUrl: "/pati 1.webp" },
    { id: 2, imageUrl: "/pati 2.webp" },
    { id: 3, imageUrl: "/pati 3.webp" },
    { id: 4, imageUrl: "/pati 4.webp" },
    { id: 5, imageUrl: "/pati 5.webp" },
    { id: 6, imageUrl: "/pati 6.webp" },
    { id: 7, imageUrl: "/pati 7.webp" },
  ];

  const getScrollLeftForIndex = (index) => {
    const card = scrollRef.current?.children[0];
    if (!card) return 0;
    const cardWidth =
      card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
    return index * cardWidth;
  };

  const pauseAutoScroll = () => {
    setIsInteracting(true);
    if (interactionTimeoutRef.current)
      clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(() => setIsInteracting(false), 7000);
  };

  // 🔹 Detect manual scroll and update active index
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const scrollLeft = scrollRef.current.scrollLeft;
      const card = scrollRef.current.children[0];
      if (!card) return;

      const cardWidth =
        card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);

      if (!isAutoScrolling.current) pauseAutoScroll();
    };

    const ref = scrollRef.current;
    ref?.addEventListener("scroll", handleScroll);
    return () => ref?.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Observe when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // triggers when 30% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔹 Auto-scroll only when visible and not interacting
  useEffect(() => {
    if (!isVisible) return; // wait until section is in view

    const interval = setInterval(() => {
      if (isInteracting) return;

      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        const left = getScrollLeftForIndex(nextIndex);

        isAutoScrolling.current = true;
        scrollRef.current?.scrollTo({ left, behavior: "smooth" });

        setTimeout(() => {
          isAutoScrolling.current = false;
        }, 1000);

        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, isInteracting]);

  const scrollToSlide = (index) => {
    const left = getScrollLeftForIndex(index);
    scrollRef.current?.scrollTo({ left, behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center w-[95%] mx-auto my-8 gap-3 max-w-[1500px]"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 patienttalk_heading">
        Patients Love Us
      </h2>
      <p className="text-gray-700 text-center max-w-xl pb-4 text-base font-semibold max-[325px]:text-[12px]">
        Our patients share their heartfelt stories, praising the care, comfort, and compassion they experienced.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        <div className="w-full md:w-[40%] aspect-video rounded-2xl overflow-hidden shadow-lg h-auto">
          <video
            src="/ortho testimonial.mp4"
            controls
            className="object-cover w-full h-full rounded-2xl"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          className="w-full md:w-[60%] flex flex-col items-center"
          onMouseEnter={pauseAutoScroll}
          onTouchStart={pauseAutoScroll}
        >
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scroll-smooth w-full scrollbar-hide scroll_container"
          >
            {images.map((img) => (
              <div
                key={img.id}
                className="vi-mage-container snap-center flex-shrink-0 w-[300px] h-[200px] rounded-xl overflow-hidden"
              >
                <Image
                  src={img.imageUrl}
                  alt={`Carousel ${img.id}`}
                  width={500}
                  height={300}
                  layout="responsive"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex gap-2 mt-3 md:hidden">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToSlide(index);
                  pauseAutoScroll();
                }}
                className={`h-2 w-2 rounded-full transition-all ${activeIndex === index
                    ? "bg-indigo-900 w-5"
                    : "bg-gray-400 hover:bg-gray-600"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
