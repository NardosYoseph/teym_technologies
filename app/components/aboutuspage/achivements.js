"use client";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Projects Completed",
    count: 50,
  },
  {
    title: "Happy Clients",
    count: 30,
  },
  {
    title: "Years of Experience",
    count: 4,
  },
  {
    title: "Awards Won",
    count: 5,
  },
];

const Achievements = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600">
            We take pride in our accomplishments and the value we bring to our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <motion.h3
                className="text-3xl font-bold text-blue-600 mb-2"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                {achievement.count}
              </motion.h3>
              <p className="text-lg text-gray-600">
                {achievement.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
