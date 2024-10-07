"use client";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="relative bg-blue-600 text-white py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-3xl mx-auto">
            Empowering your business with innovative, high-quality solutions, ranging from custom software to mobile app development and beyond.
          </p>
          <motion.a
            href="#services"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-200 transition-all"
            whileHover={{ scale: 1.1 }}
          >
            Explore Our Services
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative shapes for the hero section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-10 right-10 bg-white h-24 w-24 rounded-full"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-20 left-20 bg-white h-36 w-36 rounded-full"
      />
    </section>
  );
};

export default ServicesHero;
