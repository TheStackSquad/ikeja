// src/components/news/newsTrending.js
import Link from "next/link";
import Image from "next/image";

const NewsTrending = ({ newsItems }) => {
  return (
    <section
      id="trending"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
            Trending News
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* News Grid */}
        <div className="grid gap-8 md:gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((news, index) => (
            <article
              key={news.id}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <Link
                href={`/news/${news.slug}`}
                className="block h-full"
                aria-label={`Read more about ${news.title}`}
              >
                {/* Card Container with Modern Aesthetics */}
                <div className="relative h-full bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-500 ease-out overflow-hidden backdrop-blur-sm group-hover:-translate-y-2 group-hover:border-slate-300/60">
                  {/* Image Container with Gradient Overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-slate-100">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      priority={index < 3} // Prioritize first 3 images for performance
                      loading={index < 3 ? "eager" : "lazy"}
                    />

                    {/* Subtle gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category Badge with Glassmorphism Effect */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-slate-700 backdrop-blur-md border border-white/20 shadow-lg">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 lg:p-8 flex flex-col flex-grow">
                    {/* Metadata */}
                    <div className="flex items-center justify-between mb-4">
                      <time
                        dateTime={news.date}
                        className="text-sm font-medium text-slate-500 flex items-center gap-1.5"
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
                            strokeWidth={1.5}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {news.date}
                      </time>

                      {/* Reading Time Estimate */}
                      <span className="text-xs text-slate-400 font-medium">
                        {Math.ceil(news.excerpt.split(" ").length / 200)} min
                        read
                      </span>
                    </div>

                    {/* Title with Better Typography */}
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 line-clamp-2 leading-tight group-hover:text-slate-700 transition-colors duration-300">
                      {news.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                      {news.excerpt}
                    </p>

                    {/* Author and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                          {news.author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-slate-600">
                          {news.author}
                        </span>
                      </div>

                      {/* Modern CTA with Micro-interaction */}
                      <div className="flex items-center gap-2 text-slate-600 group-hover:text-blue-600 transition-colors duration-300">
                        <span className="text-sm font-semibold">Read More</span>
                        <div className="relative overflow-hidden">
                          <svg
                            className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle hover effect border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-100 transition-colors duration-300 pointer-events-none"></div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Load More Button (Optional) */}
        <div className="text-center mt-16">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            <span>Load More Stories</span>
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsTrending;
