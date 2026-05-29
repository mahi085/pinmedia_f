import { useEffect, useState } from "react";
import { HiCheckCircle, HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { createInquiry } from "../services/api";

const emptyModalForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState("");
  const [modalForm, setModalForm] = useState(emptyModalForm);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const openModal = () => setIsModalOpen(true);
    window.addEventListener("openContactModal", openModal);

    return () => window.removeEventListener("openContactModal", openModal);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleModalChange = (event) => {
    const { name, value } = event.target;
    setModalForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setModalLoading(true);
    setModalError("");

    try {
      await createInquiry({
        name: modalForm.name.trim(),
        email: modalForm.email.trim(),
        phone: modalForm.phone.trim(),
        service: modalForm.service.trim(),
        message: modalForm.message.trim(),
      });

      setModalForm(emptyModalForm);
      setIsModalOpen(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      setModalError(
        error.response?.data?.message ||
          "Failed to send enquiry. Please try again."
      );
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/95 px-6 shadow-sm backdrop-blur-xl transition-all duration-300 lg:px-16 ${
          scrolled ? "h-[82px]" : "h-[108px]"
        }`}
      >
        <div className="relative mx-auto h-full w-full max-w-[1320px]">
          <div className="flex h-full items-center justify-between">
            <Link to="/" className="-ml-4 flex shrink-0 items-center lg:-ml-5">
              <img
                src={logo}
                alt="Pin Media Logo"
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-[78px] md:h-[88px]" : "h-[100px] md:h-[115px]"
                }`}
              />
            </Link>

            <ul className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;

                return (
                  <li key={link.path} className="relative group">
                    <Link
                      to={link.path}
                      className={`text-[17px] font-semibold transition-all duration-300 ${
                        active
                          ? "text-violet-600"
                          : "text-gray-700 hover:text-violet-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                    <span
                      className={`absolute -bottom-3 left-0 h-[3px] rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-lg bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 px-8 py-4 text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(168,85,247,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_35px_rgba(168,85,247,0.45)]"
              >
                Let's Talk
              </button>
            </div>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="text-[34px] text-gray-700 lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="border-t border-gray-100 bg-white shadow-xl">
            <ul className="flex flex-col gap-6 px-6 py-7">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;

                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`text-[17px] font-semibold transition ${
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

              <button
                onClick={() => {
                  setMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="mt-2 rounded-lg bg-gradient-to-r from-violet-600 to-pink-500 py-3.5 text-[15px] font-semibold text-white shadow-lg"
              >
                Let's Talk
              </button>
            </ul>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-xl rounded-lg bg-white p-7 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:p-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 text-3xl text-gray-400 transition hover:text-red-500"
              aria-label="Close enquiry form"
            >
              <HiX />
            </button>

            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              Let's Talk
            </h2>
            <p className="mb-6 text-[15px] text-gray-500">
              Share your details and our team will contact you shortly.
            </p>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={modalForm.name}
                    onChange={handleModalChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={modalForm.email}
                    onChange={handleModalChange}
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={modalForm.phone}
                    onChange={handleModalChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Service
                  </label>
                  <input
                    type="text"
                    name="service"
                    value={modalForm.service}
                    onChange={handleModalChange}
                    placeholder="Website, ads, branding"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={modalForm.message}
                  onChange={handleModalChange}
                  rows="4"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              {modalError && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {modalError}
                </div>
              )}

              <button
                type="submit"
                disabled={modalLoading}
                className="mt-2 w-full rounded-lg bg-gradient-to-r from-violet-600 to-pink-500 py-3.5 text-[16px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {modalLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      )}

      {showToast && (
        <div className="fixed bottom-8 right-8 z-[200] flex items-center gap-4 rounded-lg border-l-[5px] border-green-500 bg-white px-6 py-4 shadow-2xl">
          <HiCheckCircle className="text-4xl text-green-500" />
          <div>
            <h4 className="text-lg font-bold text-gray-900">Message Sent!</h4>
            <p className="text-sm text-gray-600">
              We'll get back to you shortly.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
