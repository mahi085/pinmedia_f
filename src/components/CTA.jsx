const CTA = () => {
  return (
    <section className="w-full py-12 md:py-16 px-6 lg:px-16">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#D946EF] rounded-[24px] px-6 py-5 md:px-10 md:py-6 flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden">

          {/* Background Blur Effects */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl"></div>

          {/* Left Content */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Ready to Build a Brand
              <br />
              That Stands Out?
            </h2>

            <p className="text-white/80 text-sm md:text-base mt-1.5 max-w-lg leading-relaxed">
              Let’s create something powerful together and grow
              your business with impactful branding & marketing.
            </p>
          </div>

          {/* Button */}
          <div className="relative z-10">
            <button 
              onClick={() => window.dispatchEvent(new Event('openContactModal'))}
              className="bg-white text-purple-700 font-semibold px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base rounded-xl hover:scale-105 transition duration-300 shadow-lg"
            >
              Book Free Consultation →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;