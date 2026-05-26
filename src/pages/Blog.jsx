import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const blogPosts = [
  {
    img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&q=80",
    authorImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    authorName: "Sarah Connor",
    category: "Branding",
    date: "May 12, 2024",
    title: "How to Build a Brand That People Remember",
    desc: "Discover the core strategies to create a memorable brand identity that stands out in a crowded market.",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    authorName: "David Smith",
    category: "Digital Marketing",
    date: "May 08, 2024",
    title: "Top 5 Digital Marketing Trends in 2024",
    desc: "Stay ahead of the curve with these emerging digital marketing trends that are reshaping the industry.",
  },
  {
    img: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&q=80",
    authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    authorName: "Emily Chen",
    category: "PR Strategy",
    date: "Apr 29, 2024",
    title: "Mastering PR: Getting Your Startup Noticed",
    desc: "A comprehensive guide for startups looking to gain media coverage and build public trust.",
  },
];

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="blog" className="w-full bg-gray-50 px-6 lg:px-16 pb-12 md:pb-16">
      <div className="w-full max-w-[1320px] mx-auto border-t border-gray-100 pt-12 md:pt-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12 gap-4">
          <div>
            <div className="uppercase text-xs font-bold text-indigo-600 mb-2 tracking-widest">Our Blog</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">Insights</span> & News
            </h2>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-pink-500 transition-colors cursor-pointer"
          >
            View All Posts <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 hover:border-indigo-100 hover:bg-indigo-50/30 hover:-translate-y-2 transition-all duration-500 ease-out group flex flex-col h-full cursor-pointer">
              
              {/* Blog Image */}
              <div className="relative h-48 md:h-52 overflow-hidden bg-gray-100">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-500"></div>
              </div>

              {/* Blog Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 group-hover:bg-indigo-100/80 px-3 py-1.5 rounded-full transition-colors">
                    {post.category}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-500 mb-6 flex-grow leading-relaxed line-clamp-3">
                  {post.desc}
                </p>
                
                {/* Author & Action */}
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <img src={post.authorImg} alt={post.authorName} className="w-8 h-8 rounded-full object-cover shadow-sm" />
                    <span className="text-sm font-semibold text-gray-900">{post.authorName}</span>
                  </div>
                  <div className="inline-flex items-center text-sm font-bold text-indigo-600 group-hover:text-pink-500 transition-colors w-fit">
                    Read <FaArrowRight className="ml-1.5 text-xs transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ======================================================
            ALL POSTS MODAL POPUP
        ====================================================== */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
            <div className="relative w-full max-w-[1200px] max-h-[90vh] bg-white rounded-[30px] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in duration-300">
              
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 md:p-8 border-b border-gray-100 shrink-0">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">All Blog Posts</h2>
                  <p className="text-gray-500 text-sm mt-1">Explore our complete collection of insights.</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-600 rounded-full flex items-center justify-center text-xl transition-colors shadow-sm"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Modal Content (Grid) */}
              <div className="p-6 md:p-8 overflow-y-auto bg-gray-50 flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {blogPosts.map((post, idx) => (
                    <div key={`modal-${idx}`} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 hover:border-indigo-100 hover:bg-indigo-50/30 hover:-translate-y-2 transition-all duration-500 ease-out group flex flex-col h-full cursor-pointer">
                      <div className="relative h-48 md:h-52 overflow-hidden bg-gray-100">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                        <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-500"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 group-hover:bg-indigo-100/80 px-3 py-1 rounded-full transition-colors">
                            {post.category}
                          </span>
                          <span className="text-xs font-semibold text-gray-400">
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-5 flex-grow leading-relaxed line-clamp-3">
                          {post.desc}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2.5">
                            <img src={post.authorImg} alt={post.authorName} className="w-7 h-7 rounded-full object-cover shadow-sm" />
                            <span className="text-xs font-semibold text-gray-900">{post.authorName}</span>
                          </div>
                          <div className="inline-flex items-center text-xs font-bold text-indigo-600 group-hover:text-pink-500 transition-colors w-fit">
                            Read <FaArrowRight className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;