//src/app/news/page.js

import NewsComponents from "@/components/news";
import { legislativeData } from "@/data/news/legislativeData";
import { newsData } from "@/data/news/newsData";

const NewsPage = () => {
  const featuredNews = [...legislativeData, ...newsData][0]; // First news item as featured

  return (
    <main>
      <NewsComponents
        legislativeNews={legislativeData}
        generalNews={newsData}
        featuredNews={featuredNews}
      />
    </main>
  );
};

export default NewsPage;