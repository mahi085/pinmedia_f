import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // 3 second baad success message hide kar dega
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="w-full py-12 md:py-16 px-6 lg:px-16">
      <div className="w-full max-w-[1320px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Contact Information */}
        <div>
          <div className="uppercase text-xs font-bold text-indigo-600 mb-2 tracking-widest">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Let's Build Something <br />
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Awesome Together.
            </span>
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed max-w-lg">
            Whether you have a question, a project idea, or just want to say hi, we'd love to hear from you. Fill out the form and our team will get back to you shortly.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Our Office</h4>
                <p className="text-gray-500 text-sm">
                  1st branch Ramadevi Kanpur, 2nd branch Manjhanpur Kaushambi 212207.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center text-xl shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Email Us</h4>
                <p className="text-gray-500 text-sm">pinweball@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-xl shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Call Us</h4>
                <p className="text-gray-500 text-sm">+91 9026619418</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3 animate-in fade-in zoom-in duration-300">
              <p className="font-medium">Thank you! Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-gray-50 focus:bg-white" 
                    placeholder="John" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-gray-50 focus:bg-white" 
                    placeholder="Doe" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-gray-50 focus:bg-white" 
                  placeholder="john@example.com" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  required
                  rows="4" 
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-gray-50 focus:bg-white resize-none" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-xl py-4 font-semibold text-lg hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;