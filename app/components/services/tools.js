"use client";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    icon: "🟢", // You can replace this with an actual icon
  },
  {
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 engine.",
    icon: "🔵",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
    icon: "🎨",
  },
  {
    name: "MongoDB",
    description: "A NoSQL database for modern applications.",
    icon: "📦",
  },
  {
    name: "Next.js",
    description: "A React framework for server-side rendering.",
    icon: "🚀",
  },
  {
    name: "GraphQL",
    description: "A query language for your API.",
    icon: "📡",
  },
  {
    name: "Flutter",
    description: "An open-source UI toolkit for building natively compiled applications.",
    icon: "🦄",
  },
  {
    name: "Dart",
    description: "Optimized for building mobile, desktop, and web apps.",
    icon: "🌐",
  },
  {
    name: "Firebase",
    description: "Platform for building mobile and web applications.",
    icon: "🔥",
  },
  {
    name: "Docker",
    description: "Develop, ship, and run applications in containers.",
    icon: "🐳",
  },
];

const Technologies = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Technologies & Tools
          </h2>
          <p className="text-lg text-gray-600">
            We leverage the latest technologies to deliver the best solutions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-full w-40 h-40 flex flex-col items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-5xl mb-2">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-1">{tech.name}</h3>
              <p className="text-sm text-center px-2">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
