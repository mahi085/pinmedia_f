import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { 
  HiChevronRight, 
  HiMail, 
  HiPhone, 
  HiLocationMarker 
} from "react-icons/hi";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png"; // Import the logo image

const Footer = () => {
  return (
    <footer className="w-full bg-white px-6 lg:px-16 pb-6 md:pb-8">
      <div className="w-full max-w-[1320px] mx-auto border-t border-gray-100 pt-8 md:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Col 1: Logo & About (Takes 2 columns on large screens) */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3 cursor-pointer mb-4 w-fit">
            <img src={logo} alt="Pin Media Logo" className="h-14 md:h-20 w-auto object-contain" />
          </Link>

          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
            PR, Branding & Digital Marketing Solutions that help businesses grow, scale, and inspire.
          </p>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/pin_media.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 transition-all shadow-md"><FaInstagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-all shadow-md"><FaFacebookF size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-[#0077b5] text-white flex items-center justify-center hover:scale-110 transition-all shadow-md"><FaLinkedin size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-[#1DA1F2] text-white flex items-center justify-center hover:scale-110 transition-all shadow-md"><FaTwitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-all shadow-md"><FaYoutube size={18} /></a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-purple-600 transition-colors flex items-center gap-1"><HiChevronRight className="text-purple-600" /> Home</Link></li>
            <li><Link to="/about" className="hover:text-purple-600 transition-colors flex items-center gap-1"><HiChevronRight className="text-purple-600" /> About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-purple-600 transition-colors flex items-center gap-1"><HiChevronRight className="text-purple-600" /> Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-purple-600 transition-colors flex items-center gap-1"><HiChevronRight className="text-purple-600" /> Blog</Link></li>
            <li><button onClick={() => window.dispatchEvent(new Event('openContactModal'))} className="hover:text-purple-600 transition-colors text-left w-full flex items-center gap-1"><HiChevronRight className="text-purple-600" /> Contact</button></li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
            Services
          </h4>

          <ul className="space-y-3 text-sm text-gray-500">
            <li><Link to="/services" className="hover:text-purple-600 transition-colors flex items-center gap-1"><HiChevronRight className="text-purple-600" /> PR Marketing</Link></li>
            <li><Link to="/services" className="hover:text-purple-600 transition-colors flex items-center gap-1"><HiChevronRight className="text-purple-600" /> Digital Marketing</Link></li>
            <li><Link to="/services" className="hover:text-purple-600 transition-colors flex items-center gap-1"><HiChevronRight className="text-purple-600" /> Branding & Logo</Link></li>
            <li><Link to="/services" className="hover:text-purple-600 transition-colors flex items-center gap-1"><HiChevronRight className="text-purple-600" /> SEO Optimization</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
            Contact Us
          </h4>

          <ul className="space-y-3 text-sm text-gray-500">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                <HiMail size={18} />
              </div>
              <a href="mailto:pinweball@gmail.com" className="hover:text-purple-600 transition-colors break-all" target="_blank" rel="noopener noreferrer">
                pinweball@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 border border-pink-100">
                <HiPhone size={18} />
              </div>
              <a href="tel:+919026619418" className="hover:text-purple-600 transition-colors" target="_blank" rel="noopener noreferrer">
                +91 9026619418
              </a>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
                <HiLocationMarker size={18} />
              </div>
              <span>1st branch Ramadevi Kanpur ,
                2nd branch Manjhanpur Kaushambi 212207.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-[1320px] mx-auto mt-6 md:mt-8 pt-5 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} PIN MEDIA. All Rights Reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;