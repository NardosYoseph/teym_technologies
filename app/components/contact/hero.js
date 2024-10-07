"use client";
import { motion } from "framer-motion";

const ContactHero = () => {
  const handleScroll = (event) => {
    event.preventDefault();
    const target = document.getElementById("contact-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-blue-600 py-20 lg:py-32 text-white" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-lg mb-8">
            We'd love to hear from you! Contact us for any inquiries or collaboration opportunities.
          </p>
          <motion.a
            href="#contact-form"
            onClick={handleScroll} // Attach click handler here
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-200 transition-all"
            whileHover={{ scale: 1.1 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
        className="absolute flex space-x-4"
      >
        <div className="bg-white h-24 w-24 rounded-full" />
        <div className="bg-white h-36 w-36 rounded-full" />
      </motion.div>
      {/* <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/images/bg2.jpg" // Replace with your background image
          alt="Contact Background"
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div> */}
    </section>
  );
};

export default ContactHero;
