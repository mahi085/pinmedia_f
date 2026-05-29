const brands = [
  {
    name: "Swiggy",
    color: "#FC8019",
    img: "https://www.google.com/s2/favicons?sz=128&domain=swiggy.com",
  },
  {
    name: "boAt",
    color: "#E31E24",
    img: "https://www.google.com/s2/favicons?sz=128&domain=boat-lifestyle.com",
  },
  {
    name: "Zomato",
    color: "#CB202D",
    img: "https://www.google.com/s2/favicons?sz=128&domain=zomato.com",
  },
  {
    name: "CRED",
    color: "#000000",
    img: "https://www.google.com/s2/favicons?sz=128&domain=cred.club",
  },
  {
    name: "NYKAA",
    color: "#FC2779",
    img: "https://www.google.com/s2/favicons?sz=128&domain=nykaa.com",
  },
  {
    name: "CoinDCX",
    color: "#0042FE",
    img: "https://www.google.com/s2/favicons?sz=128&domain=coindcx.com",
  },
  {
    name: "MPL",
    color: "#E61C38",
    img: "https://www.google.com/s2/favicons?sz=128&domain=mpl.live",
  },
  {
    name: "Lenskart",
    color: "#32B8A4",
    img: "https://www.google.com/s2/favicons?sz=128&domain=lenskart.com",
  },
  {
    name: "OYO",
    color: "#EE2E24",
    img: "https://www.google.com/s2/favicons?sz=128&domain=oyorooms.com",
  },
];

const BrandsTicker = () => {
  // Duplicate brands for seamless infinite scroll
  const tickerBrands = [...brands, ...brands];

  return (
    <section className="w-full py-10 md:py-12 bg-white border-b border-gray-100 px-6 lg:px-16">
      <div className="w-full max-w-[1320px] mx-auto">
        <p className="text-center text-gray-400 text-base mb-6">
          Trusted by startups, creators, and growing businesses.
        </p>
        <div className="overflow-hidden relative">
          <div
            className="flex gap-12 animate-[scrollBrands_25s_linear_infinite]"
            style={{
              minWidth: "200%",
            }}
          >
            {tickerBrands.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-2 min-w-max hover:scale-105 transition"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-7 h-7 rounded"
                  style={{ objectFit: "contain" }}
                />
                <span
                  className="font-bold text-lg"
                  style={{
                    color: brand.color,
                    fontStyle: brand.name === "NYKAA" ? "italic" : "normal",
                  }}
                >
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes scrollBrands {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default BrandsTicker;
