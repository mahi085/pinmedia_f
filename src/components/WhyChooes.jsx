import { FaChartLine, FaBullseye, FaBolt, FaUserTie, FaMagic } from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine size={32} />,
    title: "Data-Driven\nStrategy",
    desc: "Insights that drive\nreal results.",
  },
  {
    icon: <FaMagic size={32} />,
    title: "Creative\nStorytelling",
    desc: "Stories that connect\nand convert.",
  },
  {
    icon: <FaBullseye size={32} />,
    title: "High Conversion\nCampaigns",
    desc: "Campaigns built for\nmaximum ROI.",
  },
  {
    icon: <FaBolt size={32} />,
    title: "Fast & Agile\nExecution",
    desc: "Quick turnarounds,\nremarkable results.",
  },
  {
    icon: <FaUserTie size={32} />,
    title: "Personal Branding\nExperts",
    desc: "Helping personal\nbrands that last.",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 lg:px-16">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="border border-gray-200 rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-sm">
          
          {/* Left Content */}
          <div className="lg:w-[30%] p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100 bg-gray-50/40">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-purple-600 mb-3"> {/* Text style matching y.jpeg */}
              WHY CHOOSE PIN MEDIA?
            </p>

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1B103D] leading-tight"> {/* Heading style matching y.jpeg */}
              We Don’t Just Market,
              <br />
              We Make An Impact.
            </h2>
          </div>

          {/* Right Cards */}
          <div className="lg:w-[70%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"> {/* Grid for 5 cards */}
            {features.map((item, index) => (
              <div
                key={index}
                className="border-r border-b last:border-r-0 lg:border-b-0 border-gray-100 p-8 flex flex-col items-center text-center group hover:bg-purple-50/30 transition-all duration-300" /* Increased padding */
              >
                <div className="text-purple-600 text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">{item.icon}</div> {/* Increased icon size to text-3xl */}

                <h3 className="text-base font-bold text-[#1B103D] leading-tight whitespace-pre-line uppercase tracking-tight"> {/* Adjusted title size */}
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 mt-3 leading-relaxed whitespace-pre-line font-medium"> {/* Adjusted description size */}
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
