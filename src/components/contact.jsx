import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Get in <span className="text-amber-600">Touch</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Have a question or need support? We’re here to help you with your project, property consultation,
          or business inquiry. Reach out and we’ll get back to you promptly.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right: Contact Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Contact Info */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>

            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start gap-4">
                <MapPin className="text-amber-600 mt-1" size={28} />
                <div>
                  <p className="text-gray-900 font-medium">Office Address</p>
                  <p className="text-gray-600">JG2/175 Vikaspuri, New Delhi</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Phone className="text-amber-600 mt-1" size={26} />
                <div>
                  <p className="text-gray-900 font-medium">Phone</p>
                  <p className="text-gray-600">+91 93197 87895</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Mail className="text-amber-600 mt-1" size={26} />
                <div>
                  <p className="text-gray-900 font-medium">Email</p>
                  <p className="text-gray-600">vedatouchtherapies@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.698348468174!2d77.08187509999999!3d28.996308499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db11a7d66cfcb%3A0x8c3525cf0f26df12!2sKRONUS%20INFRATECH%20%26%20DESIGNS!5e0!3m2!1sen!2sin!4v1762884240585!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
