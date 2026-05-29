import { useCallback, useEffect, useRef, useState } from "react";
import { getProjects } from "../services/api";

export default function WorkSection() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const isPaused = useRef(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = useCallback(async () => {
    try {
      const { data } = await getProjects();
      setProjects(data.data || []);
    } catch (error) {
      console.error(
        "Failed to fetch projects:",
        error
      );
      setProjects([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timeoutId =
      window.setTimeout(
        fetchProjects,
        0
      );

    return () =>
      window.clearTimeout(
        timeoutId
      );
  }, [fetchProjects]);

  useEffect(() => {
    if (projects.length === 0)
      return;

    const container =
      sliderRef.current;

    const speed = 0.6;

    const animate = () => {
      if (
        !isPaused.current &&
        container
      ) {
        container.scrollLeft +=
          speed;

        // FIXED HERE
        if (
          container.scrollLeft >=
          container.scrollWidth -
            container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }

      animationRef.current =
        requestAnimationFrame(
          animate
        );
    };

    animationRef.current =
      requestAnimationFrame(
        animate
      );

    return () =>
      cancelAnimationFrame(
        animationRef.current
      );
  }, [projects]);

  const getOverlayColor = (
    index
  ) => {
    const overlays = [
      "from-indigo-950/80 via-transparent to-transparent",
      "from-pink-950/80 via-transparent to-transparent",
      "from-blue-950/80 via-transparent to-transparent",
      "from-red-950/80 via-transparent to-transparent",
      "from-yellow-500 to-yellow-700",
    ];

    return overlays[
      index %
        overlays.length
    ];
  };

  return (
    <section className="w-full py-12 md:py-16 px-6 lg:px-16 bg-white overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto">

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Work That Speaks For
          Itself
        </h2>

        <div className="flex justify-between items-center mb-10">
          <p className="text-gray-500 text-sm md:text-base">
            Our curated work
            built for brands we
            help grow.
          </p>

          <button
            onClick={() =>
              setIsModalOpen(
                true
              )
            }
            className="text-sm font-bold text-indigo-600 flex items-center hover:text-pink-500 transition-colors"
          >
            View All Projects
            <span className="ml-1 text-lg">
              →
            </span>
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : projects.length ===
          0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              No projects
              available yet.
            </p>
          </div>
        ) : (
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-hidden py-4 cursor-pointer"
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

            {/* FIXED HERE */}
            {projects.map(
              (
                item,
                index
              ) => (
                <div
                  key={
                    item._id
                  }
                  className="relative h-[400px] rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-50 flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${getOverlayColor(
                      index
                    )} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="absolute top-5 left-5">
                    <span className="bg-black/20 backdrop-blur-xl text-[10px] text-white px-3.5 py-1.5 rounded-full border border-white/20 font-bold tracking-[0.15em] uppercase">
                      {item.client ||
                        item.title}
                    </span>
                  </div>

                  <div className="absolute bottom-0 p-5 text-white w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-12">

                    <p className="uppercase tracking-[0.3em] text-white/70 text-[9px] font-black mb-1.5 line-clamp-1">
                      {item
                        .services?.[0] ||
                        "PROJECT"}
                    </p>

                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl font-extrabold line-clamp-1">
                          {
                            item.title
                          }
                        </h3>

                        <p className="text-white/80 text-[11px] mt-1.5 font-semibold uppercase tracking-wider">
                          {item.completed
                            ? "Completed"
                            : "In Progress"}
                        </p>
                      </div>

                      <div className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100">
                        →
                      </div>
                    </div>

                  </div>
                </div>
              )
            )}

          </div>
        )}

        {/* Keep your existing modal unchanged */}

      </div>
    </section>
  );
}