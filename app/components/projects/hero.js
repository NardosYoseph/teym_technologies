"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="projects" className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
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
          {/* <a
            href="#projects"
            className="inline-block bg-white text-blue-500 hover:bg-gray-100 transition duration-300 font-bold py-3 px-6 rounded-full"
          >
            View Projects
          </a> */}
        </motion.div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear", loop: Infinity }}
          className="w-full h-full bg-opacity-30 bg-white rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
