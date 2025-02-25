import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Navbar from "./NavbarExplore";

const API_KEY = "a7983ed4d55f7613ab0044f0861c2575"; 

const categories = ["general", "sports", "business", "entertainment", "health", "science", "technology"];

const ExplorePage = () => {
  const [news, setNews] = useState([]); 
  const [allNews, setAllNews] = useState([]); 
  const [loading, setLoading] = useState(true);  
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("preferredCategory") || "general"
  );
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); 
      const API_URL = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&country=us&max=10&apikey=${API_KEY}`;

      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (!data.articles) {
          console.error("API Error:", data);
          setNews([]);
          setAllNews([]);
          setLoading(false);
          return;
        }

        const formattedNews = data.articles.map((article, index) => ({
          id: index + 1,
          category: article.source.name || "News",
          title: article.title || "No title available",
          date: article.publishedAt ? new Date(article.publishedAt).toDateString() : "No date",
          image: article.image || "https://via.placeholder.com/300",
          url: article.url
        }));

        setNews(formattedNews);
        setAllNews(formattedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
        setAllNews([]);
      } finally {
        setLoading(false); 
      }
    };

    fetchNews();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (user) {
      localStorage.setItem("preferredCategory", category);
    }
  };

  const handleSearch = (query) => {
    if (!query.trim()) {
      setNews(allNews);
      return;
    }

    const filteredNews = allNews.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );

    setNews(filteredNews);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("preferredCategory");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Navbar onSearch={handleSearch} user={user} onLogout={handleLogout} />

      
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              category === selectedCategory ? "bg-red-500 text-white" : "bg-yellow-500 hover:bg-yellow-600 text-black"
            }`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
              <div className="p-4">
                <Skeleton variant="text" width="80%" height={24} animation="wave" />
                <Skeleton variant="text" width="60%" height={20} animation="wave" />
                <Skeleton variant="text" width="40%" height={20} animation="wave" />
              </div>
            </div>
          ))
        ) : news.length > 0 ? (
          
          news.map((article) => (
            <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-sm text-gray-500">{article.category}</p>
                <p className="text-sm text-gray-400">{article.date}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-blue-600 font-bold">
                  Read More →
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">No news found.</p>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
