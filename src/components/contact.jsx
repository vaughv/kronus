import React from "react";
import { MapPin, Phone, Mail, User, MessageSquare } from "lucide-react";

const Contacts = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col lg:flex-row bg-black text-white overflow-hidden p-8 lg:p-12 gap-8 lg:gap-12"
    >
      {/* --- Left Side: Map and Contact Info --- */}
      <div className="w-full lg:w-1/2 min-h-screen p-8 lg:p-12 flex flex-col gap-8">
        {/* Map Box */}
        <div className="flex-1 bg-white/5 rounded-3xl p-4 shadow-xl border border-white/10 overflow-hidden">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.6983492962745!2d77.07930017530322!3d28.99630847546807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db11a7d66cfcb%3A0x8c3525cf0f26df12!2sKRONUS%20INFRATECH%20%26%20DESIGNS!5e0!3m2!1sen!2sin!4v1762113707515!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact Info Box */}
        <div className="bg-white/5 rounded-3xl p-8 shadow-xl border border-white/10">
          <h3 className="text-2xl font-semibold text-lime-400 mb-6">Contact Information</h3>
          <div className="space-y-6">
            <p className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center">
                <MapPin className="text-lime-400 w-6 h-6 shrink-0" />
              </div>
              <span className="text-gray-200 text-lg">Banashankari Stage 2, Bengaluru</span>
            </p>
            <p className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center">
                <Phone className="text-lime-400 w-6 h-6 shrink-0" />
              </div>
              <a href="tel:+919319787895" className="text-gray-200 text-lg hover:text-lime-400 transition">
                +91 93197 87895
              </a>
            </p>
            <p className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center">
                <Mail className="text-lime-400 w-6 h-6 shrink-0" />
              </div>
              <a href="mailto:info@kronusinfratech.com" className="text-gray-200 text-lg hover:text-lime-400 transition">
                info@kronusinfratech.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* --- Right Side: Contact Form --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-16 px-6 lg:px-12">
        <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-lime-400 mb-2 text-center uppercase tracking-wider">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm text-center mb-8">
            We’d love to hear from you. Send us a message and we’ll get back to you soon.
          </p>

          <form className="space-y-6">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-lime-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 text-white placeholder-gray-400 border border-white/20 focus:border-lime-400 outline-none transition"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-lime-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 text-white placeholder-gray-400 border border-white/20 focus:border-lime-400 outline-none transition"
                required
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-lime-400 w-5 h-5" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 text-white placeholder-gray-400 border border-white/20 focus:border-lime-400 outline-none transition"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-lime-400 w-5 h-5" />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 text-white placeholder-gray-400 border border-white/20 focus:border-lime-400 outline-none transition resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-lime-500 text-black font-semibold rounded-full hover:bg-lime-400 transition shadow-lg hover:shadow-lime-500/20"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Decorative gradient edge between map & form */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-lime-500/30 to-transparent"></div>
    </section>
  );
};

export default Contacts;
