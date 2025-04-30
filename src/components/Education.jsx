import { motion } from "framer-motion";

const education = [
  {
    institution: "LIPSCOMB UNIVERSITY",
    degree: "Bachelor of Science in Psychology",
    year: "2019-2022",
    details: "Sigma Cum Laude",
    gradient: "from-pink-50 to-purple-50",
  },
  {
    institution: "VANDERBILT PEABODY COLLEGE",
    degree: "Master of Education in Human Development Counseling",
    year: "2023-2026",
    details:
      "Dual Tracked: School Counseling & Clinical Mental Health Counseling",
    gradient: "from-blue-50 to-indigo-50",
  },
];

const experience = [
  {
    place: "La Vergne Lake Elementary School",
    role: "LLE Spring (2024)",
    type: "Internship",
    gradient: "from-yellow-50 to-amber-50",
  },
  {
    place: "La Vergne Middle School",
    role: "LMS Fall (2024)",
    type: "Internship",
    gradient: "from-green-50 to-emerald-50",
  },
  {
    place: "La Vergne High School",
    role: "LHS Spring (2025)",
    type: "Internship",
    gradient: "from-blue-50 to-sky-50",
  },
  {
    place: "The Refuge Center for Counseling",
    role: "Clinical Internship (2025-2026)",
    type: "Clinical Experience",
    gradient: "from-purple-50 to-fuchsia-50",
  },
];

const certifications = [
  "Trained and Certified in QPR Suicide Prevention (2024)",
  "Training in Child-Centered Play Therapy (2025)",
];

export function Education() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-script text-4xl text-primary-700 text-center mb-16">
          Education & Experience
        </h2>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-script text-primary-600 mb-8 text-center">
            Education Journey
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-r ${edu.gradient} rounded-2xl p-6 shadow-lg`}
              >
                <h4 className="text-xl font-bold text-gray-800">
                  {edu.institution}
                </h4>
                <p className="text-primary-600 font-medium mt-2">
                  {edu.degree}
                </p>
                <p className="text-gray-600 mt-1">{edu.year}</p>
                <p className="text-gray-500 italic mt-2">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-script text-primary-600 mb-8 text-center">
            Clinical Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.place}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-r ${exp.gradient} rounded-2xl p-6 shadow-lg`}
              >
                <h4 className="text-lg font-semibold text-gray-800">
                  {exp.place}
                </h4>
                <p className="text-primary-600 mt-2">{exp.role}</p>
                <p className="text-gray-500 italic">{exp.type}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-script text-primary-600 mb-6 text-center">
            Certifications
          </h3>
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.li
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center text-gray-700"
              >
                <span className="text-primary-400 mr-3">•</span>
                {cert}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
