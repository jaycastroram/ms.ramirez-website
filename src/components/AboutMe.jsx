import { motion } from "framer-motion";
import profilePic from "../assets/ProfilePic.png";

export function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto max-w-4xl p-8 rounded-3xl bg-gradient-to-br from-pink-50 via-white to-blue-50 shadow-lg"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image with Flower Frame */}
        <div className="relative flex-shrink-0">
          <div className="absolute -top-3 -left-3 text-2xl">🌸</div>
          <div className="absolute -top-3 -right-3 text-2xl">🌼</div>
          <div className="absolute -bottom-3 -left-3 text-2xl">🌺</div>
          <div className="absolute -bottom-3 -right-3 text-2xl">🌷</div>
          <img
            src={profilePic}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-pink-200 shadow-lg"
          />
        </div>

        {/* About Text */}
        <div className="flex-1">
          <h2 className="font-script text-3xl text-primary-700 mb-6">
            About Me
          </h2>
          <div className="prose prose-pink max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Welcome! My mission as a school counselor is to create a safe,
              supportive, and inclusive space where every student feels seen,
              valued, and empowered to thrive—academically, socially, and
              emotionally.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              As a bilingual counselor fluent in Spanish and English, I am
              passionate about bridging communication gaps and advocating for
              students and families from diverse cultural backgrounds. With a
              strong foundation in multicultural competence, I strive to honor
              each student's unique story while helping them navigate challenges
              and discover their strengths.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
