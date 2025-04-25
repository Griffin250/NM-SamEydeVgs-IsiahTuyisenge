import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  
  const saveArticle = (article) => {
    const data = {
      title: article.title,
      snippet: article.snippet,
      url: article.url,
      published_at: article.published_at,
    };
  
    axios
      .post("http://localhost:8000/articles/save", data)
      .then(() => alert("Article saved!"))
      .catch((err) => console.error("Save failed", err));
  };
  
  useEffect(() => {
    axios
      .get("https://api.thenewsapi.com/v1/news/top", {
        params: {
          api_token: import.meta.env.VITE_NEWS_API_KEY,
          locale: "us",
          limit: 5,
        },
      })
      .then((res) => {
        setArticles(res.data.data);
      })
      .catch((err) => {
        console.error("News fetch error", err);
        setError("Could not load news.");
      });
  }, []);

  return (
    <div className="text-white p-4 ">
      <h2 className="text-2xl font-bold mb-4">📰 Latest News</h2>
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-4 md:grid md:grid-cols-3 gap-4">
        {articles.map((article) => (
          <li key={article.uuid} className="bg-gray-500 p-4 rounded">
            <a href={article.url} target="_blank" rel="noreferrer">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-400">{article.published_at}</p>
              <p className="mt-1">{article.snippet}</p>
            </a>
            <div className="flex justifiy-center">
              <button
                className="mt-4 border border-red-400 p-2 rounded font-bold cursor-pointer text-center hover:bg-red-500 hover:text-white"
                onClick={() => saveArticle(article)}
              >
                {" "}
                💾 Save Article
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
