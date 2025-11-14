import React, { useState, useEffect } from "react";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";

const mockBlogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Architecture in Urban India",
    summary:
      "Explore how modern engineering and eco-conscious design are shaping India’s real estate future with sustainable innovation.",
    content:
      "Full content of the blog goes here. You can replace this with the actual blog content from API.",
    imageUrl:
      "https://placehold.co/800x600/0d1117/94a3b8?text=Sustainable+Architecture",
    category: "Design",
    date: "October 28, 2025",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "How Technology is Revolutionizing Real Estate Development",
    summary:
      "From AI to smart home systems — discover how cutting-edge tech is redefining living experiences across India.",
    content: "Full content of the blog goes here...",
    imageUrl:
      "https://placehold.co/800x600/111827/94a3b8?text=Tech+in+Real+Estate",
    category: "Innovation",
    date: "October 15, 2025",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Why Location Still Reigns Supreme in Property Investment",
    summary:
      "In an age of virtual tours and digital transactions, location remains the cornerstone of real estate success.",
    content: "Full content of the blog goes here...",
    imageUrl:
      "https://placehold.co/800x600/0f172a/94a3b8?text=Prime+Locations",
    category: "Investment",
    date: "September 29, 2025",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Luxury Living: Redefining Comfort and Aesthetics",
    summary:
      "Take a closer look at how Kronus Infratech is transforming luxury housing through architecture, detail, and experience.",
    content: "Full content of the blog goes here...",
    imageUrl:
      "https://placehold.co/800x600/1e293b/94a3b8?text=Luxury+Living",
    category: "Lifestyle",
    date: "September 10, 2025",
    readTime: "5 min",
  },
  {
    id: 5,
    title: "Top Real Estate Investment Trends to Watch in 2026",
    summary:
      "Stay ahead of the curve with insights into the top emerging investment and infrastructure trends for the coming year.",
    content: "Full content of the blog goes here...",
    imageUrl:
      "https://placehold.co/800x600/0d1117/94a3b8?text=Investment+Trends",
    category: "Market",
    date: "August 25, 2025",
    readTime: "7 min",
  },
  {
    id: 6,
    title: "Smart Cities: The Next Chapter in India’s Growth Story",
    summary:
      "A deep dive into how smart urban planning is revolutionizing the way we live, work, and connect.",
    content: "Full content of the blog goes here...",
    imageUrl:
      "https://placehold.co/800x600/0f172a/94a3b8?text=Smart+Cities",
    category: "Infrastructure",
    date: "July 12, 2025",
    readTime: "6 min",
  },
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedBlog]);

  return (
    <section className="relative pt-40 pb-20 bg-white text-gray-900 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-20 left-1/3 w-[400px] h-[400px] bg-lime-200/20 blur-[200px] rounded-full animate-pulse-slow"></div>
      <div className="absolute top-60 right-1/4 w-[500px] h-[500px] bg-lime-100/10 blur-[250px] rounded-full animate-pulse-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-amber-600 mb-4 uppercase tracking-tight animate-fade-in-down">
            Kronus Insights
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Stay updated with market trends, architectural innovation, and expert
            insights from Kronus Infratech.
          </p>
          <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent w-64 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mockBlogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
              onClick={() => setSelectedBlog(post)}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-lime-100 text-lime-600 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.summary}</p>
                <div className="flex items-center text-gray-500 text-xs space-x-4 mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center text-lime-600 font-semibold text-sm">
                  Read Full Article
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6 animate-fade-in">
          <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-10 flex flex-col">
            <button
              className="absolute top-6 right-6 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedBlog(null)}
            >
              <X size={28} />
            </button>
            <img
              src={selectedBlog.imageUrl}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded-2xl mb-6 flex-shrink-0"
            />
            <h2 className="text-3xl font-bold text-lime-600 mb-4">{selectedBlog.title}</h2>
            <p className="text-gray-700 mb-6">{selectedBlog.content}</p>
          </div>
        </div>
      )}

    </section>
  );
};

export default Blog;
