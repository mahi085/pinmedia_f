import {
  FaBullhorn,
  FaChartLine,
  FaPaintBrush,
  FaArrowRight,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaBullhorn />,
    title: "PR Marketing",
    desc: "Media outreach, press releases & brand visibility.",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    desc: "SEO, ads, social media growth & performance marketing.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Branding",
    desc: "Logo design, brand identity & rebranding.",
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 lg:px-16">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="grid md:grid-cols-4 gap-8 items-start">
        <div>
          <div className="uppercase text-xs font-bold text-indigo-600 mb-2 tracking-widest">Our Services</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">Everything You Need To Grow Your Brand</h2>
          <div className="w-10 h-1 bg-indigo-600 rounded"></div>
        </div>

        <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col h-full overflow-hidden"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 text-2xl mb-4 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-500 group-hover:text-white transition">
                {card.icon}
              </div>

              <h2 className="font-bold text-lg mb-2">
                {card.title}
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                {card.desc}
              </p>

              <a href="#" className="inline-flex items-center text-sm text-indigo-600 font-semibold hover:text-pink-500 transition-colors w-fit mt-5">
                Learn More <FaArrowRight className="ml-2" />
              </a>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Features;