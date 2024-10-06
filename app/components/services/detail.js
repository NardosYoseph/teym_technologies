"use client";
import { motion } from "framer-motion";

const serviceDetails = [
  {
    title: "Web Development",
    description:
      "We build responsive and scalable web applications using the latest technologies.",
    details:
      "Our web development services encompass frontend and backend development, API integration, and cloud deployment. We ensure your application is user-friendly, secure, and scalable.",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating user-friendly mobile applications for iOS and Android platforms.",
    details:
      "Our team specializes in cross-platform mobile app development, ensuring a seamless experience on both iOS and Android. We focus on performance, usability, and design to deliver apps that stand out.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and experiences to enhance usability.",
    details:
      "We believe that a great user experience is the key to a successful product. Our design process involves user research, wireframing, prototyping, and usability testing to create visually appealing and functional interfaces.",
  },
  {
    title: "Digital Marketing",
    description:
      "Helping you reach your audience through targeted digital marketing strategies.",
    details:
      "Our digital marketing services include SEO, social media marketing, content marketing, and PPC advertising. We tailor our strategies to meet your business goals and drive measurable results.",
  },
  {
    title: "Cloud Services",
    description:
      "Offering scalable cloud solutions tailored to your business needs.",
    details:
      "We provide cloud consulting, migration, and management services to help you leverage the power of the cloud. Our solutions ensure flexibility, security, and cost-effectiveness for your operations.",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Building robust e-commerce platforms to enhance your online sales.",
    details:
      "From developing custom e-commerce websites to integrating payment gateways, we offer comprehensive e-commerce solutions that provide a seamless shopping experience for your customers.",
  },
];

const DetailsSection = () => {
  return (
    <section id="details" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Service Details
          </h2>
          <p className="text-lg text-gray-600">
            Dive deeper into our service offerings and discover how we can help you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-gray-500">{service.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
