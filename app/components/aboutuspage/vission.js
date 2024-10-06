"use client";
import { motion } from "framer-motion";

const VisionMission = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Our Vision & Mission</h2>
          <p className="text-lg text-gray-600">
            Discover what drives us and our commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To be the leading provider of innovative technology solutions that empower businesses to achieve their goals and transform their operations.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To provide exceptional service and cutting-edge solutions that help our clients thrive in a constantly evolving digital landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
