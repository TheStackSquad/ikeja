"use client";
import { useState } from "react";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Watch from "@/components/home/watch";
import CardCarousel from "@/components/home/cardCarousel";
import MarriageRegistry from "@/components/community/service-pages/marriage-registry";


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Main Content Container - Specific wrapper width */}
        <div className="w-full max-w-[1400px] mx-auto">
          {/* Desktop: Two column layout (70%/30%), Mobile: Stacked */}
          <div className="flex flex-col md:flex-row min-h-[500px] px-10">
            {/* Hero Section - 55% width on Desktop, Full Width on Mobile */}
            <section className="w-full md:w-[55%]">
              <Hero />
              <MarriageRegistry />
            </section>

            {/* Sidebar - 45% width on Desktop, Full Width on Mobile */}
            <aside className="bg-white w-full md:w-[45%]">
              <div className="p-6 lg:px-4 flex flex-col gap-3">
                {/* Meetings Section (Maps to Services component) */}
                <div className="bg-white">
                  <Services />
                </div>

                {/* News Section (Maps to Watch component) */}
                <div className="bg-white">
                  <Watch />
                </div>
              </div>
            </aside>
          </div>

          {/* Design Topics Carousel - Full Width Section */}
          <section className="w-full bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-7xl">
              <CardCarousel />
            </div>
          </section>
        </div>
      </main>

      {/* Footer - Updated to match CFA styling */}
      <footer className="w-full bg-gray-800 py-8 text-center text-gray-300 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Commission of Fine Arts. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
