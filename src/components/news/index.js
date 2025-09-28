//src/components/news/index.js
import NewsHero from "./newsHero";
import NewsCategory from "./newsCategory";
import NewsTrending from "./newsTrending";

const NewsComponents = ({ legislativeNews, generalNews, featuredNews }) => {
  const allNews = [...legislativeNews, ...generalNews];
  const categories = [...new Set(allNews.map((item) => item.category))];

  return (
    <div className="min-h-screen bg-white">
      <NewsHero featuredNews={featuredNews} />
      <NewsCategory categories={categories} newsItems={allNews} />
      <NewsTrending newsItems={allNews} />
    </div>
  );
};

export default NewsComponents;