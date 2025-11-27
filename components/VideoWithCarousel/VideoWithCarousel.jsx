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
      reviewerName: "Krishna Nallapu",
      reviewText: "I came to Lux Hospitals for my knee pain and was treated by the orthopaedic team. Dr saikishan was a very knowledgeable person . They explained the condition clearly and suggested the best option for me. The surgery went smoothly, and the physiotherapy support helped me recover faster. The doctors and staff were so caring—it really felt like family.",
      googleIcon: "/iconG.avif", // Add the path to Google icon
      rating: 5, // 5 stars
    },
    {
      id: 2,
      reviewerName: "Surekha Ayinabattina",
      reviewText: "My cousin had multiple fractures in an accident. We took him to Lux Hospitals where Dr. Sai Kishan treated him. The way he handled the emergency, explained the situation, and reassured our family was remarkable. He personally followed up and monitored the healing. We’re deeply thankful for his care and compassion.",
      googleIcon: "/iconG.avif", // Add the path to Google icon
      rating: 5, // 4 stars
    },
    {
      id: 3,
      reviewerName: "Yanamadni Bujji",
      reviewText: "My mother had severe arthritis pain in her hip. Dr. Sai Kishan Sirasala treated her with precision, and now she can move and walk without much discomfort. We are very satisfied with his care.",
      googleIcon: "/iconG.avif", // Add the path to Google icon
      rating: 5, // 3 stars
    },
    {
      id: 4,
      reviewerName: "Jaya Prakash",
      reviewText: "I sustained injuries to my knee and shoulder while playing rugby. I was worried I might never play again. Dr. Sai Kishan at Lux Hospitals evaluated both injuries carefully, planned the treatments, and supervised my recovery with excellent physiotherapy support. His guidance and the hospital staff’s attention made the entire process smooth. Today, I am fully recovered and back to playing competitively. Dr. Sai Kishan is the best orthopedic surgeon I have ever met.",
      googleIcon: "/iconG.avif", // Add the path to Google icon
      rating: 5, // 5 stars
    },
    {
      id: 5,
      reviewerName: "Sravan Kumar Reddy",
      reviewText: "I injured my knee during a basketball match and had persistent pain. Dr. Sai Kishan at Lux Hospitals suggested knee arthroscopy to repair the meniscus. The surgery was smooth, and he explained each step clearly to me and my parents. The physiotherapy team at Lux Hospitals helped me regain strength quickly. Within a few weeks, I was back on the court playing. Truly thankful for Dr. Sai Kishan’s care and he was an expert orthopaedic doctor in Hyderabad.",
      googleIcon: "/iconG.avif", // Add the path to Google icon
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
      <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 patienttalk_heading">
        Patients Love Us
      </h2>
      <p className="text-gray-700 text-center max-w-xl pb-4 text-base font-semibold max-[325px]:text-[12px]">
        Our patients share their heartfelt stories, praising the care, comfort, and compassion they experienced.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        <div className="w-full md:w-[40%] aspect-video rounded-2xl overflow-hidden shadow-lg h-auto">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/o_nLKQvH-Ww?rel=0&autoplay=0&modestbranding=1"
            title="Orthopaedics Testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
                <span className="text-indigo-900 font-semibold">{review.reviewerName}</span>
              </div>
            ))}
          </div>


          {/* Navigation Dots */}
          <div className="flex gap-2 mt-3 md:hidden">
            {reviews.map((_, index) => (
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
