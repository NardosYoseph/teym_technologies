"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and scalable web applications.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "Creating user-friendly mobile applications for iOS and Android.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and experiences.",
    icon: "🎨",
  },
  {
    title: "E-commerce Solutions",
    description: "Building robust e-commerce platforms to enhance sales.",
    icon: "🛒",
  },
  {
    title: "API Integration",
    description: "Seamlessly integrate third-party APIs to enhance your platform's capabilities.",
    icon: "🔌",
  },
  {
    title: "Maintenance & Support",
    description: "Providing ongoing support and maintenance to ensure the smooth operation of your systems.",
    icon: "🛠️",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of services to help you achieve your business goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center transition-colors duration-300 ease-in-out hover:bg-blue-500"
            >
              <div className="text-4xl mb-4 text-gray-800 hover:text-white transition-colors duration-300 ease-in-out">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 hover:text-white transition-colors duration-300 ease-in-out">
                {service.title}
              </h3>
              <p className="text-gray-600 hover:text-white transition-colors duration-300 ease-in-out">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
