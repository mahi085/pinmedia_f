import { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaUsers, FaRocket, FaStar } from "react-icons/fa";

const stats = [
  { icon: <FaBriefcase />, value: 150, suffix: "+", label: "Brands Empowered" },
  { icon: <FaUsers />, value: 12, suffix: "M+", label: "People Reached" },
  { icon: <FaRocket />, value: 500, suffix: "+", label: "Successful Campaigns" },
  { icon: <FaStar />, value: 98, suffix: "%", label: "Client Satisfaction" },
];

const StatCard = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  // Scroll hone par animation trigger karne ke liye
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    const card = cardRef.current;

    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) observer.unobserve(card);
    };
  }, [hasAnimated]);

  // Number counting logic
  useEffect(() => {
    if (hasAnimated) {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2 seconds me counting khatam hogi
      const increment = end / (duration / 16); 

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [hasAnimated, stat.value]);

  return (
    <div
      ref={cardRef}
      className={`relative p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-700 ease-out group overflow-hidden ${
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background decoration hover effect */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>

      {/* Icon Box */}
      <div className="w-10 h-10 mb-3 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 text-white text-lg shadow-md shadow-indigo-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        {stat.icon}
      </div>

      {/* Animated Number */}
      <div className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 tracking-tight">
        {count}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <div className="text-gray-500 text-xs font-medium tracking-wide">
        {stat.label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="w-full py-12 md:py-16 px-6 lg:px-16">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="grid md:grid-cols-4 gap-8 items-start">
          <div>
            <div className="uppercase text-xs font-bold text-indigo-600 mb-2 tracking-widest">Our Impact</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Real Results for Real Brands</h2>
            <div className="w-10 h-1 bg-indigo-600 rounded"></div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
