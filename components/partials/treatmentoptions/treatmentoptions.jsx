"use client";
import { useEffect, useRef, useState } from "react";

const DEFAULT_OPTIONS = [
  {
    title: "Conservative Management",
    description:
      "For early internal prolapse and mucosal prolapse. Includes high-fiber diet, stool softeners, pelvic floor physiotherapy, biofeedback training, and avoiding straining. Effective for mild symptoms and in patients unfit for surgery.",
  },
  {
    title: "Laparoscopic Rectopexy (Keyhole Surgery)",
    description:
      "The gold standard for adult rectal prolapse. The rectum is mobilized and secured (fixed) to the sacrum through small keyhole incisions. Offers excellent cure rates (over 95%), preserves bowel function, minimal scarring, shorter hospital stay (2–3 days), and faster recovery compared to open surgery.",
  },
  {
    title: "Ventral Mesh Rectopexy",
    description:
      "A modern laparoscopic technique where a mesh is placed on the front of the rectum and attached to the sacrum, lifting and supporting the rectum. Avoids nerve damage, preserves bowel function, and has excellent long-term results. Particularly effective for women with associated pelvic organ prolapse.",
  },
  {
    title: "Delorme's Procedure (Perineal Approach)",
    description:
      "A perineal (from below) approach where the excess mucosal lining is removed and the muscle wall is plicated (folded). Performed without abdominal incisions, ideal for elderly or high-risk patients who cannot tolerate abdominal surgery. Lower recurrence than Altemeier's procedure.",
  },
  {
    title: "Altemeier's Procedure (Perineal Proctosigmoidectomy)",
    description:
      "A perineal procedure where the prolapsed rectum and sigmoid colon are removed from below and reconnected. Suitable for elderly patients with large prolapse and significant comorbidities. Can be performed under regional anesthesia.",
  },
  {
    title: "STARR Procedure",
    description:
      "Stapled Transanal Rectal Resection — a minimally invasive technique for internal prolapse (intussusception) and obstructed defecation syndrome. Uses a circular stapler to remove the prolapsing tissue from inside, with no external incisions. Quick recovery and effective symptom relief.",
  },
];

function OptionCard({ item, number }) {
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

export default function TreatmentOptions({
  heading = "Treatment Options for Rectal Prolapse",
  subheading = "From conservative management to advanced laparoscopic surgery — comprehensive care for every stage.",
  options = DEFAULT_OPTIONS,
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  const slides =
    options.length > 0
      ? [options[options.length - 1], ...options, options[0]]
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
        setIndex(options.length);
        requestAnimationFrame(() => {
          if (wrapperRef.current)
            wrapperRef.current.style.transform = `translateX(${
              -options.length * slideWidth
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
  }, [index, slideWidth, options.length, slides.length]);

  return (
    <section className="w-full py-10 md:py-14 px-4 sm:px-6 md:px-8">
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
                    ? options.length - 1
                    : i === slides.length - 1
                    ? 0
                    : i - 1;
                return (
                  <div key={i} className="flex-shrink-0 w-full px-2">
                    <OptionCard item={item} number={originalIndex + 1} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {options.map((_, i) => {
              const isActive =
                index === i + 1 ||
                (index === 0 && i === options.length - 1) ||
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
          {options.map((item, idx) => (
            <OptionCard key={idx} item={item} number={idx + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
