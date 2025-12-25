"use client";
import { useEffect, useRef, useState } from "react";

export default function TestimonialSlider({
  testimonials = [],
  ctaText = "",
  ctaLink = "#",
  sourceLogo = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const mobileWrapperRef = useRef(null);
  const mobileContainerRef = useRef(null);
  const mobileTimerRef = useRef(null);

  const GAP = 16;

  const slides =
    testimonials.length > 0
      ? [
        testimonials[testimonials.length - 1],
        ...testimonials,
        testimonials[0],
      ]
      : [];

  // Desktop state
  const [index, setIndex] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Mobile state
  const [mobileIndex, setMobileIndex] = useState(1);
  const [mobileSlideWidth, setMobileSlideWidth] = useState(0);
  const [isMobileDragging, setIsMobileDragging] = useState(false);
  const [mobileStartX, setMobileStartX] = useState(0);
  const [showmReviews, setShowmReviews] = useState(true);

  const Stars = ({ rating }) => {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;

    return (
      <div className="flex gap-1 text-yellow-400 text-sm">
        {[...Array(full)].map((_, i) => (
          <span key={i}>★</span>
        ))}
        {half && <span className="opacity-50">★</span>}
      </div>
    );
  };

  // Desktop functions
  const updateWidth = () => {
    if (containerRef.current) {
      setSlideWidth(containerRef.current.offsetWidth + GAP);
    }
  };

  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, 5000);
  };

  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const onTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    stopAuto();
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    wrapperRef.current.style.transition = "none";
    wrapperRef.current.style.transform = `translateX(${-index * slideWidth + diff
      }px)`;
  };

  const onTouchEnd = (e) => {
    if (!isDragging) return;
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > slideWidth / 4) {
      setIndex((i) => (diff < 0 ? i + 1 : i - 1));
    }
    setIsDragging(false);
    startAuto();
  };

  // Mobile functions
  const updateMobileWidth = () => {
    if (mobileContainerRef.current) {
      const cardHeight = 50 + GAP;
      setMobileSlideWidth(cardHeight);
    }
  };

  const startMobileAuto = () => {
    stopMobileAuto();
    mobileTimerRef.current = setInterval(() => {
      setMobileIndex((i) => i + 1);
    }, 3000);
  };

  const stopMobileAuto = () => {
    if (mobileTimerRef.current) clearInterval(mobileTimerRef.current);
  };

  const onMobileTouchStart = (e) => {
    setIsMobileDragging(true);
    setMobileStartX(e.touches[0].clientY);
    stopMobileAuto();
  };

  const onMobileTouchMove = (e) => {
    if (!isMobileDragging) return;
    const diff = e.touches[0].clientY - mobileStartX;
    mobileWrapperRef.current.style.transition = "none";
    mobileWrapperRef.current.style.transform = `translateY(${-mobileIndex * mobileSlideWidth + diff
      }px)`;
  };

  const onMobileTouchEnd = (e) => {
    if (!isMobileDragging) return;
    const diff = e.changedTouches[0].clientY - mobileStartX;
    if (Math.abs(diff) > mobileSlideWidth / 4) {
      setMobileIndex((i) => (diff < 0 ? i + 1 : i - 1));
    }
    setIsMobileDragging(false);
    startMobileAuto();
  };

  // Desktop carousel effect
  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    startAuto();

    return () => {
      window.removeEventListener("resize", updateWidth);
      stopAuto();
    };
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return;

    wrapperRef.current.style.transition = "transform 0.5s ease-in-out";
    wrapperRef.current.style.transform = `translateX(${-index * slideWidth}px)`;

    const handleTransitionEnd = () => {
      if (index === 0) {
        wrapperRef.current.style.transition = "none";
        setIndex(testimonials.length);
        requestAnimationFrame(() => {
          if (wrapperRef.current)
            wrapperRef.current.style.transform = `translateX(${-testimonials.length * slideWidth
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
  }, [index, slideWidth]);

  // Mobile carousel effect
  useEffect(() => {
    updateMobileWidth();
    startMobileAuto();

    return () => {
      stopMobileAuto();
    };
  }, []);

  useEffect(() => {
    if (!mobileWrapperRef.current) return;

    mobileWrapperRef.current.style.transition = "transform 0.5s ease-in-out";
    mobileWrapperRef.current.style.transform = `translateY(${-mobileIndex * mobileSlideWidth
      }px)`;

    const handleTransitionEnd = () => {
      if (mobileIndex === 0) {
        mobileWrapperRef.current.style.transition = "none";
        setMobileIndex(testimonials.length);
      } else if (mobileIndex === slides.length - 1) {
        mobileWrapperRef.current.style.transition = "none";
        setMobileIndex(1);
      }
    };

    mobileWrapperRef.current.addEventListener(
      "transitionend",
      handleTransitionEnd
    );
    return () => {
      mobileWrapperRef.current?.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, [mobileIndex, mobileSlideWidth]);

  const toggleReviews = () => {
    setShowmReviews((prev) => !prev);
  };

  const handleDotClick = (i) => {
    setIndex(i + 1);   // Move to the selected slide
    stopAuto();        // Stop auto-slide immediately

    // Restart auto-slide after 7 seconds
    setTimeout(() => {
      startAuto();
    }, 7000);
  };

  return (
    <div id="reviews" className="max-w-xl mx-auto">
      <div className="rounded-2xl">
        {/* MOBILE VERTICAL CAROUSEL */}
        <div className="sm:hidden">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              {showmReviews && (
                <>
                  <div
                    ref={mobileContainerRef}
                    className="overflow-hidden h-[66px] p-2"
                    onTouchStart={onMobileTouchStart}
                    onTouchMove={onMobileTouchMove}
                    onTouchEnd={onMobileTouchEnd}
                  >
                    <div
                      ref={mobileWrapperRef}
                      className="flex flex-col"
                      style={{ gap: `${GAP}px` }}
                    >
                      {slides.map((t, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white flex-shrink-0"
                          style={{ height: 50 }}
                        >
                          <img
                            src={sourceLogo}
                            alt="Google"
                            className="w-6 h-6 flex-shrink-0"
                          />
                          <span className="text-xs text-gray-700 line-clamp-2">
                            {t.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Mobile Dots */}
                  <div className="flex justify-center gap-2 pb-4">
                    {testimonials.map((_, i) => {
                      const isActive =
                        mobileIndex === i + 1 ||
                        (mobileIndex === 0 && i === testimonials.length - 1) ||
                        (mobileIndex === slides.length - 1 && i === 0);
                      return (
                        <button
                          key={i}
                          aria-label={`Go to slide ${i + 1}`}
                          className={`w-2 h-2 rounded-full transition-all duration-200 border border-[#059669] ${isActive ? "bg-[#059669]" : "bg-white"
                            }`}
                          onClick={() => setMobileIndex(i + 1)}
                        />
                      );
                    })}
                  </div>
                </>
              )}
            </div>
            <button onClick={toggleReviews}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                {showmReviews ? (
                  // Up arrow
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 15.75-7.5-7.5-7.5 7.5"
                  />
                ) : (
                  // Down arrow
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* DESKTOP HORIZONTAL CAROUSEL */}
        <div
          ref={containerRef}
          className="overflow-hidden py-2 hidden sm:block scrollbar-hide"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div ref={wrapperRef} className="flex" style={{ gap: `${GAP}px` }}>
            {slides.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full border border-gray-200 rounded-xl p-5 bg-white"
              >
                <h3 className="text-[#170F49] font-semibold text-lg">
                  {t.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {t.text}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={sourceLogo}
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <div>
                    <p className="font-medium text-[#170F49]">{t.name}</p>
                    <Stars rating={t.rating} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Dots */}
        {/* Desktop Dots */}
        <div className="hidden sm:flex justify-center gap-2 pb-6">
          {testimonials.map((_, i) => {
            const isActive =
              index === i + 1 ||
              (index === 0 && i === testimonials.length - 1) ||
              (index === slides.length - 1 && i === 0);

            return (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 border border-[#059669] ${isActive ? "bg-[#059669]" : "bg-white"
                  }`}
                onClick={() => handleDotClick(i)}
              />
            );
          })}
        </div>

        {/* CTA Button */}
        <div className=" pb-2">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#17a388] hover:bg-white hover:text-black hover:border hover:border-[#17a388] text-white font-semibold px-8 py-4 rounded-full transition text-sm sm:text-base flex items-center gap-2 justify-center"
          >
            <img
              src={sourceLogo}
              alt="Google"
              className="w-4 h-4"
            />
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}