"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="project" className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold mb-4">
            Our Projects
          </h1>
          <p className="text-lg mb-6">
            Discover the innovative projects we have delivered for our clients. 
            We take pride in our work and aim to exceed expectations.
          </p>
          <motion.a
            href="#showcase"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-200 transition-all"
            whileHover={{ scale: 1.1 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
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

export default HeroSection;
