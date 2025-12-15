"use client";
import { useEffect, useRef, useState } from "react";

export default function TestimonialSlider() {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  const GAP = 16; // px gap between cards

  const testimonials = [
    {
      title: "laser treatment for my dad’s piles",
      text: "Dr. Samhitha Reddy’s laser treatment for my dad’s piles worked wonders. He’s pain-free now and really grateful for her care!",
      name: "Mithilesh Sah",
      rating: 5,
    },
    {
      title: "smooth and painless",
      text: "Dr. Samhitha Reddy’s laser treatment for my fissure was smooth and painless. She was super kind, which made the whole process much easier.",
      name: "Rohit Kumar",
      rating: 5,
    },
    {
      title: "Colorectal Diseases",
      text: "Lux hospital is one of best hospital in Hyderabad for colorectal diseases. Dr. Samhita Mam explains everything in detail and the staff is caring.",
      name: "Arti Shettiwar",
      rating: 4.5,
    },
    {
      title: "Admitted for my fistula surgery",
      text: "I was admitted for my fistula surgery, Dr Samhita explained everything clearly. Surgery was seamless & painless. Great staff support.",
      name: "Sanat Jayasingh",
      rating: 4.7,
    },
    {
      title: "Fistula Surgery",
      text: "We were admitted for fistula surgery. Staff and doctor were polite & quick. Special thanks to Ashok for insurance support.",
      name: "Sujith V",
      rating: 4.8,
    },
  ];

  // clone last & first for true infinite loop
  const slides = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  const [index, setIndex] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  /* ⭐ Stars */
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

  /* Width calculation */
  const updateWidth = () => {
    if (containerRef.current) {
      setSlideWidth(containerRef.current.offsetWidth + GAP);
    }
  };

  /* Auto slide */
  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, 5000);
  };

  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  /* Touch swipe */
  const onTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    stopAuto();
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    wrapperRef.current.style.transition = "none";
    wrapperRef.current.style.transform = `translateX(${-index * slideWidth + diff}px)`;
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

  /* Init */
  useEffect(() => {
    updateWidth();
    startAuto();
    window.addEventListener("resize", updateWidth);

    return () => {
      stopAuto();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  /* Slide animation */
  useEffect(() => {
    if (!wrapperRef.current) return;

    wrapperRef.current.style.transition = "transform 0.5s ease";
    wrapperRef.current.style.transform = `translateX(${-index * slideWidth}px)`;

    // seamless reset (NO jump)
    if (index === slides.length - 1) {
      setTimeout(() => {
        wrapperRef.current.style.transition = "none";
        setIndex(1);
      }, 500);
    }

    if (index === 0) {
      setTimeout(() => {
        wrapperRef.current.style.transition = "none";
        setIndex(slides.length - 2);
      }, 500);
    }
  }, [index, slideWidth]);

  return (
    <div className="max-w-xl mx-auto px-3 sm:px-4 mt-8">
      <div className="border border-[#22C55E] rounded-2xl p-3 sm:p-4 bg-white">

        {/* REVIEW CAROUSEL */}
        <div
          ref={containerRef}
          className="overflow-hidden"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={wrapperRef}
            className="flex"
            style={{ gap: `${GAP}px` }}
          >
            {slides.map((t, i) => (
              <div
                key={i}
                className="w-full min-w-full border border-gray-200 rounded-xl p-4 sm:p-5"
              >
                <h3 className="text-[#170F49] font-semibold text-base sm:text-lg">
                  {t.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {t.text}
                </p>

                <div className="mt-4">
                  <p className="font-medium text-[#170F49]">{t.name}</p>
                  <Stars rating={t.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <button className="bg-[#059669] hover:bg-[#047857] text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition text-sm sm:text-base flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="w-4 h-4"
            />
            Google Review
          </button>
        </div>

      </div>
    </div>
  );
}
