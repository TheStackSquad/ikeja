// src/app/news/[slug]/page.js
import { legislativeData } from "@/data/news/legislativeData";
import { newsData } from "@/data/news/newsData";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Combine data sources
const allNews = [...legislativeData, ...newsData];

// Function to generate static params for all news articles
export async function generateStaticParams() {
  return allNews.map((news) => ({
    slug: news.slug,
  }));
}

const SocialIcons = {
  twitter: (
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  ),
  facebook: (
    <path d="M14 11h2v-3a4 4 0 00-4-4h-2a4 4 0 00-4 4v3H4v2h2v7h3v-7h3l1-2h-4v-1h3z" />
  ),
};

const NewsDetailPage = ({ params }) => {
  // Find the correct news item using the slug
  const newsItem = allNews.find((item) => item.slug === params.slug);

  if (!newsItem) {
    notFound();
  }

  // Calculate estimated reading time
  const wordCount = newsItem.content.join(" ").split(" ").length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header Navigation */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to News
            </Link>

            {/* Share Button */}
            <button
              type="button"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors duration-200"
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
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-2xl shadow-lg shadow-slate-200/60 overflow-hidden border border-slate-200/60">
          {/* Featured Image with Overlay */}
          <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
            <Image
              src={newsItem.image || "/api/placeholder/800/400"}
              alt={newsItem.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Category badge positioned on image */}
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-md text-slate-800 rounded-full text-sm font-semibold border border-white/20 shadow-lg">
                {newsItem.category}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 sm:p-8 lg:p-12">
            {/* Article Meta Information */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <time
                  dateTime={newsItem.date}
                  className="flex items-center gap-2 text-slate-500 font-medium"
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
                  {newsItem.date}
                </time>

                <span className="text-slate-300">•</span>

                <span className="text-slate-500 font-medium">
                  {readingTime} min read
                </span>
              </div>

              {/* Social sharing icons */}
              <div className="flex items-center gap-2">
                {["twitter", "facebook"].map((platform) => (
                  <button
                    key={platform}
                    type="button"
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors duration-200"
                    aria-label={`Share on ${platform}`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* Render the correct path based on the platform */}
                      {SocialIcons[platform]}
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              {newsItem.title}
            </h1>

            {/* Author Information */}
            <div className="flex items-center gap-4 mb-10 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                {newsItem.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-lg">
                  {newsItem.author}
                </p>
                <p className="text-slate-500 text-sm">Staff Writer</p>
              </div>
            </div>

            {/* Article Content with Enhanced Typography */}
            <div className="prose prose-xl prose-slate max-w-none">
              {newsItem.content.map((paragraph, index) => {
                // First paragraph gets special styling as lead paragraph
                if (index === 0) {
                  return (
                    <p
                      key={index}
                      className="text-xl leading-relaxed text-slate-700 mb-8 font-medium border-l-4 border-blue-500 pl-6 bg-blue-50/30 py-4 rounded-r-lg"
                    >
                      {paragraph}
                    </p>
                  );
                }

                return (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-slate-700 mb-6 tracking-wide"
                    style={{
                      textAlign: "justify",
                      hyphens: "auto",
                      wordSpacing: "0.05em",
                    }}
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-slate-500 mr-2">
                    Tags:
                  </span>
                  {["Politics", "Government", "News"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      #{tag.toLowerCase()}
                    </span>
                  ))}
                </div>

                {/* Back to News Link */}
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <svg
                    className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to All News
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles Section (Optional) */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allNews
              .filter((item) => item.slug !== newsItem.slug)
              .slice(0, 3)
              .map((relatedItem) => (
                <Link
                  key={relatedItem.slug}
                  href={`/news/${relatedItem.slug}`}
                  className="group block bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-[16/10] relative bg-slate-100">
                    <Image
                      src={relatedItem.image || "/api/placeholder/400/250"}
                      alt={relatedItem.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                      {relatedItem.title}
                    </h3>
                    <p className="text-sm text-slate-500">{relatedItem.date}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default NewsDetailPage;
