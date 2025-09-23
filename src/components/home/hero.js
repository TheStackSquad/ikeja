// src/components/home/hero.js
import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/data/homeUI";

const Hero = () => {
  return (
    <div className="relative w-full rounded-lg shadow-sm overflow-hidden border group">
      {/* Background Image Container with Overlay and Hover Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/AllenAvenue.webp"
          alt="Allen Avenue in Ikeja"
          fill
          style={{ objectFit: "cover" }}
        />
        {/* Dynamic overlay with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent group-hover:from-black/70 group-hover:via-black/40 transition-all duration-500"></div>
      </div>

      {/* Coordinates - Top Right Corner */}
      <div className="absolute top-4 right-4 z-20 text-white/80 text-xs font-mono tracking-wider">
        <div className="bg-black/20 backdrop-blur-sm px-2 py-1 rounded border border-white/10">
          6.6018° N, 3.3515° E
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full min-h-[500px] flex flex-col justify-end">
        {/* Text Content - Bottom Left */}
        <div className="p-8 md:p-12 max-w-2xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs text-white/90 font-medium">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="tracking-wide">IKEJA, LAGOS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-6xl font-josefin font-bold leading-tight text-white mb-4 tracking-tight">
            <span className="block">
              {heroContent.title.split(" ").slice(0, 2).join(" ")}
            </span>
            <span className="block text-2xl md:text-4xl text-emerald-400 font-light italic">
              {heroContent.title.split(" ").slice(2).join(" ")}
            </span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg font-merriweather text-white/90 mb-8 leading-relaxed max-w-lg">
            {heroContent.description}
          </p>

          {/* CTA Button with Animation */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              href={heroContent.ctaLink}
              className="group/btn relative inline-flex items-center justify-center px-8 py-4 font-josefin font-bold text-white text-sm tracking-wide uppercase overflow-hidden rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300 group-hover/btn:from-emerald-400 group-hover/btn:to-teal-500"></div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out"></div>

              {/* Button Text */}
              <span className="relative z-10 flex items-center gap-2">
                {heroContent.ctaText}
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>

            {/* Secondary Action - Subtle */}
            {/* <button className="text-white/80 text-sm font-medium hover:text-emerald-400 transition-colors duration-300 underline underline-offset-4 hover:no-underline">
              Learn More
            </button> */}
          </div>
        </div>

        {/* Bottom Coordinates Bar */}
        <div className="bg-black/30 backdrop-blur-sm border-t border-white/10 px-8 py-3">
          <div className="flex items-center justify-between text-xs text-white/70">
            <div className="flex items-center gap-4">
              <span className="font-mono">6.6018°N 3.3515°E</span>
              <span className="hidden sm:block">•</span>
              <span className="hidden sm:block">Allen Avenue, Ikeja</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
