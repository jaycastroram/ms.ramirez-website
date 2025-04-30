import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import { Services } from "./components/Services";
import { ContactForm } from "./components/ContactForm";
import { Philosophy } from "./components/Philosophy";
import { Education } from "./components/Education";
import { motion } from "framer-motion";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-blue-50">
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

        <Routes>
          <Route
            path="/"
            element={
              <>
                <motion.header
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative pt-16 pb-8 px-4 text-center"
                >
                  <div className="absolute top-4 left-4 text-3xl">🌸</div>
                  <div className="absolute top-4 right-4 text-3xl">🌸</div>

                  <h1 className="font-script text-5xl md:text-6xl text-primary-800 mb-4">
                    Jocelyn Ramirez
                  </h1>

                  <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
                    Vanderbilt HDC Masters Candidate of School Counseling &
                    Clinical Mental Health Counseling
                  </p>

                  <p className="font-script text-2xl text-primary-600">
                    Supporting you to thrive
                  </p>
                </motion.header>

                <main className="container mx-auto px-4 py-8 space-y-16 relative z-10">
                  <AboutMe />
                  <Philosophy />
                  <Services />
                  <Education />
                  <ContactForm />
                </main>

                <footer className="bg-gradient-to-r from-pink-50 to-purple-50 py-8 px-4 mt-16 relative z-10">
                  <div className="container mx-auto text-center">
                    <p className="text-gray-600 mb-2">© 2024 Jocelyn Ramirez</p>
                    <p className="text-sm text-gray-500">
                      Licensed School Counselor & Clinical Mental Health
                      Counselor
                    </p>
                  </div>
                </footer>
              </>
            }
          />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
