import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Integrative from "../assets/Integrative.png";
import Caring from "../assets/Caring.png";
import Holistic from "../assets/Holistic.png";
import Puzzle from "../assets/Puzzle.png";

const serviceCategories = [
  {
    title: "Individual Counseling and Crisis Intervention",
    icon: Integrative,
    links: [
      {
        title: "BioPyschoSocial Paper",
        url: "https://vanderbilt365-my.sharepoint.com/:w:/g/personal/jocelyn_c_ramirez_vanderbilt_edu/ESaCX-rg0idPsyJskBV45c0BUjlBu0p8vo5zWPK78qNAOw?e=MkCFbi",
      },
      {
        title: "Case Conceptualization - Lily",
        url: "https://vanderbilt365-my.sharepoint.com/:w:/g/personal/jocelyn_c_ramirez_vanderbilt_edu/ER0ZwQfwAUpEl7E_yrUDegAB5TT9UcSxhCTPkZAw191FYQ?e=MtgVkZ7",
      },
      {
        title: "Mindfulness Technique",
        url: "https://docs.google.com/document/d/1E28MBmV3seOA93UXeAf7cyOPkRC9nfjryiNZgogBGjM/edit?usp=drivesdk",
      },
      {
        title: "Case Conceptualization - Teddy",
        url: "https://www.canva.com/design/DAF_jMVJRE0/VIXGgSBPMj1Q13J124qN8A/edit?utm_content=DAF_jMVJRE0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    ],
  },
  {
    title: "Collaboration and Psycho-ed",
    icon: Caring,
    links: [
      {
        title: "Parent & Teacher Needs Assessment",
        url: "https://drive.google.com/drive/folders/1RD_nur5pv-5DvrxwMk3Tepu8Ah3Bpd7q",
      },
      {
        title: "Emotional Disturbance Presentation",
        url: "https://www.canva.com/design/DAGhpVl0-wU/NudxKCmoVFRI2DX6_jaD9g/edit?utm_content=DAGhpVl0-wU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
      {
        title: "504 Infographic",
        url: "https://www.canva.com/design/DAGevG1upYQ/l5j2yIkds7sM-cEC_l-t_A/edit?utm_content=DAGevG1upYQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    ],
  },
  {
    title: "Group Counseling and Conflict Resolution",
    icon: Holistic,
    links: [
      {
        title: "Small Group Self-Confidence",
        url: "https://vanderbilt365-my.sharepoint.com/:b:/g/personal/jocelyn_c_ramirez_vanderbilt_edu/ETqv1WBGrU1Gn88X-ADzv50BRYszyARE2EmrHcJhVrU2uA?e=XJciHS",
      },
      {
        title: "La Palabras Importan Presentation",
        url: "https://www.canva.com/design/DAGQ86BeoIo/l869eKMvhY5QWn4wCtL3nw/edit?utm_content=DAGQ86BeoIo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
      {
        title: "Self-Regulation Small Group",
        url: "https://www.canva.com/design/DAGAAyIlty4/gu9G4SZHIwrBqKZK_AnXxg/edit?utm_content=DAGAAyIlty4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    ],
  },
  {
    title: "Multicultural Competence",
    icon: Puzzle,
    links: [
      {
        title: "Advocacy Campaign",
        url: "https://www.canva.com/design/DAGTxc1XcY8/bLXG6pwt04LSAj0fxe5rxg/edit?utm_content=DAGTxc1XcY8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/30 via-white/30 to-blue-50/30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-pink-200/30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: -100,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-script text-5xl md:text-6xl text-primary-800 mb-4">
            Psychology Services & Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of mental health services and
            resources
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <h3 className="text-2xl font-script text-primary-700">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.links.map((link) => (
                  <a
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-primary-600"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
