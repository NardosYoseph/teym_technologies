"use client";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 m-0 z-50">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Take Your Business to the Next Level?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Our expert team is here to help you grow, innovate, and succeed in the digital world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          <a
            href="#contact"
            className="inline-block bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-transform duration-300 ease-in-out hover:bg-blue-200"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
