"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A robust e-commerce solution with a seamless user experience.",
    imageUrl: "/images/ecom.png", // Replace with actual project images
    link: "https://ayzot.com.et/",
  },
  {
    title: "Event ticketing App",
    description: "A modern event ticketing application with real-time features and payment gateway.",
    imageUrl: "/images/event.jpg",
    link: "#project2",
  },
  {
    title: "Church Website",
    description: "A modern portfolio website showcasing creative works.",
    imageUrl: "/images/church.png",
    link: "https://ejerechangare.vercel.app/",
  },
  {
    title: "Portfolio website",
    description: "A modern portfolio website showcasing creative works.",
    imageUrl: "/images/port.png",
    link: "https://nardosportfolio.netlify.app/",
  }
];

const ShowcaseProjects = () => {
  return (
    <section id="showcase" className="py-20 bg-gray-100">
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
                 Visit Project
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
