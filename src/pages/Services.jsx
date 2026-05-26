import { FaBullhorn, FaBullseye, FaTags, FaArrowRight } from "react-icons/fa";

const services = [
  {
    icon: <FaBullhorn />,
    title: "PR Marketing",
    items: ["Media Outreach", "Press Releases", "Brand Visibility", "Crisis Management"],
  },
  {
    icon: <FaBullseye />,
    title: "Digital Marketing",
    items: ["SEO Optimization", "Paid Advertising", "Social Media Growth", "Performance Marketing"],
  },
  {
    icon: <FaTags />,
    title: "Branding",
    items: ["Brand Identity", "Logo & Visual Design", "Brand Strategy", "Rebranding"],
  },
];

const Services = () => (
  <section id="services" className="w-full min-h-[calc(100vh-74px)] flex flex-col justify-center pt-12 md:pt-16 pb-12 md:pb-16 px-6 lg:px-16">
    <div className="w-full max-w-[1320px] mx-auto">
      <div className="grid md:grid-cols-4 gap-8 items-start">
      <div>
        <div className="uppercase text-xs font-bold text-indigo-600 mb-2 tracking-widest">Our Services</div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 leading-tight">Everything You Need To Grow Your Brand</h2>
        <div className="w-12 h-1.5 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full"></div>
      </div>
      <div className="md:col-span-3 grid md:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group flex flex-col h-full overflow-hidden">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 text-3xl mb-6 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-500 group-hover:text-white transition-all duration-500 shadow-sm">{service.icon}</div>
            <h5 className="font-extrabold text-xl md:text-2xl text-gray-900 mb-3">{service.title}</h5>
            <ul className="mb-8 space-y-3 text-gray-500 text-[15px] flex-grow">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-center"><span className="text-indigo-600 mr-2">•</span>{item}</li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center text-[15px] text-indigo-600 font-bold hover:text-pink-500 transition-colors w-fit mt-auto">
              Learn More <FaArrowRight className="ml-2" />
            </a>
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-600 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </div>
        ))}
      </div>
      </div>
    </div>
  </section>
);

export default Services;