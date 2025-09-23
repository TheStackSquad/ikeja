// src/components/home/watch.js

import Image from "next/image";
import Link from "next/link";
import { cardsData } from "@/data/homeUI";

const Watch = () => {
  const emergencyServicesCard = cardsData[2];
  const neighborhoodWatchCard = cardsData[3];

  return (
    <div className="space-y-4">
      {/* Emergency Services Card - Enhanced Layout */}
      <div className="group relative rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg bg-white">
        <div className="flex">
          {/* Image Section - Left Side */}
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={emergencyServicesCard.image}
              alt={emergencyServicesCard.title}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 group-hover:to-black/20 transition-all duration-300"></div>
          </div>

          {/* Content Section - Right Side */}
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-bold font-josefin text-gray-900 group-hover:text-blue-700 transition-colors duration-200 leading-tight">
                  {emergencyServicesCard.title}
                </h3>
                <div className="flex-shrink-0 ml-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                    Urgent
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 font-merriweather line-clamp-2 leading-relaxed mb-3">
                {emergencyServicesCard.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Link
                href={emergencyServicesCard.href}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 group/link"
              >
                <span>Get Help</span>
                <svg
                  className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Neighborhood Watch Card - Enhanced Layout */}
      <div className="group relative rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg bg-white">
        <div className="flex">
          {/* Image Section - Left Side */}
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={neighborhoodWatchCard.image}
              alt={neighborhoodWatchCard.title}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 group-hover:to-black/20 transition-all duration-300"></div>
          </div>

          {/* Content Section - Right Side */}
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-bold font-josefin text-gray-900 group-hover:text-blue-700 transition-colors duration-200 leading-tight">
                  {neighborhoodWatchCard.title}
                </h3>
                <div className="flex-shrink-0 ml-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    Ongoing
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 font-merriweather line-clamp-2 leading-relaxed mb-3">
                {neighborhoodWatchCard.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Link
                href={neighborhoodWatchCard.href}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 group/link"
              >
                <span>Report an Issue</span>
                <svg
                  className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;