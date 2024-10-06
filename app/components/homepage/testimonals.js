"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO of TechWave",
    quote: "TeymTech helped us streamline our workflow and increase productivity. Their service is top-notch!",
    image: "/images/img.jpg", // Placeholder path for user image
  },
  {
    name: "Jane Smith",
    position: "Founder of InnovateX",
    quote: "The team delivered beyond our expectations. We saw an immediate positive impact on our business.",
    image: "/images/img.jpg",
  },
  {
    name: "Michael Lee",
    position: "CTO of BrightFuture",
    quote: "Working with TeymTech was a game-changer for our company. They were professional and incredibly skilled.",
    image: "/images/img.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100 z-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Hear from some of our satisfied clients who have experienced our services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.position}</p>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
