import { motion } from "framer-motion";

const approaches = [
  {
    title: "Holistic",
    description:
      "By taking care of our physical health, mental well-being, and spiritual needs, we can achieve greater balance and live a more fulfilling life.",
    icon: "⭕",
    gradient: "from-pink-50 to-rose-50",
  },
  {
    title: "Caring",
    description:
      "True care partners with patience while trust grows. Every step forward is a victory worth celebrating.",
    icon: "🌸",
    gradient: "from-purple-50 to-pink-50",
  },
  {
    title: "Integrative",
    description:
      "Healing is not linear. Each journey is unique, and we adapt our approach to meet you where you are.",
    icon: "〰️",
    gradient: "from-blue-50 to-indigo-50",
  },
];

export function Philosophy() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4"
    >
      <h2 className="font-script text-4xl text-primary-700 text-center mb-12">
        Philosophy & Approach
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {approaches.map((approach, index) => (
          <motion.div
            key={approach.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-b ${approach.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow`}
          >
            <div className="text-4xl mb-6 text-center">{approach.icon}</div>
            <h3 className="font-script text-2xl text-primary-700 text-center mb-4">
              {approach.title}
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              {approach.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center text-gray-700 max-w-3xl mx-auto px-4"
      >
        <p className="leading-relaxed">
          I believe that every student has inherent worth, unique potential, and
          the capacity for growth. Rooted in humanistic theory, my counseling
          approach is centered on empathy, authenticity, and unconditional
          positive regard. I view each student through a holistic
          lens—recognizing the connection between their emotional, social,
          academic, and cultural experiences.
        </p>
      </motion.div>
    </motion.section>
  );
}
