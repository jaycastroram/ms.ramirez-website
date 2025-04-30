import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Individual Therapy Sessions",
    description:
      "One-on-one counseling tailored to your unique needs and goals.",
  },
  {
    title: "Group Therapy and Workshops",
    description:
      "Collaborative healing and growth in a supportive group environment.",
  },
  {
    title: "Mindfulness and Stress Management Programs",
    description:
      "Learn practical techniques for managing stress and enhancing well-being.",
  },
  {
    title: "Consultation and Assessment Services",
    description:
      "Comprehensive evaluation and professional guidance for your journey.",
  },
];

export function Services() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4"
    >
      <Link to="/services" className="block">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <h2 className="font-script text-4xl text-primary-700 text-center mb-6">
            Psychology Services
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of mental health services designed
            to support your journey towards well-being and personal growth.
          </p>
          <div className="mt-6 text-center">
            <span className="inline-block bg-primary-600 text-white px-6 py-2 rounded-full">
              Learn More
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.section>
  );
}
