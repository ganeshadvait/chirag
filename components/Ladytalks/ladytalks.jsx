
"use client";
import { useRef, useState, useEffect } from "react";
// import "./ladytakls.css";
import Image from "next/image";

export default function LadyTalks() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const ladytestimonials = [
    {
      id: 1,
      imageUrl: "/pati 1.webp",
      name: "Sumetha",
    },
    {
      id: 3,
      imageUrl: "/pati 3.webp",
      name: "Sumetha",
    },
    {
      id: 4,
      imageUrl: "/pati 4.webp",
      name: "Sumetha",
    },
  ];
  // Update activeIndex on scroll
  useEffect(() => {
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const containerWidth = scrollRef.current.offsetWidth;
    const scrollWidth = scrollRef.current.scrollWidth;

    const cardWidth = scrollRef.current.children[0]?.offsetWidth || 320;
    const maxIndex = testimonials.length - 1;

    if (scrollLeft + containerWidth >= scrollWidth - 2) {
      setActiveIndex(maxIndex);
    } else {
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const ref = scrollRef.current;
  if (ref) {
    ref.addEventListener("scroll", handleScroll);
  }
  return () => {
    if (ref) {
      ref.removeEventListener("scroll", handleScroll);
    }
  };
}, [ladytestimonials.length]);


  const scrollToSlide = (index) => {
  setActiveIndex(index);
  const cardWidth = scrollRef.current.children[0]?.offsetWidth || 320;
  scrollRef.current?.scrollTo({
    left: index * cardWidth,
    behavior: "smooth",
  });
};


  return (
    <section id="reviews" className="text-center patient_section">
      <h2 className="text-xl sm:1xl font-bold text-indigo-900 patienttalk_heading">
        Patients Love Us
      </h2>

      <div className="relative mt-6">
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide videos_boxex"
        >
          {ladytestimonials.map((testimonial, index) => (
            <VideoCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Navigation Dots */}
        {/* absolute bottom-6 left-1/2 -translate-x-1/2 */}
        <div className=" flex items-center justify-center gap-2 z-10 md:hidden">
          {ladytestimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${index === activeIndex
                  ? "bg-black w-6"
                  : "bg-black/30 hover:bg-black/50"
                }`}
              onClick={() => scrollToSlide(index)}
              aria-label={`Lux Hospitals Patient Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const VideoCard = ({ testimonial }) => {
  return (
    <div className="snap-center w-64 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden shadow-lg video_box">
      <Image
        src={testimonial.imageUrl}
        alt="Testimonial"
        width={500}   // pick a base width
        height={300}  // pick a base height (square since you used w-full h-full)
        className="object-cover w-full h-full"
      />
      {/* <div className="p-4 text-center">
        <p className="text-gray-900 font-bold">{testimonial.name}</p>
      </div> */}
    </div>
  );
};
