import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Mock Blog Posts (Replace with API or CMS later)
const mockBlogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Architecture in Urban India",
    summary:
      "Explore how modern engineering and eco-conscious design are shaping India’s real estate future with sustainable innovation.",
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
    imageUrl:
      "https://placehold.co/800x600/0f172a/94a3b8?text=Smart+Cities",
    category: "Infrastructure",
    date: "July 12, 2025",
    readTime: "6 min",
  },
];

const Blog = () => {
  return (
    <section className="pt-40 pb-20 bg-black text-gray-300 min-h-screen relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-black to-zinc-900"></div>
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lime-400/10 blur-[180px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-lime-400 mb-4 uppercase tracking-tight">
            Kronus Insights
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Stay updated with market trends, architectural innovation, and
            expert insights from Kronus Infratech.
          </p>
          <div className="mt-6 h-0.5 bg-linear-to-r from-transparent via-lime-400 to-transparent w-64 mx-auto rounded-full"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mockBlogPosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-lime-400"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/800x600/1f2937/f3f4f6?text=Blog+Image";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="inline-block bg-lime-400/10 text-lime-400 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition">
                  {post.title}
                </h2>

                {/* Summary */}
                <p className="text-gray-400 text-sm mb-5 line-clamp-3">
                  {post.summary}
                </p>

                {/* Metadata */}
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

                {/* Read More Link */}
                <a
                  href="#"
                  className="flex items-center text-lime-400 font-semibold text-sm hover:text-white transition group"
                >
                  Read Full Article
                  <ArrowRight
                    size={16}
                    className="ml-2 transform transition group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-16">
          <button className="py-3 px-8 text-sm font-semibold text-white bg-lime-500/20 border border-lime-400/30 rounded-lg shadow-md hover:bg-lime-400 hover:text-black transition-all duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
