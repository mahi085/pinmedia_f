import { useCallback, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getBlogs } from "../services/api";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = useCallback(async () => {
    try {
      const { data } = await getBlogs();

      setBlogs(data.data || []);
    } catch (error) {
      console.error(
        "Failed to fetch blogs:",
        error
      );

      setBlogs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(fetchBlogs, 0);

    return () => window.clearTimeout(timeoutId);
  }, [fetchBlogs]);

  return (
    <section
      id="blog"
      className="w-full bg-gray-50 px-6 lg:px-16 pb-12 md:pb-16"
    >
      <div className="w-full max-w-[1320px] mx-auto border-t border-gray-100 pt-12 md:pt-16">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12 gap-4">

          <div>
            <div className="uppercase text-xs font-bold text-indigo-600 mb-2 tracking-widest">
              Our Blog
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
                Insights
              </span>{" "}
              & News
            </h2>
          </div>

        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              No blogs available yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >

                {blog.image_url && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {blog.summary}
                  </p>

                  <p className="text-gray-500 text-xs mb-4">
                    {new Date(
                      blog.createdAt
                    ).toLocaleDateString()}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.content}
                  </p>

                  <button
                    onClick={() => navigate(`/blog/${blog._id}`)}
                    className="text-indigo-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all hover:text-indigo-700"
                  >
                    Read More
                    <FaArrowRight />
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default Blog;
