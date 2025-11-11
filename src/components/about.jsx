import React from "react";
import { motion } from "framer-motion";
import assets from "../assets";

// ✅ Load custom fonts (You can move these to index.html or global css)
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');
`;

const About = () => {
  return (
    <>
      {/* Inject custom fonts */}
      <style>{fontStyles}</style>

      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        {/* Title Section */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-10"
          style={{ fontFamily: "DM Serif Display, serif" }}
        >
          About <span className="text-amber-600">Anuraj Antil</span>
        </motion.h1>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image + Hover Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative group w-full h-[700px] rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Base Image */}
            <img
              src= {assets.anuraj1}
              alt="Anuraj Antil"
              className="w-full h-full object-cover rounded-3xl"
            />

            {/* Hover Image (Pops on hover) */}
            <motion.img
              src={ assets.anuraj2}
              alt="Alternate"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl group-hover:opacity-100 opacity-0"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg leading-relaxed text-gray-700"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <p className="mb-6">
              Anuraj Antil is a driven entrepreneur with over 11 years of experience in corporate
              governance, business strategy, and operations. He currently leads as the Owner and
              Managing Director of <strong>Kronus Infratech & Consultants Pvt. Ltd.</strong>, and is
              also a Designated Partner and Director in ventures like Kronus Infra Projects LLP and
              Kayam Kitchen LLP.
            </p>

            <p className="mb-6">
              Recognized by Outlook India for his contribution to the business world, Anuraj has
              built a reputation for turning ideas into impactful, result-oriented ventures. His
              experience spans across industries — from general business and technology to
              large-scale project management — with a strong focus on innovation and long-term
              growth.
            </p>

            <p className="mb-6">
              Beyond his professional achievements, he also serves as the Vice President of BNI
              Swarnprastha, where he actively promotes collaboration, leadership, and business
              networking among professionals.
            </p>

            <p>
              With a forward-thinking mindset and hands-on approach, Anuraj Antil continues to shape
              businesses that reflect integrity, efficiency, and modern vision.
            </p>
          </motion.div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-20"
        >
          <h2
            className="text-3xl md:text-5xl font-semibold text-gray-900 mb-10"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Why Choose <span className="text-amber-600">Kronus</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* POINT 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white shadow-lg rounded-2xl border border-gray-100"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Built on Trust & Precision
              </h3>
              <p className="text-gray-600 text-lg">
                Every project at Kronus is driven by transparency, commitment, and attention to detail — 
                because quality starts with trust.
              </p>
            </motion.div>

            {/* POINT 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white shadow-lg rounded-2xl border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Experience that Delivers
              </h3>
              <p className="text-gray-600 text-lg">
                With years of industry expertise under strong leadership, we ensure timely execution
                without compromising design or durability.
              </p>
            </motion.div>

            {/* POINT 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white shadow-lg rounded-2xl border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Innovation with Integrity
              </h3>
              <p className="text-gray-600 text-lg">
                We combine modern ideas with practical solutions, creating spaces that stand out today
                and stay relevant tomorrow.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
