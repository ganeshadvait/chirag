"use client";

import { useState, useRef, useEffect } from "react";
import DoctorCard from "../topdoctors/ourdoctors";

const DoctorsSection = ({ doctors }) => {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const autoScrollRef = useRef(null);
    const resumeTimeoutRef = useRef(null);

    // --- Calculate active doctor on manual scroll ---
    const handleScroll = () => {
        if (!scrollRef.current) return;
        // only update index when user manually scrolls
        if (!autoScrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            const cardWidth =
                scrollRef.current.firstChild?.offsetWidth ||
                scrollRef.current.offsetWidth;
            const index = Math.floor(scrollLeft / cardWidth + 0.5);
            setActiveIndex(index);
            pauseAutoScroll(7000);
        }
    };

    // --- Scroll programmatically ---
    const scrollTo = (index) => {
        if (!scrollRef.current) return;
        const cardWidth =
            scrollRef.current.firstChild?.offsetWidth ||
            scrollRef.current.offsetWidth;

        scrollRef.current.scrollTo({
            left: index * cardWidth,
            behavior: "smooth",
        });
    };

    // --- Keyboard navigation ---
    const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") {
            scrollTo(Math.min(activeIndex + 1, doctors.length - 1));
            pauseAutoScroll(7000);
        }
        if (e.key === "ArrowLeft") {
            scrollTo(Math.max(activeIndex - 1, 0));
            pauseAutoScroll(7000);
        }
    };

    // --- Auto Scroll Logic ---
    const startAutoScroll = () => {
        if (autoScrollRef.current) return;
        autoScrollRef.current = setInterval(() => {
            setActiveIndex((prev) => {
                const nextIndex = (prev + 1) % doctors.length;
                scrollTo(nextIndex);
                return nextIndex;
            });
        }, 2000); // 2s cycle
    };

    const stopAutoScroll = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
            autoScrollRef.current = null;
        }
    };

    // --- Pause and resume after delay ---
    const pauseAutoScroll = (delay = 7000) => {
        stopAutoScroll();
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
            startAutoScroll();
        }, delay);
    };

    // --- Start only when visible ---
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAutoScroll();
                } else {
                    stopAutoScroll();
                }
            },
            { threshold: 0.3 } // starts when 30% of the section is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            stopAutoScroll();
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full"
            role="region"
            aria-label="Our Doctors Carousel"
            onClick={() => pauseAutoScroll(7000)}
        >
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                className={`
          flex overflow-x-auto scroll-smooth snap-x snap-mandatory focus:outline-none
          ${doctors.length > 2 ? "md:overflow-x-auto" : "md:overflow-x-hidden"}
        `}
                style={{ scrollbarWidth: "none" }}
                onMouseEnter={stopAutoScroll}
                onMouseLeave={startAutoScroll}
            >
                {doctors.map((doc, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-full md:w-1/2 snap-center px-2"
                        aria-hidden={i !== activeIndex}
                    >
                        <DoctorCard {...doc} />
                    </div>
                ))}
            </div>

            {/* Dots Navigation */}
            {doctors.length > 2 && (
                <div className="flex justify-center mt-4 gap-2">
                    {doctors.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                scrollTo(i);
                                pauseAutoScroll(7000);
                            }}
                            aria-label={`Go to doctor ${i + 1}`}
                            aria-current={i === activeIndex ? "true" : "false"}
                            className={`
                h-2 rounded-full transition-all duration-300 ease-in-out 
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                ${i === activeIndex ? "w-6 bg-black" : "w-2 bg-gray-400"}
              `}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DoctorsSection;
