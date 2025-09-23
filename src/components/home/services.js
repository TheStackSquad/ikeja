// src/components/home/services.js

import Image from "next/image";
import Link from "next/link";
import { cardsData } from "@/data/homeUI";

const Services = () => {
  const leadershipCard = cardsData[0];
  const yellowPagesCard = cardsData[1];

  return (
    <div className="bg-white">
      {/* Section Header */}

      {/* Cards Container */}
      <div className="space-y-4">
        {/* Leadership Card - Enhanced Layout */}
        <div className="group relative rounded-xl overflow-hidden border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg bg-white">
          <div className="flex">
            {/* Image Section - Left Side */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={leadershipCard.image}
                alt={leadershipCard.title}
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
                  <h3 className="text-base font-bold font-josefin text-gray-900 group-hover:text-emerald-700 transition-colors duration-200 leading-tight">
                    {leadershipCard.title}
                  </h3>
                  <div className="flex-shrink-0 ml-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                      Active
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 font-merriweather line-clamp-2 leading-relaxed mb-3">
                  {leadershipCard.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  href={leadershipCard.href}
                  className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200 group/link"
                >
                  <span>Learn More</span>
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

                <div className="text-xs text-gray-400">• Next: Today</div>
              </div>
            </div>
          </div>
        </div>

        {/* Yellow Pages Card - Enhanced Layout */}
        <div className="group relative rounded-xl overflow-hidden border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg bg-white">
          <div className="flex">
            {/* Image Section - Left Side */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={yellowPagesCard.image}
                alt={yellowPagesCard.title}
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
                  <h3 className="text-base font-bold font-josefin text-gray-900 group-hover:text-emerald-700 transition-colors duration-200 leading-tight">
                    {yellowPagesCard.title}
                  </h3>
                  <div className="flex-shrink-0 ml-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      Directory
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 font-merriweather line-clamp-2 leading-relaxed mb-3">
                  {yellowPagesCard.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  href={yellowPagesCard.href}
                  className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200 group/link"
                >
                  <span>View Directory</span>
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>

                <div className="text-xs text-gray-400">• Updated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <Link
            href="/meetings"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200 group"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <svg
              className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5"
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
  );
};

export default Services;
