import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import haldi from "../assets/haldi.png";
import valentines from "../assets/valentines.png";
import aniversery from "../assets/aniversery.png";

const slides = [
  { title: "Haldi Ceremony", image: haldi },
  { title: "Valentine’s Decoration", image: valentines },
  { title: "Anniversary Celebration", image: aniversery },
];

const MainHero = () => {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: dir === "left" ? -slider.clientWidth : slider.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Left */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Right */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2"
      >
        <ChevronRight size={26} />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {slides.map((item, index) => (
          <div
            key={index}
            className="relative min-w-full snap-start overflow-hidden"
          >
            {/* Aspect box */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-contain"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25" />

              {/* Title */}
              <h2 className="absolute bottom-6 left-6 text-xl md:text-3xl font-semibold text-white">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainHero;
