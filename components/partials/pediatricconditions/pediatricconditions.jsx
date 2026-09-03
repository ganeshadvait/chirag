"use client";
import { useEffect, useRef, useState } from "react";

const DEFAULT_CONDITIONS = [
  {
    title: "Acute Pilonidal Abscess",
    description:
      "A sudden, painful swelling near the tailbone caused by an infected pilonidal sinus. The area becomes red, hot, and tender, often with fever. Requires urgent incision and drainage followed by definitive treatment to prevent recurrence.",
  },
  {
    title: "Chronic Pilonidal Sinus",
    description:
      "A long-standing tract or tunnel beneath the skin with one or more openings (pits) along the natal cleft. Causes persistent or intermittent discharge (pus or blood-tinged), foul odor, and dull discomfort. This is the most common presentation.",
  },
  {
    title: "Recurrent Pilonidal Sinus",
    description:
      "Pilonidal sinus that returns after previous treatment, often due to incomplete removal of sinus tracts or continued hair ingrowth. Requires advanced techniques like laser ablation or flap procedures for definitive cure.",
  },
];

function ConditionCard({ item, number }) {
  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#EEECFC] flex items-center justify-center mb-4">
        <span className="text-[#6B5AED] font-bold text-lg md:text-xl">
          {number}
        </span>
      </div>
      <h3 className="text-base md:text-lg font-semibold text-[#1E1B4B] mb-2 md:mb-3">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

export default function PediatricConditions({
  heading = "Pediatric Anorectal Conditions We Treat",
  subheading = "Our team of specialists provides expert diagnosis and treatment for a comprehensive range of pediatric anal and rectal conditions.",
  conditions = DEFAULT_CONDITIONS,
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  const slides =
    conditions.length > 0
      ? [conditions[conditions.length - 1], ...conditions, conditions[0]]
      : [];

  const [index, setIndex] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const updateWidth = () => {
    if (containerRef.current) {
      setSlideWidth(containerRef.current.offsetWidth);
    }
  };

  const onTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    if (wrapperRef.current) {
      wrapperRef.current.style.transition = "none";
      wrapperRef.current.style.transform = `translateX(${
        -index * slideWidth + diff
      }px)`;
    }
  };

  const onTouchEnd = (e) => {
    if (!isDragging) return;
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > slideWidth / 4) {
      setIndex((i) => (diff < 0 ? i + 1 : i - 1));
    } else {
      if (wrapperRef.current) {
        wrapperRef.current.style.transition = "transform 0.3s ease-in-out";
        wrapperRef.current.style.transform = `translateX(${
          -index * slideWidth
        }px)`;
      }
    }
    setIsDragging(false);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return;

    wrapperRef.current.style.transition = "transform 0.5s ease-in-out";
    wrapperRef.current.style.transform = `translateX(${-index * slideWidth}px)`;

    const handleTransitionEnd = () => {
      if (index === 0) {
        wrapperRef.current.style.transition = "none";
        setIndex(conditions.length);
        requestAnimationFrame(() => {
          if (wrapperRef.current)
            wrapperRef.current.style.transform = `translateX(${
              -conditions.length * slideWidth
            }px)`;
        });
      } else if (index === slides.length - 1) {
        wrapperRef.current.style.transition = "none";
        setIndex(1);
        requestAnimationFrame(() => {
          if (wrapperRef.current)
            wrapperRef.current.style.transform = `translateX(${-slideWidth}px)`;
        });
      }
    };

    wrapperRef.current.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      wrapperRef.current?.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, [index, slideWidth, conditions.length, slides.length]);

  return (
    <section className="w-full py-4 md:py-6 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1B4B] mb-3 md:mb-4">
            {heading}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* MOBILE SWIPER */}
        <div className="sm:hidden">
          <div
            ref={containerRef}
            className="overflow-hidden py-3"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div ref={wrapperRef} className="flex touch-pan-y">
              {slides.map((item, i) => {
                const originalIndex =
                  i === 0
                    ? conditions.length - 1
                    : i === slides.length - 1
                    ? 0
                    : i - 1;
                return (
                  <div key={i} className="flex-shrink-0 w-full px-2">
                    <ConditionCard item={item} number={originalIndex + 1} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {conditions.map((_, i) => {
              const isActive =
                index === i + 1 ||
                (index === 0 && i === conditions.length - 1) ||
                (index === slides.length - 1 && i === 0);
              return (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-200 border border-[#6B5AED] ${
                    isActive ? "bg-[#6B5AED]" : "bg-white"
                  }`}
                  onClick={() => setIndex(i + 1)}
                />
              );
            })}
          </div>
        </div>

        {/* DESKTOP / TABLET GRID */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {conditions.map((item, idx) => (
            <ConditionCard key={idx} item={item} number={idx + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
