//src/components/news/newsCategory.js
import Link from "next/link";

// Helper function for icons
const getCategoryIcon = (category) => {
  switch (category) {
    case "Technology":
      return "💻";
    case "Science":
      return "🔬";
    case "Business":
      return "💼";
    case "Environment":
      return "🌱";
    case "Politics":
      return "🏛️";
    case "Health":
      return "🏥";
    case "Sports":
      return "⚽";
    default:
      return "💡";
  }
};

const NewsCategory = ({ categories, newsItems }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          News Categories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const categoryNews = newsItems.filter(
              (item) => item.category === category
            );
            return (
              <div
                key={category}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6"
              >
                <div className="text-4xl mb-4">{getCategoryIcon(category)}</div>
                <h3 className="text-xl font-semibold mb-3">{category}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {categoryNews.length}{" "}
                  {categoryNews.length === 1 ? "article" : "articles"}
                </p>
                <Link
                  href={`/news/category/${category.toLowerCase()}`}
                  className="text-blue-600 font-medium hover:text-blue-800 transition text-sm"
                >
                  View all {category} news →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsCategory;