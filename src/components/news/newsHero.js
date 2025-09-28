// src/components/news/newsHero.js
import Link from "next/link";
import Image from "next/image"; // 1. IMPORT Next.js Image component

const NewsHero = ({ featuredNews }) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-green-800 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Ikeja Local Government News
            </h1>
            <p className="text-xl text-blue-100">
              Stay updated with the latest developments, events, and initiatives
              from Ikeja Local Government Area
            </p>
            <div className="flex gap-4">
              <Link
                href="#trending"
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
              >
                Read Latest News
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
              >
                About Ikeja LGA
              </Link>
            </div>
          </div>

          {featuredNews && (
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden text-gray-900">
              {/* 2. Using <Image /> component */}
              <div className="w-full h-48 relative">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill // Fills the parent container (w-full h-48)
                  className="object-cover" // Ensures the image covers the area
                  sizes="(max-width: 768px) 100vw, 50vw" // Helps Next.js optimize image sizes
                />
              </div>
              <div className="p-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {featuredNews.category}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-2">
                  {featuredNews.title}
                </h3>
                <p className="text-gray-600 mb-4">{featuredNews.excerpt}</p>
                <Link
                  href={`/news/${featuredNews.slug}`}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                  Read Full Story →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsHero;