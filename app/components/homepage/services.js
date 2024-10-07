"use client";
import { motion } from 'framer-motion';
import Navbar from '../navbar';

const features = [
  {
    title: "Custom Software Development",
    description: "We build tailored software solutions to fit your business needs.",
    icon: "💻",
  },
  {
    title: "Mobile App Development",
    description: "Get feature-rich and high-performance mobile apps for iOS and Android.",
    icon: "📱",
  },
  {
    title: "API Integration",
    description: "Seamlessly integrate third-party APIs to enhance your platform's capabilities.",
    icon: "🔌",
  },
  {
    title: "E-commerce Development",
    description: "Developing scalable and secure e-commerce platforms to grow your business.",
    icon: "🛒",
  },
  {
    title: "UI/UX Designing",
    description: "Design intuitive user interfaces and engaging user experiences for your products.",
    icon: "🎨",
  },
  {
    title: "Maintenance & Support",
    description: "Providing ongoing support and maintenance to ensure the smooth operation of your systems.",
    icon: "🛠️",
  },
];


const KeyFeatures = () => {
  return (
    <section className="py-20 bg-gray-100 m-0 z-50 ">
      {/* <Navbar isOverview={true}/> */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Key Features & Services
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Discover the services we offer to help your business grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center text-6xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
