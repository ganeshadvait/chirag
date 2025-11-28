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

  // New array for Google reviews with ratings
  const reviews = [
    {
      id: 1,
      reviewerName: "Karthik",
      reviewText: "If you’re suffering from piles, fissures, or fistulas, this hospital is truly a one-stop solution for all your anorectal health concerns. From the moment you walk in, you’re treated with professionalism and care.",
      googleIcon: "/iconG.webp", // Add the path to Google icon
      rating: 5, // 5 stars
    },
    {
      id: 2,
      reviewerName: "Sompali Pratima",
      reviewText: "The staff was very approachable and explained everything in detail. They were focused about fixing the lifestyle problems than just giving medications Recommended for anyone with piles problems.",
      googleIcon: "/iconG.webp", // Add the path to Google icon
      rating: 5, // 4 stars
    },
    {
      id: 3,
      reviewerName: "Manjunath",
      reviewText: "All Staffs are good, supportive doctors, good treatment for piles, fistula",
      googleIcon: "/iconG.webp", // Add the path to Google icon
      rating: 5, // 3 stars
    },
    {
      id: 4,
      reviewerName: "Abdul khader",
      reviewText: "Dr Rajasekhar and his staff are amazing. They are friendly, attentive, caring, patient and helpful. I’ve had a multitude of piles surgery have been done by Dr Rajasekhar & Dr. Pruthvija and his staff. When I called with concerns about the hospital’s billing system, they made sure it was smooth and quick. I would highly recommend chirag hospital for piles laser treatment.",
      googleIcon: "/iconG.webp", // Add the path to Google icon
      rating: 5, // 5 stars
    },
    {
      id: 5,
      reviewerName: "Kiran Kumar",
      reviewText: "Dr. Rajasekhar sir is the best surgeon to treat piles and fistula issues. He got many years of experience. He is so down to earth person. speaks very softly with patients and understands the problem in detail before he prescribe the treatment. I have undergone laser surgery for piles. Same day i got discharges and pain completely vanished from 4rth day onwards. I highly recommend this hospital for piles issue.",
      googleIcon: "/iconG.webp", // Add the path to Google icon
      rating: 5, // 5 stars
    },
    // Add more reviews here
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
        const nextIndex = (prevIndex + 1) % reviews.length;
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

  // Function to render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center w-[95%] mx-auto my-8 gap-3 max-w-[1500px]"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[#7966af] patienttalk_heading">
        Patients Love Us
      </h2>
      <p className="text-gray-700 text-center max-w-xl pb-4 text-base font-semibold max-[325px]:text-[12px]">
        Our patients share their heartfelt stories, praising the care, comfort, and compassion they experienced.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        {/* <div className="w-full md:w-[40%] aspect-video rounded-2xl overflow-hidden shadow-lg h-auto">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/o_nLKQvH-Ww?rel=0&autoplay=0&modestbranding=1"
            title="Orthopaedics Testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}

        <div
          className="w-full md:w-[100%] flex flex-col items-center"
          onMouseEnter={pauseAutoScroll}
          onTouchStart={pauseAutoScroll}
        >
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scroll-smooth w-full scrollbar-hide scroll_container"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="review-card snap-center flex-shrink-0 
                  w-full sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px]
                  min-h-[220px] md:min-h-[260px] lg:h-[300px] xl:h-[310px]
                  rounded-xl overflow-hidden flex flex-col items-center justify-center 
                  p-4 space-y-2 bg-white border border-gray-200"
              >
                <Image
                  src={review.googleIcon}
                  alt="Google Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <p className="text-gray-700 text-center text-sm">"{review.reviewText}"</p>
                <div className="flex space-x-1">{renderStars(review.rating)}</div>
                <span className="text-[#7966af] font-semibold">{review.reviewerName}</span>
              </div>
            ))}
          </div>


          {/* Navigation Dots */}
          <div className="flex gap-2 mt-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToSlide(index);
                  pauseAutoScroll();
                }}
                className={`h-2 w-2 rounded-full transition-all ${activeIndex === index
                  ? "bg-[#7966af] w-5"
                  : "bg-gray-400 hover:bg-[#7966af]"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
