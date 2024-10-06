"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A robust e-commerce solution with a seamless user experience.",
    imageUrl: "https://via.placeholder.com/400", // Replace with actual project images
    link: "#project1",
  },
  {
    title: "Mobile Banking App",
    description: "A secure mobile banking application with real-time features.",
    imageUrl: "https://via.placeholder.com/400",
    link: "#project2",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing creative works.",
    imageUrl: "https://via.placeholder.com/400",
    link: "#project3",
  },
  {
    title: "Real Estate Management System",
    description: "An intuitive system for managing real estate listings.",
    imageUrl: "https://via.placeholder.com/400",
    link: "#project4",
  },
  {
    title: "Social Media App",
    description: "A feature-rich social media platform for community engagement.",
    imageUrl: "https://via.placeholder.com/400",
    link: "#project5",
  },
  {
    title: "Travel Booking Platform",
    description: "A comprehensive travel booking platform with user-friendly features.",
    imageUrl: "https://via.placeholder.com/400",
    link: "#project6",
  },
];

const ShowcaseProjects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Our Modern Projects
          </h2>
          <p className="text-lg text-gray-600">
            Explore some of the innovative projects we've delivered for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-blue-600"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseProjects;
