// // // import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

// // // const Hero = () => {
// // //   return (
// // //     <section className="pt-8 md:pt-12 pb-12 md:pb-16 relative overflow-hidden">
// // //       <div className="container mx-auto px-4">

// // //         <div className="grid lg:grid-cols-2 items-center gap-10">

// // //           {/* LEFT SIDE */}
// // //           <div className="text-center lg:text-left">

// // //             <div className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-4">
// // //               PR <span className="text-gray-400">•</span> BRANDING{" "}
// // //               <span className="text-gray-400">•</span> DIGITAL MARKETING
// // //             </div>

// // //             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
// // //               We Build Brands <br />
// // //               That People <br />
// // //               <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
// // //                 Remember.
// // //               </span>
// // //             </h1>

// // //             <p className="text-gray-500 mt-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
// // //               PR campaigns, digital marketing, branding, and growth strategies
// // //               that turn businesses into powerful brands.
// // //             </p>

// // //             <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
// // //               <a
// // //                 href="/contact"
// // //                 className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition flex items-center justify-center gap-2"
// // //               >
// // //                 Start Your Brand <span>→</span>
// // //               </a>

// // //               <a
// // //                 href="/portfolio"
// // //                 className="bg-white border border-gray-200 px-6 py-3 rounded-full font-semibold hover:text-indigo-600 hover:border-indigo-500 transition flex items-center justify-center gap-2"
// // //               >
// // //                 <span className="text-indigo-600">▶</span>
// // //                 View Our Work
// // //               </a>
// // //             </div>

// // //             {/* SOCIAL ICONS (MOBILE SHOW) */}
// // //             <div className="flex justify-center lg:justify-start gap-3 mt-8 lg:hidden">
// // //               <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-pink-500 text-white">
// // //                 <FaInstagram />
// // //               </div>
// // //               <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 text-white">
// // //                 <FaFacebookF />
// // //               </div>
// // //               <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-500 text-white">
// // //                 <FaYoutube />
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* RIGHT SIDE (DESKTOP ONLY) */}
// // //           <div className="relative hidden lg:block h-[550px]">

// // //             <div className="absolute top-1/2 left-1/2 w-[80%] h-[75%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border overflow-hidden z-10">

// // //               <div className="h-4 bg-gray-100 flex items-center gap-1 px-4">
// // //                 <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
// // //                 <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
// // //                 <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
// // //               </div>

// // //               {/* Hero Image (Desktop) */}
// // //               <div className="p-3 h-[calc(100%-1rem)]">
// // //                 <img
// // //                   className="w-full h-full object-cover rounded-xl shadow-sm"
// // //                   src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
// // //                   alt="Brand Growth"
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* FLOATING ICONS */}
// // //             <div className="absolute top-[35%] left-[-20px] w-12 h-12 bg-pink-500 text-white flex items-center justify-center rounded-xl shadow-lg animate-bounce">
// // //               📸
// // //             </div>

// // //             <div className="absolute top-[55%] left-[-10px] w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-xl shadow-lg animate-pulse">
// // //               👍
// // //             </div>

// // //             <div className="absolute top-[40%] right-[-10px] w-14 h-14 bg-indigo-600 text-white flex items-center justify-center rounded-2xl shadow-lg animate-bounce">
// // //               ▶
// // //             </div>

// // //             {/* CARDS */}
// // //             <div className="absolute top-5 left-0 w-56 bg-white p-4 rounded-xl shadow-lg animate-float">
// // //               <div className="text-xs text-gray-500">Campaign Overview</div>
// // //               <h3 className="text-2xl font-bold">12.8M</h3>
// // //               <div className="text-xs text-gray-400">
// // //                 Total Reach <span className="text-green-500">+24.6%</span>
// // //               </div>
// // //             </div>

// // //             <div className="absolute bottom-10 left-5 w-52 bg-white p-4 rounded-xl shadow-lg animate-bounce">
// // //               <div className="text-xs text-gray-500">Brand Growth</div>
// // //               <h4 className="text-xl font-bold">+320%</h4>
// // //             </div>

// // //           </div>
// // //         </div>

// // //         {/* MOBILE HERO VISUAL */}
// // //         <div className="lg:hidden mt-10 bg-white rounded-2xl shadow-lg border p-3">
// // //           {/* Hero Image (Mobile) */}
// // //           <img
// // //             className="w-full h-56 object-cover rounded-xl shadow-sm"
// // //             src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
// // //             alt="Brand Growth"
// // //           />

// // //           <div className="grid grid-cols-2 gap-3 mt-4 text-center">
// // //             <div className="p-3 bg-gray-50 rounded-xl">
// // //               <div className="text-xs text-gray-500">Reach</div>
// // //               <div className="font-bold">12.8M</div>
// // //             </div>

// // //             <div className="p-3 bg-gray-50 rounded-xl">
// // //               <div className="text-xs text-gray-500">Growth</div>
// // //               <div className="font-bold">+320%</div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //       </div>

// // //       {/* FLOAT ANIMATION */}
// // //       <style>{`
// // //         @keyframes float {
// // //           0%,100% { transform: translateY(0px); }
// // //           50% { transform: translateY(-10px); }
// // //         }
// // //         .animate-float {
// // //           animation: float 4s ease-in-out infinite;
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;

// // import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

// // const Hero = () => {
// //   return (
// //     <section className="w-full bg-[#f8f8ff] pt-8 pb-0 md:pt-16 md:pb-0">
// //       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-8 gap-10 md:gap-0">

// //         {/* LEFT SIDE */}
// //         <div className="flex-1 flex flex-col items-start justify-center">
// //           <p className="text-xs md:text-sm font-semibold text-[#a259e6] tracking-widest mb-4 uppercase">
// //             PR • BRANDING • DIGITAL MARKETING
// //           </p>

// //           <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#111827] mb-4">
// //             We Build Brands<br />
// //             That People<br />
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
// //               Remember.
// //             </span>
// //           </h1>

// //           <p className="text-gray-600 mt-2 md:mt-6 text-base md:text-lg max-w-lg">
// //             PR campaigns, digital marketing, branding, and growth strategies that turn businesses into powerful brands.
// //           </p>

// //           <div className="flex gap-4 mt-8">
// //             <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-7 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
// //               Start Your Brand
// //             </button>

// //             <button className="border border-gray-300 px-7 py-4 rounded-2xl font-semibold text-gray-800 hover:bg-gray-100 transition">
// //               View Our Work
// //             </button>
// //           </div>

// //           {/* SOCIAL ICONS */}
// //           <div className="flex gap-3 mt-8">
// //             <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-400 to-pink-500 text-white text-xl shadow-lg">
// //               <FaInstagram />
// //             </span>

// //             <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-blue-700 text-white text-xl shadow-lg">
// //               <FaFacebookF />
// //             </span>

// //             <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-red-500 to-pink-500 text-white text-xl shadow-lg">
// //               <FaYoutube />
// //             </span>
// //           </div>
// //         </div>

// //         {/* RIGHT SIDE */}
// //         <div className="flex-1 flex flex-col items-center md:items-end w-full mt-12 md:mt-0">

// //           <div className="relative w-full max-w-[420px]">

// //             {/* MAIN STAT CARD */}
// //             <div className="absolute -top-8 -left-8 w-32 h-32 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 border border-gray-100">
// //               <span className="text-xs text-gray-400">Campaign Overview</span>
// //               <span className="text-2xl font-bold text-[#111827] mt-2">12.8M</span>
// //               <span className="text-xs text-green-500 mt-1">+0.4%</span>
// //               <span className="text-xs text-gray-400 mt-1">Total Reach</span>
// //             </div>

// //             {/* ENGAGEMENT */}
// //             <div className="absolute top-0 right-0 w-28 h-28 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-3 border border-gray-100">
// //               <span className="text-xs text-gray-400">Engagement</span>
// //               <span className="text-2xl font-bold text-[#a259e6] mt-2">78%</span>
// //               <span className="text-xs text-green-500 mt-1">+16.4%</span>
// //             </div>

// //             {/* VIDEO */}
// //             <div className="relative w-full h-48 bg-gray-200 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center border border-gray-100 mt-10">
// //               <img
// //                 src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
// //                 alt="Meeting"
// //                 className="object-cover w-full h-full"
// //               />
// //               <button className="absolute inset-0 flex items-center justify-center">
// //                 <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
// //                   <circle cx="28" cy="28" r="28" fill="#fff" fillOpacity="0.8" />
// //                   <path d="M22 19L38 28L22 37V19Z" fill="#a259e6" />
// //                 </svg>
// //               </button>
// //             </div>

// //             {/* BRAND GROWTH */}
// //             <div className="absolute bottom-0 left-0 w-36 h-24 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-3 border border-gray-100">
// //               <span className="text-xs text-gray-400">Brand Growth</span>
// //               <span className="text-xl font-bold text-[#111827] mt-1">+320%</span>
// //               <span className="text-xs text-gray-400 mt-1">This Month</span>
// //             </div>

// //             {/* PR MENTIONS */}
// //             <div className="absolute -bottom-6 right-0 w-32 h-20 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-3 border border-gray-100">
// //               <span className="text-xs text-gray-400">PR Mentions</span>
// //               <span className="text-lg font-bold text-[#a259e6] mt-1">542</span>
// //               <span className="text-xs text-green-500 mt-1">+38.5%</span>
// //             </div>

// //             {/* spacer */}
// //             <div className="invisible h-64 md:h-80" />
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaYoutube,
// } from "react-icons/fa";

// const Hero = () => {
//   return (
//       <section className="w-full min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 flex items-center justify-center px-6 py-12">
//       <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
//             PR • Branding • Digital Marketing
//           </p>

//           <h1 className="text-5xl font-bold leading-tight text-gray-900">
//             We Build Brands
//             <br />
//             That People{" "}
//             <span className="text-purple-600">Remember.</span>
//           </h1>

//           <p className="mt-6 text-gray-600 max-w-md">
//             PR campaigns, digital marketing, branding, and growth strategies
//             that turn businesses into powerful brands.
//           </p>

//           <div className="flex gap-4 mt-8">
//             <button className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition">
//               Start Your Brand
//             </button>

//             <button className="border border-gray-300 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white transition">
//               View Our Work
//               <span>▶</span>
//             </button>
//           </div>

//           <p className="mt-10 text-sm text-gray-400">Scroll Down ↓</p>
//         </div>

//         {/* RIGHT VISUAL DASHBOARD */}
//         <div className="relative w-full h-[520px]">

//           {/* Floating Card 1 */}
//           <div className="absolute top-0 right-10 bg-white shadow-xl rounded-2xl p-5 w-64">
//             <p className="text-xs text-gray-500">Campaign Overview</p>
//             <h3 className="text-2xl font-bold mt-2">12.8M</h3>

//             <div className="mt-3 h-24 bg-gradient-to-r from-purple-200 to-blue-200 rounded-xl"></div>
//           </div>

//           {/* Floating Engagement Card */}
//           <div className="absolute top-24 right-72 bg-white shadow-xl rounded-2xl p-4 w-40 text-center">
//             <p className="text-xs text-gray-500">Engagement</p>

//             <div className="w-20 h-20 mx-auto mt-2 rounded-full border-8 border-purple-500 flex items-center justify-center">
//               <span className="text-sm font-bold">78%</span>
//             </div>

//             <p className="text-green-500 text-xs mt-2">+5.4%</p>
//           </div>

//           {/* Video Card */}
//           <div className="absolute bottom-10 right-40 bg-white shadow-xl rounded-2xl p-3 w-72">
//             <div className="relative">
//               <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center">
//                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
//                   ▶
//                 </div>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               PR Marketing Meeting Overview
//             </p>
//           </div>

//           {/* Social Icons */}
//           <div className="absolute left-10 top-10 flex flex-col gap-4">
//             <div className="w-10 h-10 bg-pink-500 rounded-lg"></div>
//             <div className="w-10 h-10 bg-blue-600 rounded-lg"></div>
//           </div>

//           {/* Growth Card */}
//           <div className="absolute bottom-0 left-20 bg-white shadow-xl rounded-2xl p-4 w-48">
//             <p className="text-xs text-gray-500">Brand Growth</p>
//             <h3 className="text-xl font-bold mt-1">+320%</h3>
//             <div className="h-16 mt-2 bg-gradient-to-r from-green-200 to-green-400 rounded-lg"></div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
// export default Hero;
// import { useEffect, useRef } from "react";

// /* ── Inline SVG Icons ── */
// const IGIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
//     <defs>
//       <radialGradient id="ig" cx="30%" cy="107%" r="150%">
//         <stop offset="0%" stopColor="#ffd600" />
//         <stop offset="30%" stopColor="#ff6930" />
//         <stop offset="60%" stopColor="#fe3b92" />
//         <stop offset="100%" stopColor="#a334fa" />
//       </radialGradient>
//     </defs>
//     <rect width="24" height="24" rx="6" fill="url(#ig)" />
//     <rect x="6.5" y="6.5" width="11" height="11" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
//     <circle cx="12" cy="12" r="2.8" stroke="white" strokeWidth="1.5" fill="none" />
//     <circle cx="17" cy="7" r="1" fill="white" />
//   </svg>
// );

// const FBIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
//     <rect width="24" height="24" rx="6" fill="#1877F2" />
//     <path d="M13.5 8H15V5.5H13C11.3 5.5 10 6.8 10 8.5V10H8V12.5H10V19H12.5V12.5H14.5L15 10H12.5V8.5C12.5 8.2 12.7 8 13.5 8Z" fill="white" />
//   </svg>
// );

// /* ── Smooth area chart ── */
// const AreaChart = () => (
//   <svg viewBox="0 0 200 60" className="w-full h-14" preserveAspectRatio="none">
//     <defs>
//       <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
//         <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.02" />
//       </linearGradient>
//     </defs>
//     <path
//       d="M0 45 C20 40,30 30,50 25 C70 20,80 35,100 20 C120 5,140 28,160 18 C175 10,185 22,200 15 L200 60 L0 60Z"
//       fill="url(#ag)"
//     />
//     <path
//       d="M0 45 C20 40,30 30,50 25 C70 20,80 35,100 20 C120 5,140 28,160 18 C175 10,185 22,200 15"
//       fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"
//     />
//   </svg>
// );

// /* ── Donut ── */
// const Donut = ({ pct = 78, color = "#10b981" }) => {
//   const r = 30, circ = 2 * Math.PI * r;
//   return (
//     <svg viewBox="0 0 72 72" className="w-[72px] h-[72px]">
//       <circle cx="36" cy="36" r={r} fill="none" stroke="#f0fdf4" strokeWidth="8" />
//       <circle cx="36" cy="36" r={r} fill="none" stroke={color} strokeWidth="8"
//         strokeDasharray={`${(pct / 100) * circ} ${circ}`}
//         strokeLinecap="round" transform="rotate(-90 36 36)" />
//       <text x="36" y="41" textAnchor="middle" fontSize="13" fontWeight="800" fill="#111827">{pct}%</text>
//     </svg>
//   );
// };

// /* ── Bar chart ── */
// const Bars = () => {
//   const data = [4, 6, 5, 8, 7, 9, 8, 11, 10, 12];
//   return (
//     <svg viewBox="0 0 66 24" className="w-full h-8">
//       {data.map((v, i) => (
//         <rect key={i} x={i * 6.6 + 0.8} y={24 - v * 2} width="5" height={v * 2}
//           rx="1.5" fill={`hsl(263,${60 + i * 3}%,${62 - i * 2}%)`} />
//       ))}
//     </svg>
//   );
// };

// /* ── Wave sparkline ── */
// const Wave = ({ color = "#10b981" }) => (
//   <svg viewBox="0 0 90 32" className="w-full h-8" preserveAspectRatio="none">
//     <path d="M0 22 Q15 10,30 18 Q45 26,60 12 Q72 2,90 10"
//       fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
//   </svg>
// );

// /* ── Float keyframes injected once ── */
// const floatStyle = `
//   @keyframes float0{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
//   @keyframes float1{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
//   @keyframes float2{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
//   @keyframes float3{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
//   @keyframes float4{0%,100%{transform:translateY(0)}50%{transform:translateY(-11px)}}
//   .f0{animation:float0 6s ease-in-out infinite}
//   .f1{animation:float1 6.5s ease-in-out infinite .8s}
//   .f2{animation:float2 5.5s ease-in-out infinite 1.4s}
//   .f3{animation:float3 7s ease-in-out infinite 2s}
//   .f4{animation:float4 6s ease-in-out infinite .4s}
// `;

// export default function Hero() {
//   return (
//     <>
//       <style>{floatStyle}</style>
//       <section className="w-full min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 flex items-center justify-center px-6 py-12 relative overflow-hidden">

//         {/* bg blobs */}
//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute top-[-12%] right-[4%] w-[480px] h-[480px] rounded-full bg-violet-200/40 blur-3xl" />
//           <div className="absolute bottom-[-8%] left-[18%] w-[360px] h-[260px] rounded-full bg-purple-100/30 blur-3xl" />
//         </div>

//         <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

//           {/* ── LEFT ── */}
//           <div>
//             <p className="text-[11px] tracking-[0.22em] text-gray-400 uppercase mb-5 font-semibold">
//               PR &nbsp;•&nbsp; Branding &nbsp;•&nbsp; Digital Marketing
//             </p>

//             <h1 className="text-5xl font-extrabold leading-[1.1] text-gray-900 tracking-tight mb-5">
//               We Build Brands<br />
//               That People{" "}
//               <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
//                 Remember.
//               </span>
//             </h1>

//             <p className="text-gray-500 text-[15px] leading-relaxed max-w-[390px] mb-9">
//               PR campaigns, digital marketing, branding, and growth strategies
//               that turn businesses into powerful brands.
//             </p>

//             <div className="flex flex-wrap gap-4 mb-12">
//               <button className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-violet-300/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-sm">
//                 Start Your Brand
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </button>

//               <button className="flex items-center gap-2.5 border border-gray-200 bg-white/80 backdrop-blur text-gray-700 font-semibold px-6 py-3.5 rounded-full hover:border-violet-300 hover:shadow-md transition-all duration-200 text-sm">
//                 View Our Work
//                 <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
//                   <svg className="w-3 h-3 text-gray-600 ml-px" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                 </span>
//               </button>
//             </div>

//             <div className="flex items-center gap-2.5 text-gray-400 text-xs">
//               <span className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center pt-1.5">
//                 <span className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
//               </span>
//               Scroll Down
//             </div>
//           </div>

//           {/* ── RIGHT DASHBOARD ── */}
//           <div className="relative hidden lg:block" style={{ height: 520 }}>

//             {/* Card 1 — Campaign Overview */}
//             <div className="f0 absolute top-0 left-16 w-[230px] bg-white rounded-2xl shadow-2xl shadow-indigo-100/70 p-4 border border-gray-100/80">
//               <div className="flex items-center justify-between mb-1">
//                 <span className="text-[11px] font-semibold text-gray-400">Campaign Overview</span>
//                 <span className="text-[9px] bg-gray-50 border border-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
//                   This Month ▾
//                 </span>
//               </div>
//               <div className="mb-2">
//                 <p className="text-[27px] font-black text-gray-900 leading-none">12.8M</p>
//                 <p className="text-[10px] text-gray-400 mt-0.5">Total Reach</p>
//                 <p className="text-[11px] font-bold text-emerald-500 mt-0.5">+26.6%</p>
//               </div>
//               <AreaChart />
//               <div className="mt-2 pt-2 border-t border-gray-50">
//                 <p className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold mb-1.5">Top Mention</p>
//                 {[["Tech Crunch", "#7c3aed", "+51"], ["Forbes", "#6366f1", "+49"]].map(([name, col, val]) => (
//                   <div key={name} className="flex items-center gap-1.5 mb-1">
//                     <span className="w-2 h-2 rounded-full flex-none" style={{ background: col }} />
//                     <span className="text-[11px] text-gray-700 font-medium flex-1">{name}</span>
//                     <span className="text-[10px] text-gray-400">{val}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Card 2 — Engagement */}
//             <div className="f1 absolute top-2 right-0 w-[138px] bg-white rounded-2xl shadow-2xl shadow-indigo-100/60 p-4 border border-gray-100/80">
//               <p className="text-[11px] font-semibold text-gray-400 mb-3">Engagement</p>
//               <div className="flex justify-center">
//                 <Donut pct={78} color="#10b981" />
//               </div>
//               <p className="text-center text-[12px] font-bold text-emerald-500 mt-2">+16.4%</p>
//             </div>

//             {/* Social icons */}
//             <div className="absolute top-36 left-0 flex flex-col gap-3">
//               <div className="f2 w-12 h-12 rounded-2xl bg-white shadow-lg p-1.5 cursor-pointer hover:scale-110 transition-transform">
//                 <IGIcon />
//               </div>
//               <div className="f3 w-12 h-12 rounded-2xl bg-white shadow-lg p-1.5 cursor-pointer hover:scale-110 transition-transform">
//                 <FBIcon />
//               </div>
//             </div>

//             {/* Video card */}
//             <div className="f4 absolute top-52 right-8 w-[154px] h-[96px] rounded-2xl overflow-hidden border-2 border-white shadow-2xl shadow-gray-300/50">
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
//                 alt="meeting"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 flex items-center justify-center bg-black/10">
//                 <span className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 shadow-xl flex items-center justify-center">
//                   <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                 </span>
//               </div>
//             </div>

//             {/* Card 3 — Brand Growth */}
//             <div className="f3 absolute bottom-14 left-14 w-[158px] bg-white rounded-2xl shadow-2xl shadow-indigo-100/70 p-4 border border-gray-100/80">
//               <p className="text-[11px] font-semibold text-gray-400 mb-1">Brand Growth</p>
//               <p className="text-[30px] font-black text-gray-900 leading-none">+320%</p>
//               <p className="text-[10px] text-gray-400 mt-0.5 mb-2">This Month</p>
//               <Bars />
//             </div>

//             {/* Card 4 — PR Mentions */}
//             <div className="f2 absolute bottom-8 right-4 w-[128px] bg-white rounded-2xl shadow-2xl shadow-indigo-100/60 p-4 border border-gray-100/80">
//               <p className="text-[11px] font-semibold text-gray-400 mb-1">PR Mentions</p>
//               <p className="text-[28px] font-black text-gray-900 leading-none">542</p>
//               <p className="text-[12px] font-bold text-emerald-500 mt-0.5 mb-2">+36.0%</p>
//               <Wave color="#10b981" />
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { Link } from "react-router-dom";

/* ─────────────────────────────────────────────
   Instagram Icon
───────────────────────────────────────────── */
const IGIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <defs>
      <radialGradient id="ig" cx="30%" cy="110%" r="140%">
        <stop offset="0%" stopColor="#FFD600" />
        <stop offset="25%" stopColor="#FF6930" />
        <stop offset="55%" stopColor="#FE3B92" />
        <stop offset="100%" stopColor="#A334FA" />
      </radialGradient>
    </defs>

    <rect width="48" height="48" rx="12" fill="url(#ig)" />

    <rect
      x="13"
      y="13"
      width="22"
      height="22"
      rx="6"
      stroke="white"
      strokeWidth="3"
    />

    <circle
      cx="24"
      cy="24"
      r="5.5"
      stroke="white"
      strokeWidth="3"
    />

    <circle cx="34" cy="14" r="2" fill="white" />
  </svg>
);

/* ─────────────────────────────────────────────
   Facebook Icon
───────────────────────────────────────────── */
const FBIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <rect width="48" height="48" rx="12" fill="#1877F2" />

    <path
      d="M27 10H31V16H27C25.9 16 25 16.9 25 18V21H31L30 27H25V38H19V27H15V21H19V18C19 13.6 22.6 10 27 10Z"
      fill="white"
    />
  </svg>
);

/* ─────────────────────────────────────────────
   Area Chart
───────────────────────────────────────────── */
const AreaChart = () => (
  <svg
    viewBox="0 0 220 65"
    preserveAspectRatio="none"
    className="w-full h-16"
  >
    <defs>
      <linearGradient id="agrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.01" />
      </linearGradient>
    </defs>

    <path
      d="M0 50 C20 42,28 34,45 28 C60 20,74 38,90 24 C110 8,124 34,142 18 C158 6,176 24,200 12 L220 12 L220 65 L0 65Z"
      fill="url(#agrad)"
    />

    <path
      d="M0 50 C20 42,28 34,45 28 C60 20,74 38,90 24 C110 8,124 34,142 18 C158 6,176 24,200 12 L220 12"
      fill="none"
      stroke="#8b5cf6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

/* ─────────────────────────────────────────────
   Donut Chart
───────────────────────────────────────────── */
const Donut = ({ pct = 78 }) => {
  const r = 30;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <svg viewBox="0 0 80 80" className="w-[90px] h-[90px]">
      <circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        stroke="#e9d5ff"
        strokeWidth="9"
      />

      <circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        stroke="url(#grad)"
        strokeWidth="9"
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeLinecap="round"
        transform="rotate(-90 40 40)"
      />

      <defs>
        <linearGradient id="grad">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
      </defs>

      <text
        x="40"
        y="45"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#111827"
      >
        {pct}%
      </text>
    </svg>
  );
};

/* ─────────────────────────────────────────────
   Bar Chart
───────────────────────────────────────────── */
const BarChart = () => {
  const vals = [4, 6, 5, 8, 7, 10];

  return (
    <svg viewBox="0 0 70 30" className="w-full h-9">
      {vals.map((v, i) => (
        <rect
          key={i}
          x={i * 11 + 2}
          y={30 - v * 2.3}
          width="7"
          height={v * 2.3}
          rx="2"
          fill="#8b5cf6"
        />
      ))}
    </svg>
  );
};

/* ─────────────────────────────────────────────
   Wave Chart
───────────────────────────────────────────── */
const Wave = () => (
  <svg
    viewBox="0 0 100 36"
    preserveAspectRatio="none"
    className="w-full h-9"
  >
    <path
      d="M0 24 Q12 14,24 20 Q36 26,50 14 Q64 4,76 16 Q88 26,100 10"
      fill="none"
      stroke="#a855f7"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

/* ─────────────────────────────────────────────
   Floating Animation
───────────────────────────────────────────── */
const FLOAT = `
@keyframes float1{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-10px)}
}

@keyframes float2{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-8px)}
}

.float1{
  animation:float1 6s ease-in-out infinite;
}

.float2{
  animation:float2 5s ease-in-out infinite;
}
`;

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
export default function Hero() {
  return (
    <>
      <style>{FLOAT}</style>

      <section
        className="relative overflow-hidden min-h-screen
        bg-white flex items-center px-6 lg:px-16 py-20 md:py-24"
      >
        {/* Background Blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100 rounded-full blur-[100px] opacity-70" />

        <div
          className="relative z-10 w-full max-w-[1320px] mx-auto
          grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Text */}
            <p className="uppercase tracking-[0.25em] text-[12px] font-bold text-violet-500 mb-6">
              PR • Branding • Digital Marketing
            </p>

            {/* Main Heading */}
            <h1
              className="text-[38px] sm:text-[54px] md:text-[66px] xl:text-[78px]
              leading-[1.1] font-black tracking-tight text-[#111827]"
            >
              We Build Brands
              <br />
              That People
              <br />

              <span
                className="bg-gradient-to-r from-indigo-600
                via-fuchsia-500 to-pink-500 bg-clip-text text-transparent"
              >
                Remember.
              </span>
            </h1>

            {/* Description */}
            <p
              className="mt-7 text-[15px] sm:text-[17px] leading-relaxed
              text-gray-500 max-w-[540px]"
            >
              PR campaigns, digital marketing, branding, and growth
              strategies that turn businesses into powerful brands.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
              <button
                className="px-8 py-4 rounded-2xl text-white
                font-semibold bg-gradient-to-r from-indigo-600
                via-violet-600 to-fuchsia-500 shadow-xl"
              >
                Start Your Brand →
              </button>

              <Link
                to="/blog"
                className="px-8 py-4 rounded-2xl bg-white
                border border-gray-200 text-gray-800 font-semibold
                shadow-sm flex items-center gap-3"
              >
                View Our Work

                <span
                  className="w-8 h-8 rounded-full bg-gray-50
                  flex items-center justify-center"
                >
                  ▶
                </span>
              </Link>
            </div>
          </div>

          {/* MOBILE VISUAL (Show only on small/medium screens) */}
          <div className="lg:hidden w-full flex flex-col gap-6 mt-4">
             <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl flex items-center justify-between">
                <div>
                   <p className="text-[28px] font-black text-gray-900 leading-none">12.8M</p>
                   <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-wider">Total Reach</p>
                </div>
                <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">
                   +24.6%
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-lg text-center">
                   <p className="text-2xl font-black text-gray-900">+320%</p>
                   <p className="text-[9px] text-gray-400 uppercase font-bold mt-1">Growth</p>
                </div>
                <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-lg text-center">
                   <p className="text-2xl font-black text-gray-900">542</p>
                   <p className="text-[9px] text-gray-400 uppercase font-bold mt-1">Mentions</p>
                </div>
             </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-[560px] h-[560px]">

              {/* Campaign Overview */}
              <div
                className="absolute top-0 left-10 w-[300px]
                bg-white rounded-[28px] p-6 border border-gray-100
                shadow-[0_20px_60px_rgba(124,58,237,0.12)] float1"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-gray-500">
                    Campaign Overview
                  </p>

                  <span
                    className="text-xs px-3 py-1 rounded-full
                    bg-gray-100 text-gray-500"
                  >
                    This Month
                  </span>
                </div>

                <h2 className="text-5xl font-black text-gray-900">
                  12.8M
                </h2>

                <p className="text-gray-400 mt-1">Total Reach</p>

                <p className="text-emerald-500 font-bold mt-1 mb-3">
                  +24.6%
                </p>

                <AreaChart />
              </div>

              {/* Engagement */}
              <div
                className="absolute top-0 right-0 w-[180px]
                bg-white rounded-[28px] p-5 border border-gray-100
                shadow-[0_20px_60px_rgba(124,58,237,0.12)] float2"
              >
                <p className="text-sm font-semibold text-gray-500 mb-3">
                  Engagement
                </p>

                <div className="flex justify-center">
                  <Donut />
                </div>

                <p className="text-center mt-2 font-bold text-emerald-500">
                  +16.4%
                </p>
              </div>

              {/* Instagram Icon */}
              <div
                className="absolute left-0 top-[180px]
                w-[60px] h-[60px] bg-white rounded-2xl p-2
                shadow-xl float1"
              >
                <IGIcon />
              </div>

              {/* Facebook Icon */}
              <div
                className="absolute left-2 top-[260px]
                w-[58px] h-[58px] bg-white rounded-2xl p-2
                shadow-xl float2"
              >
                <FBIcon />
              </div>

              {/* Video Card */}
              <div
                className="absolute right-8 top-[220px]
                w-[280px] h-[180px] rounded-[28px]
                overflow-hidden shadow-2xl border-[6px] border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80"
                  alt="meeting"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full
                    bg-gradient-to-r from-pink-500 to-orange-400
                    flex items-center justify-center text-white text-2xl"
                  >
                    ▶
                  </div>
                </div>
              </div>

              {/* Brand Growth */}
              <div
                className="absolute left-14 bottom-10 w-[220px]
                bg-white rounded-[28px] p-5 border border-gray-100
                shadow-[0_20px_60px_rgba(124,58,237,0.12)] float2"
              >
                <p className="text-sm text-gray-500 font-semibold">
                  Brand Growth
                </p>

                <h3 className="text-5xl font-black text-gray-900 mt-2">
                  +320%
                </h3>

                <p className="text-gray-400 text-sm mb-3">This Month</p>

                <BarChart />
              </div>

              {/* PR Mentions */}
              <div
                className="absolute right-0 bottom-4 w-[180px]
                bg-white rounded-[28px] p-5 border border-gray-100
                shadow-[0_20px_60px_rgba(124,58,237,0.12)] float1"
              >
                <p className="text-sm text-gray-500 font-semibold">
                  PR Mentions
                </p>

                <h3 className="text-4xl font-black text-gray-900 mt-1">
                  542
                </h3>

                <p className="text-emerald-500 font-bold text-sm mt-1 mb-2">
                  +38.5%
                </p>

                <Wave />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}