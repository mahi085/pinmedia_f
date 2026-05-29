import { useEffect, useRef, useState } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaTimes,
} from "react-icons/fa";

import { getReviews } from "../services/api";

const defaultPlaceholderImages = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
];

// ⭐ Star Rating Renderer
const renderStars = (rating) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <FaStar
          key={i}
          className="text-yellow-400 text-sm"
        />
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <FaStarHalfAlt
          key={i}
          className="text-yellow-400 text-sm"
        />
      );
    } else {
      stars.push(
        <FaRegStar
          key={i}
          className="text-gray-300 text-sm"
        />
      );
    }
  }

  return stars;
};

export default function Testimonials() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] =
    useState(null);

  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const isPaused = useRef(false);

  // 📦 Fetch Reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);

        const response = await getReviews();

        if (
          response.data.success &&
          response.data.data
        ) {
          const transformed =
            response.data.data.map(
              (review, index) => ({
                _id: review._id,

                text: review.review,

                img: defaultPlaceholderImages[
                  index %
                    defaultPlaceholderImages.length
                ],

                name: review.company
                  ? `${review.clientName}, ${review.company}`
                  : review.clientName,

                stars: review.rating || 5,
              })
            );

          setData(transformed);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // 🎞️ Auto Smooth Slider
  useEffect(() => {
    if (data.length <= 1) return;

    const container = sliderRef.current;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused.current && container) {
        container.scrollLeft += speed;

        if (
          container.scrollLeft >=
          container.scrollWidth -
            container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () =>
      cancelAnimationFrame(animationRef.current);
  }, [data]);

  // ✂️ Truncate Long Text
  const truncateText = (text, max = 120) => {
    if (text.length <= max) return text;

    return text.substring(0, max) + "...";
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-indigo-600 uppercase text-xs font-bold mb-2 tracking-wider">
            What Clients Say
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Results That Build Trust
          </h2>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin" />
          </div>
        ) : data.length === 0 ? (
          // Empty State
          <div className="text-center py-20">
            No testimonials available
          </div>
        ) : (
          // Testimonials Slider
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-hidden py-4"
            onMouseEnter={() =>
              (isPaused.current = true)
            }
            onMouseLeave={() =>
              (isPaused.current = false)
            }
            onTouchStart={() =>
              (isPaused.current = true)
            }
            onTouchEnd={() =>
              (isPaused.current = false)
            }
          >
            {[...data, ...data].map(
              (item, index) => (
                <div
                  key={`${item._id}-${index}`}
                  className="
                    w-64
                    sm:w-72
                    md:w-80
                    lg:w-96
                    flex-shrink-0
                    bg-white
                    rounded-2xl
                    p-6
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-2
                    transition-all
                    duration-500
                    flex
                    flex-col
                    min-h-80
                  "
                >
                  {/* Profile Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-indigo-100 mb-4"
                  />

                  {/* Review Text */}
                  <p className="text-sm text-gray-600 leading-6 mb-3 flex-grow">
                    "{truncateText(item.text)}"
                  </p>

                  {/* Read More */}
                  {item.text.length > 120 && (
                    <button
                      onClick={() =>
                        setSelectedReview(item)
                      }
                      className="text-indigo-600 text-sm font-semibold mb-4"
                    >
                      Read More
                    </button>
                  )}

                  {/* Footer */}
                  <div className="mt-auto">
                    <div className="flex gap-1 mb-1">
                      {renderStars(item.stars)}
                    </div>

                    <span className="text-[10px] text-gray-400 uppercase font-bold">
                      {item.stars.toFixed(1)} Rating
                    </span>

                    <h3 className="font-bold text-sm mt-2 text-gray-900">
                      {item.name}
                    </h3>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full">
            {/* Close Button */}
            <button
              onClick={() =>
                setSelectedReview(null)
              }
              className="ml-auto text-2xl text-gray-500 hover:text-black"
            >
              <FaTimes />
            </button>

            {/* User Image */}
            <img
              src={selectedReview.img}
              alt={selectedReview.name}
              className="w-16 h-16 rounded-full mb-4"
            />

            {/* User Name */}
            <h2 className="text-xl font-bold mb-4">
              {selectedReview.name}
            </h2>

            {/* Full Review */}
            <p className="text-gray-600 leading-7">
              "{selectedReview.text}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
}