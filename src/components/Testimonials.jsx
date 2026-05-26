import { useEffect, useRef } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const data = [
  {
    text: "PIN MEDIA helped us grow 4x on social media within 3 months. Their strategies are top-notch!",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
    name: "Co-Founder, boAt",
    stars: 5,
  },
  {
    text: "Their PR campaigns gave our brand massive visibility. Amazing team to work with!",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
    name: "Marketing Head, Nykaa",
    stars: 4.5,
  },
  {
    text: "Professional, creative and result-driven. Highly recommended!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
    name: "Growth Lead, MPL",
    stars: 5,
  },
  {
    text: "Excellent communication and outstanding results. They truly understand branding and delivery.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80",
    name: "CMO, Zomato",
    stars: 5,
  },
];

// ⭐ STAR RENDER FUNCTION
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }
  return stars;
};

const Testimonials = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const container = sliderRef.current;
    const speed = 0.5; // Slider ki speed aap yahan se adjust kar sakte hain

    const animate = () => {
      if (!isPaused.current && container) {
        container.scrollLeft += speed;
        // Seamless loop ke liye
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section className="w-full bg-gray-50 px-6 lg:px-16 pb-12 md:pb-16">
      <div className="w-full max-w-[1320px] mx-auto border-t border-gray-100 pt-12 md:pt-16">
        
        <div className="text-left mb-12">
          <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-2">
            What Clients Say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Results That Build Trust
          </h2>
        </div>

        {/* Slider Container */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-hidden py-4 cursor-pointer"
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          onTouchStart={() => (isPaused.current = true)}
          onTouchEnd={() => (isPaused.current = false)}
        >
          {[...data, ...data].map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col"
            > 
              {/* Client Image at Top */}
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100 shadow-sm mb-6"
              />

              {/* Feedback Text */}
              <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">
                "{item.text}"
              </p>

              {/* Rating and Author at Bottom */}
              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-sm gap-0.5">
                    {renderStars(item.stars)}
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">
                    {item.stars.toFixed(1)} Rating
                  </span>
                </div>
                <div className="font-bold text-gray-900 text-sm group-hover:text-indigo-600 transition-colors">
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;