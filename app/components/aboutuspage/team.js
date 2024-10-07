"use client";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Alice Smith",
    role: "CEO",
    image: "/images/ceo.jpg", // Replace with actual image URLs
  },
  {
    name: "Bob Johnson",
    role: "CTO",
    image: "/images/cto.jpg", // Replace with actual image URLs
  },
  {
    name: "Charlie Brown",
    role: "Designer",
    image: "/images/mgr.jpg", // Replace with actual image URLs
  },
  {
    name: "Diana Prince",
    role: "Product Manager",
    image: "/images/mgr2.jpg", // Replace with actual image URLs
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-600">
          A dedicated group of professionals working together to deliver the best results.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-gray-500">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
