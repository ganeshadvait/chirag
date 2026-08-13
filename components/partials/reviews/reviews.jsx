"use client";
/**
 * @typedef {{ title: string, text: string, name: string, rating: number }} Testimonial
 */
import { useEffect, useRef, useState } from "react";

function ReadMoreText({ text, limit = 200 }) {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= limit) {
    return <span>{text}</span>;
  }

  const displayedText = expanded ? text : text.slice(0, limit) + "...";

  return (
    <span>
      {displayedText}{" "}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="text-[#059669] font-medium ml-1"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </span>
  );
}

export default function TestimonialSlider(
  /** @type {{ testimonials?: Testimonial[], ctaText?: string, ctaLink?: string, sourceLogo?: string }} */
  {
    testimonials = [],
    ctaText = "",
    ctaLink = "#",
    sourceLogo = "/chirag google logo.png",
  }
) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const mobileWrapperRef = useRef(null);
  const mobileContainerRef = useRef(null);
  const mobileTimerRef = useRef(null);
  const resumeTimerRef = useRef(null);
  // Set just before a wrap-around jump so the position effect repositions the
  // strip instantly instead of animating backwards through every slide.
  const snapRef = useRef(false);
  const mobileSnapRef = useRef(false);

  const GAP = 16;
  const SLIDE_MS = 500;

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
    // offsetWidth is 0 while the desktop strip is `hidden` on small screens —
    // measuring then would give every slide a bogus width.
    if (containerRef.current && containerRef.current.offsetWidth > 0) {
      setSlideWidth(containerRef.current.offsetWidth + GAP);
    }
  };

  const startAuto = () => {
    stopAuto();
    if (slides.length === 0) return;
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
    wrapperRef.current.style.transform = `translateX(${
      -index * slideWidth + diff
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
    if (slides.length === 0) return;
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
    mobileWrapperRef.current.style.transform = `translateY(${
      -mobileIndex * mobileSlideWidth + diff
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
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Browsers throttle timers and freeze CSS transitions in background tabs.
  // Pausing while hidden keeps the index and the strip position in step.
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) {
        stopAuto();
        stopMobileAuto();
      } else {
        startAuto();
        if (showmReviews) startMobileAuto();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [showmReviews]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || slides.length === 0 || slideWidth <= 0) return;

    // Safety net: if the index ever escapes the slide range, snap back into it
    // rather than translating the strip off-screen (which showed a blank card).
    if (index < 0 || index > slides.length - 1) {
      snapRef.current = true;
      setIndex(1);
      return;
    }

    if (snapRef.current) {
      snapRef.current = false;
      wrapper.style.transition = "none";
      wrapper.style.transform = `translateX(${-index * slideWidth}px)`;
      void wrapper.offsetHeight; // flush, so the next move animates again
      return;
    }

    wrapper.style.transition = `transform ${SLIDE_MS}ms ease-in-out`;
    wrapper.style.transform = `translateX(${-index * slideWidth}px)`;

    // Wrap on a timer instead of `transitionend`. That event never fires while
    // the tab is backgrounded or the strip is display:none, which used to let
    // `index` climb forever until the carousel scrolled past its last slide.
    if (index === 0 || index === slides.length - 1) {
      const wrapTimer = setTimeout(() => {
        snapRef.current = true;
        setIndex(index === 0 ? testimonials.length : 1);
      }, SLIDE_MS + 20);
      return () => clearTimeout(wrapTimer);
    }
  }, [index, slideWidth, slides.length, testimonials.length]);

  // Mobile carousel effect — the strip is unmounted while the reviews are
  // collapsed, so the timer must stop with it or the index runs away.
  useEffect(() => {
    updateMobileWidth();
    if (!showmReviews) {
      stopMobileAuto();
      return;
    }
    startMobileAuto();

    return () => {
      stopMobileAuto();
    };
  }, [showmReviews]);

  useEffect(() => {
    const wrapper = mobileWrapperRef.current;
    if (!wrapper || slides.length === 0 || mobileSlideWidth <= 0) return;

    if (mobileIndex < 0 || mobileIndex > slides.length - 1) {
      mobileSnapRef.current = true;
      setMobileIndex(1);
      return;
    }

    if (mobileSnapRef.current) {
      mobileSnapRef.current = false;
      wrapper.style.transition = "none";
      wrapper.style.transform = `translateY(${
        -mobileIndex * mobileSlideWidth
      }px)`;
      void wrapper.offsetHeight;
      return;
    }

    wrapper.style.transition = `transform ${SLIDE_MS}ms ease-in-out`;
    wrapper.style.transform = `translateY(${
      -mobileIndex * mobileSlideWidth
    }px)`;

    if (mobileIndex === 0 || mobileIndex === slides.length - 1) {
      const wrapTimer = setTimeout(() => {
        mobileSnapRef.current = true;
        setMobileIndex(mobileIndex === 0 ? testimonials.length : 1);
      }, SLIDE_MS + 20);
      return () => clearTimeout(wrapTimer);
    }
    // `showmReviews` is a dependency because re-expanding remounts the strip
    // with no inline transform — it has to be repositioned.
  }, [mobileIndex, mobileSlideWidth, slides.length, testimonials.length, showmReviews]);

  const toggleReviews = () => {
    setShowmReviews((prev) => !prev);
  };

  const handleDotClick = (i) => {
    setIndex(i + 1); // Move to the selected slide
    stopAuto(); // Stop auto-slide immediately

    // Restart auto-slide after 7 seconds
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
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
                          <span className="text-xs text-gray-700">
                            <ReadMoreText text={t.text} limit={200} />
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
                          className={`w-2 h-2 rounded-full transition-all duration-200 border border-[#059669] ${
                            isActive ? "bg-[#059669]" : "bg-white"
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
                  <ReadMoreText text={t.text} limit={250} />
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <img src={sourceLogo} alt="Google" className="w-6 h-6" />
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
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 border border-[#059669] ${
                  isActive ? "bg-[#059669]" : "bg-white"
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
            <img src={sourceLogo} alt="Google" className="w-6 h-6" />
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}
