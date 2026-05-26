
const brands = [
  { name: "SWIGGY", font: "font-extrabold" },
  { name: "boAt", font: "font-bold" },
  { name: "zomato", font: "font-extrabold" },
  { name: "CRED", font: "font-extrabold" },
  { name: "Nykaa", font: "font-bold italic" },
  { name: "CoinDCX", font: "font-extrabold" },
  { name: "MPL", font: "font-extrabold" },
  { name: "lenskart", font: "font-bold" },
  { name: "OYO", font: "font-extrabold" },
];

const TrustBanner = () => {
  return (
    <section className="py-8 md:py-10 border-y bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-400 text-base md:text-lg mb-8 tracking-wide">
          Trusted by startups, creators, and growing businesses.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16 md:gap-y-8">
          {brands.map((brand, index) => (
            <span
              key={index}
              className={`text-xl md:text-2xl text-[#222] opacity-60 ${brand.font} select-none`}
              style={{ letterSpacing: brand.name === "Nykaa" ? "2px" : "0.5px" }}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;