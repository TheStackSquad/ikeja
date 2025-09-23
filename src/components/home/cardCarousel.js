// src/components/home/cardCarousel.js

"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const carouselItems = [
  { id: 1, label: "Metropolitan", image: "/img/AllenAvenue.webp" },
  { id: 2, label: "Tradition", image: "/img/egungun.webp" },
  { id: 3, label: "Culture", image: "/img/culture.webp" },
  { id: 4, label: "Modern", image: "/img/ikejaTrain.webp" },
  { id: 5, label: "Healthcare", image: "/img/lasuth.webp" },
  { id: 6, label: "Travels", image: "/img/LOS_1.webp" },
  { id: 7, label: "Heritage", image: "/img/monument_Ikeja.webp" },
  { id: 8, label: "History", image: "/img/Yellow_bus,_lagos_state.webp" },
  { id: 9, label: "Subway", image: "/img/subway.webp" },
];

const CardCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="D w-full bg-white rounded-lg p-8 shadow-sm border">
      <h3 className="text-xl font-bold font-josefin text-gray-900 mb-4">
        Explore Ikeja
      </h3>
      <div className="relative">
        <div
          className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-hidden"
          ref={carouselRef}
        >
          {carouselItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex-shrink-0 w-60 h-60 rounded-lg overflow-hidden relative shadow-md snap-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src={item.image}
                alt={item.label}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <h4 className="text-white font-bold font-josefin text-sm">
                  {item.label}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll(-240)}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={() => scroll(240)}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
