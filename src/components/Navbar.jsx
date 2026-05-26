import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX, HiCheckCircle } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsModalOpen(false);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  /* ─────────────────────────────────────────
     OPEN MODAL EVENT
  ───────────────────────────────────────── */
  useEffect(() => {
    const openModal = () => setIsModalOpen(true);

    window.addEventListener("openContactModal", openModal);

    return () =>
      window.removeEventListener("openContactModal", openModal);
  }, []);

  /* ─────────────────────────────────────────
     NAVBAR SCROLL EFFECT
  ───────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ======================================================
          NAVBAR
      ====================================================== */}
      <header
        className={`fixed top-0 left-0 w-full z-50
        bg-white/95 backdrop-blur-xl
        border-b border-gray-100
        transition-all duration-300
        px-6 lg:px-16
        ${
          scrolled
            ? "h-[82px] shadow-md"
            : "h-[108px] shadow-sm"
        }`}
      >
        <div className="relative w-full max-w-[1320px] mx-auto h-full">
          <div className="flex items-center justify-between h-full">

            {/* ================= LOGO ================= */}
            <Link
              to="/"
              className="flex items-center shrink-0 -ml-4 lg:-ml-5"
            >
              <img
                src={logo}
                alt="Pin Media Logo"
                className={`w-auto object-contain transition-all duration-300
                ${
                  scrolled
                    ? "h-[78px] md:h-[88px]"
                    : "h-[100px] md:h-[115px]"
                }`}
              />
            </Link>

            {/* ================= DESKTOP MENU ================= */}
            <ul className="hidden lg:flex items-center gap-11">
              {navLinks.map((link, index) => {
                const active = location.pathname === link.path;

                return (
                  <li
                    key={index}
                    className="relative group"
                  >
                    <Link
                      to={link.path}
                      className={`text-[17px] font-semibold tracking-[0.01em]
                      transition-all duration-300
                      ${
                        active
                          ? "text-violet-600"
                          : "text-gray-700 hover:text-violet-600"
                      }`}
                    >
                      {link.name}
                    </Link>

                    {/* ACTIVE UNDERLINE */}
                    <span
                      className={`absolute left-0 -bottom-3 h-[3px]
                      rounded-full bg-gradient-to-r
                      from-violet-600 to-fuchsia-500
                      transition-all duration-300
                      ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </li>
                );
              })}
            </ul>

            {/* ================= CTA BUTTON ================= */}
            <div className="hidden lg:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500
                text-white font-semibold
                px-8 py-4 rounded-2xl
                text-[16px]
                shadow-[0_10px_30px_rgba(168,85,247,0.35)]
                hover:scale-105 hover:shadow-[0_12px_35px_rgba(168,85,247,0.45)]
                transition-all duration-300"
              >
                Let’s Talk →
              </button>
            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-gray-700 text-[34px]"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* ======================================================
            MOBILE MENU
        ====================================================== */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-[500px]" : "max-h-0"}`}
        >
          <div className="bg-white border-t border-gray-100 shadow-xl">
            <ul className="flex flex-col px-6 py-7 gap-6">

              {navLinks.map((link, index) => {
                const active = location.pathname === link.path;

                return (
                  <li key={index}>
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`text-[17px] font-semibold transition
                      ${
                        active
                          ? "text-violet-600"
                          : "text-gray-700 hover:text-violet-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}

              {/* MOBILE BUTTON */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="mt-2 bg-gradient-to-r
                from-violet-600 to-pink-500
                text-white py-3.5 rounded-xl
                font-semibold text-[15px]
                shadow-lg"
              >
                Let’s Talk →
              </button>
            </ul>
          </div>
        </div>
      </header>

      {/* ======================================================
          CONTACT MODAL
      ====================================================== */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100]
          bg-black/60 backdrop-blur-sm
          flex items-center justify-center p-4"
        >
          <div
            className="relative bg-white w-full max-w-xl
            rounded-[30px] p-7 sm:p-8
            shadow-[0_20px_80px_rgba(0,0,0,0.25)]
            animate-in fade-in zoom-in duration-300"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5
              text-gray-400 hover:text-red-500
              text-3xl transition"
            >
              <HiX />
            </button>

            {/* HEADING */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Let’s Talk
            </h2>

            <p className="text-gray-500 mb-6 text-[15px]">
              Fill out the form and our team will contact you shortly.
            </p>

            {/* FORM */}
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="John"
                    className="w-full border border-gray-200
                    bg-gray-50 rounded-xl px-4 py-3
                    text-sm focus:outline-none
                    focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full border border-gray-200
                    bg-gray-50 rounded-xl px-4 py-3
                    text-sm focus:outline-none
                    focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full border border-gray-200
                  bg-gray-50 rounded-xl px-4 py-3
                  text-sm focus:outline-none
                  focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full border border-gray-200
                  bg-gray-50 rounded-xl px-4 py-3
                  text-sm focus:outline-none
                  focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="4"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full border border-gray-200
                  bg-gray-50 rounded-xl px-4 py-3
                  text-sm resize-none focus:outline-none
                  focus:ring-2 focus:ring-violet-500"
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full mt-2
                bg-gradient-to-r from-violet-600 to-pink-500
                text-white py-3.5 rounded-xl
                font-semibold text-[16px]
                hover:scale-[1.02]
                hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================
          TOAST MESSAGE
      ====================================================== */}
      {showToast && (
        <div
          className="fixed bottom-8 right-8 z-[200]
          bg-white rounded-2xl border-l-[5px]
          border-green-500 shadow-2xl
          px-6 py-4 flex items-center gap-4
          animate-in slide-in-from-bottom-5 fade-in duration-300"
        >
          <HiCheckCircle className="text-green-500 text-4xl" />

          <div>
            <h4 className="font-bold text-gray-900 text-lg">
              Message Sent!
            </h4>

            <p className="text-sm text-gray-600">
              We’ll get back to you shortly.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;