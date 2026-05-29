import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";
import { getBlogs } from "../services/api";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const { data } = await getBlogs();
        const blogs = data.data || [];

        const selectedBlog = blogs.find((b) => b._id === id);

        if (selectedBlog) {
          setBlog(selectedBlog);

          setRelatedBlogs(
            blogs.filter((b) => b._id !== id).slice(0, 3)
          );
        }
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-40">
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-purple-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col justify-center items-center py-40">
        <h2 className="text-3xl font-bold mb-4">
          Blog Not Found
        </h2>

        <button
          onClick={() => navigate("/blog")}
          className="flex items-center gap-2 text-purple-600"
        >
          <FaArrowLeft />
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">

      {/* Back Button */}
      <div className="max-w-225 mx-auto px-0 pt-12 pb-6">
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center gap-2 text-purple-600 font-medium hover:text-indigo-600 transition"
        >
          <FaArrowLeft />
          Back to Blogs
        </button>
      </div>

      {/* Blog Content */}
      <div className="w-full px-6 lg:px-16 py-10">

        <div className="max-w-225 mx-auto">

          {/* Header */}
          <div className="mb-8">

            <span className="uppercase text-xs font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-widest">
              Blog Post
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-500">

              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-purple-600" />

                {new Date(blog.createdAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </div>

              {blog.author && (
                <div className="flex items-center gap-2">
                  <FaUser className="text-blue-600" />
                  {blog.author}
                </div>
              )}
            </div>
          </div>

          {/* Image */}
          {blog.image_url && (
            <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
              <img
                src={blog.image_url}
                alt={blog.title}
                className="w-full object-cover"
              />
            </div>
          )}

          {/* Summary */}
          {blog.summary && (
            <div className="mb-10 rounded-2xl p-6 bg-linear-to-r from-blue-50 to-purple-50 border-l-4 border-purple-600">
              <p className="italic text-lg text-gray-700 font-medium">
                {blog.summary}
              </p>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-8">

            <div
              dangerouslySetInnerHTML={{
                __html: blog.content
                  ? blog.content
                      .split("\n")
                      .map((paragraph) =>
                        paragraph.trim()
                          ? `<p>${paragraph}</p>`
                          : ""
                      )
                      .join("")
                  : "",
              }}
            />
          </div>

          {/* Category */}
          {blog.category && (
            <div className="pt-10 mt-10 border-t">

              <div className="flex items-center gap-3">

                <span className="font-semibold">
                  Category:
                </span>

                <span className="px-4 py-2 rounded-full text-sm text-white bg-linear-to-r from-blue-600 to-purple-600">
                  {blog.category}
                </span>

              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <div className="bg-gray-50 py-16 px-6 lg:px-16">

          <div className="max-w-660 mx-auto">

            <h2 className="text-3xl font-bold mb-10 bg-linear-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent">
              Related Blogs
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {relatedBlogs.map((relatedBlog) => (
                <div
                  key={relatedBlog._id}
                  onClick={() =>
                    navigate(`/blog/${relatedBlog._id}`)
                  }
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                >
                  {relatedBlog.image_url && (
                    <div className="h-52 overflow-hidden">
                      <img
                        src={relatedBlog.image_url}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover hover:scale-105 transition"
                      />
                    </div>
                  )}

                  <div className="p-6">

                    <h3 className="font-bold text-xl mb-3">
                      {relatedBlog.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {relatedBlog.summary}
                    </p>

                    <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-xl">
                      Read More
                    </button>

                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      )}
    </div>
  );
};

export default BlogDetail;