import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const ArticleSection = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "The Importance of Regular Exercise",
      excerpt: "Discover the physical and mental benefits of staying active.",
      author: "Dr. Emily Carter",
      date: "2024-01-15",
      image:
        "https://plus.unsplash.com/premium_photo-1683133269843-09a177048cef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 0,
      liked: false,
      featured: true,
    },
    {
      id: 2,
      title: "Eating Healthy on a Budget",
      excerpt: "Learn how to make nutritious meals without breaking the bank.",
      author: "Jane Smith, RD",
      date: "2024-01-14",
      image:
        "https://plus.unsplash.com/premium_photo-1705558001998-498ac1c3a55e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 0,
      liked: false,
      featured: true,
    },
    {
      id: 3,
      title: "Managing Stress for a Healthier Life",
      excerpt: "Effective techniques to reduce stress and improve well-being.",
      author: "Dr. Mark Johnson",
      date: "2024-01-13",
      image:
        "https://images.unsplash.com/photo-1619950835688-1bddaffce4a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 0,
      liked: false,
      featured: false,
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    author: "",
    image: "",
  });

  const [showForm, setShowForm] = useState(false);

  const handleLike = (id) => {
    setArticles((prev) =>
      prev.map((article) =>
        article.id === id && !article.liked
          ? { ...article, likes: article.likes + 1, liked: true }
          : article
      )
    );
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      ...formData,
      id: articles.length + 1,
      date: new Date().toISOString().split("T")[0],
      likes: 0,
      liked: false,
      featured: false,
    };
    setArticles([...articles, newArticle]);
    setFormData({ title: "", excerpt: "", author: "", image: "" });
    setShowForm(false);
  };

  // Get top articles sorted by likes
  const topArticles = [...articles]
    .filter((article) => article.likes > 0)
    .sort((a, b) => b.likes - a.likes);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-600">Health Articles</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-400 transition-colors"
        >
          {showForm ? "Cancel" : "Add Article"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow">
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">Title</label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Excerpt</label>
              <textarea
                name="excerpt"
                required
                value={formData.excerpt}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Author</label>
              <input
                type="text"
                name="author"
                required
                value={formData.author}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="text"
                name="image"
                required
                value={formData.image}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-blue-400 transition-colors"
          >
            Submit
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a"; // Default image on error
              }}
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span>{article.author}</span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                </div>
                <button
                  onClick={() => handleLike(article.id)}
                  className={`flex items-center space-x-1 ${
                    article.liked ? "text-red-500" : "text-gray-400"
                  } hover:text-red-500 transition-colors`}
                  aria-label="Like article"
                  disabled={article.liked}
                >
                  <FaHeart />
                  <span>{article.likes}</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-700">Top Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topArticles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a"; // Default image
              }}
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="text-sm text-gray-500">
                <span>{article.author}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
