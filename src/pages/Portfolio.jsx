import React, { useEffect, useRef, useState } from "react";
// Import local images
import boatImg from "../assets/images/boat.jpg";
import naykaImg from "../assets/images/nayka.jpg";
import mplImg from "../assets/images/mpl.jpg";
import zomatoImg from "../assets/images/zomato.jpg";
import credImg from "../assets/images/cred.jpg";

const workData = [
  {
    title: "boAt",
    tag: "AUDIO LAUNCH CAMPAIGN",
    value: "+220%",
    desc: "Sales Increase",
    overlay: "from-indigo-950/80 via-transparent to-transparent",
    img: boatImg,
  },
  {
    title: "NYKAA",
    tag: "SOCIAL MEDIA CAMPAIGN",
    value: "+180%",
    desc: "Engagement",
    overlay: "from-pink-950/80 via-transparent to-transparent",
    img: naykaImg,
  },
  {
    title: "MPL",
    tag: "INFLUENCER CAMPAIGN",
    value: "+310%",
    desc: "App Installs",
    overlay: "from-blue-950/80 via-transparent to-transparent",
    img: mplImg,
  },
  {
    title: "Zomato",
    tag: "OOH CAMPAIGN",
    value: "+150%",
    desc: "Brand Recall",
    overlay: "from-red-950/80 via-transparent to-transparent",
    img: zomatoImg,
  },
  {
    title: "CRED",
    tag: "BRAND FILM",
    value: "+200%",
    desc: "Brand Trust",
    overlay: "from-yellow-500 to-yellow-700",
    img: credImg,
  },
];

export default function WorkSection() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const isPaused = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const container = sliderRef.current;
    const speed = 0.6; // स्लाइडिंग की गति (Speed)

    const animate = () => {
      if (!isPaused.current && container) {
        container.scrollLeft += speed;
        // लूप को सीमलेस बनाने के लिए
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
    <section className="w-full py-12 md:py-16 px-6 lg:px-16 bg-white overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Work That Speaks For Itself
        </h2>

        <div className="flex justify-between items-center mb-10">
          <p className="text-gray-500 text-sm md:text-base">
            Our curated work built for brands we help grow.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-sm font-bold text-indigo-600 flex items-center hover:text-pink-500 transition-colors"
          >
            View All Projects <span className="ml-1 text-lg">→</span>
          </button>
        </div>

        {/* GRID */}
        <div 
          ref={sliderRef}
          className="flex gap-8 overflow-hidden py-4 cursor-pointer"
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          onTouchStart={() => (isPaused.current = true)}
          onTouchEnd={() => (isPaused.current = false)}
        >

          {[...workData, ...workData].map((item, index) => (
            <div
              key={index}
              className="relative h-[400px] rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-50 flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px]"
            >
              {/* Background Image + zoom hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.img})` }}
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${item.overlay} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* BRAND NAME TOP LEFT */}
              <div className="absolute top-5 left-5">
                <span className="bg-black/20 backdrop-blur-xl text-[10px] text-white px-3.5 py-1.5 rounded-full border border-white/20 font-bold tracking-[0.15em] uppercase">
                  {item.title}
                </span>
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-5 text-white w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-12">
                <p className="uppercase tracking-[0.3em] text-white/70 text-[9px] font-black mb-1.5">
                  {item.tag}
                </p>

                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-extrabold leading-none tracking-tight">{item.value}</h3>
                    <p className="text-white/80 text-[11px] mt-1.5 font-semibold uppercase tracking-wider">{item.desc}</p>
                  </div>
                  <div className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    <span className="text-xl font-light">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* ======================================================
            ALL PROJECTS MODAL POPUP
        ====================================================== */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
            <div className="relative w-full max-w-[1200px] max-h-[90vh] bg-white rounded-[30px] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in duration-300">
              
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 md:p-8 border-b border-gray-100 shrink-0">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">All Projects</h2>
                  <p className="text-gray-500 text-sm mt-1">Explore our complete curated portfolio.</p>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {workData.map((item, index) => (
                    <div
                      key={`modal-${index}`}
                      className="relative h-[320px] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.img})` }}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-b ${item.overlay} opacity-70 group-hover:opacity-90 transition-opacity duration-300`}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/30 backdrop-blur-md text-[10px] text-white px-3.5 py-1.5 rounded-full border border-white/20 font-bold tracking-[0.1em] uppercase shadow-sm">
                          {item.title}
                        </span>
                      </div>
                      <div className="absolute bottom-0 p-5 text-white w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-12">
                        <p className="uppercase tracking-[0.2em] text-white/80 text-[9px] font-black mb-1">{item.tag}</p>
                        <h3 className="text-2xl font-extrabold leading-none tracking-tight">{item.value}</h3>
                        <p className="text-white/90 text-[11px] mt-1.5 font-semibold uppercase tracking-wider">{item.desc}</p>
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
}