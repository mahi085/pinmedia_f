import React from "react";
import { FaTrophy, FaCheckCircle } from "react-icons/fa";

const About = () => (
  <section id="about" className="w-full py-12 md:py-16 px-6 lg:px-16">
    <div className="w-full max-w-[1320px] mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div>
      <div className="uppercase text-xs font-bold text-indigo-600 mb-2 tracking-widest">
        About Pin Media
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        We are the architects of{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
          modern brands.
        </span>
      </h2>

      <p className="text-gray-500 mb-4 leading-relaxed">
        At PIN MEDIA, we believe that every brand has a unique story waiting to be heard.
        Born from a passion for creativity and data-driven strategies, we help businesses
        navigate the noisy digital landscape.
      </p>

      <p className="text-gray-500 mb-4 leading-relaxed">
        Our team of digital natives, PR experts, and branding visionaries work tirelessly
        to build campaigns that not only look good but deliver measurable growth and unforgettable impact.
      </p>

      {/* LIST (FIXED ICON STYLE) */}
      <ul className="mb-6 space-y-3 text-gray-700">
        <li className="flex items-center">
          <FaCheckCircle className="text-indigo-600 mr-2" />
          Award-winning PR & Media campaigns
        </li>

        <li className="flex items-center">
          <FaCheckCircle className="text-indigo-600 mr-2" />
          Data-backed marketing strategies
        </li>

        <li className="flex items-center">
          <FaCheckCircle className="text-indigo-600 mr-2" />
          Creative and impactful storytelling
        </li>
      </ul>

      <a
        href="#portfolio"
        className="inline-flex items-center border border-gray-300 rounded-full px-6 py-2 font-semibold text-gray-800 hover:text-indigo-600 hover:border-indigo-600 transition"
      >
        See Our Work <span className="ml-2">→</span>
      </a>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center">

      <div className="rounded-3xl overflow-hidden shadow-2xl w-full">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
          alt="About Pin Media"
          className="object-cover w-full h-[450px] lg:h-[550px]"
        />
      </div>

      {/* FLOATING CARD (FIXED RESPONSIVE POSITION) */}
      <div className="absolute -bottom-5 -left-2 sm:-left-6 bg-white/95 backdrop-blur border border-gray-100 rounded-2xl shadow-lg flex items-center gap-3 px-4 py-3 animate-bounce">

        <div className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md">
          <FaTrophy />
        </div>

        <div>
          <div className="text-xl font-bold text-gray-900 leading-tight">10+</div>
          <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
            Years of Excellence
          </div>
        </div>

      </div>

    </div>
    </div>
  </section>
);

export default About;